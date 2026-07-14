import Image, { type StaticImageData } from "next/image";
import { ArrowRight, LifeBuoy, type LucideIcon } from "lucide-react";

import {
	flowConnector,
	flowCurveLeft,
	flowCurveRight,
	flowDesign,
	flowDevelop,
	flowDiscover,
	flowStrategy,
	heroBg,
	logoBoltshift,
	logoFeatherDev,
	logoGlobalBank,
	logoLightbox,
	sparklePlus,
} from "@/assets";
import { FancyButton } from "@/components/shared/fancy-button";
import { cn } from "@/lib/utils";

const trustedLogos = [
	{ src: logoBoltshift, alt: "Boltshift", width: 113.6 },
	{ src: logoLightbox, alt: "Lightbox", width: 110.4 },
	{ src: logoFeatherDev, alt: "FeatherDev", width: 132.8 },
	{ src: logoGlobalBank, alt: "GlobalBank", width: 131.2 },
];

type FlowStep = {
	icon: StaticImageData | LucideIcon;
	label: string;
	className: string;
};

const flowSteps: FlowStep[] = [
	{ icon: flowDiscover, label: "Discover Needs", className: "left-0 top-0" },
	{
		icon: LifeBuoy,
		label: "Support & Scale",
		className: "left-254.5 top-0",
	},
	{
		icon: flowStrategy,
		label: "Strategy & Planning",
		className: "left-71.75 top-31.75",
	},
	{
		icon: flowDesign,
		label: "Design Interface",
		className: "left-128.25 top-31.75",
	},
	{
		icon: flowDevelop,
		label: "Develop Solutions",
		className: "left-178.25 top-31.75",
	},
];

const flowMilestones = [
	{ label: "Goals", className: "left-45.75 top-17.5" },
	{ label: "Launch Product", className: "left-222.25 top-17.5" },
];

const sparklePositions = [
	"left-[87.5%] top-[42%]",
	"left-[82.6%] top-[58%]",
	"left-[81.8%] top-[16%]",
	"left-[8%] top-[32%]",
	"left-[24.5%] top-[16%]",
	"left-[13.3%] top-[42%]",
];

function FlowChipIcon({ icon }: { icon: FlowStep["icon"] }) {
	if ("src" in icon) {
		return <Image src={icon} alt="" aria-hidden className="size-4" />;
	}
	const Icon = icon;
	return <Icon className="size-4 text-white" aria-hidden />;
}

function FlowChip({
	icon,
	label,
	className,
}: Partial<FlowStep> & { label: string }) {
	return (
		<div
			className={cn(
				"flex items-center gap-1 rounded-lg border border-white/10 bg-linear-to-b from-white/7 to-white/2 p-2.75 shadow-[0_8px_18px_rgba(0,0,0,0.35)]",
				className,
			)}
		>
			{icon && (
				<div className="rounded-xs border-[0.5px] border-brand-accent/40 bg-white/2 p-1">
					<FlowChipIcon icon={icon} />
				</div>
			)}
			<span className="whitespace-nowrap px-1 text-sm leading-5 tracking-[0.56px] text-white">
				{label}
			</span>
		</div>
	);
}

function FlowMilestone({
	label,
	className,
}: {
	label: string;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"whitespace-nowrap rounded-sm bg-white px-4.5 py-2.25 text-center text-sm leading-3.75 tracking-[0.56px] text-brand",
				className,
			)}
		>
			{label}
		</div>
	);
}

export function Hero() {
	return (
		<section id="home" className="relative overflow-hidden bg-page">
			<Image
				src={heroBg}
				alt=""
				aria-hidden
				priority
				className="pointer-events-none absolute inset-0 size-full object-cover"
			/>

			{sparklePositions.map((pos) => (
				<Image
					key={pos}
					src={sparklePlus}
					alt=""
					aria-hidden
					className={cn("absolute hidden size-6 md:block", pos)}
				/>
			))}

			<div className="relative mx-auto flex w-full max-w-360 flex-col items-center px-6 pb-10 md:pb-20 pt-33 xl:px-30">
				<a
					href="#projects"
					className="fancy-shadow flex cursor-pointer flex-wrap items-center justify-center gap-y-1 rounded-[50px] py-1 pl-2 pr-4 transition-[filter] hover:brightness-125"
				>
					<span className="fancy-gradient rounded-[50px] border border-white px-3.5 py-0.5 text-sm leading-5 tracking-[0.56px] text-badge-text">
						New Projects
					</span>
					<span className="px-2 text-sm leading-5 tracking-[0.56px] text-white">
						Check out our new products
					</span>
					<ArrowRight className="size-4 text-white" aria-hidden />
				</a>

				<h1 className="heading-gradient mt-6.75 max-w-290.5 text-center text-[40px] font-medium leading-tight tracking-[-1.44px] sm:text-[56px] lg:text-[72px] lg:leading-22.25">
					Building Digital Products That Drives Growth
				</h1>
				<p className="mt-4 max-w-161.25 text-center text-lg leading-7.5 text-white lg:text-xl">
					We design and develop websites, mobile apps, and custom software that
					bring your ideas to life.
				</p>

				<FancyButton href="#contact" className="mt-6.75">
					Contact Us
				</FancyButton>

				<div className="mt-10 flex flex-col items-center gap-4">
					<p className="text-center text-sm leading-5 tracking-[0.56px] text-[#eaeaea] sm:bg-linear-to-b sm:from-[#eaeaea] sm:to-[#eaeaea]/0 sm:bg-clip-text sm:text-transparent">
						Trusted by startups, enterprises, and innovators worldwide.
					</p>
					<div className="flex flex-wrap items-center justify-center gap-8">
						{trustedLogos.map((logo) => (
							<Image
								key={logo.alt}
								src={logo.src}
								alt={logo.alt}
								className="h-8 w-auto"
								style={{ width: logo.width }}
							/>
						))}
					</div>
				</div>

				<div className="relative mt-6 hidden h-43.25 w-294.5 min-[1200px]:block">
					<Image
						src={flowCurveLeft}
						alt=""
						aria-hidden
						className="absolute left-39.5 top-5.75 h-31.75 w-31.5"
					/>
					<Image
						src={flowCurveRight}
						alt=""
						aria-hidden
						className="absolute left-222.25 top-5.75 h-31.75 w-31.5 -scale-x-100"
					/>
					{flowSteps.map((step) => (
						<FlowChip
							key={step.label}
							icon={step.icon}
							label={step.label}
							className={cn("absolute", step.className)}
						/>
					))}
					{flowMilestones.map((m) => (
						<FlowMilestone
							key={m.label}
							label={m.label}
							className={cn("absolute", m.className)}
						/>
					))}
					<Image
						src={flowConnector}
						alt=""
						aria-hidden
						className="absolute left-119.75 top-37.5 w-7.75"
					/>
					<Image
						src={flowConnector}
						alt=""
						aria-hidden
						className="absolute left-169.75 top-38 w-7.75"
					/>
				</div>

				<div className="mt-8 flex flex-wrap items-center justify-center gap-2 min-[1200px]:hidden">
					{flowSteps.map((step) => (
						<FlowChip key={step.label} icon={step.icon} label={step.label} />
					))}
					{flowMilestones.map((m) => (
						<FlowMilestone key={m.label} label={m.label} />
					))}
				</div>
			</div>
		</section>
	);
}
