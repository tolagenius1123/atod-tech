import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import {
	projectCyberdependency,
	projectPickup,
	projectSabiwork,
} from "@/assets";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

const projects = [
	{
		name: "Sabiwork App",
		category: "Artisan Platform",
		image: projectSabiwork,
	},
	{
		name: "Cyberdependency",
		category: "Educational Platform",
		image: projectCyberdependency,
	},
	{
		name: "Pickup App",
		category: "Interstate Travel",
		image: projectPickup,
	},
];

export function ProjectShowcase() {
	return (
		<RevealGroup
			stagger={0.12}
			className="mt-14 grid w-full max-w-300 gap-11 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3"
		>
			{projects.map((project) => (
				<RevealItem key={project.name} className="relative pb-3 pl-3">
					<Image
						src={project.image}
						alt={`${project.name} — ${project.category}`}
						className="w-full rounded-xl"
					/>
					<a
						href="#"
						aria-label={`View the ${project.name} case study`}
						className="absolute bottom-0 left-0 flex size-17 cursor-pointer items-center justify-center rounded-full border-2 border-brand bg-page"
					>
						<ArrowUpRight className="size-8 text-brand" aria-hidden />
					</a>
				</RevealItem>
			))}
		</RevealGroup>
	);
}
