import { createContext, useContext } from "react";
export const ReactEmojiPickerContext = createContext(null);
export const useReactEmojiPickerContext = () => useContext(ReactEmojiPickerContext);
