import { MessageCircleQuestion, Search, type LucideIcon } from "lucide-react";

import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { SectionBadge } from "@/components/shared/section-badge";

const pillars: { icon: LucideIcon; title: string; body: string }[] = [
	{
		icon: Search,
		title: "Our Vision",
		body: "To be a leading software company recognized for creativity, reliability, and user-centered innovation across every digital platform.",
	},
	{
		icon: MessageCircleQuestion,
		title: "Our Approach",
		body: "We combine strategy, design, and technology to build experiences that drive engagement and results. Every project we take on is guided by collaboration, innovation, and precision ensuring that your digital product stands out in today's competitive world.",
	},
];

export function VisionApproach() {
	return (
		<section className="relative">
			<div className="mx-auto grid w-full max-w-360 gap-12 px-6 py-10 md:py-20 lg:grid-cols-3 lg:items-center xl:px-30">
				<div className="flex flex-col items-start gap-6">
					<SectionBadge icon={pillars[0].icon}>{pillars[0].title}</SectionBadge>
					<p className="max-w-84.5 text-base leading-normal text-white">
						{pillars[0].body}
					</p>
				</div>

				<ImagePlaceholder
					label="Product team at work"
					className="order-first h-131.75 w-full lg:order-none"
				/>

				<div className="flex flex-col items-start gap-6">
					<SectionBadge icon={pillars[1].icon}>{pillars[1].title}</SectionBadge>
					<p className="max-w-84.5 text-base leading-normal text-white">
						{pillars[1].body}
					</p>
				</div>
			</div>
		</section>
	);
}
