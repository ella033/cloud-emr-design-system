<script setup>
const props = defineProps({
  months: { type: Array, required: true }, // [{ day, label }]
  dayToX: { type: Function, required: true },
  isVisible: { type: Function, required: true },
})
const emit = defineEmits(['hover', 'leave', 'click'])

function onMove(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  emit('hover', e.clientX - rect.left)
}
</script>

<template>
  <div class="time-axis" @mousemove="onMove" @mouseleave="emit('leave')" @click="onMove($event); emit('click', $event)">
    <template v-for="m in months" :key="m.day">
      <div v-if="isVisible(m.day)" class="axis-mark" :style="{ left: dayToX(m.day) + 'px' }">
        <span class="axis-label">{{ m.label }}</span>
      </div>
    </template>
    <slot />
  </div>
</template>

<style scoped>
.time-axis {
  position: relative; height: 24px; border-bottom: 2px solid var(--vp-c-divider);
  cursor: crosshair; user-select: none;
}
.axis-mark {
  position: absolute; top: 0; height: 100%;
  border-left: 1px solid var(--vp-c-divider);
}
.axis-label {
  position: absolute; top: 4px; left: 4px;
  font-size: 9px; font-weight: 600; color: var(--vp-c-text-3);
  white-space: nowrap; font-family: var(--vp-font-family-mono);
}
</style>
