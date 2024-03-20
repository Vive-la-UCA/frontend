"use client";
import React, { useState, useEffect } from "react";
import getAllLocations from "@/services/data/Location.service";

const LocateCard = () => {
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
      {locations.map((location) => (
        <div
          key={location.name}
          className="w-44 overflow-hidden max-w-lg shadow-xl rounded-lg h-56 relative cursor-pointer"
        >
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={location.image}
            alt="Card Image"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
            <h2 className="text-xl font-semibold">{location.name}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default LocateCard;
