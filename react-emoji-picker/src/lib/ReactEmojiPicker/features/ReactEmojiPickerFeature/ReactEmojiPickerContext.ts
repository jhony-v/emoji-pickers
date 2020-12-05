import { createContext, useContext } from "react";
import { EmojiGroupTypes } from "../../@types";

export interface ReactEmojiPickerContextState {
  emojiFilterSelected: EmojiGroupTypes;
  setFilterEmoji: (emoji: EmojiGroupTypes) => void;
}

export const ReactEmojiPickerContext = createContext<ReactEmojiPickerContextState | null>(
  null
);


export const useReactEmojiPickerContext = () => (
  useContext(ReactEmojiPickerContext) as ReactEmojiPickerContextState
) 