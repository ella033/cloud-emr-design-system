<script setup>
defineProps({
  x: { type: Number, required: true },
  color: { type: String, default: '#64748B' },
  opacity: { type: Number, default: 0.4 },
})
</script>

<template>
  <div class="vline-marker" :style="{ left: x + 'px', background: color, opacity }"></div>
</template>

<style scoped>
.vline-marker {
  position: absolute; top: 0; width: 1px; height: 100%;
  pointer-events: none;
}
</style>
