import dynamic from "next/dynamic";
import MapSkeleton from "./skeletons/MapSkeleton";

const Map = dynamic(() => import("./MapLocations"), {
    ssr: false,
    loading: () => <MapSkeleton />
});

export default Map;