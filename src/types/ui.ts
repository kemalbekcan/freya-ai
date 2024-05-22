import { ChangeEvent, MouseEvent } from "react";

export interface ISelect {
  val: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className: string;
  name: string;
  id: string;
}

export interface IButton {
    variant?: string;
    type: string;
    onClick?: (event: MouseEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
}
