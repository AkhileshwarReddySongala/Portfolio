import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/next';
import {
  Montserrat as FontMontserrat,
  Inter,
  JetBrains_Mono,
} from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import Footer from '@/common/components/shared/footer';
import Header from '@/common/components/shared/header';
import { cn } from '@/common/lib/utils';
import ActiveSectionContextProvider from '@/common/stores/active-section';
import { ThemeProvider } from '@/common/theme/theme-provider';

import '@/common/styles/globals.css';

export const metadata: Metadata = {
  title: 'Akhileshwar Reddy Songala | Portfolio',
  description:
    'Check out modern and stylish porfolio of an experienced Web Developer Akhileshwar Reddy Songala! Built using TypeScript, Next.js 14, Framer Motion and Tailwind CSS.',
};

const fontMontserrat = FontMontserrat({
  subsets: ['latin'],
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          'relative flex items-center justify-center font-sans',
          inter.variable,
          jetbrainsMono.variable,
        )}
      >
        <div className="flex min-h-screen w-full flex-col">
          <ActiveSectionContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              forcedTheme="dark"
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
