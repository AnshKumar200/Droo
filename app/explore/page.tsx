import NavbarExplore from "@/components/NavbarExplore";
import MapReveal from "@/components/MapReveal";
import RoutesList from "@/components/RoutesList";

const Explore = () => {
    return (
        <div className="flex flex-col pt-10 flex-1 gap-5">
            <NavbarExplore />
            <div className="relative">
                <RoutesList />
                <MapReveal />
            </div>
        </div>
    )
}

export default Explore;
