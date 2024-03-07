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
            <main className="container flex gap-[1rem]">
              <Sidebar />
              <div className="dark:bg-custom_card_bg bg-white rounded-md p-[1rem] w-[85%] overflow-auto dark:border-none border-[1px]">
                {children}
              </div>
            </main>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
