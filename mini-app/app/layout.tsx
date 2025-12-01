import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MiniAppProvider } from "@/components/context/miniapp-provider";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { description, title } from "@/lib/metadata";

const inter = localFont({
  src: "./InterVariable.ttf",
});

export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-500 via-yellow-500 to-red-500 text-white">
          {/* Header with hearts, streak, XP */}
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center gap-1">
              <span className="text-2xl">❤️❤️❤️❤️❤️</span>
              <span className="text-sm">Streak: 7</span>
            </div>
            <div className="text-sm">XP: 1234</div>
          </div>

          <MiniAppProvider>
            <div className="font-sans min-h-screen flex flex-col place-content-between gap-2">
              <Header />
              {children}
              <Footer />
            </div>
          </MiniAppProvider>
        </div>
      </body>
    </html>
  );
}
