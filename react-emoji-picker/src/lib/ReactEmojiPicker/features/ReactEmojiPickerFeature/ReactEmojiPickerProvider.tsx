import React, { FC, useState } from "react";
import { EmojiGroupTypes } from "../../@types";
import { ReactEmojiPickerContext } from "./ReactEmojiPickerContext";

const ReactEmojiPickerProvider: FC = ({ children }) => {
  const [ emojiFilterSelected, setFilterEmoji ] = useState<EmojiGroupTypes>("smileysEmotion");

  return (
    <ReactEmojiPickerContext.Provider value={{
      emojiFilterSelected,
      setFilterEmoji
    }}>
      {children}
    </ReactEmojiPickerContext.Provider>
  );
};

export default ReactEmojiPickerProvider;
