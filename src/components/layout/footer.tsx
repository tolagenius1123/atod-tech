import Image from "next/image";
import Link from "next/link";

import {
	socialFacebook,
	socialInstagram,
	socialLinkedin,
	socialTwitter,
	socialYoutube,
} from "@/assets";

const footerColumns = [
	{
		heading: "Links",
		links: ["Home", "Projects", "About Us", "Contact", "Privacy policy"],
	},
	{
		heading: "Services",
		links: [
			"Web design",
			"Web development",
			"Mobile design",
			"UI/UX design",
			"Branding design",
		],
	},
	{
		heading: "Contact us",
		links: [
			"Information",
			"Request a quote",
			"Consultation",
			"Help center",
			"Terms and conditions",
		],
	},
];

const socialIcons = [
	{ src: socialFacebook, label: "Facebook" },
	{ src: socialTwitter, label: "Twitter" },
	{ src: socialInstagram, label: "Instagram" },
	{ src: socialLinkedin, label: "LinkedIn" },
	{ src: socialYoutube, label: "YouTube" },
];

export function Footer() {
	return (
		<footer>
			<div className="mx-auto w-full max-w-[1440px] px-6 pt-12 xl:px-[120px]">
				<div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
					<div className="flex flex-col items-start">
						<Link
							href="/"
							aria-label="ATOD Tech Agency - Home"
							className="block h-8 w-[124px] cursor-pointer bg-transparent"
						/>
						<p className="mt-6 max-w-[323px] text-base leading-6 text-white">
							We design and build digital products that empower businesses to
							grow.
						</p>
						<div className="mt-8 flex items-start gap-4">
							{socialIcons.map((icon) => (
								<a
									key={icon.label}
									href="#"
									aria-label={icon.label}
									className="cursor-pointer transition-opacity hover:opacity-70"
								>
									<Image src={icon.src} alt="" className="size-6" />
								</a>
							))}
						</div>
					</div>

					{footerColumns.map((column) => (
						<div key={column.heading} className="flex flex-col gap-8">
							<h3 className="text-base font-semibold leading-[22px] text-brand">
								{column.heading}
							</h3>
							<ul className="flex flex-col gap-6">
								{column.links.map((label) => (
									<li key={label}>
										<a
											href="#"
											className="cursor-pointer text-base leading-[22px] text-white transition-colors hover:text-brand-accent"
										>
											{label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-12 flex h-[60px] items-center justify-center border-t border-[#e1e4ed]/40 py-6">
					<p className="text-center text-sm leading-[22px] text-white/90 lg:text-base">
						Copyright &copy; 2025 ATOD Tech Agency{" "}
						<span className="text-[#d3d7e5]">|</span> All Rights Reserved{" "}
						<span className="text-[#d3d7e5]">|</span>{" "}
						<a href="#" className="cursor-pointer underline hover:text-white">
							Terms and Conditions
						</a>{" "}
						<span className="text-[#d3d7e5]">|</span>{" "}
						<a href="#" className="cursor-pointer underline hover:text-white">
							Privacy Policy
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
