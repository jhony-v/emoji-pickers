<template>
  <div class="popover-wrapper"><slot></slot></div>
</template>

<style lang="scss" scoped>
.popover-wrapper {
  display: flex;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 2px 5px rgba(100, 100, 100, 0.3);
  width: 290px;
  height: 420px;
  overflow: hidden;
  flex-direction: column;
}
</style>
