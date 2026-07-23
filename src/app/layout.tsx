import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
	variable: "--font-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ATOD Tech Agency",
	description:
		"We design and develop websites, mobile apps, and custom software that bring your ideas to life.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${inter.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col bg-page text-white">
				<Toaster
					position="top-right"
					theme="dark"
					richColors
					toastOptions={{
						classNames: {
							toast: "!font-sans",
							actionButton: "!rounded-full !bg-brand-accent !text-white",
							cancelButton: "!rounded-full !bg-white/10 !text-white",
						},
					}}
					style={
						{
							"--border-radius": "var(--radius)",
							"--normal-bg": "#0f1526",
							"--normal-border": "rgba(255,255,255,0.1)",
							"--normal-text": "#ffffff",
							"--success-bg": "#0f1e18",
							"--success-border": "rgba(34,197,94,0.4)",
							"--success-text": "#4ade80",
							"--info-bg": "#101a33",
							"--info-border": "rgba(30,51,138,0.6)",
							"--info-text": "#93a5e8",
							"--warning-bg": "#241a10",
							"--warning-border": "rgba(245,111,70,0.4)",
							"--warning-text": "#f56f46",
							"--error-bg": "#2a1116",
							"--error-border": "rgba(239,68,68,0.4)",
							"--error-text": "#f87171",
						} as React.CSSProperties
					}
				/>
				{children}
			</body>
		</html>
	);
}
