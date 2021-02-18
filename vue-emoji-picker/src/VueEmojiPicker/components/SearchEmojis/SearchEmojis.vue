<template>
  <div class="search-emojis">
    <emoji-search-input :placeholder="'Search emojis...'"></emoji-search-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EmojiSearchInput from '../../shared/EmojiSearchInput.vue';

export default defineComponent({
  components: { EmojiSearchInput },
});
</script>

<style lang="scss" scoped>
.search-emojis {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
