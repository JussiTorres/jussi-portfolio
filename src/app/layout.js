import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Jussi Torres | Sitio Oficial',
  description: 'Portafolio y centro multimedia oficial de Jussi Torres. Encuentra contenido de ingeniería, fotografía, proyectos personales y publicaciones.',
  keywords: ['Jussi Torres', 'Jussi Torres Gonzalez', 'Multimedia', 'Fotografía', 'Proyectos Personales', 'Ingeniería', 'Tecnología', 'Full Stack'],

  openGraph: {
    title: 'Jussi Torres | Portafolio y Multimedia',
    description: 'Portafolio, contenido e ingeniería por Jussi Torres.',
    url: 'https://jussitorres.com',
    siteName: 'Jussi Torres Digital Hub',
    images: [
      {
        url: 'https://jussitorres.com/og-image.jpg',
        width: 1200,
        height: 634,
        alt: 'Jussi Torres Digital Hub & Engineering Projects',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Jussi Torres | Sitio Oficial',
    description: 'Ingeniería, tecnología y contenido multimedia en un solo lugar.',
    creator: '@JussiTorres',
    images: ['https://jussitorres.com/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
