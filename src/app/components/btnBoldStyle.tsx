import React from "react";

interface BoldButtonProps {
  isBoldActive: boolean; 
  toggleBold: () => void; 
}

const WhatsAppBoldEditor: React.FC<BoldButtonProps> = ({ isBoldActive, toggleBold }) => {
  return (
    <button
      onClick={toggleBold} // toggleBold é uma função
      className={`w-7 h-7 bg-slate-300 shadow-md rounded-sm ml-1 text-gray-500 font-bold ${
        isBoldActive ? "bg-slate-400 shadow-inner" : ""
      }`}
    >
      B
    </button>
  );
};

export default WhatsAppBoldEditor;
