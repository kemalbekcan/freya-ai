import React, { FC } from "react";
import { IButton } from "@/types/ui";

const BasicButton: FC<IButton> = ({ onClick, children, type }: any) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default BasicButton;
