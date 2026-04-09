import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import * as fc from "fast-check";
import ServicesSection from "@/components/ServicesSection";
import { SERVICES } from "@/lib/constants";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 {...props}>{children}</h2>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("ServicesSection", () => {
  it("renders at least 4 service cards", () => {
    render(<ServicesSection />);
    const cards = screen.getAllByTestId("service-card");
    expect(cards.length).toBeGreaterThanOrEqual(4);
  });

  it("renders exactly as many cards as SERVICES constant", () => {
    render(<ServicesSection />);
    const cards = screen.getAllByTestId("service-card");
    expect(cards.length).toBe(SERVICES.length);
  });

  /**
   * Feature: growthovo-media-website, Property 3: Service cards completeness
   * For any rendering of ServicesSection, each card from SERVICES must have
   * a visible title and description.
   */
  it("Property 3: every service card has a title and description", () => {
    // Run 100 times to satisfy property-based testing requirement
    // (deterministic here since SERVICES is a constant, but we verify the invariant holds)
    fc.assert(
      fc.property(fc.integer({ min: 0, max: SERVICES.length - 1 }), (index) => {
        const { unmount } = render(<ServicesSection />);
        const service = SERVICES[index];
        expect(screen.getByText(service.title)).toBeInTheDocument();
        expect(screen.getByText(service.description)).toBeInTheDocument();
        unmount();
      }),
      { numRuns: 100 }
    );
  });
});
