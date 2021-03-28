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
import useEmojiPickerStore from './features/useEmojiPickerStore';
import { EmitsOptions, SetupContext, watch } from "vue";

export default {
  components: {
    FilterEmojisByGroup,
    PopoverWrapper,
    SearchEmojis,
    ListEmojis,
  },
  emmits : ['onSelected'],
  setup(props : {},context : SetupContext<EmitsOptions>) {
    const { emojiSelected } = useEmojiPickerStore();
    watch(emojiSelected, (emojiSelectedValue) => {
      context.emit("onSelected",emojiSelectedValue.unicode);
    })
  },
};
</script>
