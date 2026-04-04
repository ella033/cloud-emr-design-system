<script setup>
import { ref } from 'vue'
const hoveredMed = ref(null)

const medications = [
  {
    name: '아스피린 100mg', category: '항혈소판제',
    periods: [
      { start: 0, end: 45, status: 'active', dose: '100mg/일' },
      { start: 45, end: 46, status: 'stopped', reason: '위장관 출혈' },
    ]
  },
  {
    name: '클로피도그렐 75mg', category: '항혈소판제',
    periods: [
      { start: 46, end: 120, status: 'active', dose: '75mg/일' },
    ]
  },
  {
    name: '아무로디핀', category: '항고혈압제',
    periods: [
      { start: 0, end: 60, status: 'active', dose: '10mg/일' },
      { start: 60, end: 61, status: 'changed', reason: '용량 분할' },
      { start: 61, end: 120, status: 'active', dose: '5mg/일' },
    ]
  },
  {
    name: '로사르탄 50mg', category: '항고혈압제',
    periods: [
      { start: 61, end: 120, status: 'active', dose: '50mg/일' },
    ]
  },
  {
    name: '메트포르민', category: '경구혈당강하제',
    periods: [
      { start: 0, end: 30, status: 'active', dose: '500mg/일' },
      { start: 30, end: 31, status: 'changed', reason: '용량 증량' },
      { start: 31, end: 90, status: 'active', dose: '1000mg/일' },
      { start: 90, end: 91, status: 'changed', reason: '용량 증량' },
      { start: 91, end: 120, status: 'active', dose: '1500mg/일' },
    ]
  },
]

const months = ['1월', '2월', '3월', '4월']
const totalDays = 120

function barStyle(period) {
  const left = (period.start / totalDays) * 100
  const width = ((period.end - period.start) / totalDays) * 100
  return { left: left + '%', width: width + '%' }
}

function barClass(status) {
  return {
    'bar-active': status === 'active',
    'bar-stopped': status === 'stopped',
    'bar-changed': status === 'changed',
  }
}
</script>

<template>
  <div class="mt-wrap">
    <h4 class="section-title">약물 타임라인 (Medication Timeline)</h4>
    <div class="mt-desc">홍길동 환자 — 고혈압 + 당뇨 + 항혈소판 치료 이력 (2025.01~04)</div>

    <div class="mt-chart">
      <!-- Time axis -->
      <div class="mt-axis">
        <div class="mt-axis-label"></div>
        <div class="mt-axis-track">
          <span v-for="(m, i) in months" :key="i" class="mt-month" :style="{ left: (i / months.length * 100) + '%' }">{{ m }}</span>
        </div>
      </div>

      <!-- Medication rows -->
      <div
        v-for="med in medications" :key="med.name"
        class="mt-row"
        @mouseenter="hoveredMed = med.name"
        @mouseleave="hoveredMed = null"
        :class="{ 'mt-row-hovered': hoveredMed === med.name }"
      >
        <div class="mt-name">
          <span class="mt-drug">{{ med.name }}</span>
          <span class="mt-category">{{ med.category }}</span>
        </div>
        <div class="mt-track">
          <div
            v-for="(p, i) in med.periods" :key="i"
            :class="['mt-bar', barClass(p.status)]"
            :style="barStyle(p)"
          >
            <div class="mt-tooltip" v-if="p.status === 'stopped'">
              <SvgIcon name="alert-circle" :size="10" /> {{ p.reason }}
            </div>
            <div class="mt-tooltip" v-else-if="p.status === 'changed'">
              <SvgIcon name="refresh" :size="10" /> {{ p.reason }}
            </div>
            <span class="mt-dose" v-if="p.status === 'active' && (p.end - p.start) > 15">{{ p.dose }}</span>
          </div>
        </div>
      </div>

      <!-- Legend -->
      <div class="mt-legend">
        <span class="mt-legend-item"><span class="mt-legend-dot active"></span> 복용 중</span>
        <span class="mt-legend-item"><span class="mt-legend-dot stopped"></span> 부작용 중단</span>
        <span class="mt-legend-item"><span class="mt-legend-dot changed"></span> 용량/약물 변경</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mt-wrap { margin: 20px 0 28px; }
.section-title { font-size: 14px; font-weight: 600; color: var(--vp-c-text-1); margin: 0 0 4px; }
.mt-desc { font-size: 12px; color: var(--vp-c-text-3); margin-bottom: 16px; }

.mt-chart {
  border: 1px solid var(--vp-c-divider); border-radius: 12px;
  background: var(--vp-c-bg); padding: 16px; overflow: hidden;
}

/* Axis */
.mt-axis { display: flex; align-items: center; margin-bottom: 8px; }
.mt-axis-label { width: 140px; flex-shrink: 0; }
.mt-axis-track { flex: 1; position: relative; height: 20px; border-bottom: 1px solid var(--vp-c-divider); }
.mt-month {
  position: absolute; font-size: 10px; color: var(--vp-c-text-3); font-weight: 600;
  transform: translateX(-50%); top: 2px;
}

/* Row */
.mt-row {
  display: flex; align-items: center; padding: 6px 0;
  border-bottom: 1px solid var(--vp-c-divider); transition: background 0.1s;
}
.mt-row:last-of-type { border-bottom: none; }
.mt-row-hovered { background: var(--vp-c-bg-soft); }

.mt-name { width: 140px; flex-shrink: 0; padding-right: 12px; }
.mt-drug { display: block; font-size: 12px; font-weight: 600; color: var(--vp-c-text-1); white-space: nowrap; }
.mt-category { display: block; font-size: 10px; color: var(--vp-c-text-3); }

.mt-track { flex: 1; position: relative; height: 24px; }

.mt-bar {
  position: absolute; height: 20px; top: 2px; border-radius: 4px;
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; transition: opacity 0.15s; cursor: default;
}
.mt-bar.bar-active { background: #3B82F6; }
.mt-bar.bar-stopped { background: #DC2626; min-width: 8px; }
.mt-bar.bar-changed { background: #EAB308; min-width: 8px; }

.mt-dose { color: rgba(255,255,255,0.9); font-size: 9px; font-weight: 500; white-space: nowrap; padding: 0 6px; }

.mt-tooltip {
  position: absolute; bottom: calc(100% + 4px); left: 50%; transform: translateX(-50%);
  background: #0F172A; color: #F8FAFC; padding: 3px 8px; border-radius: 4px;
  font-size: 9px; white-space: nowrap; display: flex; align-items: center; gap: 3px;
  pointer-events: none;
}

/* Legend */
.mt-legend { display: flex; gap: 16px; margin-top: 12px; padding-top: 8px; border-top: 1px solid var(--vp-c-divider); }
.mt-legend-item { display: flex; align-items: center; gap: 4px; font-size: 11px; color: var(--vp-c-text-3); }
.mt-legend-dot { width: 12px; height: 8px; border-radius: 2px; }
.mt-legend-dot.active { background: #3B82F6; }
.mt-legend-dot.stopped { background: #DC2626; }
.mt-legend-dot.changed { background: #EAB308; }
</style>
