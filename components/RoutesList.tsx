import { ChevronRight, Dices, Upload } from "lucide-react";
import { useState } from "react";

const data = [
    { image: "route.jpg", distance: "10", uphill: "100", match: "90" },
    { image: "aaa", distance: "5", uphill: "100", match: "90" },
    { image: "aaa", distance: "5", uphill: "100", match: "90" },
    { image: "aaa", distance: "5", uphill: "100", match: "90" },
    { image: "aaa", distance: "5", uphill: "100", match: "90" },
    { image: "aaa", distance: "5", uphill: "100", match: "90" },
    { image: "aaa", distance: "5", uphill: "100", match: "90" },
    { image: "aaa", distance: "5", uphill: "100", match: "90" },
    { image: "aaa", distance: "5", uphill: "100", match: "90" },
    { image: "aaa", distance: "5", uphill: "100", match: "90" },
    { image: "aaa", distance: "5", uphill: "100", match: "90" },
    { image: "aaa", distance: "5", uphill: "100", match: "90" },
    { image: "aaa", distance: "99", uphill: "100", match: "90" },
]

const RoutesList = () => {
    const [showRoutes, setShowRoutes] = useState(true);
    return (
        <div className="bg-black/20 flex items-center absolute z-10 right-0 h-full  text-white gap-1 rounded-l-lg">
            <div className="bg-gray-800/30 h-full flex justify-center items-center rounded-l-lg hover:bg-gray-800/50 cursor-pointer" onClick={() => setShowRoutes(!showRoutes)}>
                <ChevronRight className={`size-5 transition-all duration-200 ease-in-out ${showRoutes ? "rotate-180" : "rotate-0"}`} strokeWidth={3} />
            </div>
            <div className={`h-full flex flex-col gap-2 py-2 transition-all duration-500 ease-in-out overflow-hidden ${showRoutes ? "max-w-sm opacity-100 pr-2" : "max-w-0 opacity-0"}`}>
                <div className="flex flex-col items-center gap-2 text-nowrap">
                    <div className="bg-gray-800 py-2 px-4 rounded-lg flex items-center gap-3">
                        <Dices />
                        <div>Random Route</div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-800 py-2 px-5 rounded-lg">
                        <Upload />
                        <div>Upload Image</div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 h-full overflow-y-scroll w-full">
                    {data.map((route, i) => (
                        <div key={i} className="bg-black/50 items-center justify-center flex border-2 border-white/40 px-2 py-2 gap-3 shrink-0 rounded-lg">
                            <img src='/route.jpg' className="size-20 rounded-lg" />
                            <div className="text-base">
                                <div>Dist: <span className="font-semibold">{route.distance} km</span></div>
                                <div>Elev: <span className="font-semibold">{route.uphill} m</span></div>
                                <div>Match: <span className="font-semibold">{route.match}%</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RoutesList;
