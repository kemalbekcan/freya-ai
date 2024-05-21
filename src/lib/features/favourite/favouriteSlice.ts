import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FavouriteState, FavouriteBody } from "@/types/favourite";

const loadChatsFromLocalStorage = (): FavouriteBody[] => {
  if (typeof window !== "undefined") {
    const storedChats = localStorage.getItem("favourites");
    return storedChats ? JSON.parse(storedChats) : [];
  }
  return [];
};

const initialState: FavouriteState = {
  favourites: loadChatsFromLocalStorage(),
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    updateFavourite: (state, action: PayloadAction<FavouriteBody>) => {
      state.favourites?.push(action.payload);
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
    deleteFavourite: (state, action: PayloadAction<number>) => {
      const idToDelete = action.payload;
      const newFavourites = (state.favourites =
        state.favourites?.filter((item) => item.id !== idToDelete) || []);
      state.favourites = newFavourites;
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
  },
});

export const { updateFavourite, deleteFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
