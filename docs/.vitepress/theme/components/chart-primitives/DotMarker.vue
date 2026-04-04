<script setup>
defineProps({
  x: { type: Number, required: true },
  color: { type: String, default: '#8B5CF6' },
  size: { type: Number, default: 10 },
  label: { type: String, default: '' },
})
</script>

<template>
  <div
    class="dot-marker"
    :style="{ left: x + 'px', width: size + 'px', height: size + 'px', background: color }"
    :title="label"
  ></div>
</template>

<style scoped>
.dot-marker {
  position: absolute; top: 50%; transform: translate(-50%, -50%);
  border-radius: 50%; border: 2px solid var(--vp-c-bg);
  cursor: pointer; z-index: 2; transition: transform 0.1s;
}
.dot-marker:hover { transform: translate(-50%, -50%) scale(1.4); }
</style>
