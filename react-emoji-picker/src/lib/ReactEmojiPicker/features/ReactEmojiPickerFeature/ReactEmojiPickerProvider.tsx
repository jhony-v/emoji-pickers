import React, { FC, useEffect, useState } from "react";
import { EmojiData, EmojiGroupTypes, RecentlyUsedEmoji } from "../../@types";
import { localStorageEmojis } from "../../utils/localStorageEmojis";
import { ReactEmojiPickerContext } from "./ReactEmojiPickerContext";


type ReactEmojiPickerProviderProps = {
  onSelected ?: (emoji : string) => void
}
const ReactEmojiPickerProvider: FC<ReactEmojiPickerProviderProps> = (props) => {
  const [emojiFilterSelected, setFilterEmoji] = useState<EmojiGroupTypes>("smileysEmotion");
  const [emojiSelected, setEmoji] = useState<EmojiData>({
    unicode: "",
    tags: [],
  });
  const [ recentEmojis, setRecentEmojis ] = useState<RecentlyUsedEmoji[]>(localStorageEmojis.get());

  useEffect(() => {
    props.onSelected && props.onSelected(emojiSelected.unicode);
  },[emojiSelected,props]);

  return (
    <ReactEmojiPickerContext.Provider
      value={{
        emojiFilterSelected,
        setFilterEmoji,
        emojiSelected,
        setEmoji,
        recentEmojis,
        setRecentEmojis
      }}
    >
      {props.children}
    </ReactEmojiPickerContext.Provider>
  );
};

export default ReactEmojiPickerProvider;
