<template>
  <span class="title-h3"><slot></slot></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TitleH3',
});
</script>

<style lang="scss" scoped>
.title-h3 {
  font-weight: bold;
  font-size: 1.3rem;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
