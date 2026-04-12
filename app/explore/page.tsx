import NavbarExplore from "@/components/NavbarExplore";
import Map from "@/components/Map";

const Explore = () => {
    return (
        <div className="flex flex-col items-center pt-10 flex-1">
            <NavbarExplore />
            <div>explore</div>
            <Map />
        </div>
    )
}

export default Explore;
