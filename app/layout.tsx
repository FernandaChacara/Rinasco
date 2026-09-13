import type { Metadata } from "next";
import { Ibarra_Real_Nova, Manrope } from "next/font/google";
import "./globals.css";

const display = Ibarra_Real_Nova({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const ui = Manrope({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Rinasco",
  description:
    "Casas de temporada em Portugal, apresentadas com a mesma clareza de uma boa estadia: sem ruído, sem exagero, só o essencial de cada espaço.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${ui.variable}`}>
      <body>{children}</body>
    </html>
  );
}
