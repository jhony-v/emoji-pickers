import { inject, ref, watchEffect } from 'vue';
import { EmojiData, EmojiGroupTypes } from '../@types';
import getAsyncJsonEmojis from '../utils/getAsyncJsonEmojis';
import { VueEmojiPickerKeys } from './useEmojiPickerStore';

export default function useFetchEmojisByGroups() {
  const loading = ref(true);
  const allEmojis = inject<EmojiData[]>(VueEmojiPickerKeys.AllEmojis);
  const updateAllEmojis = inject<(emojis: EmojiData[]) => void>(VueEmojiPickerKeys.UpdateAllEmojis)!;
  const emojiFilterSelected = inject<{ value: EmojiGroupTypes }>(VueEmojiPickerKeys.EmojiFilterSelected)!;

  watchEffect(() => {
    loading.value = true;
    getAsyncJsonEmojis(emojiFilterSelected.value).then(({ emojiList }) => {
      updateAllEmojis(emojiList);
      loading.value = false;
    });
  });

  return {
    loading,
    emojiList: allEmojis,
    emojiGroupName: allEmojis ? allEmojis[0]?.tags[0] : ''
  };
}
