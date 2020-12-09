import { createContext, useContext } from "react";
import { EmojiData, EmojiGroupTypes, RecentlyUsedEmoji } from "../../@types";

export interface ReactEmojiPickerContextState {
  emojiFilterSelected: EmojiGroupTypes;
  emojiSelected: EmojiData;
  recentEmojis: RecentlyUsedEmoji[];
  setFilterEmoji: (emojiGroup: EmojiGroupTypes) => void;
  setEmoji: (emoji: EmojiData) => void;
  setRecentEmojis: (
    recentEmojis:
      | RecentlyUsedEmoji[]
      | ((recentEmojis: RecentlyUsedEmoji[]) => RecentlyUsedEmoji[])
  ) => void;
}

export const ReactEmojiPickerContext = createContext<ReactEmojiPickerContextState | null>(
  null
);

export const useReactEmojiPickerContext = () =>
  useContext(ReactEmojiPickerContext) as ReactEmojiPickerContextState;
