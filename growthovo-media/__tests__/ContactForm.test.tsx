import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import * as fc from "fast-check";
import ContactSection from "@/components/ContactSection";
import { validateContactForm, validateEmail } from "@/lib/constants";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
    form: ({
      children,
      onSubmit,
      ...props
    }: React.FormHTMLAttributes<HTMLFormElement>) => (
      <form onSubmit={onSubmit} {...props}>
        {children}
      </form>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("ContactSection - form fields", () => {
  it("renders all three required fields", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it("renders the submit button with correct label", () => {
    render(<ContactSection />);
    expect(
      screen.getByRole("button", { name: /Send Message/i })
    ).toBeInTheDocument();
  });

  it("shows error when submitting with empty name", async () => {
    render(<ContactSection />);
    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));
    await waitFor(() => {
      expect(screen.getByText("Name is required.")).toBeInTheDocument();
    });
  });

  it("shows error when submitting with empty email", async () => {
    render(<ContactSection />);
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));
    await waitFor(() => {
      expect(
        screen.getByText("Email is required.")
      ).toBeInTheDocument();
    });
  });

  it("shows error when submitting with invalid email", async () => {
    render(<ContactSection />);
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "not-an-email" },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: "Test message" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));
    await waitFor(() => {
      expect(
        screen.getByText("Please enter a valid email address.")
      ).toBeInTheDocument();
    });
  });
});

/**
 * Feature: growthovo-media-website, Property 1: Form rejects empty required fields
 * For any combination of empty/whitespace fields, submit must produce validation errors.
 */
describe("Property 1: Form rejects empty required fields", () => {
  it("validateContactForm returns errors for any whitespace-only fields", () => {
    const whitespaceArb = fc.stringOf(
      fc.constantFrom(" ", "\t", "\n", "\r"),
      { minLength: 0, maxLength: 20 }
    );

    fc.assert(
      fc.property(whitespaceArb, whitespaceArb, whitespaceArb, (name, email, message) => {
        const errors = validateContactForm({ name, email, message });
        // At least one error should be present since all fields are whitespace/empty
        expect(Object.keys(errors).length).toBeGreaterThan(0);
        if (!name.trim()) expect(errors.name).toBeDefined();
        if (!email.trim()) expect(errors.email).toBeDefined();
        if (!message.trim()) expect(errors.message).toBeDefined();
      }),
      { numRuns: 100 }
    );
  });
});

/**
 * Feature: growthovo-media-website, Property 2: Email format validation
 * For any valid email string, the form accepts it; for any invalid string, it rejects it.
 */
describe("Property 2: Email format validation", () => {
  it("accepts valid email addresses", () => {
    const validEmailArb = fc
      .tuple(
        fc.string({ minLength: 1, maxLength: 10 }).filter(s => /^[a-zA-Z0-9]+$/.test(s)),
        fc.string({ minLength: 1, maxLength: 10 }).filter(s => /^[a-zA-Z0-9]+$/.test(s)),
        fc.constantFrom("com", "ro", "net", "org", "io")
      )
      .map(([local, domain, tld]) => `${local}@${domain}.${tld}`);

    fc.assert(
      fc.property(validEmailArb, (email) => {
        expect(validateEmail(email)).toBe(true);
      }),
      { numRuns: 100 }
    );
  });

  it("rejects strings without @ symbol", () => {
    const noAtArb = fc
      .string({ minLength: 1, maxLength: 30 })
      .filter((s) => !s.includes("@"));

    fc.assert(
      fc.property(noAtArb, (email) => {
        expect(validateEmail(email)).toBe(false);
      }),
      { numRuns: 100 }
    );
  });

  it("rejects strings without domain part", () => {
    const noDomainArb = fc
      .string({ minLength: 1, maxLength: 20 })
      .map((s) => `${s}@`)
      .filter((s) => !s.includes("."));

    fc.assert(
      fc.property(noDomainArb, (email) => {
        expect(validateEmail(email)).toBe(false);
      }),
      { numRuns: 100 }
    );
  });
});
