<template>
  <div class="recent-emojis" v-if="!notIsEmpty">
    <div class="recent-emojis__header">
      <title-h-3>Recent</title-h-3>
      <span class="recent-emojis__text-clear"> Clear </span>
    </div>
    <div class="recent-emojis__list">
      <button-emoji-selector v-for="(current,key) in recentEmojis" :key="key">{{current.unicode}}</button-emoji-selector>
    </div>
  </div>
</template>

<script lang="ts">
import { RecentlyUsedEmoji } from '@/VueEmojiPicker/@types';
import ButtonEmojiSelector from '@/VueEmojiPicker/shared/ButtonEmojiSelector.vue';
import { computed, defineComponent, inject } from 'vue';
import { VueEmojiPickerKeys } from '../../features/useEmojiPickerStore';
import TitleH3 from '../../shared/TitleH3.vue';

export default defineComponent({
  components: { TitleH3, ButtonEmojiSelector },
  setup() {
    const recentEmojis = inject<RecentlyUsedEmoji[]>(VueEmojiPickerKeys.RecentEmojis);
    const notIsEmpty = computed(()=>recentEmojis?.length !== 0);
    return {
      notIsEmpty,
      recentEmojis,
    };
  },
});
</script>

<style lang="scss" scoped>
.recent-emojis {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__text-clear {
    cursor: pointer;
    font-weight: bold;
    font-size: 0.9rem;
    color: rgb(30, 130, 230);
    font-family: Arial, Helvetica, sans-serif;
  }
  &__list {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}
</style>
