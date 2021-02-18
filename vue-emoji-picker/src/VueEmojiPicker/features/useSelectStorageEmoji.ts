import { inject, watch } from "vue";
import { EmojiData, RecentlyUsedEmoji } from "../@types";
import { localStorageEmojis } from "../utils/localStorageEmojis";
import { VueEmojiPickerKeys } from "./useEmojiPickerStore";

const limitEmojis = 7;

export default function useSelectStorageEmojis() {

  const recentEmojis = inject<{value:RecentlyUsedEmoji[]}>(VueEmojiPickerKeys.RecentEmojis);
  const updateEmojiSelected = inject<(props:EmojiData)=>void>(VueEmojiPickerKeys.UpdateEmojiSelected)!;
  const updateRecentEmojis = inject<(props:RecentlyUsedEmoji[])=>void>(VueEmojiPickerKeys.UpdateRecentEmojis)!;

  const validateNotRepeatEmojis = (emojiSelected : any) => {
      return !localStorageEmojis.get().some(emoji => emoji.unicode === emojiSelected.unicode);
  };

  watch(() => recentEmojis,() => {
    localStorageEmojis.add(recentEmojis?.value || []);
  });

  const selectEmoji = (emojiSelected : EmojiData) => {
    updateEmojiSelected(emojiSelected);
    if(validateNotRepeatEmojis(emojiSelected)){
      if(recentEmojis?.value.length! >= limitEmojis) {
        updateRecentEmojis([
          emojiSelected!,
          ...recentEmojis?.value!
        ].splice(0,recentEmojis?.value.length!));
      }
      else {
        updateRecentEmojis([
          ...recentEmojis?.value!,
          emojiSelected
        ])
      }
    }
  }


  return {
    selectEmoji,
  };
}
