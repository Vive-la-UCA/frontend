import React from "react";

const LocateCard = ({ imageSrc, title }) => {
  return (
    <div className="w-44 overflow-hidden max-w-lg shadow-xl rounded-lg h-56 relative cursor-pointer">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={imageSrc}
        alt="Card Image"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default LocateCard;
