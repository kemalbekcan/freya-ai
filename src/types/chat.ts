export interface ChatState {
  chats: ChatBody[] | null;
}

export interface ChatBody {
  text: string;
  bot: boolean;
}

export interface IChat {
  item: { bot: boolean; text: string };
}
