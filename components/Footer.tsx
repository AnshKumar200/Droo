import { Heart } from "lucide-react";

const Footer = () => {
    return (
        <div className="flex">
            <div className="group">
                <div className="bg-[#CD8177] text-white px-2 rounded-lg text-xl absolute w-150 -translate-y-5 py-1 translate-x-12 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 ease-in-out">
                    <div>This is a free project, so you might experience occasional lag as it runs on limited resources.</div>
                </div>
                <Heart className="bg-[#CD8177] p-2 size-10 rounded-full text-white" />
            </div>
            <div className="bg-[#CD8177] text-white px-2 rounded-lg text-xl ml-auto flex items-center">
                <div>Made By Ansh</div>
            </div>
        </div>
    )
}

export default Footer;
