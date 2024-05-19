import React from "react";
import { CORE_IMAGES_URL } from "@/app/constants/session";
import Link from "next/link";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function BadgeCard({ badge }) {
  return (
    <div className="bg-white p-4 rounded-lg max-w-xs shadow-md w-44">
      <img
        alt={badge.name}
        className="w-32 h-32 object-cover rounded-lg mx-auto"
        src={`${CORE_IMAGES_URL}/uploads/${badge.image}`}
      />
      <div className="text-center mt-2">
        <div className="text-lg font-semibold break-words">{badge.name}</div>
        <div className="flex justify-center mt-2 space-x-4 items-center">
          <Link
            className="text-gray-700 font-bold py-2 px-4 rounded"
            href={`/dashboard/badges/edit-badge/${badge.uid}`}
          >
            <FiEdit size={18} className="hover:text-blue-700" />
          </Link>
          <div className="border-l border-gray-300 h-6"></div>
          <button className="text-gray-700 font-bold py-2 px-4 rounded">
            <FiTrash2 size={18} className="hover:text-red-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
