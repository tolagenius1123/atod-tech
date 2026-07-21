"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.6;
const DISTANCE = 24;

type Direction = "up" | "down" | "left" | "right" | "none";

function offsetFor(direction: Direction, distance: number) {
	switch (direction) {
		case "up":
			return { y: distance };
		case "down":
			return { y: -distance };
		case "left":
			return { x: distance };
		case "right":
			return { x: -distance };
		case "none":
			return {};
	}
}

type RevealProps = {
	children: ReactNode;
	className?: string;
	direction?: Direction;
	distance?: number;
	delay?: number;
	duration?: number;
	once?: boolean;
	amount?: number;
};

export function Reveal({
	children,
	className,
	direction = "up",
	distance = DISTANCE,
	delay = 0,
	duration = DURATION,
	once = true,
	amount = 0.3,
}: RevealProps) {
	const reduced = useReducedMotion();

	if (reduced) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, ...offsetFor(direction, distance) }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			viewport={{ once, amount }}
			transition={{ duration, delay, ease: EASE }}
		>
			{children}
		</motion.div>
	);
}

type RevealGroupProps = {
	children: ReactNode;
	className?: string;
	stagger?: number;
	delay?: number;
	trigger?: "view" | "mount";
	once?: boolean;
	amount?: number;
};

export function RevealGroup({
	children,
	className,
	stagger = 0.1,
	delay = 0,
	trigger = "view",
	once = true,
	amount = 0.2,
}: RevealGroupProps) {
	const reduced = useReducedMotion();

	if (reduced) {
		return <div className={className}>{children}</div>;
	}

	const variants: Variants = {
		hidden: {},
		visible: {
			transition: { staggerChildren: stagger, delayChildren: delay },
		},
	};

	return (
		<motion.div
			className={className}
			variants={variants}
			initial="hidden"
			{...(trigger === "mount"
				? { animate: "visible" }
				: { whileInView: "visible", viewport: { once, amount } })}
		>
			{children}
		</motion.div>
	);
}

type RevealItemProps = {
	children: ReactNode;
	className?: string;
	direction?: Direction;
	distance?: number;
	duration?: number;
};

export function RevealItem({
	children,
	className,
	direction = "up",
	distance = DISTANCE,
	duration = DURATION,
}: RevealItemProps) {
	const reduced = useReducedMotion();

	if (reduced) {
		return <div className={className}>{children}</div>;
	}

	const variants: Variants = {
		hidden: { opacity: 0, ...offsetFor(direction, distance) },
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: { duration, ease: EASE },
		},
	};

	return (
		<motion.div className={className} variants={variants}>
			{children}
		</motion.div>
	);
}
