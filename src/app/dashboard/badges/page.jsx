"use client";
import BadgeCard from "@/components/Cards/BadgeCard";
import SearchBar from "@/components/Inputs/SearchBar";
import { useState, useEffect } from "react";
import { getAllBadges } from "@/services/data/Badge.service";
import PrincipalButton from "@/components/buttons/principal-button";
import { IoIosAddCircle } from "react-icons/io";

export default function Page() {
  const [badges, setBadges] = useState([]);


  useEffect(() => {
    async function fetchBadges() {
      const badges = await getAllBadges();
      setBadges(badges);
      console.log(badges);
    }
    fetchBadges();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold mb-4">Insignias</h1>
        <div className="flex pt-2 flex-row justify-between w-full items-center gap-2">
          <SearchBar />
          <PrincipalButton
            link="/dashboard/badges/create-badge"
            text={"Crear Insignia"}
            type={"button"}
            Icon={<IoIosAddCircle size={25} />}
          />
        </div>
      </div>
      <div className="mt-10 flex flex-row flex-wrap gap-10">
        {badges.map((badge) => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}
      </div>
    </div>
  );
}
