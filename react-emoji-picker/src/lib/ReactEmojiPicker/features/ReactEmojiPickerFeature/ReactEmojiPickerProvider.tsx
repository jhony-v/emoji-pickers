import React, { FC, useEffect, useState } from "react";
import { EmojiData, EmojiGroupTypes, RecentlyUsedEmoji } from "../../@types";
import { localStorageEmojis } from "../../utils/localStorageEmojis";
import { ReactEmojiPickerContext } from "./ReactEmojiPickerContext";

type ReactEmojiPickerProviderProps = {
   onSelected?: (emoji: string) => void;
};
const ReactEmojiPickerProvider: FC<ReactEmojiPickerProviderProps> = ({
   onSelected,
   children,
}) => {
   const [emojiFilterSelected, setFilterEmoji] = useState<EmojiGroupTypes>(
      "smileysEmotion"
   );
   const [emojiSelected, setEmoji] = useState<EmojiData>({
      unicode: "",
      tags: [],
   });
   const [allEmojis, setAllEmojis] = useState<EmojiData[]>([]);
   const [recentEmojis, setRecentEmojis] = useState<RecentlyUsedEmoji[]>(
      localStorageEmojis.get()
   );

   useEffect(() => {
      onSelected && onSelected(emojiSelected.unicode);
   }, [emojiSelected, onSelected]);

   return (
       <ReactEmojiPickerContext.Provider
         value={{
            emojiFilterSelected,
            setFilterEmoji,
            emojiSelected,
            setEmoji,
            recentEmojis,
            setRecentEmojis,
            allEmojis,
            setAllEmojis,
         }}
      >
           {children}
       </ReactEmojiPickerContext.Provider>
   );
};

export default ReactEmojiPickerProvider;
