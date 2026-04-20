import { Dices, Upload } from "lucide-react";

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
    return (
        <div className="bg-black/20 flex items-center px-5 py-2 absolute z-10 left-0 right-0 h-30 text-white gap-3">
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
            <div className="flex gap-3 h-full overflow-x-auto w-full">
                {data.map((route, i) => (
                    <div key={i} className="bg-black/50 items-center justify-center flex border-2 border-white/40 px-3 gap-3 shrink-0 rounded-lg">
                        <img src='/route.jpg' className="size-20" />
                        <div className="text-lg">
                            <div>Dist: <span className="font-semibold">{route.distance} km</span></div>
                            <div>Elev: <span className="font-semibold">{route.uphill} m</span></div>
                            <div>Match: <span className="font-semibold">{route.match}%</span></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RoutesList;
