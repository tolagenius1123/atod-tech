import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Cta } from "@/components/sections/cta";
import { DesignApproach } from "@/components/sections/design-approach";
import { ProjectDetails } from "@/components/sections/project-details";
import { ProjectOverview } from "@/components/sections/project-overview";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
	title: "Projects | ATOD Tech Agency",
	description:
		"Take a look at some of the projects we've brought to life for our clients.",
};

export default function ProjectsPage() {
	return (
		<main className="relative">
			<Header />
			<PageHero
				title="Project Showcase"
				description="We design and develop websites, mobile apps, and custom software that bring your ideas to life."
				action={{ label: "Contact Us", href: "/contact" }}
			>
				<ProjectShowcase />
			</PageHero>
			<ProjectOverview />
			<ProjectDetails />
			<DesignApproach />
			<Cta />
			<Footer />
		</main>
	);
}
