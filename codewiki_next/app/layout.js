import "./globals.css";

import Navbar from "@/components/Navbar";
import Providers from "./providers";

import { Inter, Poppins, Righteous } from "next/font/google";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-righteous",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "CodeWiki",
  description: "A blog for competitive programming related articles",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${righteous.variable} ${poppins.variable} ${inter.variable}`}
    >
      <body className="flex-grow ">
        <Providers>
          <main className="bg-pattern bg-cover">
            <Navbar />
          </main>
          {children}
        </Providers>
      </body>
    </html>
  );
}
