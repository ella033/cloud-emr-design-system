<script setup>
import { ref } from 'vue'
const hoveredPoint = ref(null)

const bpData = [
  { date: '03.01', systolic: 160, diastolic: 95 },
  { date: '03.08', systolic: 152, diastolic: 90 },
  { date: '03.15', systolic: 145, diastolic: 88 },
  { date: '03.22', systolic: 140, diastolic: 85 },
  { date: '04.01', systolic: 135, diastolic: 82 },
  { date: '04.08', systolic: 130, diastolic: 80 },
  { date: '04.15', systolic: 128, diastolic: 78 },
  { date: '04.22', systolic: 125, diastolic: 76 },
]

const yMin = 60
const yMax = 180
const chartW = 520
const chartH = 200
const padL = 40
const padR = 20
const padT = 10
const padB = 30

function x(i) { return padL + (i / (bpData.length - 1)) * (chartW - padL - padR) }
function y(val) { return padT + ((yMax - val) / (yMax - yMin)) * (chartH - padT - padB) }

function polyline(key) {
  return bpData.map((d, i) => `${x(i)},${y(d[key])}`).join(' ')
}

// Normal band
const normalTop = y(139)
const normalBottom = y(90)
const normalH = normalBottom - normalTop

// Drug marker
const drugMarkerX = x(3) // 03.22 아무로디핀 증량 시점
</script>

<template>
  <div class="vc-wrap">
    <h4 class="section-title">바이탈 추이 차트 (혈압)</h4>
    <div class="vc-desc">홍길동 환자 — 수축기/이완기 혈압 추이 + 약물 변경 시점 (2025.03~04)</div>

    <div class="vc-chart-wrap">
      <svg :width="chartW" :height="chartH" class="vc-svg">
        <!-- Normal band -->
        <rect :x="padL" :y="normalTop" :width="chartW - padL - padR" :height="normalH"
          fill="#22C55E" opacity="0.08" />
        <text :x="chartW - padR - 2" :y="normalTop + 10" class="vc-band-label" text-anchor="end">정상</text>

        <!-- Grid lines -->
        <line v-for="val in [80, 100, 120, 140, 160]" :key="val"
          :x1="padL" :y1="y(val)" :x2="chartW - padR" :y2="y(val)"
          stroke="var(--vp-c-divider)" stroke-dasharray="2,4" />
        <text v-for="val in [80, 100, 120, 140, 160]" :key="'l'+val"
          :x="padL - 4" :y="y(val) + 3" class="vc-y-label" text-anchor="end">{{ val }}</text>

        <!-- Drug marker -->
        <line :x1="drugMarkerX" :y1="padT" :x2="drugMarkerX" :y2="chartH - padB"
          stroke="#EAB308" stroke-dasharray="4,3" stroke-width="1.5" />
        <text :x="drugMarkerX" :y="padT - 2" class="vc-marker-label" text-anchor="middle">아무로디핀 10mg→5mg+로사르탄</text>

        <!-- Systolic line -->
        <polyline :points="polyline('systolic')" fill="none" stroke="#DC2626" stroke-width="2" stroke-linejoin="round" />
        <!-- Diastolic line -->
        <polyline :points="polyline('diastolic')" fill="none" stroke="#3B82F6" stroke-width="2" stroke-linejoin="round" />

        <!-- Points -->
        <g v-for="(d, i) in bpData" :key="i">
          <circle :cx="x(i)" :cy="y(d.systolic)" r="4" fill="#DC2626" stroke="#fff" stroke-width="1.5"
            @mouseenter="hoveredPoint = {i, ...d}" @mouseleave="hoveredPoint = null" class="vc-point" />
          <circle :cx="x(i)" :cy="y(d.diastolic)" r="4" fill="#3B82F6" stroke="#fff" stroke-width="1.5"
            class="vc-point" />
          <text :x="x(i)" :y="chartH - 8" class="vc-x-label" text-anchor="middle">{{ d.date }}</text>
        </g>

        <!-- Hover crosshair -->
        <g v-if="hoveredPoint">
          <line :x1="x(hoveredPoint.i)" :y1="padT" :x2="x(hoveredPoint.i)" :y2="chartH - padB"
            stroke="var(--vp-c-text-3)" stroke-dasharray="2,2" opacity="0.5" />
        </g>
      </svg>

      <!-- Hover tooltip -->
      <div v-if="hoveredPoint" class="vc-tooltip" :style="{ left: x(hoveredPoint.i) + 'px' }">
        <div class="vc-tt-date">{{ hoveredPoint.date }}</div>
        <div class="vc-tt-row"><span class="vc-tt-dot sys"></span> 수축기: {{ hoveredPoint.systolic }} mmHg</div>
        <div class="vc-tt-row"><span class="vc-tt-dot dia"></span> 이완기: {{ hoveredPoint.diastolic }} mmHg</div>
      </div>

      <!-- Legend -->
      <div class="vc-legend">
        <span class="vc-legend-item"><span class="vc-ldot" style="background:#DC2626;"></span> 수축기</span>
        <span class="vc-legend-item"><span class="vc-ldot" style="background:#3B82F6;"></span> 이완기</span>
        <span class="vc-legend-item"><span class="vc-ldot" style="background:#22C55E; opacity:0.3;"></span> 정상 범위</span>
        <span class="vc-legend-item"><span class="vc-ldot" style="background:#EAB308;"></span> 약물 변경</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vc-wrap { margin: 20px 0 28px; }
.section-title { font-size: 14px; font-weight: 600; color: var(--vp-c-text-1); margin: 0 0 4px; }
.vc-desc { font-size: 12px; color: var(--vp-c-text-3); margin-bottom: 16px; }

.vc-chart-wrap {
  border: 1px solid var(--vp-c-divider); border-radius: 12px;
  background: var(--vp-c-bg); padding: 16px; position: relative; overflow-x: auto;
}

.vc-svg { display: block; }
.vc-point { cursor: pointer; transition: r 0.1s; }
.vc-point:hover { r: 6; }

.vc-y-label { font-size: 10px; fill: var(--vp-c-text-3); font-family: var(--vp-font-family-mono); }
.vc-x-label { font-size: 9px; fill: var(--vp-c-text-3); font-family: var(--vp-font-family-mono); }
.vc-band-label { font-size: 9px; fill: #22C55E; font-weight: 600; }
.vc-marker-label { font-size: 8px; fill: #A16207; font-weight: 600; }

/* Tooltip */
.vc-tooltip {
  position: absolute; top: 16px; transform: translateX(-50%);
  background: #0F172A; color: #F8FAFC; padding: 8px 12px; border-radius: 8px;
  font-size: 11px; pointer-events: none; z-index: 10;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.vc-tt-date { font-weight: 600; margin-bottom: 4px; }
.vc-tt-row { display: flex; align-items: center; gap: 4px; }
.vc-tt-dot { width: 8px; height: 8px; border-radius: 50%; }
.vc-tt-dot.sys { background: #DC2626; }
.vc-tt-dot.dia { background: #3B82F6; }

/* Legend */
.vc-legend { display: flex; gap: 16px; margin-top: 12px; padding-top: 8px; border-top: 1px solid var(--vp-c-divider); }
.vc-legend-item { display: flex; align-items: center; gap: 4px; font-size: 11px; color: var(--vp-c-text-3); }
.vc-ldot { width: 10px; height: 10px; border-radius: 2px; }
</style>
