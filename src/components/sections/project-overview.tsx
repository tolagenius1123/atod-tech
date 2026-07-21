import { OrnamentHeading } from "@/components/shared/ornament-heading";

export function ProjectOverview() {
	return (
		<section
			className="relative"
			style={{
				backgroundImage:
					"linear-gradient(175deg, #1e338a 7.25%, rgba(245, 111, 70, 0.49) 140.94%)",
			}}
		>
			<div className="mx-auto flex w-full max-w-360 flex-col items-center px-6 py-10 text-center md:py-20 xl:px-30">
				<OrnamentHeading>Project Overview</OrnamentHeading>
				<p className="mt-11 max-w-268 text-lg leading-normal text-white">
					Sabiwork is a mobile application designed to connect users with skilled
					artisans for everyday services such as plumbers, electricians,
					carpenters, and painters. The goal was to create a reliable, fast, and
					user-friendly platform where people can find trusted handymen for their
					everyday needs.
				</p>
			</div>
		</section>
	);
}
