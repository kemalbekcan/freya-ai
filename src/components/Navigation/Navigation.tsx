"use client";

import React, { useState, FC } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import hamburgerIcon from "@/assets/images/hamburger.png";
import { navigationMenu } from "@/utils/constants";
import { Select, BasicButton } from "@/components";
import { INavigation } from "@/types/navigation";
import { useAppDispatch } from "@/hooks/hooks";
import { sortProducts } from "@/lib/features/product/productSlice";
import { sortFavourite } from "@/lib/features/favourite/favouriteSlice";

const Navigation: FC<INavigation> = ({ filterName, setIsMobile }) => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVal(e.target.value);
    if (filterName === "products") {
      dispatch(sortProducts(e.target.value));
    } else {
      dispatch(sortFavourite(e.target.value));
    }
  };

  const [val, setVal] = useState("");

  return (
    <>
      <div className="hidden w-full md:flex justify-between">
        <ul className="flex flex-1 justify-center gap-5 mb-6">
          {navigationMenu &&
            navigationMenu.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li
                  key={item.id}
                  className={`p-1 ${
                    isActive ? "border-b border-[#E14621]" : ""
                  }`}
                >
                  <Link
                    href={item.href}
                    className="text-xs md:text-lg leading-5 font-medium text-[#E14621]"
                  >
                    {item.title}
                  </Link>
                </li>

                // Poppins
              );
            })}
        </ul>
        <div className="mr-5">
          <Select
            val={val}
            onChange={(e) => handleChange(e)}
            className="sm:w-[111px] w-[70px] h-10 rounded-[10px] border-[0.5px] p-[10px] text-xs leading-[18px] font-normal"
            name="priceValue"
            id="price-value"
          />
        </div>
      </div>

      <div className="md:hidden flex justify-between w-full">
        <div>
          <BasicButton className={'mt-[10px]'} type="button" onClick={() => setIsMobile(true)}>
            <Image src={hamburgerIcon} width={20} height={20} alt={"hearted"} />
          </BasicButton>
        </div>
        <div>
          <ul className="flex flex-1 justify-center gap-5 mb-6">
            {navigationMenu &&
              navigationMenu.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li
                    key={item.id}
                    className={`p-1 ${
                      isActive ? "border-b border-[#E14621]" : ""
                    }`}
                  >
                    <Link
                      href={item.href}
                      className="text-xs md:text-lg font-medium text-[#E14621]"
                    >
                      {item.title}
                    </Link>
                  </li>

                  // Poppins
                );
              })}
          </ul>
        </div>
        <div className="mr-5">
          <Select
            val={val}
            onChange={(e) => handleChange(e)}
            className="sm:w-[111px] w-[70px] h-10 rounded-[10px] border-[0.5px] p-[10px] text-xs leading-[18px] font-normal"
            name="priceValue"
            id="price-value"
          />
        </div>
      </div>
    </>
  );
};

export default Navigation;
