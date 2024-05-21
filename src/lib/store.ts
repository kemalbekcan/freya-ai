import React, { useState } from "react";
import { configureStore  } from "@reduxjs/toolkit";
import _ from 'lodash';
import logger from 'redux-logger'
// import { batchedSubscribe } from 'redux-batched-subscribe'
import productReducer from "@/lib/features/product/productSlice";
import chatReducer from "@/lib/features/chat/chatSlice";
import favouriteReducer from "@/lib/features/favourite/favouriteSlice";

// const debounceNotify = _.debounce((notify: any) => notify())

export const initalStore = () => {
  return configureStore({
    reducer: {
      product: productReducer,
      chat: chatReducer,
      favourite: favouriteReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export type AppStore = ReturnType<typeof initalStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
