import React from "react";

interface ItalicButtonProps {
  isItalicActive: boolean; 
  toggleItalic: () => void; 
}

const WhatsAppItalicEditor: React.FC<ItalicButtonProps> = ({ isItalicActive, toggleItalic }) => {
  return (
    <button
      onClick={toggleItalic} 
      className={`w-7 h-7 bg-slate-300 shadow-md rounded-sm ml-1 text-gray-500 font-bold ${
        isItalicActive ? "bg-slate-400 shadow-inner" : ""
      }`}
    >
      B
    </button>
  );
};

export default WhatsAppItalicEditor;