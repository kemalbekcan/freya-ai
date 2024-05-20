'use client';

import {useAppSelector } from '@/hooks/hooks'

import React from "react";

const Sidebar = () => {
  const products = useAppSelector((state) => state.product.unit);

  console.log('products', products);
  return (
    <div className="w-[470px] h-full p-5 bg-[#F7F7F7]">
      <h2 className="text-xl font-semibold leading-5 pb-[10px] border-b border-[#D6D6D6]">
        {/* Font Size Roboto */}
        AI Chatbot
      </h2>

      <div className="flex flex-col h-[95%] justify-between">
        <div>
          <div className="bg-white my-5 rounded-[10px] w-fit max-w-[86%]">
            {/* Font Size Inter */}
            <div className="p-[10px] custom-shadow">
              <p className="text-sm font-normal leading-[21px]">
                Merhaba 👋 Bugün sana nasıl yardımcı olabilirim?
              </p>
              <span className="text-xs leading-5 font-light text-[#797979] block text-right">
                18.03
              </span>
              {/* Font Size Poopins */}
            </div>
          </div>

          <div className="bg-white my-5 rounded-[10px] w-fit max-w-[86%] my-own">
            {/* Font Size Inter */}
            <div className="p-[10px] custom-shadow">
              <p className="text-sm font-normal leading-[21px]">
                Merhaba, yarın iş arkadaşlarımla bir akşam yemeğine çıkıyorum,
                şık parçalar giymek istiyorum.
              </p>
              <span className="text-xs leading-5 font-light text-[#797979] block text-right">
                18.04
              </span>
              {/* Font Size Poopins */}
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-[9px]">
            <input
              type="text"
              placeholder="Yaz..."
              className="text-sm leading-[21px] font-normal px-[10px] h-10 rounded-[10px] flex-1 border border-[#D6D6D6]"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-[10px] bg-[#E14621] text-white mr-[10px] btn-shadow"
            >
              T
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
