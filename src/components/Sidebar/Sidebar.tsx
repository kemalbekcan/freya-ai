"use client";

import Image from "next/image";
import sendImage from "@/assets/images/send.png";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { updateChats } from "@/lib/features/chat/chatSlice";
import React, { useCallback, useState, useEffect } from "react";
import { Chat, BasicButton } from "@/components";
import { getTime } from "@/utils/index";

const Sidebar = ({ isMobile, setIsMobile }: any) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [val, setVal] = useState("");
  const dispatch = useAppDispatch();
  const chats = useAppSelector((state) => state.chat.chats);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget as typeof e.currentTarget & {
      chatText: { value: string };
    };
    const payload = {
      text: target.chatText.value,
      bot: false,
      time: getTime(),
    };

    dispatch(updateChats(payload));

    target.chatText.value = "";

    setTimeout(() => {
      chatBotAdd();
    }, 5000);
  };

  const chatBotAdd = useCallback(() => {
    const payload = {
      text: "Merhaba 👋 Bugün sana nasıl yardımcı olabilirim?",
      bot: true,
      time: getTime(),
    };

    dispatch(updateChats(payload));
  }, [dispatch]);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <div
          className={`${
            isMobile
              ? "md:block absolute left-0 top-0 w-full "
              : "md:block hidden"
          } w-[470px] h-full p-2 md:p-5 bg-[#F7F7F7] fixed z-50`}
        >
          <div className="flex justify-between border-b border-[#D6D6D6]">
            <h2 className="text-xl font-semibold leading-5 pb-[10px]">
              AI Chatbot
            </h2>
            <div className="md:hidden block">
              <BasicButton type="button" onClick={() => setIsMobile(false)}>
                x
              </BasicButton>
            </div>
          </div>

          <div className="flex flex-col h-[95%] justify-between overflow-y-scroll">
            <div>
              {chats?.map((item, index) => (
                <Chat item={item} key={index} />
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex gap-[9px]">
                <input
                  onChange={(e) => setVal(e.target.value)}
                  maxLength={3000}
                  type="text"
                  placeholder="Yaz..."
                  className="text-sm leading-[21px] font-normal px-[10px] h-10 rounded-[10px] flex-1 border border-[#D6D6D6]"
                  name="chatText"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-[10px] bg-[#E14621] text-white mr-[10px] btn-shadow flex justify-center items-center"
                >
                  <Image src={sendImage} width={18} height={18} alt="send" />
                </button>
              </div>
              <span className="block mt-2 text-right mr-[60px] text-[10px] leading-[12.1px] font-light">
                {val.length}/3000
              </span>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
