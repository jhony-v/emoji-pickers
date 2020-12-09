import { useEffect } from "react";
import { EmojiData, RecentlyUsedEmoji } from "../@types";
import { useReactEmojiPickerContext } from "../features/ReactEmojiPickerFeature/ReactEmojiPickerContext";
import { localStorageEmojis } from "../utils/localStorageEmojis";

const limitEmojis = 7;

export default function useSelectStorageEmojis() {
  const { setRecentEmojis, setEmoji, recentEmojis  } = useReactEmojiPickerContext();
  const validateNotRepeatEmojis = (emojiSelected : EmojiData) => {
    return !localStorageEmojis.get().some(emoji => emoji.unicode === emojiSelected.unicode);
  }
  
  useEffect(() => {
    localStorageEmojis.add(recentEmojis);
  },[recentEmojis])

  const selectEmoji = (emojiSelected: EmojiData) => {
    setEmoji(emojiSelected);
    if (validateNotRepeatEmojis(emojiSelected)) {
      setRecentEmojis((emojis:RecentlyUsedEmoji[]) => {
        if(emojis.length >= limitEmojis)
          return [
            emojiSelected,
            ...emojis,
          ].splice(0,emojis.length);
        
        return [ ...emojis,
          emojiSelected
        ]
      });  
    }
  };

  return {
    selectEmoji,
  };
}
