import type { Metadata } from "next";
import { Bodoni_Moda, Archivo } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const ui = Archivo({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Rinasco — Origem Única",
  description:
    "Rinasco cataloga residências de caráter raro e as apresenta em um ambiente imersivo em 3D, para quem já sabe reconhecer o que é insubstituível.",
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
