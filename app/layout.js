import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/Authcontext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShaadiCraft – Modern Marriage Biodata Builder",
  description:
    "Create, customize, preview and download professional marriage biodata templates with live editing and secure authentication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} bg-gray-50 text-gray-900 antialiased`}
      >
        <main className="min-h-screen flex flex-col">
          <AuthProvider>
          {children}
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}