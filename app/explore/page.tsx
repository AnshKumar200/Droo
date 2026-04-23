import NavbarExplore from "@/components/NavbarExplore";
import Map from "@/components/Map";

const Explore = () => {
    return (
        <div className="flex flex-col pt-10 flex-1 gap-5 h-screen pb-5">
            <NavbarExplore />
            <Map />
        </div>
    )
}

export default Explore;
