<script setup>
defineProps({
  left: { type: Number, required: true },
  width: { type: Number, required: true },
  top: { type: Number, default: 2 },
  height: { type: Number, default: 18 },
  color: { type: String, default: '#3B82F6' },
  label: { type: String, default: '' },
  endType: { type: String, default: null }, // 'stopped' | 'changed' | null
  endReason: { type: String, default: '' },
  showLabel: { type: Boolean, default: true },
})
</script>

<template>
  <div
    class="bar-segment"
    :style="{ left: left + 'px', width: Math.max(4, width) + 'px', top: top + 'px', height: height + 'px', background: color }"
    :title="label + (endReason ? ' — ' + endReason : '')"
  >
    <span class="bar-label" v-if="showLabel && width > 50">{{ label }}</span>
    <span v-if="endType === 'stopped'" class="stop-marker" :title="endReason">✕</span>
    <span v-if="endType === 'changed'" class="change-marker">↻</span>
  </div>
</template>

<style scoped>
.bar-segment {
  position: absolute; border-radius: 3px;
  display: flex; align-items: center; overflow: hidden;
  z-index: 1; cursor: default; transition: opacity 0.1s;
}
.bar-segment:hover { opacity: 0.85; }

.bar-label {
  font-size: 9px; color: rgba(255,255,255,0.9); padding: 0 4px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

.stop-marker {
  position: absolute; right: -1px; top: -1px;
  background: #DC2626; color: #fff; font-size: 8px; font-weight: 700;
  width: 14px; height: 14px; border-radius: 2px;
  display: flex; align-items: center; justify-content: center;
}
.change-marker {
  position: absolute; right: -1px; top: -1px;
  background: #EAB308; color: #fff; font-size: 9px; font-weight: 700;
  width: 14px; height: 14px; border-radius: 2px;
  display: flex; align-items: center; justify-content: center;
}
</style>
