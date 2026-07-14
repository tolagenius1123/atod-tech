import Image from "next/image";

import { ctaDashboard, ctaMap } from "@/assets";
import { FancyButton } from "@/components/shared/fancy-button";

export function Cta() {
	return (
		<section id="contact">
			<div className="mx-auto w-full max-w-[1440px] px-6 py-10 md:py-20 xl:px-[120px]">
				<div
					className="flex flex-col items-center overflow-hidden rounded-[24px] px-6 pb-8 pt-8 lg:min-h-[621px]"
					style={{
						backgroundImage:
							"linear-gradient(175deg, #1e338a 7.25%, rgba(245, 111, 70, 0.49) 140.94%)",
					}}
				>
					<div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-center lg:gap-[26px]">
						<Image
							src={ctaDashboard}
							alt="Analytics dashboard project"
							className="w-full max-w-[417px] rounded-[12px] border-4 border-[#1e88e5]"
						/>
						<Image
							src={ctaMap}
							alt="Map-based logistics project"
							className="w-full max-w-[417px] rounded-[12px] border-4 border-[#1e88e5] lg:mt-[43px]"
						/>
					</div>

					<h2 className="mt-8 max-w-[509px] text-center text-2xl font-semibold leading-9 text-white lg:mt-[46px] lg:text-[30px]">
						Excited to work together on your next project?
					</h2>
					<p className="mt-4 max-w-[383px] text-center text-base leading-6 text-white">
						Ready to take your business digital? We&rsquo;re here to design,
						develop, and deliver.
					</p>

					<FancyButton href="mailto:hello@atod.tech" className="mt-7">
						Get in touch
					</FancyButton>
				</div>
			</div>
		</section>
	);
}
