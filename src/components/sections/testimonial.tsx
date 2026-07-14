import Image from "next/image";
import { UserRoundSearch } from "lucide-react";

import { avatarLawal, dots, glowEllipse, quote } from "@/assets";
import { SectionBadge } from "@/components/shared/section-badge";
import { SectionHeading } from "@/components/shared/section-heading";

export function Testimonial() {
	return (
		<section className="relative overflow-hidden">
			<Image
				src={glowEllipse}
				alt=""
				aria-hidden
				className="pointer-events-none absolute left-1/2 top-0 w-[1320px] max-w-none -translate-x-1/2"
			/>

			<div className="relative mx-auto w-full max-w-[1440px] px-6 pb-32 pt-10 md:pt-20 xl:px-[120px]">
				<div className="flex max-w-[873px] flex-col items-start gap-6">
					<SectionBadge icon={UserRoundSearch}>Testimonial</SectionBadge>
					<SectionHeading>What Client Says About Us</SectionHeading>
				</div>

				<div className="relative mt-9">
					<div className="relative min-h-[445px] overflow-hidden rounded-[18px] bg-white/[0.03]">
						<Image
							src={dots}
							alt=""
							aria-hidden
							className="absolute left-1/2 top-3.5 hidden h-2.5 w-[49px] -translate-x-[63px] lg:block"
						/>

						<div className="flex flex-col gap-10 p-8 lg:h-[445px] lg:flex-row lg:items-center lg:gap-0 lg:p-0">
							{/* Client identity */}
							<div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-[42px] lg:w-1/2 lg:pl-8">
								<Image
									src={avatarLawal}
									alt="Portrait of Lawal Halima"
									className="size-[140px] rounded-full object-cover sm:size-[188px]"
								/>
								<div className="flex max-w-[305px] flex-col gap-[27px]">
									<div className="flex flex-col gap-2.5 text-white">
										<p className="text-2xl font-medium">Lawal Halima</p>
										<p className="text-lg">CEO - Hamony App</p>
									</div>
									<a
										href="https://www.linkedin.com/in/lawal-553807195"
										target="_blank"
										rel="noopener noreferrer"
										className="cursor-pointer break-all text-sm text-brand-accent hover:underline"
									>
										https://www.linkedin.com/in/lawal-553807195
									</a>
								</div>
							</div>

							{/* Divider */}
							<div
								aria-hidden
								className="hidden h-[355px] w-px shrink-0 bg-gradient-to-b from-transparent via-white/40 to-transparent lg:block"
							/>
							<div
								aria-hidden
								className="h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent lg:hidden"
							/>

							{/* Quote */}
							<p className="text-base leading-[26px] text-white lg:w-1/2 lg:px-8 lg:text-lg">
								Working with Atod has been one of the best decisions we&rsquo;ve
								made for our business. From the very first meeting, the team
								took the time to understand our goals and challenges, and they
								translated that into a clear digital strategy. They didn&rsquo;t
								just design a beautiful website for us, they built a solution
								that truly supports our day-to-day operations and helps us
								connect better with our customers. The attention to detail,
								creativity, and professionalism they brought to the project
								exceeded our expectations. Even after launch, their ongoing
								support and improvements have made us feel like we have a true
								partner in our growth.
							</p>
						</div>
					</div>

					{/* Oversized quotation mark hanging off the card's bottom-right */}
					<Image
						src={quote}
						alt=""
						aria-hidden
						className="absolute -bottom-[96px] right-3 hidden w-[235px] lg:block"
					/>
				</div>
			</div>
		</section>
	);
}
