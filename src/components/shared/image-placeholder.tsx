import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
	label: string;
	className?: string;
};

export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
	return (
		<div
			role="img"
			aria-label={label}
			className={cn(
				"flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 bg-linear-to-b from-white/7 to-white/2 p-4 text-center",
				className,
			)}
		>
			<ImageIcon className="size-6 text-white/30" aria-hidden />
			<span className="text-sm leading-5 text-white/40">{label}</span>
		</div>
	);
}
