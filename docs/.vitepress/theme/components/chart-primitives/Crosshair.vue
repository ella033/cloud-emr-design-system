<script setup>
defineProps({
  x: { type: Number, default: null },
  visible: { type: Boolean, default: false },
})
</script>

<template>
  <div v-if="visible && x !== null" class="crosshair" :style="{ left: x + 'px' }"></div>
</template>

<style scoped>
.crosshair {
  position: absolute; top: 0; width: 1px; height: 100%;
  background: var(--vp-c-text-3); opacity: 0.3;
  pointer-events: none; z-index: 5;
}
</style>
