import { Search } from "lucide-react";

import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { SectionBadge } from "@/components/shared/section-badge";

const paragraphs = [
	"We're a team of designers, developers, and innovators passionate about turning ideas into impactful digital products.",
	"From mobile apps and websites to enterprise software, we help businesses of all sizes build solutions that works beautifully and efficiently.",
	"At Atod, we believe great products start with great collaboration. That's why we take the time to understand your goals, challenges, and users before crafting solutions that truly deliver results.",
];

export function WhoWeAre() {
	return (
		<section className="relative">
			<div className="mx-auto grid w-full max-w-360 gap-12 px-6 py-10 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-8 xl:px-30">
				<div className="flex flex-col items-start gap-6">
					<SectionBadge icon={Search}>Who We Are?</SectionBadge>
					{paragraphs.map((paragraph) => (
						<p
							key={paragraph}
							className="max-w-164.5 text-lg leading-normal text-white first:text-xl first:leading-relaxed"
						>
							{paragraph}
						</p>
					))}
				</div>

				<div className="flex flex-col gap-4">
					<ImagePlaceholder
						label="Team at work"
						className="h-61.75 w-full"
					/>
					<div className="grid grid-cols-2 gap-4">
						<ImagePlaceholder label="Design session" className="aspect-square" />
						<ImagePlaceholder label="Client workshop" className="aspect-square" />
					</div>
				</div>
			</div>
		</section>
	);
}
