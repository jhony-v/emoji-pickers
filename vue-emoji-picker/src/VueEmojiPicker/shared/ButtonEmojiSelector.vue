<template>
  <div class="emoji-button">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {},
});
</script>

<style lang="scss" scoped>
.emoji-button {
  font-size: 1.2rem;
  text-align: center;
  padding: 5px;
  width: 26px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}
</style>
