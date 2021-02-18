<template>
  <div>
    {{emoji}}
    <vue-emoji-picker @on-selected="onSelected"></vue-emoji-picker>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VueEmojiPicker from './VueEmojiPicker/VueEmojiPicker.vue';

export default defineComponent({
  name: 'App',
  components: {
    VueEmojiPicker,
  },
  setup() {

    const emoji = ref("");
    const onSelected = (emojiValue : string) => {
      emoji.value = emojiValue;
    }

    return {
      onSelected,
      emoji,
    }
  }
});
</script>
