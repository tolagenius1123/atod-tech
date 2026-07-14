import * as React from "react";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FancyButtonProps = {
  href?: string;
  /** Set to null to render without an icon */
  icon?: React.ReactNode | null;
  className?: string;
  children: React.ReactNode;
};

/**
 * Pill CTA from the design ("Fancy Buttons [1.0]"): blue gradient fill,
 * white border, glow shadow, sparkle icon. Renders as a link when `href`
 * is provided.
 */
export function FancyButton({
  href,
  icon,
  className,
  children,
}: FancyButtonProps) {
  return (
    <Button
      render={href ? <a href={href} /> : undefined}
      nativeButton={!href}
      className={cn(
        "fancy-gradient fancy-shadow h-auto cursor-pointer gap-0 rounded-[50px] border border-white px-8 py-2.5 text-sm font-normal tracking-[0.56px] text-white transition-[filter] hover:brightness-125",
        className
      )}
    >
      {icon === undefined ? (
        <Sparkles className="size-4" aria-hidden />
      ) : (
        icon
      )}
      <span className="px-1 leading-5">{children}</span>
    </Button>
  );
}
