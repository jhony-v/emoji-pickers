import { provide, ref } from 'vue';
import { EmojiData, EmojiGroupTypes, RecentlyUsedEmoji } from '../@types';
import { localStorageEmojis } from '../utils/localStorageEmojis';

export enum VueEmojiPickerKeys {
  EmojiSelected = 'EmojiSelected',
  EmojiFilterSelected = 'EmojifilterSelected',
  AllEmojis = 'AllEmojis',
  RecentEmojis = 'RecentEmojis',
  UpdateEmojiFilterSelected = 'UpdateEmojiFilterSelected',
  UpdateAllEmojis = 'UpdateAllEmojis',
  UpdateRecentEmojis = 'UpdateRecentEmojis',
  UpdateEmojiSelected = 'UpdateEmojiSelected',
}

export default function useEmojiPickerStore() {
  const emojiSelected = ref<EmojiData>({
    tags: [],
    unicode: '',
  });
  const emojiFilterSelected = ref<EmojiGroupTypes>('smileysEmotion');
  const allEmojis = ref<EmojiData[]>([]);
  const recentEmojis = ref<RecentlyUsedEmoji[]>(localStorageEmojis.get());

  const updateEmojiFilterSelected = (newEmojiFilterSelected: EmojiGroupTypes) => {
    emojiFilterSelected.value = newEmojiFilterSelected;
  };
  const updateAllEmojis = (emojis: EmojiData[]) => {
    allEmojis.value = emojis;
  };
  const updateEmojiSelected = (value : EmojiData) => {
    emojiSelected.value = value;
  }
  const updateRecentEmojis = (value : RecentlyUsedEmoji[]) => {
    recentEmojis.value = value;
  }

  provide(VueEmojiPickerKeys.EmojiSelected, emojiSelected);
  provide(VueEmojiPickerKeys.EmojiFilterSelected, emojiFilterSelected);
  provide(VueEmojiPickerKeys.AllEmojis, allEmojis);
  provide(VueEmojiPickerKeys.RecentEmojis, recentEmojis);
  provide(VueEmojiPickerKeys.UpdateEmojiFilterSelected, updateEmojiFilterSelected);
  provide(VueEmojiPickerKeys.UpdateAllEmojis, updateAllEmojis);
  provide(VueEmojiPickerKeys.UpdateEmojiSelected,updateEmojiSelected);
  provide(VueEmojiPickerKeys.UpdateRecentEmojis,updateRecentEmojis);
}
