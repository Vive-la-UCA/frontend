import React, { useState } from "react";
import { CORE_IMAGES_URL } from "@/app/constants/session";
import Link from "next/link";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import IsSecurePopUp from "../popups/IsSecurePopUp";

export default function BadgeCard({ badge, onDeleteBadge }) {
  const [showISecurePopUp, setShowISecurePopUp] = useState(false);

  async function handleDeleteCardFromDatabase() {
    onDeleteBadge(badge.uid);
    setShowISecurePopUp(false);
  }

  const handleClosePopUp = () => {
    setShowISecurePopUp(false);
  };

  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md w-56 flex flex-col justify-between h-72">
        <img
          alt={badge.name}
          className="h-44 w-44 object-cover rounded-lg mx-auto"
          src={`${CORE_IMAGES_URL}/uploads/${badge.image}`}
        />
        <div className="text-center mt-2 flex-grow">
          <div
            className="text-lg font-semibold truncate overflow-hidden overflow-ellipsis"
            title={badge.name}
          >
            {badge.name}
          </div>
          <div className="flex justify-center mt-2 space-x-4 items-center">
            <Link
              className="text-gray-700 font-bold py-2 px-4 rounded"
              href={`/dashboard/badges/edit-badge/${badge.uid}`}
            >
              <FiEdit size={18} className="hover:text-blue-700" />
            </Link>
            <div className="border-l border-gray-300 h-6"></div>
            <button
              className="text-gray-700 font-bold py-2 px-4 rounded"
              onClick={() => setShowISecurePopUp(true)}
            >
              <FiTrash2 size={18} className="hover:text-red-700" />
            </button>
          </div>
        </div>
      </div>
      {showISecurePopUp && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <IsSecurePopUp
            functionToNo={handleClosePopUp}
            functionToYes={handleDeleteCardFromDatabase}
            title={`¿Está seguro de eliminar la insignia ${badge.name}?`}
          />
        </div>
      )}
    </div>
  );
}
