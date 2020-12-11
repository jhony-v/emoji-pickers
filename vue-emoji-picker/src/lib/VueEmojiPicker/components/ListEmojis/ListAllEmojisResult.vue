<template>
  <div class="all-emojis">
    <div class="all-emojis__list"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { VueEmojiPickerKeys } from '../../features/useEmojiPickerStore';

export default defineComponent({
  setup() {
    const allEmojis = inject(VueEmojiPickerKeys.AllEmojis);
    return {
      allEmojis,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
