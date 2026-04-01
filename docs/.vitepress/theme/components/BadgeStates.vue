<script setup>
const colors = ['blue', 'green', 'red', 'yellow', 'teal', 'gray']
const sizes = ['xsmall', 'small', 'medium', 'large']

const colorMap = {
  blue: { fill: { bg: '#3B82F6', text: '#fff' }, weak: { bg: '#DBEAFE', text: '#1D4ED8' } },
  green: { fill: { bg: '#22C55E', text: '#fff' }, weak: { bg: '#DCFCE7', text: '#15803D' } },
  red: { fill: { bg: '#DC2626', text: '#fff' }, weak: { bg: '#FEE2E2', text: '#DC2626' } },
  yellow: { fill: { bg: '#EAB308', text: '#fff' }, weak: { bg: '#FEF9C3', text: '#A16207' } },
  teal: { fill: { bg: '#14B8A6', text: '#fff' }, weak: { bg: '#CCFBF1', text: '#0F766E' } },
  gray: { fill: { bg: '#64748B', text: '#fff' }, weak: { bg: '#F1F5F9', text: '#475569' } },
}

const sizeMap = {
  xsmall: { fontSize: '11px', padding: '1px 6px' },
  small: { fontSize: '12px', padding: '2px 8px' },
  medium: { fontSize: '14px', padding: '4px 10px' },
  large: { fontSize: '16px', padding: '6px 12px' },
}

const emrExamples = [
  { label: '대기', variant: 'fill', color: 'yellow' },
  { label: '진료중', variant: 'fill', color: 'blue' },
  { label: '진료완료', variant: 'fill', color: 'green' },
  { label: '응급', variant: 'fill', color: 'red' },
  { label: '취소', variant: 'weak', color: 'gray' },
  { label: '정상', variant: 'weak', color: 'green' },
  { label: '주의', variant: 'weak', color: 'yellow' },
  { label: '위험', variant: 'fill', color: 'red' },
  { label: '처방완료', variant: 'weak', color: 'blue' },
  { label: '조제중', variant: 'weak', color: 'teal' },
]
</script>

<template>
  <div class="badge-states-wrap">
    <!-- Fill variant -->
    <h4 class="section-title">Fill Variant (강조형)</h4>
    <div class="badge-row">
      <div v-for="c in colors" :key="'fill-'+c" class="badge-col">
        <span
          class="badge"
          :style="{
            background: colorMap[c].fill.bg,
            color: colorMap[c].fill.text,
          }"
        >{{ c }}</span>
        <span class="badge-color-name">{{ c }}</span>
      </div>
    </div>

    <!-- Weak variant -->
    <h4 class="section-title">Weak Variant (보조형)</h4>
    <div class="badge-row">
      <div v-for="c in colors" :key="'weak-'+c" class="badge-col">
        <span
          class="badge"
          :style="{
            background: colorMap[c].weak.bg,
            color: colorMap[c].weak.text,
          }"
        >{{ c }}</span>
        <span class="badge-color-name">{{ c }}</span>
      </div>
    </div>

    <!-- Sizes -->
    <h4 class="section-title">Sizes</h4>
    <div class="badge-row align-center">
      <div v-for="s in sizes" :key="s" class="badge-col">
        <span
          class="badge"
          :style="{
            background: '#3B82F6',
            color: '#fff',
            fontSize: sizeMap[s].fontSize,
            padding: sizeMap[s].padding,
          }"
        >진료중</span>
        <span class="badge-color-name">{{ s }}</span>
        <span class="badge-size-info">{{ sizeMap[s].fontSize }} / {{ sizeMap[s].padding }}</span>
      </div>
    </div>

    <!-- EMR Examples -->
    <h4 class="section-title">EMR 활용 예시</h4>
    <div class="badge-row">
      <span
        v-for="ex in emrExamples"
        :key="ex.label"
        class="badge"
        :style="{
          background: colorMap[ex.color][ex.variant].bg,
          color: colorMap[ex.color][ex.variant].text,
          fontSize: '12px',
          padding: '2px 8px',
        }"
      >{{ ex.label }}</span>
    </div>
  </div>
</template>

<style scoped>
.badge-states-wrap {
  margin: 20px 0 28px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 20px 0 12px;
}
.section-title:first-child { margin-top: 0; }

.badge-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
}
.badge-row.align-center { align-items: center; }

.badge-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
}

.badge-color-name {
  font-size: 10px;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
}

.badge-size-info {
  font-size: 9px;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
}
</style>
