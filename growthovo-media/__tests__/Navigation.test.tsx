import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "@/components/Navigation";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("Navigation", () => {
  it("renders the brand name", () => {
    render(<Navigation />);
    expect(screen.getByLabelText("Growthovo Media - Home")).toBeInTheDocument();
  });

  it("renders all anchor links", () => {
    render(<Navigation />);
    expect(screen.getAllByText("Services").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Pricing").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Compare").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });

  it("renders the CTA button with correct href", () => {
    render(<Navigation />);
    const ctaLinks = screen
      .getAllByRole("link")
      .filter((el) => el.getAttribute("href")?.includes("wa.me"));
    expect(ctaLinks.length).toBeGreaterThan(0);
  });

  it("renders hamburger button for mobile", () => {
    render(<Navigation />);
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });
});
