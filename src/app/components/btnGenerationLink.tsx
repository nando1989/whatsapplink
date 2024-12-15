import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  prefix:string;
  onLinkGenerated: (link: string) => void; 
  disabled:boolean;
}

function BtnGenerationLink({ prefix, phoneNumber, message, onLinkGenerated, disabled }: WhatsAppButtonProps) {
  const generateWhatsAppLink = () => {
    const formattedNumber = phoneNumber.replace(/\D/g, ''); 
    const encodedMessage = encodeURIComponent(message); 
    return `https://wa.me/${prefix}${formattedNumber}?text=${encodedMessage}`;
  };

  const handleClick = () => {
    const link = generateWhatsAppLink();
    onLinkGenerated(link); 
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 w-[29rem] text-white px-4 py-2 rounded-md"
      disabled={disabled}>
      Gerar Link do WhatsApp
    </button>
  );
}

export default BtnGenerationLink;
