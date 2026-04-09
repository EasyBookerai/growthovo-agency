import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/HeroSection";
import { WHATSAPP_LINK } from "@/lib/constants";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1 {...props}>{children}</h1>
    ),
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p {...props}>{children}</p>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("HeroSection", () => {
  it("renders the main UVP title", () => {
    render(<HeroSection />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Your Business Deserves/i)).toBeInTheDocument();
  });

  it("renders the sub-headline", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/No monthly fees/i)
    ).toBeInTheDocument();
  });

  it("renders the primary CTA button with WhatsApp href", () => {
    render(<HeroSection />);
    const ctaLink = screen.getByLabelText(
      "Contact Growthovo Media on WhatsApp"
    );
    expect(ctaLink).toBeInTheDocument();
    expect(ctaLink).toHaveAttribute("href", WHATSAPP_LINK);
    expect(ctaLink).toHaveAttribute("target", "_blank");
  });

  it("renders the EUR price mention", () => {
    render(<HeroSection />);
    const matches = screen.getAllByText(/€150/i);
    expect(matches.length).toBeGreaterThan(0);
  });
});
