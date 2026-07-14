import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Cta } from "@/components/sections/cta";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Testimonial } from "@/components/sections/testimonial";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function Home() {
	return (
		<main className="relative">
			<Header />
			<Hero />
			<Services />
			<FeaturedProjects />
			<WhyChooseUs />
			<Testimonial />
			<Cta />
			<Footer />
		</main>
	);
}
