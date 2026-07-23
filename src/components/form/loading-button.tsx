import * as React from "react";
import { Loader2 } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import type { Button as ButtonPrimitive } from "@base-ui/react/button";

type LoadingButtonProps = ButtonPrimitive.Props &
	VariantProps<typeof buttonVariants> & {
		loading?: boolean;
		loadingText?: string;
	};

export function LoadingButton({
	loading = false,
	loadingText,
	disabled,
	className,
	children,
	...props
}: LoadingButtonProps) {
	return (
		<Button
			disabled={disabled || loading}
			aria-busy={loading}
			className={cn("cursor-pointer", className)}
			{...props}
		>
			{loading ? (
				<>
					<Loader2 className="animate-spin" aria-hidden />
					{loadingText ?? children}
				</>
			) : (
				children
			)}
		</Button>
	);
}
