<template>
  <div class="all-emojis">
    <div class="all-emojis__header">
      <title-h-3>{{ emojiGroupName }}</title-h-3>
    </div>
    <div class="all-emojis__list">
      <button-emoji-selector
        v-for="(item, key) in emojiList" :key="key" @onPress="onSelectEmoji(item)">
        {{ item.unicode }}
        </button-emoji-selector>
    </div>
  </div>
</template>

<script lang="ts">
import { EmojiData } from '@/VueEmojiPicker/@types';
import ButtonEmojiSelector from '@/VueEmojiPicker/shared/ButtonEmojiSelector.vue';
import { defineComponent } from 'vue';
import useFetchEmojisByGroups from '../../features/useFetchEmojisByGroups';
import useSelectStorageEmoji from '../../features/useSelectStorageEmoji';
import TitleH3 from '../../shared/TitleH3.vue';

export default defineComponent({
  components: { TitleH3, ButtonEmojiSelector },
  setup() {
    const { loading, emojiList, emojiGroupName } = useFetchEmojisByGroups();
    const { selectEmoji } = useSelectStorageEmoji();

    const onSelectEmoji = (e: EmojiData) => {
      selectEmoji(e);
    };

    return {
      emojiList,
      loading,
      emojiGroupName,
      onSelectEmoji,
    };
  },
});
</script>

<style lang="scss" scoped>
.all-emojis {
  &__header {
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  &__list {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}
</style>
