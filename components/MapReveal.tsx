'use client';
import { useEffect, useState } from "react";
import Map from "./Map";

const convertCoordinatesToXY = (lat: number, lng: number, zoom: number) => {
    const n = Math.pow(2, zoom);
    const x = Math.floor((lng + 180) / 360 * n);
    const y = Math.floor(
        (1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI)
        / 2 * n
    );
    return { x, y };
}

const getTiles = (x: number, y: number, zoom: number) => {
    return [
        `https://a.basemaps.cartocdn.com/light_all/${zoom}/${x}/${y - 1}.png`, // top
        `https://a.basemaps.cartocdn.com/light_all/${zoom}/${x}/${y}.png`,     // center
        `https://a.basemaps.cartocdn.com/light_all/${zoom}/${x}/${y + 1}.png`, // bottom
        `https://a.basemaps.cartocdn.com/light_all/${zoom}/${x + 1}/${y - 1}.png`, // top
        `https://a.basemaps.cartocdn.com/light_all/${zoom}/${x + 1}/${y}.png`,     // center
        `https://a.basemaps.cartocdn.com/light_all/${zoom}/${x + 1}/${y + 1}.png`, // bottom
    ];
}

const MapReveal = () => {
    const [phase, setPhase] = useState<"waiting" | "stacked" | "opening" | "scale" | "done">("waiting")
    const [position, setPosition] = useState<[number, number] | null>([28.6329401, 77.2194201]);

    useEffect(() => {
        setPhase("stacked");
        const t1 = setTimeout(() => setPhase("opening"), 600);
        const t2 = setTimeout(() => setPhase("scale"), 2000);
        const t3 = setTimeout(() => setPhase("done"), 2800);
        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
            clearTimeout(t3)
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition([pos.coords.latitude, pos.coords.longitude])
                setPhase("stacked");
                const t1 = setTimeout(() => setPhase("opening"), 600);
                const t2 = setTimeout(() => setPhase("scale"), 2000);
                const t3 = setTimeout(() => setPhase("done"), 2800);
                return () => {
                    clearTimeout(t1)
                    clearTimeout(t2)
                    clearTimeout(t3)
                }
            },
            () => {
                // skip to map
                setPhase("done");
            }
        )
    }, [])

    if (phase === "one") {
        return <div className="w-full h-full bg-amber-200">
            <Map initialPosition={position} />
        </div>
    }

    const { x, y } = convertCoordinatesToXY(position[0], position[1], 15)
    const topTiles = getTiles(x - 2, y, 15);
    const middleTiles = getTiles(x, y, 15);
    const bottomTiles = getTiles(x + 2, y, 15);

    return (
        <div className="h-full bg-blue-300 w-full items-center justify-center flex flex-col">
            <div className="flex bg-red-300 w-fit animate-[scale-map_1s_ease-in-out]" style={{ animationPlayState: phase === "scale" ? "running" : "paused" }}>
                <div className="relative animate-[move-map_1s_ease-in-out] z-2" style={{ "--dir": 1, animationPlayState: phase === "opening" ? "running" : "paused" } as React.CSSProperties}>
                    <div className="grid grid-rows-3 grid-cols-2 grid-flow-col">
                        {topTiles.map((tile, i) => (
                            <img key={i} src={tile} />
                        ))}
                    </div>
                    <div className="pointer-events-none absolute top-0 right-0 translate-x-16 h-full w-16 bg-linear-to-l from-transparent to-black/5" />
                </div>
                <div className="grid grid-rows-3 grid-cols-2 grid-flow-col z-0">
                    {middleTiles.map((tile, i) => (
                        <img key={i} src={tile} />
                    ))}
                </div>
                <div className="relative animate-[move-map_1s_ease-in-out] z-2" style={{ "--dir": -1, animationPlayState: phase === "opening" ? "running" : "paused" } as React.CSSProperties}>
                    <div className="grid grid-rows-3 grid-cols-2 grid-flow-col z-1">
                        {bottomTiles.map((tile, i) => (
                            <img key={i} src={tile} />
                        ))}
                    </div>
                    <div className="pointer-events-none absolute top-0 left-0 h-full w-26 bg-linear-to-l from-transparent to-black/6" />
                </div>
            </div>
        </div>
    )
}

export default MapReveal;
