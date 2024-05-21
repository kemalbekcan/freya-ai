"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navigationMenu } from "@/utils/constants";
import { useAppDispatch } from '@/hooks/hooks'
import { sortFavourite } from '@/lib/features/favourite/favouriteSlice'

const Navigation = ({products}: any) => {
  const dispatch = useAppDispatch()
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortFavourite(e.target.value))
  };

  return (
    <div className="w-full flex justify-between items-center">
      <ul className="flex flex-1 justify-center gap-5 mb-6">
        {navigationMenu &&
          navigationMenu.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li
                key={item.id}
                className={`p-1 ${isActive ? "border-b border-[#E14621]" : ""}`}
              >
                <Link
                  href={item.href}
                  className="text-lg leading-5 font-medium text-[#E14621]"
                >
                  {item.title}
                </Link>
              </li>

              // Poppins
            );
          })}
      </ul>
      <div>
        <select
          className="w-[111px] h-10 rounded-[10px] border-[0.5px] p-[10px] text-xs leading-[18px] font-normal"
          name="priceValue"
          id="price-value"
          onChange={handleChange}
        >
          <option selected className="hidden">
            Filtrele
          </option>
          <option value="asc">Artan Fiyat</option>
          <option value="desc">Azalan Fiyat</option>
        </select>
      </div>
    </div>
  );
};

export default Navigation;
