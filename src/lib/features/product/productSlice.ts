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
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    sortProducts: (state, action: PayloadAction<any>) => {
      if (action.payload === "asc") {
        state.products?.sort((a, b) => a.price - b.price);
      } else {
        state.products?.sort((a, b) => b.price - a.price);
      }
    },
  },
});

export const { getProducts, sortProducts } = productSlice.actions;
export default productSlice.reducer;
