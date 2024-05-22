import React, { FC } from "react";
import { IButton } from "@/types/ui";

const BasicButton: FC<IButton> = ({ onClick, children, type, ...props }: any) => {
  return (
    <button type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default BasicButton;
