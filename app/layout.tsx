import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import { isAuthenticated } from "@/lib/auth";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "FastFood - Delicious Meals Delivered",
  description: "Order your favorite fast food online",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await isAuthenticated();

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <LenisProvider>
          <Navbar isLoggedIn={loggedIn} />
          <main className="flex-grow">
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
