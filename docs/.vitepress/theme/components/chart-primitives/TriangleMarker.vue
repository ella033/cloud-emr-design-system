<script setup>
defineProps({
  x: { type: Number, required: true },
  color: { type: String, default: '#F97316' },
  label: { type: String, default: '' },
})
</script>

<template>
  <div class="triangle-marker" :style="{ left: x + 'px' }" :title="label">
    <span class="tri-shape" :style="{ borderBottomColor: color }"></span>
  </div>
</template>

<style scoped>
.triangle-marker {
  position: absolute; top: 50%; transform: translate(-50%, -50%);
  cursor: pointer; z-index: 2; transition: transform 0.1s;
}
.triangle-marker:hover { transform: translate(-50%, -50%) scale(1.3); }
.tri-shape {
  display: block; width: 0; height: 0;
  border-left: 6px solid transparent; border-right: 6px solid transparent;
  border-bottom: 10px solid;
}
</style>
