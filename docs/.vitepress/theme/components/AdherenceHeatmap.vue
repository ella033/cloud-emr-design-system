<script setup>
// 복약 순응도 히트맵 데이터 (0=미복약, 1=복약, 2=부작용)
const months = [
  { name: '3월', days: generateDays(31, [5,12,13,26]) },
  { name: '4월', days: generateDays(30, [6,7,17]) },
]

function generateDays(count, missedDays) {
  return Array.from({ length: count }, (_, i) => {
    const day = i + 1
    if (day === 15 && count === 31) return 2 // 부작용 보고일
    return missedDays.includes(day) ? 0 : 1
  })
}

function dayClass(v) {
  if (v === 2) return 'day-adverse'
  if (v === 1) return 'day-taken'
  return 'day-missed'
}

function adherenceRate(days) {
  const taken = days.filter(d => d >= 1).length
  return Math.round((taken / days.length) * 100)
}
</script>

<template>
  <div class="ah-wrap">
    <h4 class="section-title">복약 순응도 히트맵</h4>
    <div class="ah-desc">홍길동 환자 — 아스피린 100mg 복약 기록 (2025.03~04)</div>

    <div class="ah-chart">
      <div v-for="month in months" :key="month.name" class="ah-month">
        <div class="ah-month-header">
          <span class="ah-month-name">{{ month.name }}</span>
          <span class="ah-month-rate">순응도 {{ adherenceRate(month.days) }}%</span>
        </div>
        <div class="ah-grid">
          <div
            v-for="(d, i) in month.days" :key="i"
            :class="['ah-day', dayClass(d)]"
            :title="`${month.name} ${i+1}일 - ${d === 2 ? '부작용 보고' : d === 1 ? '복약' : '미복약'}`"
          ></div>
        </div>
      </div>

      <div class="ah-legend">
        <span class="ah-legend-item"><span class="ah-ldot day-taken"></span> 복약</span>
        <span class="ah-legend-item"><span class="ah-ldot day-missed"></span> 미복약</span>
        <span class="ah-legend-item"><span class="ah-ldot day-adverse"></span> 부작용 보고</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ah-wrap { margin: 20px 0 28px; }
.section-title { font-size: 14px; font-weight: 600; color: var(--vp-c-text-1); margin: 0 0 4px; }
.ah-desc { font-size: 12px; color: var(--vp-c-text-3); margin-bottom: 16px; }

.ah-chart {
  border: 1px solid var(--vp-c-divider); border-radius: 12px;
  background: var(--vp-c-bg); padding: 16px;
}

.ah-month { margin-bottom: 14px; }
.ah-month:last-of-type { margin-bottom: 0; }
.ah-month-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.ah-month-name { font-size: 13px; font-weight: 600; color: var(--vp-c-text-1); }
.ah-month-rate { font-size: 12px; font-weight: 600; color: #3B82F6; font-family: var(--vp-font-family-mono); }

.ah-grid {
  display: flex; gap: 3px; flex-wrap: wrap;
}
.ah-day {
  width: 14px; height: 14px; border-radius: 2px; cursor: default;
  transition: transform 0.1s;
}
.ah-day:hover { transform: scale(1.3); }
.ah-day.day-taken { background: #22C55E; }
.ah-day.day-missed { background: var(--vp-c-bg-alt); border: 1px solid var(--vp-c-divider); }
.ah-day.day-adverse { background: #DC2626; }

.ah-legend {
  display: flex; gap: 16px; margin-top: 14px; padding-top: 10px; border-top: 1px solid var(--vp-c-divider);
}
.ah-legend-item { display: flex; align-items: center; gap: 4px; font-size: 11px; color: var(--vp-c-text-3); }
.ah-ldot { width: 12px; height: 12px; border-radius: 2px; }
.ah-ldot.day-taken { background: #22C55E; }
.ah-ldot.day-missed { background: var(--vp-c-bg-alt); border: 1px solid var(--vp-c-divider); }
.ah-ldot.day-adverse { background: #DC2626; }
</style>
