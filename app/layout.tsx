import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: "Droo",
    description: "Make Shapes While Running",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`min-h-full flex flex-col text-lg sm:text-xl ${outfit.className}`}>{children}</body>
        </html >
    );
}
