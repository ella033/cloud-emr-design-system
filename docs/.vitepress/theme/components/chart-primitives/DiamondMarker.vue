<script setup>
defineProps({
  x: { type: Number, required: true },
  color: { type: String, default: '#EC4899' },
  label: { type: String, default: '' },
  highlight: { type: Boolean, default: false },
})
</script>

<template>
  <div :class="['diamond-marker', { highlight }]" :style="{ left: x + 'px' }" :title="label">
    <span class="dia-shape" :style="{ background: color }"></span>
  </div>
</template>

<style scoped>
.diamond-marker {
  position: absolute; top: 50%; transform: translate(-50%, -50%);
  cursor: pointer; z-index: 2; transition: transform 0.1s;
}
.diamond-marker:hover { transform: translate(-50%, -50%) scale(1.3); }
.dia-shape {
  display: block; width: 10px; height: 10px;
  transform: rotate(45deg); border-radius: 1px;
}
.diamond-marker.highlight .dia-shape {
  box-shadow: 0 0 0 3px rgba(236,72,153,0.3);
}
</style>
