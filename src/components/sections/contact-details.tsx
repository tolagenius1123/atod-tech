import Image from "next/image";
import { ArrowRight, Mail, Phone, type LucideIcon } from "lucide-react";

import {
	socialFacebook,
	socialInstagram,
	socialLinkedin,
	socialTwitter,
	socialYoutube,
} from "@/assets";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const socialIcons = [
	{ src: socialFacebook, label: "Facebook" },
	{ src: socialTwitter, label: "Twitter" },
	{ src: socialInstagram, label: "Instagram" },
	{ src: socialLinkedin, label: "LinkedIn" },
	{ src: socialYoutube, label: "YouTube" },
];

const formFields = [
	{ id: "name", label: "Name", placeholder: "Lawal Halima", type: "text" },
	{
		id: "email",
		label: "Email",
		placeholder: "example@youremail.com",
		type: "email",
	},
	{
		id: "phone",
		label: "Phone",
		placeholder: "+234 803 426 6076",
		type: "tel",
	},
	{
		id: "projectType",
		label: "Project Type",
		placeholder: "Company",
		type: "text",
	},
];

function ContactMethod({
	icon: Icon,
	label,
	value,
	href,
}: {
	icon: LucideIcon;
	label: string;
	value: string;
	href: string;
}) {
	return (
		<div className="flex items-center gap-4">
			<span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand">
				<Icon className="size-6 text-white" aria-hidden />
			</span>
			<div className="flex flex-col gap-1.5">
				<span className="text-sm leading-none text-white/70">{label}</span>
				<a
					href={href}
					className="cursor-pointer text-base font-medium leading-none text-white transition-colors hover:text-brand-accent"
				>
					{value}
				</a>
			</div>
		</div>
	);
}

export function ContactDetails() {
	return (
		<RevealGroup
			stagger={0.15}
			amount={0.1}
			className="mt-14 flex w-full max-w-[893px] flex-col gap-10 lg:mt-20 lg:flex-row lg:items-center lg:gap-16"
		>
			<RevealItem direction="right" className="flex flex-col">
				<h2 className="text-lg font-semibold leading-tight text-white">
					Want to reach out directly?
				</h2>
				<p className="mt-4 text-base leading-normal text-white/70">
					We&rsquo;d love to hear from you.
				</p>

				<div className="mt-6 flex flex-col gap-4">
					<ContactMethod
						icon={Mail}
						label="Email:"
						value="contact@Atod.com"
						href="mailto:contact@Atod.com"
					/>
					<hr className="border-white/10" />
					<ContactMethod
						icon={Phone}
						label="Phone:"
						value="+234 803 426 6076"
						href="tel:+2348034266076"
					/>
				</div>

				<p className="mt-12 text-base font-medium leading-none text-white">
					Follow us on social media
				</p>
				<div className="mt-4 flex items-center gap-4">
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
			</RevealItem>

			<RevealItem direction="left" className="w-full max-w-[523px]">
				<form className="flex w-full flex-col gap-6 rounded-xl border border-white/10 bg-linear-to-b from-white/7 to-white/2 p-8 backdrop-blur-sm">
					<div className="grid gap-6 sm:grid-cols-2">
						{formFields.map((field) => (
							<div key={field.id} className="flex flex-col gap-2">
								<Label htmlFor={field.id} className="text-sm text-white">
									{field.label}
								</Label>
								<Input
									id={field.id}
									name={field.id}
									type={field.type}
									placeholder={field.placeholder}
									className="h-11.5 rounded-lg border-white/15 bg-white/5 text-white placeholder:text-white/40"
								/>
							</div>
						))}
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="message" className="text-sm text-white">
							Message
						</Label>
						<Textarea
							id="message"
							name="message"
							rows={4}
							placeholder="Type your message here.."
							className="min-h-23 rounded-lg border-white/15 bg-white/5 text-white placeholder:text-white/40"
						/>
					</div>

					<Button
						type="submit"
						className="fancy-gradient fancy-shadow h-10 w-fit cursor-pointer gap-2 rounded-[50px] border border-white px-8 text-sm font-normal tracking-[0.56px] text-white transition-[filter] hover:brightness-125"
					>
						Send Message
						<ArrowRight className="size-3" aria-hidden />
					</Button>
				</form>
			</RevealItem>
		</RevealGroup>
	);
}
