<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  color: { type: String, default: '#3B82F6' },
  collapsed: { type: Boolean, default: false },
  height: { type: String, default: '36px' },
})
const emit = defineEmits(['toggle', 'hover', 'leave', 'click'])

function onMove(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  emit('hover', e.clientX - rect.left)
}
</script>

<template>
  <div class="track-row" :class="{ collapsed }">
    <div class="track-label" @click="emit('toggle')">
      <span class="collapse-icon">{{ collapsed ? '▸' : '▾' }}</span>
      <span class="track-dot" :style="{ background: color }"></span>
      <span class="track-name">{{ name }}</span>
    </div>
    <div class="track-area" v-show="!collapsed" :style="{ minHeight: height }"
      @mousemove="onMove" @mouseleave="emit('leave')" @click="emit('click', $event)"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.track-row { display: flex; border-bottom: 1px solid var(--vp-c-divider); }
.track-row:last-child { border-bottom: none; }

.track-label {
  width: 100px; flex-shrink: 0; padding: 8px; display: flex; align-items: center; gap: 4px;
  border-right: 1px solid var(--vp-c-divider); cursor: pointer;
  font-size: 11px; color: var(--vp-c-text-2); background: var(--vp-c-bg-soft);
  user-select: none;
}
.track-label:hover { background: var(--vp-c-bg-alt); }
.collapse-icon { font-size: 9px; color: var(--vp-c-text-3); width: 10px; }
.track-dot { width: 6px; height: 6px; border-radius: 2px; flex-shrink: 0; }
.track-name { font-weight: 500; white-space: nowrap; }

.track-area { flex: 1; position: relative; overflow: hidden; cursor: crosshair; }
</style>
