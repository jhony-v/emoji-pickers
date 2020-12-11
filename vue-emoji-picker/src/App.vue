<template>
  <vue-emoji-picker></vue-emoji-picker>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueEmojiPicker from './lib/VueEmojiPicker/VueEmojiPicker.vue';

export default defineComponent({
  name: 'App',
  components: {
    VueEmojiPicker,
  },
});
</script>
