import { FancyButton } from "@/components/shared/fancy-button";
import { HeroBackdrop } from "@/components/shared/hero-backdrop";
import { cn } from "@/lib/utils";

type PageHeroProps = {
	title: string;
	description: string;
	action?: { label: string; href: string };
	contentClassName?: string;
	children?: React.ReactNode;
};

export function PageHero({
	title,
	description,
	action,
	contentClassName,
	children,
}: PageHeroProps) {
	return (
		<section className="relative overflow-hidden bg-page">
			<HeroBackdrop priority />

			<div
				className={cn(
					"relative mx-auto flex w-full max-w-360 flex-col items-center px-6 pb-12 pt-33 md:pb-20 xl:px-30",
					contentClassName,
				)}
			>
				<h1 className="heading-gradient max-w-290.5 text-center text-[40px] font-medium leading-tight tracking-[-1.44px] sm:text-[56px] lg:text-[72px] lg:leading-22.25">
					{title}
				</h1>
				<p className="mt-6 max-w-161.25 text-center text-lg leading-7.5 text-white lg:text-xl">
					{description}
				</p>
				{action && (
					<FancyButton href={action.href} className="mt-7">
						{action.label}
					</FancyButton>
				)}
				{children}
			</div>
		</section>
	);
}
