"use client";

import Image from "next/image";
import sendImage from "@/assets/images/send.png";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { updateChats } from "@/lib/features/chat/chatSlice";
import React, { useCallback } from "react";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const chats = useAppSelector((state) => state.chat.chats);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const payload = {
      text: e.target.chatText.value,
      bot: false,
    };

    dispatch(updateChats(payload));

    setTimeout(() => {
      chatBotAdd();
    }, 5000);
  };

  const chatBotAdd = useCallback(() => {
    const payload = {
      text: "Merhaba 👋 Bugün sana nasıl yardımcı olabilirim?",
      bot: true,
    };

    dispatch(updateChats(payload));
  }, [dispatch]);

  return (
    <div className="w-[470px] h-full p-5 bg-[#F7F7F7]">
      <h2 className="text-xl font-semibold leading-5 pb-[10px] border-b border-[#D6D6D6]">
        {/* Font Size Roboto */}
        AI Chatbot
      </h2>

      <div className="flex flex-col h-[95%] justify-between">
        <div>
          {chats &&
            chats.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`bg-white my-5 rounded-[10px] w-fit max-w-[86%] ${
                    item.bot ? "" : "my-own"
                  }`}
                >
                  {/* Font Size Inter */}
                  <div className="p-[10px] custom-shadow">
                    <p className="text-sm font-normal leading-[21px]">
                      {item.text}
                    </p>
                    <span className="text-xs leading-5 font-light text-[#797979] block text-right">
                      18.03
                    </span>
                    {/* Font Size Poopins */}
                  </div>

                  
                </div>
              );
            })}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-[9px]">
            <input
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
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
