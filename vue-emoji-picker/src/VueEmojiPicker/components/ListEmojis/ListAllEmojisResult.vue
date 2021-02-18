<template>
  <div class="all-emojis">
    <div class="all-emojis__header">
      <title-h-3>{{ emojiGroupName }} All</title-h-3>
    </div>
    <div class="all-emojis__list">
        <button-emoji-selector  v-for="(item,key) in emojiList" :key="key">{{item.unicode}}</button-emoji-selector>
    </div>
  </div>
</template>

<script lang="ts">
import ButtonEmojiSelector from '@/VueEmojiPicker/shared/ButtonEmojiSelector.vue';
import { defineComponent } from 'vue';
import useFetchEmojisByGroups from '../../features/useFetchEmojisByGroups';
import TitleH3 from '../../shared/TitleH3.vue';

export default defineComponent({
  components: { TitleH3, ButtonEmojiSelector },
  setup() {
    const { loading, emojiList, emojiGroupName } = useFetchEmojisByGroups();
    return {
      emojiList,
      loading,
      emojiGroupName,
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
