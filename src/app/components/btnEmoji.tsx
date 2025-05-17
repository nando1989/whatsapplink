import React, { useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface EmojiButtonProps {
  onSelectEmoji: (emoji: string) => void; // Define a prop para comunicar o emoji selecionado
}

const EmojiButton: React.FC<EmojiButtonProps> = ({ onSelectEmoji }) => {
  const [isPickerVisible, setPickerVisible] = useState(false);

  const togglePicker = () => {
    setPickerVisible(!isPickerVisible);
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    onSelectEmoji(emojiData.emoji); 
    setPickerVisible(false); 
  };

  return (
    <div className="flex flex-center items-center w-56">
     
      <button
        onClick={togglePicker}
        className="w-7 h-7 bg-slate-300 shadow-md rounded-sm ml-1 text-gray-500 font-bold"
      >
        😊
      </button>

      
      {isPickerVisible && (
        <div className="absolute top-50 left-50 z-50">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default EmojiButton;
