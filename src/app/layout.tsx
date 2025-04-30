import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navigation from "../components/navigation/navigation.component";
import AuthProvider from "../context/AuthProvider";
import { Toaster } from "react-hot-toast";
import InfoBox from "@/components/ui/info-box/info-box.component";
import InfoProvider from "@/context/InfoProvider";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Better games online", 
  description: "Betters games online - portal about games,tech etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} antialiased`}
      >
        <InfoProvider>
          <AuthProvider>
              <Toaster position="top-center" reverseOrder={false} toastOptions={{style: {background: '#27272a', color: '#fff',border: '1px solid #9f9fa9'}}} />
              <Navigation />
              {children}
          </AuthProvider>
          <InfoBox />
        </InfoProvider>
      </body>
    </html>
  );
}
