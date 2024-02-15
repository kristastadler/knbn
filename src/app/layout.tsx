import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "700", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Kanban",
  description: "Get things done, simply",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={roboto.className}>
        <Providers>
          {children}
        </Providers>
       </body>
    </html>
  );
}
