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
    <html
      lang="pt-BR"
      className={`${display.variable} ${ui.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Arms the shutter's default-visible CSS the instant this line is
            parsed — well before React hydrates — so a working browser never
            paints the raw hero before the intro covers it. No-JS visitors
            never get this class, so the shutter (display:none by default)
            never traps them behind it. Static string, no user input. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
      </body>
    </html>
  );
}
