import * as React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type FormFieldProps = {
	id: string;
	label: string;
	placeholder?: string;
	type?: React.HTMLInputTypeAttribute | "textarea";
	rows?: number;
	name?: string;
	value?: string;
	defaultValue?: string;
	disabled?: boolean;
	error?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	className?: string;
	labelClassName?: string;
	fieldClassName?: string;
};

export function FormField({
	id,
	label,
	placeholder,
	type = "text",
	rows = 4,
	name,
	value,
	defaultValue,
	disabled,
	error,
	onChange,
	onBlur,
	className,
	labelClassName,
	fieldClassName,
}: FormFieldProps) {
	const errorId = error ? `${id}-error` : undefined;

	return (
		<div className={cn("flex flex-col gap-2", className)}>
			<Label
				htmlFor={id}
				className={cn("text-sm text-[#EAEAEA]", labelClassName)}
			>
				{label}
			</Label>
			{type === "textarea" ? (
				<Textarea
					id={id}
					name={name ?? id}
					rows={rows}
					placeholder={placeholder}
					value={value}
					defaultValue={defaultValue}
					disabled={disabled}
					onChange={onChange}
					onBlur={onBlur}
					aria-invalid={!!error}
					aria-describedby={errorId}
					className={cn(
						"min-h-23 resize-none rounded-lg bg-white text-[#6D758F]",
						fieldClassName,
					)}
				/>
			) : (
				<Input
					id={id}
					name={name ?? id}
					type={type}
					placeholder={placeholder}
					value={value}
					defaultValue={defaultValue}
					disabled={disabled}
					onChange={onChange}
					onBlur={onBlur}
					aria-invalid={!!error}
					aria-describedby={errorId}
					className={cn("h-11.5 rounded-lg bg-white text-[#6D758F]", fieldClassName)}
				/>
			)}
			{error ? (
				<p id={errorId} className="text-xs text-destructive">
					{error}
				</p>
			) : null}
		</div>
	);
}
