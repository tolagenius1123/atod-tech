import Image from "next/image";
import { FolderOpen } from "lucide-react";

import { phoneMockup1, phoneMockup2, phoneMockup3 } from "@/assets";
import { FancyButton } from "@/components/shared/fancy-button";
import { SectionBadge } from "@/components/shared/section-badge";
import { SectionHeading } from "@/components/shared/section-heading";

export function FeaturedProjects() {
	return (
		<section id="projects" className="relative">
			<div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 py-10 md:py-20 xl:px-[120px]">
				<div className="flex max-w-[694px] flex-col items-center gap-6 text-center">
					<SectionBadge icon={FolderOpen}>Featured Project</SectionBadge>
					<SectionHeading>
						Take a look at some of the projects we&rsquo;ve brought to life for
						our clients.
					</SectionHeading>
				</div>

				<div className="mt-[42px] flex items-start justify-center gap-3 sm:gap-[21px]">
					<Image
						src={phoneMockup1}
						alt="Artisan app - categories screen"
						className="mt-6 hidden w-[220px] sm:block lg:mt-[47px] lg:w-[314px]"
					/>
					<Image
						src={phoneMockup2}
						alt="Artisan app - home screen"
						className="w-[240px] lg:w-[314px]"
					/>
					<Image
						src={phoneMockup3}
						alt="Artisan app - artisan profile screen"
						className="mt-6 hidden w-[220px] md:block lg:mt-[47px] lg:w-[314px]"
					/>
				</div>

				<FancyButton href="#" className="mt-[42px]">
					View Projects
				</FancyButton>
			</div>
		</section>
	);
}
