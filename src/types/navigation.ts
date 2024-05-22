import { Dispatch, SetStateAction } from 'react';

export interface INavigation {
  filterName?: string;
  setIsMobile: Dispatch<SetStateAction<boolean>>;
}
