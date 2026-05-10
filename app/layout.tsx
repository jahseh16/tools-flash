import type { Metadata } from 'next';
import { Geist, Geist_Mono, Pacifico } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Toolifast - Herramientas Online Gratis',
    template: '%s | Toolifast',
  },
  description:
    'Herramientas online gratuitas: descargador de TikTok, generador de texto, convertir imagen a PDF, chat con IA y mucho más. Rápido, fácil y sin registro.',
  keywords: [
    'herramientas online gratis',
    'descargar tiktok sin marca de agua',
    'generador de letras raras',
    'texto invisible',
    'convertir imagen a pdf',
    'chat con ia gratis',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Toolifast',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body
        className={`${
          geistSans.variable
        } ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
