import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex text-white w-full items-center z-1">
            <Link href='/' className="flex items-center gap-3">
                <Image src='/logo3.png' width={50} height={100} alt="logo" />
                <div className="text-2xl">DROO</div>
            </Link>
            <div className="flex ml-auto gap-5">
                <Link href='/about' className="px-10 py-2 backdrop-blur-2xl border border-gray-200 hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded-full">About</Link>
                <Link href='/about' className="px-10 py-2 backdrop-blur-2xl border border-gray-200 hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded-full">Support</Link>
                <Link href='/about' className="px-10 py-2 backdrop-blur-2xl border border-gray-200 hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded-full">Sign-In</Link>
            </div>
        </div>
    )
}

export default Navbar;
