import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Uclic | Solutions Data-Driven et IA pour votre Croissance',
  description: 'Convertissez vos défis en leviers de croissance avec des stratégies data-driven, des outils IA avancés et les meilleurs freelances sélectionnés.',
  keywords: ['data-driven', 'IA', 'croissance', 'freelance', 'stratégie digitale'],
  openGraph: {
    title: 'Uclic | Solutions Data-Driven et IA pour votre Croissance',
    description: 'Convertissez vos défis en leviers de croissance avec des stratégies data-driven.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={cn(inter.variable)}>
      <body className={cn(
        "min-h-screen bg-black text-white antialiased",
        inter.className
      )}>
        {children}
      </body>
    </html>
  );
}