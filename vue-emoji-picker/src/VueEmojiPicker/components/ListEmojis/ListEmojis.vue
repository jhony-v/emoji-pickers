<template>
  <div class="list-emojis">
    <list-recent-emojis></list-recent-emojis>
    <list-all-emojis-result></list-all-emojis-result>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListAllEmojisResult from './ListAllEmojisResult.vue';
import ListRecentEmojis from './ListRecentEmojis.vue';

export default defineComponent({
  components: { ListRecentEmojis, ListAllEmojisResult },
});
</script>

<style lang="scss" scoped>
.list-emojis {
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border: 2px solid white;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-button {
    height: 10px;
  }
}
</style>
