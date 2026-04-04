<script setup>
defineProps({
  x: { type: Number, default: null },
  visible: { type: Boolean, default: false },
})
</script>

<template>
  <div v-if="visible && x !== null" class="frame-cursor" :style="{ left: x + 'px' }"></div>
</template>

<style scoped>
.frame-cursor {
  position: absolute; top: 0; width: 2px; height: 100%;
  background: #EAB308; pointer-events: none; z-index: 6;
  box-shadow: 0 0 4px rgba(234,179,8,0.4);
}
</style>
