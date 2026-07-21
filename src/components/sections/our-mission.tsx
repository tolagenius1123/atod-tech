import Image from "next/image";
import { Search } from "lucide-react";

import { glowEllipse } from "@/assets";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { SectionBadge } from "@/components/shared/section-badge";

export function OurMission() {
	return (
		<section className="relative overflow-hidden">
			<Image
				src={glowEllipse}
				alt=""
				aria-hidden
				className="pointer-events-none absolute left-1/2 top-37.5 w-330 max-w-none -translate-x-1/2"
			/>

			<div className="relative mx-auto w-full max-w-360 px-6 py-10 md:py-20 xl:px-30">
				<div className="flex flex-col items-center gap-6 text-center">
					<SectionBadge icon={Search}>Our Mission</SectionBadge>
					<p className="max-w-247 text-xl leading-relaxed text-white lg:text-2xl">
						We&rsquo;re a team of designers, developers, and innovators
						passionate about turning ideas into impactful digital products.
					</p>
				</div>

				<div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
					<p className="max-w-133.25 text-lg leading-normal text-white">
						We don&rsquo;t just build software we build lasting partnerships.
						Whether you&rsquo;re a startup or an established brand, we&rsquo;re
						here to help you grow, one digital product at a time.
					</p>
					<ImagePlaceholder
						label="Atod team collaborating"
						className="h-125.75 w-full"
					/>
				</div>
			</div>
		</section>
	);
}
