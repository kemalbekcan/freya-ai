import { ChangeEvent, MouseEventHandler, ButtonHTMLAttributes } from "react";

export interface ISelect {
  val: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className: string;
  name: string;
  id: string;
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string;
    type: "submit" | "reset" | "button" | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}
