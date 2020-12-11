<template>
  <div class="recent-emojis">
    <div class="recent-emojis__header">
      <title-h-3>Recent</title-h-3>
      <span class="recent-emojis__text-clear"> Clear </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TitleH3 from '../../shared/TitleH3.vue';

export default defineComponent({
  components: { TitleH3 },
});
</script>

<style lang="scss" scoped>
.recent-emojis {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__text-clear {
    cursor: pointer;
    font-weight: bold;
    font-size: 0.9rem;
    color: rgb(30, 130, 230);
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>
