import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

import Header from '@/components/header';
import Footer from '@/components/footer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Ree',
	description: 'Software Engineer based in Indonesia',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} antialiased font-[family-name:var(--font-geist-sans)] bg-slate-300 no-scrollbar`}
			>
				<Header />

				{children}

				<Footer />
			</body>
		</html>
	);
}
