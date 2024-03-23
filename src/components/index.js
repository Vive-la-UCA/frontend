import dynamic from "next/dynamic";
import MapSkeleton from "./skeletons/MapSkeleton";

export const Map = dynamic(() => import("./SelectMapLocations"), {
    ssr: false,
    loading: () => <MapSkeleton />
});

export const MapView = dynamic(() => import("./MapLocation"), {
    ssr: false,
    loading: () => <MapSkeleton />
});


