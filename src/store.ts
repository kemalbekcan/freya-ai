import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/lib/features/product/productSlice";
import chatReducer from "@/lib/features/chat/chatSlice";
import favouriteReducer from "@/lib/features/favourite/favouriteSlice";

export const initalStore = () => {
  return configureStore({
    reducer: {
      product: productReducer,
      chat: chatReducer,
      favourite: favouriteReducer,
    },
  });
};

export type AppStore = ReturnType<typeof initalStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
