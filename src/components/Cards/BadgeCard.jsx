import React from "react";
import { CORE_IMAGES_URL } from "@/app/constants/session";
import Link from "next/link";

export default function BadgeCard({ badge }) {
  return (
    <div
      key={badge.name}
      className="flex flex-col items-center justify-center w-36 h-36 p-4 gap-4"
    >
      <Link href={`/dashboard/badges/edit-badge/${badge.uid}`}>
        <div>
          <img
            src={`${CORE_IMAGES_URL}/uploads/${badge.image}`}
            alt={badge.name}
            className="w-full h-full rounded-lg"
          />
        </div>
      </Link>
      <div>
        <p className="text-gray-800 font-semibold">{badge.name}</p>
      </div>
    </div>
  );
}
