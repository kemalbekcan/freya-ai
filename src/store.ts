import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/lib/features/product/productSlice";

export const initalStore = () => {
  return configureStore({
    reducer: {
      product: productReducer,
    },
  });
};

export type AppStore = ReturnType<typeof initalStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
