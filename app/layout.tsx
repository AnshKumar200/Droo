import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

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
            <body className={`min-h-screen text-lg sm:text-xl ${outfit.className} w-11/12 mx-auto flex flex-col`}>
                <div className="flex-1 flex">
                    {children}
                </div>
                <div className="fixed bottom-5 left-5 z-99 right-10">
                    <Footer />
                </div>
            </body>
        </html >
    );
}
