import Image from "next/image";
import Link from "next/link";

const NavbarExplore = () => {
    return (
        <div className="flex w-full items-center z-1">
            <Link href='/' className="flex items-center gap-3">
                <Image src='/logoG.png' width={50} height={100} alt="logo" />
                <div className="text-2xl">DROO</div>
            </Link>
            <div className="flex ml-auto gap-5">
                <Link href='/about' className="px-10 py-2 backdrop-blur-2xl border border-gray-500 hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out rounded-full">About</Link>
            </div>
        </div>
    )
}

export default NavbarExplore;
