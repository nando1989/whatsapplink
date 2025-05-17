
"use client";
import Image from 'next/image';
import Charge from './assets/charge.png'
import User from './assets/user.png'
import Emoji from './assets/emoji.png'
import Cam from './assets/cam.png'
import Btn from './assets/btn.png'
import Clips from './assets/clips.png'
import { useState } from "react";
import BtnGenerationLink from './components/btnGenerationLink';
import EmojiButton from './components/btnEmoji';
import Copiar from './assets/copiar.png';

export default function Home() {

  const [phone, setPhone] = useState("");
  const [prefix, setPrefix] = useState("55");
  const [message, setMessage] = useState("");
  const [whatsAppLink, setWhatsAppLink] = useState('');


  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  ////////////////////////////função pra gerar efeito bold no texto ///////////////////////

  const handleBoldClick = () => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    const { selectionStart } = textarea;
    const newText = `${message.slice(0, selectionStart)}*${message.slice(selectionStart)}*`;
    setMessage(newText);

  };

  ////////////////////////////função pra gerar efeito Italic no texto ///////////////////////

  const handleItalicClick = () => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    const { selectionStart, selectionEnd } = textarea;

    const selectedText = message.slice(selectionStart, selectionEnd);
    const newText = `${message.slice(0, selectionStart)}_${selectedText}_${message.slice(selectionEnd)}`;
    setMessage(newText);

  };

  //  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ FUNÇÃO QUE REFLETE EM NEGRITO \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  const formatMessage = (message: string) => {
    const boldFormatted = message.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
    const italicFormatted = boldFormatted.replace(/_(.*?)_/g, '<em>$1</em>');
    return italicFormatted;
  };


  ///////////////////////////////////////////////// funcionalidade do emoji////////////////////////////////

  const addEmojiToMessage = (emoji: string) => {
    const textarea = document.querySelector("textarea") as HTMLTextAreaElement;
    const { selectionStart, selectionEnd } = textarea;

    const newMessage =
      message.slice(0, selectionStart) +
      emoji +
      message.slice(selectionEnd);

    setMessage(newMessage);


    setTimeout(() => {
      textarea.setSelectionRange(
        selectionStart + emoji.length,
        selectionStart + emoji.length
      );
      textarea.focus();
    }, 0);
  };




  return (
    <div className="bg-[url('https://personalmarketingdigital.com.br/wp-content/uploads/2018/05/background-whatsapp-7.jpg')] shadow-md bg-cover bg-center sm:h-screen h-[83rem]  flex items-center justify-center  font-[family-name:var(--font-geist-sans)]">
      <div className=" border-gray-300 border-2 shadow-lg flex sm:flex-row flex-col sm:w-[60rem] sm:h-[85%] h-[80rem] w-[90%] items-center rounded-md">
        <div className="bg-slate-100  border-r-2 sm:w-[60%] w-full sm:h-[50rem] h-[37rem] p-4 ">
          <div className="p-4 sm:h-44 h-[70rem]">
            <h3 className="text-black font-semibold text-3xl text- p-2 font-normal" >Gere o seu  <span className="text-green-500 font-semibold">Link do Whatsapp</span>!</h3>
            <h6 className="text-black p-2"> Digite seu número de telefone do WhatsApp</h6>
            <div className="flex gap-3 pb-2">
              <select
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="text-gray-500 h-12 rounded-md shadow-md sm:w-22 w-24"
              >
                <option value="55">Bra (+55)</option>
                <option value="1">Eua (+1)</option>
                <option value="44">Rei (+44)</option>
                <option value="49">Ale (+49)</option>
                <option value="54">Arg (+54)</option>
                <option value="56">Chi (+56)</option>
                <option value="57">Col (+57)</option>
                <option value="51">Per (+51)</option>
                <option value="58">Ven (+58)</option>
                <option value="598">Uru (+598)</option>
                <option value="595">Par (+595)</option>
                <option value="591">Bol (+591)</option>
                <option value="593">Equ (+593)</option>
              </select>

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Número de telefone"
                className="text-gray-500 h-12 rounded-md shadow-md sm:w-22 w-40 pl-2"
              />
            </div>
            <label className="mb-5 text-gray-500 ml-2 "></label>
            <div className=" border-gray-300 border-2 h-44 w-full bg-slate-50 rounded-md text-gray-500 flex flex-col justify-start shadow-md">
              <div className="w-full h-[3rem] flex justify-start items-center ml-1">
                <button
                  className={'w-7 h-7 bg-slate-300 shadow-md rounded-sm ml-1 text-gray-500 font-bold'}
                  onClick={handleBoldClick}
                >
                  <span>B</span>
                </button>

                <button
                  className={'w-7 h-7 bg-slate-300 shadow-md rounded-sm ml-1 text-gray-500 font-bold'}
                  onClick={handleItalicClick}>
                  <span className='italic font-extrabold'>I</span>
                </button>
                <EmojiButton onSelectEmoji={addEmojiToMessage} />
              </div>

              <textarea
                className="w-full h-32 border-b-2 border-t-2 forced-color-adjust-auto pl-2"
                placeholder=" Digite sua mensagem"
                value={message}
                onChange={handleTextareaChange}
                rows={6}
                maxLength={40}
              ></textarea>
            </div>

            <div className="w-full h-[3rem] flex justify-start items-center mt-2">
              <BtnGenerationLink disabled={message === ''} prefix={prefix} phoneNumber={phone} message={message} onLinkGenerated={(link) => setWhatsAppLink(link)} />
            </div>
            <div className="w-full h-[4rem] text-center flex justify-center items-center">

              <p
                id="linkWhatsapp"
                className="w-full h-auto bg-[#ffffff] flex justify-center items-center shadow-md rounded-md text-sky-600"
              >
                {whatsAppLink || "O link será exibido aqu"}

                <button
                  className="w-[2rem] h-[2rem] h-12 rounded-md ml-3 text-black"
                  onClick={() => {
                    if (whatsAppLink) {
                      navigator.clipboard.writeText(whatsAppLink);
                      alert("Link copiado!");
                    } else {
                      alert("Nenhum link para copiar!");
                    }
                  }}
                >
                  <Image
                    src={Copiar}
                    alt="Bateria"
                    width={25}
                    height={10} />
                </button></p>
            </div>

          </div>
        </div>

        <div className="bg-white sm:w-[50%] w-full sm:h-[50rem] h-[60rem] flex justify-center items-center  ">
          <div className="bg-black w-[20rem] h-[40rem] rounded-3xl flex justify-center items-center shadow-lg">
            <div className="bg-neutral-50 w-[18rem] h-[38rem] rounded-xl  ">
              <div className="w-full bg-[#15503b] h-[3rem] rounded-t-lg flex justify-center items-center shadow-lg">
                <div className="w-[30%] ml-3"><p className="text-white ">18:22</p></div>
                <div className="w-[40%] h-[1rem] bg-black rounded-3xl  "></div>
                <div className="w-[30%] flex justify-end mr-3 ">
                  <Image
                    src={Charge}
                    alt="Bateria"
                    width={18}
                    height={10}
                  /></div>
              </div>
              <div className="w-full bg-[#1e7456] h-[3rem] flex justify-around items-center shadow-xl  ">

                <div className='w-[15%] h-full flex justify-center items-center'>
                  <Image
                    src={User}
                    alt="Usuario"
                    width={35}
                    height={16}
                  />
                </div>
                <div className='w-[80%] h-full'>
                  <div><p className='text-base mt-1 text-white'>+55</p></div>
                  <div><p className='text-xs text-white'>online</p></div>
                </div>
              </div>

              <div className="bg-cover bg-center h-[28rem] w-full flex break-words justify-end items-start "
                style={{ backgroundImage: "url('https://i.pinimg.com/736x/2b/45/cf/2b45cfec4c0d3c56aed4ccd30b61bd3a.jpg')" }}>

                <div className='break-words w-48 '>
                  <p
                    id="replace"
                    className="m-2 w-auto bg-[#DCF8C6] text-gray-800 rounded-lg ml-5 p-1 shadow-sm border border-gray-300 text-left"
                    dangerouslySetInnerHTML={{ __html: formatMessage(message || "Sua mensagem aqui!") }}
                  />
                </div>

              </div>

              <div className='flex items-center w-full h-[4rem]'>
                <div className='flex items-center w-[90%] ml-2'>
                  <Image
                    src={Emoji}
                    alt="Usuario"
                    width={25}
                    height={16}
                  />
                  <p className='font-light text-gray-500 text-sm mr-2 ml-1'>Digite uma menssagem</p>
                  <Image
                    src={
                      Cam}
                    alt="Usuario"
                    width={20}
                    height={16}
                  />
                  <Image
                    src={Clips}
                    alt="Usuario"
                    width={18}
                    height={16}
                    className='ml-2'
                  />
                </div>
                <div>
                  <Image
                    src={Btn}
                    alt="Usuario"
                    width={38}
                    height={16}
                    className='mr-2'
                  />

                </div>


              </div>

            </div>

          </div>

        </div>
      </div>
      </div>

  );
}
