import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import * as fc from "fast-check";
import OfferSection from "@/components/OfferSection";
import HeroSection from "@/components/HeroSection";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1 {...props}>{children}</h1>
    ),
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 {...props}>{children}</h2>
    ),
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p {...props}>{children}</p>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

/**
 * Feature: growthovo-media-website, Property 3: WhatsApp links open in new tab
 * For any WhatsApp link on the page, target must be "_blank" and href must contain "wa.me"
 */
describe("WhatsApp links - Property 3", () => {
  it("OfferSection: WhatsApp CTA opens in new tab with correct href", () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { unmount } = render(<OfferSection />);
        const links = screen
          .getAllByRole("link")
          .filter((el) => el.getAttribute("href")?.includes("wa.me"));
        expect(links.length).toBeGreaterThan(0);
        links.forEach((link) => {
          expect(link).toHaveAttribute("target", "_blank");
          expect(link.getAttribute("href")).toContain("wa.me");
        });
        unmount();
      }),
      { numRuns: 100 }
    );
  });

  it("HeroSection: WhatsApp CTA opens in new tab with correct href", () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { unmount } = render(<HeroSection />);
        const links = screen
          .getAllByRole("link")
          .filter((el) => el.getAttribute("href")?.includes("wa.me"));
        expect(links.length).toBeGreaterThan(0);
        links.forEach((link) => {
          expect(link).toHaveAttribute("target", "_blank");
          expect(link.getAttribute("href")).toContain("wa.me");
        });
        unmount();
      }),
      { numRuns: 100 }
    );
  });
});
