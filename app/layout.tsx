import type { Metadata } from "next";
import { Baloo_Paaji_2 } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

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
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
          >
            <Navbar />
            <main className="container flex flex-row gap-[1rem]">
              <Sidebar />
              <aside className="w-[85%] p-4 dark:bg-custom_card_bg h-max_height rounded-md dark:border-none border-[1px]">
                {children}
              </aside>
            </main>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
