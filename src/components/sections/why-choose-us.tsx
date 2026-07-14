import Image from "next/image";
import { Network } from "lucide-react";

import { gridBlue, timeline } from "@/assets";
import { SectionBadge } from "@/components/shared/section-badge";
import { SectionHeading } from "@/components/shared/section-heading";

const reasons = [
	"Experienced team of designers & developers",
	"End-to-end digital product support",
	"Proven track record with startups & enterprises",
	"Dedicated to building products that last",
];

const reasonPositions = [
	"left-0 w-[216px]",
	"left-[272px] w-[251px]",
	"left-[638px] w-[236px]",
	"left-[921px] w-[206px]",
];

export function WhyChooseUs() {
	return (
		<section id="about" className="relative overflow-hidden">
			<Image
				src={gridBlue}
				alt=""
				aria-hidden
				className="pointer-events-none absolute -top-[72px] left-[calc(50%-753px)] size-[430px] max-w-none"
			/>
			<Image
				src={gridBlue}
				alt=""
				aria-hidden
				className="pointer-events-none absolute left-[calc(50%+395px)] top-[69px] size-[430px] max-w-none"
			/>

			<div className="relative mx-auto w-full max-w-[1440px] px-6 py-10 md:py-20 xl:px-[121px]">
				<div className="mx-auto flex max-w-[694px] flex-col items-center gap-6 text-center">
					<SectionBadge icon={Network}>Why Choose Us</SectionBadge>
					<SectionHeading>
						We Build Solutions That Moves Business Forward
					</SectionHeading>
				</div>

				{/* Desktop: dotted timeline with texts at exact design offsets, centered on the viewport */}
				<div className="relative left-1/2 mt-16 hidden h-[200px] w-[1198px] -translate-x-1/2 min-[1200px]:block">
					<Image
						src={timeline}
						alt=""
						aria-hidden
						className="absolute left-[51px] top-[24px] w-[1096px] max-w-none"
					/>
					<div className="absolute left-[36px] top-[105px] h-[60px] w-[1127px]">
						{reasons.map((reason, i) => (
							<p
								key={reason}
								className={`absolute top-0 text-xl leading-[30px] tracking-[-0.4px] text-white ${reasonPositions[i]}`}
							>
								{reason}
							</p>
						))}
					</div>
				</div>

				{/* Mobile / tablet: simple bulleted stack */}
				<ul className="mx-auto mt-10 flex max-w-[480px] flex-col gap-6 min-[1200px]:hidden">
					{reasons.map((reason) => (
						<li key={reason} className="flex items-start gap-4">
							<span
								aria-hidden
								className="mt-2.5 size-2 shrink-0 rounded-full bg-white"
							/>
							<p className="text-lg leading-[30px] tracking-[-0.4px] text-white">
								{reason}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
