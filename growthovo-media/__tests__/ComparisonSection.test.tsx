import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import * as fc from "fast-check";
import ComparisonSection from "@/components/ComparisonSection";
import { COMPARISON_ROWS } from "@/lib/constants";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p {...props}>{children}</p>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("ComparisonSection", () => {
  it("renders all comparison rows", () => {
    render(<ComparisonSection />);
    const rows = screen.getAllByTestId("comparison-row");
    expect(rows.length).toBe(COMPARISON_ROWS.length);
  });

  it("renders the Growthovo column header", () => {
    render(<ComparisonSection />);
    expect(screen.getByText("Growthovo")).toBeInTheDocument();
  });

  it("renders the Agencies column header", () => {
    render(<ComparisonSection />);
    expect(screen.getByText("Agencies")).toBeInTheDocument();
  });

  /**
   * Feature: growthovo-media-website, Property 4: Comparison table data integrity
   * For any rendering of the comparison table, all rows must be present
   * and Growthovo values must differ from agency values.
   */
  it("Property 4: all rows present and Growthovo values differ from agency values", () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: COMPARISON_ROWS.length - 1 }), (index) => {
        const { unmount } = render(<ComparisonSection />);
        const row = COMPARISON_ROWS[index];

        // Row label is present
        expect(screen.getByText(row.label)).toBeInTheDocument();
        // Growthovo value is present
        expect(screen.getByText(row.growthovo)).toBeInTheDocument();
        // Agency value is present
        expect(screen.getByText(row.agency)).toBeInTheDocument();
        // Values differ
        expect(row.growthovo).not.toBe(row.agency);

        unmount();
      }),
      { numRuns: 100 }
    );
  });
});
