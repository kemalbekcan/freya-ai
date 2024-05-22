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
      if(action.payload) {
        localStorage.setItem("products", JSON.stringify(state.products));
      }
    },
    deleteProduct: (state, action: PayloadAction<any>) => {
      console.log('action', action.payload)
      const idToDelete = action.payload.id;
      const newFavourites = (state.products =
        state.products?.filter((item) => item.id !== idToDelete) || []);
      state.products = newFavourites;
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    addProduct: (state, action: PayloadAction<any>) => {
      state.products?.push(action.payload);
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

export const { getProducts, addProduct, deleteProduct, sortProducts } = productSlice.actions;
export default productSlice.reducer;
