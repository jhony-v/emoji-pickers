import { createContext, useContext } from "react";
import { ReactEmojiPickerContextState } from "../../@types";

export const ReactEmojiPickerContext = createContext<ReactEmojiPickerContextState | null>(
   null
);

export const useReactEmojiPickerContext = () =>
   useContext(ReactEmojiPickerContext) as ReactEmojiPickerContextState;
