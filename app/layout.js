import { Archivo, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "True Venture Digital | Calgary Web Design Agency",
  description: "High-performance websites for local Calgary businesses. $1,000 Starter Package including SEO and Google Business setup.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-body selection:bg-brand selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
