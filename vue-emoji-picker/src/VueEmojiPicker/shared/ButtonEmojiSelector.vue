<template>
  <div class="emoji-button" @click="onClick">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {},
  methods: {
    onClick() {
      this.$emit("onPress");
    }
  }
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
