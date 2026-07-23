import * as yup from "yup";

export const ContactUsSchema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.min(2, "Name must be at least 2 characters")
		.max(80, "Name must be at most 80 characters")
		.required("Name is required"),
	email: yup
		.string()
		.trim()
		.email("Enter a valid email address")
		.required("Email is required"),
	phone: yup
		.string()
		.trim()
		.matches(/^[+\d][\d\s()-]{6,19}$/, "Enter a valid phone number")
		.required("Phone number is required"),
	projectType: yup
		.string()
		.trim()
		.min(2, "Project type must be at least 2 characters")
		.max(80, "Project type must be at most 80 characters")
		.required("Project type is required"),
	message: yup
		.string()
		.trim()
		.min(10, "Message must be at least 10 characters")
		.max(2000, "Message must be at most 2000 characters")
		.required("Message is required"),
	atodHpField: yup.string().notRequired(),
});

export type ContactUsValues = yup.InferType<typeof ContactUsSchema>;
