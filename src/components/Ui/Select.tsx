import React, { FC } from "react";
import { ISelect } from "@/types/ui";

const Select: FC<ISelect> = ({ val, onChange, ...props }: any) => {
  return (
    <select onChange={onChange} value={val} {...props}>
      <option className="hidden">Filtrele</option>
      <option value="asc">Artan Fiyat</option>
      <option value="desc">Azalan Fiyat</option>
    </select>
  );
};

export default Select;
