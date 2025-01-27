import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
const Modal = ({ isSuccess, message }) => {
  const modalClasses = isSuccess
    ? "bg-green-100 border-l-4 border-green-500 text-green-500"
    : "bg-red-100 border-l-4 border-red-500 text-red-500";

  return (
    <div
      className={`modal absolute z-20 top-2 right-10 w-[90%] max-w-md p-4 rounded-2xl shadow-lg flex flex-col items-center ${modalClasses}`}
    >
      <div className={`text-${isSuccess ? "green" : "red"}-500 mb-4`}>
        <Icon height="2rem" icon={isSuccess ? "mdi:success" : "mdi:warning"} />
      </div>
      <div>
        <p className="text-center text-lg font-medium">{message}</p>
      </div>
    </div>
  );
};

export default Modal;
