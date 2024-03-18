"use client";
import React, { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import LocateCard from "@/components/LocateCard";
import getAllLocations from "@/services/data/Location.service";

export default function Page() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const token = sessionStorage.getItem("token");
        console.log("Token:", token);
        const response = await getAllLocations(token);
        setLocations(response);
        console.log("Locations fetched:", response);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold mb-4">Localidades</h1>
        <SearchBar />
      </div>
      {/* <div className="mt-4">
        <Link
          href="/dashboard/locations/create-location"
          className="bg-primary px-3 py-1 rounded-2xl text-white "
        >
          Create New
        </Link>
      </div> */}
      <div className="mt-10 flex flex-row flex-wrap gap-10">
        {locations.map((location) => (
          <div key={location.name}>
            <LocateCard imageSrc={location.image} title={location.name} />
          </div>
        ))}
      </div>
    </>
  );
}
