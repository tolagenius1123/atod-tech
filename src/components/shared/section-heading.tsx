import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  className?: string;
  children: React.ReactNode;
};

/** Section heading: Inter Bold 32px with the white fade gradient from the design. */
export function SectionHeading({ className, children }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "heading-gradient text-[28px] font-bold leading-[1.2] lg:text-[32px]",
        className
      )}
    >
      {children}
    </h2>
  );
}
