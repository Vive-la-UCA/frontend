import dynamic from "next/dynamic";

const Map = dynamic(() => import("./MapLocations"), {
    ssr: false,
});

export default Map;