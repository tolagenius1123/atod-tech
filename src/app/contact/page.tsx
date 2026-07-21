import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ContactDetails } from "@/components/sections/contact-details";
import { Cta } from "@/components/sections/cta";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
	title: "Contact Us | ATOD Tech Agency",
	description:
		"Tell us about your project and our team will get back to you shortly.",
};

export default function ContactPage() {
	return (
		<main className="relative">
			<Header />
			<PageHero
				title="Let's Build Something Great Together"
				description="our team will get back to you shortly."
			>
				<ContactDetails />
			</PageHero>
			<Cta />
			<Footer />
		</main>
	);
}
