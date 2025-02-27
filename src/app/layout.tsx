import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryClientWrapper } from '@/components/query-client-wrapper'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solace Candidate Assignment",
  description: "Show us what you got",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en">
        <body className={`${inter.className} bg-brand-50 m-4`}>
          <QueryClientWrapper>
            {children}
          </QueryClientWrapper>
        </body>
      </html>
  );
}
