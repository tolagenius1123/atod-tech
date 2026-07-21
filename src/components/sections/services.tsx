import Image from "next/image";
import { UserRoundSearch } from "lucide-react";

import { glowEllipse, gridCard, sparkleSquare } from "@/assets";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionBadge } from "@/components/shared/section-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

type SquareColor = "orange" | "blue";

/** The three decorative square slots shared by every white card (from Figma). */
const squareSlots = {
	left: "left-[8.16%] top-[41%]",
	right: "left-[84.3%] top-[41%]",
	top: "left-[70.3%] top-[18.2%]",
} as const;

type ServiceCardProps = {
	title: string;
	description: string;
	squares: Record<keyof typeof squareSlots, SquareColor>;
	className?: string;
};

function ServiceCard({
	title,
	description,
	squares,
	className,
}: ServiceCardProps) {
	return (
		<div
			className={cn(
				"relative h-[353px] overflow-hidden rounded-[18px] bg-white",
				className,
			)}
		>
			<Image
				src={gridCard}
				alt=""
				aria-hidden
				className="pointer-events-none absolute left-1/2 top-[-97px] size-[430px] max-w-none -translate-x-1/2"
			/>
			{(Object.keys(squareSlots) as (keyof typeof squareSlots)[]).map(
				(slot) => (
					<div
						key={slot}
						aria-hidden
						className={cn(
							"absolute h-[27px] w-[27px]",
							squareSlots[slot],
							squares[slot] === "orange" ? "bg-brand-accent" : "bg-brand/15",
						)}
					/>
				),
			)}
			<div className="absolute inset-x-7 bottom-[27px] flex flex-col gap-[5px] text-black">
				<h3 className="text-lg font-semibold leading-[1.2]">{title}</h3>
				<p className="text-base leading-[1.38]">{description}</p>
			</div>
		</div>
	);
}

function GhostCard({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="relative h-[212px] overflow-hidden rounded-[18px]">
			<Image
				src={sparkleSquare}
				alt=""
				aria-hidden
				className="absolute left-7 top-[30px] size-6"
			/>
			<Image
				src={sparkleSquare}
				alt=""
				aria-hidden
				className="absolute bottom-[24px] right-7 size-6"
			/>
			<div className="absolute inset-x-7 bottom-[27px] flex max-w-[226px] flex-col gap-[5px] text-white">
				<h3 className="text-lg font-semibold leading-[1.38]">{title}</h3>
				<p className="text-base leading-[1.38]">{description}</p>
			</div>
		</div>
	);
}

export function Services() {
	return (
		<section className="relative overflow-hidden">
			{/* Blue radial glow behind the cards */}
			<Image
				src={glowEllipse}
				alt=""
				aria-hidden
				className="pointer-events-none absolute left-1/2 top-[150px] w-[1320px] max-w-none -translate-x-1/2"
			/>

			<div className="relative mx-auto w-full max-w-[1440px] px-6 pb-16 md:pb-20 pt-10 md:pt-20 xl:px-[120px]">
				<RevealGroup className="flex max-w-[873px] flex-col items-start gap-6">
					<RevealItem>
						<SectionBadge icon={UserRoundSearch}>What We Do</SectionBadge>
					</RevealItem>
					<RevealItem>
						<SectionHeading>
							From strategy to design and development, we help you create
							digital products that scale.
						</SectionHeading>
					</RevealItem>
				</RevealGroup>

				<RevealGroup
					stagger={0.12}
					className="mt-10 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3"
				>
					<RevealItem>
						<ServiceCard
							title="Website Design & Development"
							description="Fast, responsive, and user-focused."
							squares={{ left: "blue", right: "orange", top: "orange" }}
						/>
					</RevealItem>
					<RevealItem className="grid gap-4">
						<GhostCard
							title="Mobile Apps"
							description="iOS & Android apps built for performance."
						/>
						<ServiceCard
							title="UI/UX Design"
							description="Seamless, intuitive, and delightful user experiences."
							squares={{ left: "orange", right: "orange", top: "blue" }}
						/>
					</RevealItem>
					<RevealItem>
						<ServiceCard
							title="Customer Software Solution"
							description="Tailored system for business needs."
							squares={{ left: "orange", right: "blue", top: "orange" }}
						/>
					</RevealItem>
				</RevealGroup>
			</div>
		</section>
	);
}
