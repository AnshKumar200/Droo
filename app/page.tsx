import Navbar from "@/components/Navbar"
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col items-center pt-10">
            <Image src='/bg.png' fill objectFit="cover" alt="background" className="-z-1" />
            <div className="min-h-screen flex flex-col text-white w-4/5">
                <Navbar />
                <div className="flex flex-col items-center justify-center h-full flex-1 -translate-y-1/12 gap-4">
                    <Image src='/name.png' width={550} height={10} alt="name" className="" />
                    <div className="text-3xl font-medium">Draw With Your Steps</div>
                    <button className="pl-10 pr-6 py-2 w-fit text-2xl rounded-full flex gap-2 items-center backdrop-blur-xs border border-gray-300 transition-all duration-300 ease-in-out hover:text-black hover:bg-white cursor-pointer group">
                        <div>Get Started</div>
                        <ChevronRight className="group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
                    </button>
                </div>
            </div>
            <div>test</div>
        </div>
    );
}
