import { Dices, Upload } from "lucide-react";

const data = [
    {image: "aaa", distance: "name1", uphill: "100m", match: "90%"},
    {image: "aaa", distance: "name2", uphill: "100m", match: "90%"},
]

const RoutesList = () => {
    return (
        <div className="bg-black/20 flex items-center px-5 py-2 absolute z-10 left-0 right-0 h-30 text-white gap-10">
            <div className="flex flex-col items-center gap-2">
                <div className="bg-gray-800 py-2 px-4 rounded-lg flex items-center gap-3">
                    <Dices />
                    <div>Random Figure</div>
                </div>
                <div className="flex items-center gap-3 bg-gray-800 py-2 px-5 rounded-lg">
                    <Upload />
                    <div>Upload Image</div> 
                </div>
            </div>
            <div className="flex gap-5 h-full">
                {data.map((route, i) => (
                    <div key={i} className="bg-gray-400/40 items-center justify-center flex border-2 border-white/40 w-50 px-5">
                        <img src='/test.jpg' className="size-20" />
                        <div className="ml-auto">
                            <div>{route.distance}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RoutesList;
