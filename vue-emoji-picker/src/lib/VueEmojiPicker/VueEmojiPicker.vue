<template>
  <popover-wrapper>
    <search-emojis></search-emojis>
    <filter-emojis-by-group></filter-emojis-by-group>
    <list-emojis></list-emojis>
  </popover-wrapper>
</template>

<script lang="ts">
import FilterEmojisByGroup from './components/FilterEmojisByGroup/FilterEmojisByGroup.vue';
import ListEmojis from './components/ListEmojis/ListEmojis.vue';
import SearchEmojis from './components/SearchEmojis/SearchEmojis.vue';
import PopoverWrapper from './shared/PopoverWrapper.vue';

export default {
  components: {
    FilterEmojisByGroup,
    PopoverWrapper,
    SearchEmojis,
    ListEmojis,
  },
};
</script>
