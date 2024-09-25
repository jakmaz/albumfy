import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Albumfy",
    default: "Albumfy",
  },
  description: "Generate album posters from spotify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark min-h-screen flex flex-col justify-between scroll-smooth">
        {/* <Navbar /> */}
        <main className="flex-grow flex items-center justify-center max-w-7xl mx-auto p-4">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
