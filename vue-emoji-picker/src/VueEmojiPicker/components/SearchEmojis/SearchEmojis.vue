<template>
  <div class="search-emojis">
    <emoji-search-input :placeholder="'Search emojis...'" @keyup="onSearch"></emoji-search-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import EmojiSearchInput from '../../shared/EmojiSearchInput.vue';
import { allEmojiGroupsData, EmojiData, EmojiGroupTypes } from "../../@types";
import debounce from "lodash.debounce"
import { VueEmojiPickerKeys } from '@/VueEmojiPicker/features/useEmojiPickerStore';

export default defineComponent({
  components: { EmojiSearchInput },
  setup() {
    const updateAllEmojis = inject<(data:EmojiData[])=>void>(VueEmojiPickerKeys.UpdateAllEmojis)!;
    const emojiFilterSelected = inject<{value:EmojiGroupTypes}>(VueEmojiPickerKeys.EmojiFilterSelected)!;
    const onSearch = debounce((e : InputEvent) => {
      const target = e.target as HTMLInputElement;
      const text = target.value;
      const emojis = Object.entries(allEmojiGroupsData);
      const parseData = emojis.map(([,data]) => data.emojiList).flat();
      if(text.trim() !== "") {
          updateAllEmojis(parseData.filter((e) => e.tags[0].includes(text)));
      }
      else {
        updateAllEmojis(allEmojiGroupsData[emojiFilterSelected.value].emojiList);
      }

    },600);

    return {
      onSearch
    }
  }
});
</script>

<style lang="scss" scoped>
.search-emojis {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
