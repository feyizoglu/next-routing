import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex flex-col text-red-800">
          <Link href="/">HomePage</Link>
          <Link href="/users">Users</Link>
        </header>

        {children} {/* page.jsx içinde ne varsa onu gösteriyor  */}

      </body>
    </html>
  );
}
