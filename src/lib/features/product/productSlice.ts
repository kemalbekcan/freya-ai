import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/types/product";

interface ProductState {
  products: IProduct[] | null;
}

const loadChatsFromLocalStorage = (): IProduct[] => {
  if (typeof window !== "undefined") {
    const storedChats = localStorage.getItem("products");
    return storedChats ? JSON.parse(storedChats) : [];
  }
  return [];
};

const initialState: ProductState = {
  products: loadChatsFromLocalStorage(),
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
    sortProducts: (state, action: PayloadAction<any>) => {},
  },
});

export const { getProducts, sortProducts } = productSlice.actions;
export default productSlice.reducer;
