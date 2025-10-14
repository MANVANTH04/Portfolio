import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/site-header';
import { LenisProvider } from '@/components/providers/lenis-provider';
import { SiteFooter } from '@/components/site-footer';
import { BackgroundEffects } from '@/components/background-effects';
import { Toaster } from '@/components/ui/toaster';
import { AppStateProvider } from '@/components/providers/state-provider';

export const metadata: Metadata = {
  title: 'Kothuri Manvanth Sai | Full Stack Developer | manvanth.tech',
  description: 'Personal portfolio of Kothuri Manvanth Sai, a Full Stack Developer specializing in MERN, TypeScript, and Cloud-Native Systems. Building the future of the web, one scalable system at a time.',
  keywords: ['Full Stack Developer', 'Kothuri Manvanth Sai', 'MERN Stack', 'TypeScript', 'Cloud-Native', 'Next.js', 'React', 'Portfolio'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600&family=Source+Code+Pro:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'font-body bg-background text-foreground antialiased',
        )}
      >
        <AppStateProvider>
          <LenisProvider>
            <div className="relative flex min-h-screen flex-col">
              <BackgroundEffects />
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
            <Toaster />
          </LenisProvider>
        </AppStateProvider>
      </body>
    </html>
  );
}
