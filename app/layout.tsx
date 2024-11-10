import { Raleway } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

import ModalProvider from '@/providers/modal-provider';
import ToastProvider from '@/providers/toast-provider';

import './globals.css';
import { getCategories } from '@/actions/get-categories';
import { constructMetadata } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const font = Raleway({
	subsets: ['latin'],
	display: 'swap',
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = constructMetadata()

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const categories = await getCategories();

	const locale = await getLocale();
  	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body className={font.className}>
				<NextIntlClientProvider messages={messages}>
					<ModalProvider />
					<ToastProvider />
					<Navbar categories={categories} />
					{children}
					<Footer />
				</NextIntlClientProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
