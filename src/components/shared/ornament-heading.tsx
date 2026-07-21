import Image from "next/image";

import { sparklePlus } from "@/assets";
import { cn } from "@/lib/utils";

type OrnamentHeadingProps = {
	className?: string;
	children: React.ReactNode;
};

export function OrnamentHeading({ className, children }: OrnamentHeadingProps) {
	return (
		<div className={cn("flex items-center gap-6", className)}>
			<Image src={sparklePlus} alt="" aria-hidden className="size-6" />
			<h2 className="text-2xl font-semibold leading-snug text-white lg:text-[28px]">
				{children}
			</h2>
			<Image src={sparklePlus} alt="" aria-hidden className="size-6" />
		</div>
	);
}
