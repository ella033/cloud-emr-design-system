<script setup>
import { computed } from 'vue'

const props = defineProps({
  points: { type: Array, required: true }, // number[]
  color: { type: String, default: '#DC2626' },
  width: { type: Number, default: 560 },
  height: { type: Number, default: 32 },
  min: { type: Number, default: null },
  max: { type: Number, default: null },
  bandMin: { type: Number, default: null }, // 정상 범위 하한
  bandMax: { type: Number, default: null }, // 정상 범위 상한
  bandColor: { type: String, default: '#22C55E' },
})

const yMin = computed(() => props.min ?? Math.min(...props.points) - 10)
const yMax = computed(() => props.max ?? Math.max(...props.points) + 10)

function y(val) {
  return props.height - ((val - yMin.value) / (yMax.value - yMin.value)) * (props.height - 4) - 2
}

const polylinePoints = computed(() =>
  props.points.map((v, i) => `${i * (props.width / (props.points.length - 1))},${y(v)}`).join(' ')
)

const bandY = computed(() => props.bandMax !== null ? y(props.bandMax) : 0)
const bandH = computed(() => props.bandMin !== null && props.bandMax !== null ? y(props.bandMin) - y(props.bandMax) : 0)
</script>

<template>
  <svg :width="width" :height="height" class="sparkline-svg">
    <!-- Normal band -->
    <rect v-if="bandMin !== null && bandMax !== null"
      x="0" :y="bandY" :width="width" :height="bandH"
      :fill="bandColor" opacity="0.06" />
    <!-- Line -->
    <polyline :points="polylinePoints" fill="none" :stroke="color"
      stroke-width="1.5" stroke-linejoin="round" />
  </svg>
</template>

<style scoped>
.sparkline-svg { display: block; width: 100%; }
</style>
