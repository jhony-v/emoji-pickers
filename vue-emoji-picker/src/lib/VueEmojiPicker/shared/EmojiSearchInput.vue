<template>
  <div class="search-wrapper">
    <input
      type="text"
      class="search-wrapper__input"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface EmojiSearchProps {
  placeholder?: string;
}

export default defineComponent({
  props: {
    placeholder: {
      type: String,
    },
  },
  setup() {
    console.log('ok');
  },
});
</script>

<style lang="scss" scoped>
.search-wrapper {
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 16px;
  padding: 8px 15px;
  display: flex;
  margin: 5px;
  flex: none;
  &__input {
    border: none;
    outline: none;
    background: none;
    width: 100%;
    margin-left: 5px;
    font-size: 14px;
    &::placeholder {
      color: silver;
    }
  }
}
</style>
