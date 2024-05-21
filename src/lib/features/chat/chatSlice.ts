import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { defaultBotMessage } from "@/utils/constants";

interface ChatState {
  chats: ChatBody[] | null;
}

interface ChatBody {
  text: string;
  bot: boolean;
}

const loadChatsFromLocalStorage = (): ChatBody[] => {
  if (typeof window !== "undefined") {
    const storedChats = localStorage.getItem("chats");
    return storedChats
      ? JSON.parse(storedChats)
      : [{ text: defaultBotMessage, bot: true }];
  }
  return [{ text: defaultBotMessage, bot: true }];
};

const initialState: ChatState = {
  chats: loadChatsFromLocalStorage(),
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateChats: (state, action: PayloadAction<ChatBody>) => {
      state.chats?.push(action.payload);
      localStorage.setItem("chats", JSON.stringify(state.chats));
    },
  },
});

export const { updateChats } = chatSlice.actions;
export default chatSlice.reducer;
