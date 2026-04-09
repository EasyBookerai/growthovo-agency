import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WHATSAPP_LINK } from "@/lib/constants";

vi.mock("framer-motion", () => ({
  motion: {
    a: ({
      children,
      href,
      target,
      rel,
      className,
      "aria-label": ariaLabel,
      "data-testid": testId,
      ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { "data-testid"?: string }) => (
      <a
        href={href}
        target={target}
        rel={rel}
        className={className}
        aria-label={ariaLabel}
        data-testid={testId}
        {...props}
      >
        {children}
      </a>
    ),
  },
}));

describe("WhatsAppButton", () => {
  it("renders the WhatsApp button", () => {
    render(<WhatsAppButton />);
    expect(screen.getByTestId("whatsapp-button")).toBeInTheDocument();
  });

  it("has the correct WhatsApp href", () => {
    render(<WhatsAppButton />);
    const button = screen.getByTestId("whatsapp-button");
    expect(button).toHaveAttribute("href", WHATSAPP_LINK);
  });

  it("opens in a new tab (target=_blank)", () => {
    render(<WhatsAppButton />);
    const button = screen.getByTestId("whatsapp-button");
    expect(button).toHaveAttribute("target", "_blank");
  });

  it("has accessible label", () => {
    render(<WhatsAppButton />);
    expect(
      screen.getByLabelText("Contact us on WhatsApp")
    ).toBeInTheDocument();
  });
});
