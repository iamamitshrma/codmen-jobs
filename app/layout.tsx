import type { Metadata } from "next";
import { Baloo_Paaji_2 } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

const baloo = Baloo_Paaji_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codmen Jobs",
  description: "Discover Your Next Career Opportunity with Codmen Jobs - Your Premier Job Portal Application for Seamless Employment Matching and Recruitment Solutions!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baloo.className}>
        <Provider>
          <main className="app">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
