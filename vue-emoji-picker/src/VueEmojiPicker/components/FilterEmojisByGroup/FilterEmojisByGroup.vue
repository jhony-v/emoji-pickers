<template>
  <div class="filter-emoji" role="menu">
    <div
      v-for="(item,key) in emojiCategoriesWithKeys"
      :key="key"
      :class="['button-filter', emojiFilterSelected !== item.key ? 'deactive' : '']"
      @click="updateEmojiFilterSelected(item.key)"
    >
      {{item.emoji}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { EmojiGroupTypes, EmojiGroups, emojiCategories } from '../../@types/index';
import { VueEmojiPickerKeys } from '../../features/useEmojiPickerStore';

interface EmojiKey {
   emoji: string;
   key: EmojiGroupTypes;
}
const emojiCategoriesWithKeys: EmojiKey[] = [...emojiCategories].map((emoji, index) => ({
  emoji,
  key: Object.values(EmojiGroups)[index],
}));

export default defineComponent({
  setup() {
    const updateEmojiFilterSelected = inject(VueEmojiPickerKeys.UpdateEmojiFilterSelected);
    const emojiFilterSelected = inject(VueEmojiPickerKeys.EmojiFilterSelected);

    return {
      emojiCategoriesWithKeys,
      updateEmojiFilterSelected,
      emojiFilterSelected,
    };
  },
});
</script>

<style lang="scss" scoped>
.filter-emoji {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  & .button-filter {
    font-size: 1rem;
    padding: 8px 4px;
    cursor: pointer;
    text-align: center;
    width: 100%;
    &:hover {
      filter: unset;
      background-color: rgba(0, 0, 0, 0.02);
      opacity: 1;
    }
    &.deactive {
      filter: grayscale(100%) contrast(80%);
      opacity: 0.4;
    }
  }
}
</style>
