import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NavbarHome from "@/components/NavbarHome";

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
            <body className={`min-h-full text-lg sm:text-xl ${outfit.className} w-11/12 mx-auto`}>
                {children}
            </body>
        </html >
    );
}
