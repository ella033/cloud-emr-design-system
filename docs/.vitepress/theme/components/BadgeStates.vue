<script setup>
const colors = ['blue', 'green', 'red', 'yellow', 'teal', 'gray']
const sizes = ['xsmall', 'small', 'medium', 'large']

const colorMap = {
  blue: { solid: { bg: '#3B82F6', text: '#fff' }, subtle: { bg: '#DBEAFE', text: '#1D4ED8' } },
  green: { solid: { bg: '#22C55E', text: '#fff' }, subtle: { bg: '#DCFCE7', text: '#15803D' } },
  red: { solid: { bg: '#DC2626', text: '#fff' }, subtle: { bg: '#FEE2E2', text: '#DC2626' } },
  yellow: { solid: { bg: '#EAB308', text: '#fff' }, subtle: { bg: '#FEF9C3', text: '#A16207' } },
  teal: { solid: { bg: '#14B8A6', text: '#fff' }, subtle: { bg: '#CCFBF1', text: '#0F766E' } },
  gray: { solid: { bg: '#64748B', text: '#fff' }, subtle: { bg: '#F1F5F9', text: '#475569' } },
}

const sizeMap = {
  xsmall: { fontSize: '11px', padding: '1px 6px' },
  small: { fontSize: '12px', padding: '2px 8px' },
  medium: { fontSize: '14px', padding: '4px 10px' },
  large: { fontSize: '16px', padding: '6px 12px' },
}

const emrExamples = [
  { label: '대기', variant: 'solid', color: 'yellow' },
  { label: '진료중', variant: 'solid', color: 'blue' },
  { label: '진료완료', variant: 'solid', color: 'green' },
  { label: '응급', variant: 'solid', color: 'red' },
  { label: '취소', variant: 'subtle', color: 'gray' },
  { label: '정상', variant: 'subtle', color: 'green' },
  { label: '주의', variant: 'subtle', color: 'yellow' },
  { label: '위험', variant: 'solid', color: 'red' },
  { label: '처방완료', variant: 'subtle', color: 'blue' },
  { label: '조제중', variant: 'subtle', color: 'teal' },
]
</script>

<template>
  <div class="badge-states-wrap">
    <!-- Fill variant -->
    <h4 class="section-title">Fill Variant (강조형)</h4>
    <div class="badge-row">
      <div v-for="c in colors" :key="'solid-'+c" class="badge-col">
        <span
          class="badge"
          :style="{
            background: colorMap[c].solid.bg,
            color: colorMap[c].solid.text,
          }"
        >{{ c }}</span>
        <span class="badge-color-name">{{ c }}</span>
      </div>
    </div>

    <!-- Info variant (둥근 네모) -->
    <h4 class="section-title">Info Variant (정보 표현 — 둥근 네모)</h4>
    <div class="badge-row">
      <div v-for="item in ['건강보험', 'A+ 형', '고혈압', '당뇨', '페니실린 알러지', '내과']" :key="'info-'+item" class="badge-col">
        <span class="badge badge-info">{{ item }}</span>
      </div>
    </div>

    <!-- Subtle variant -->
    <h4 class="section-title">Subtle Variant (보조형)</h4>
    <div class="badge-row">
      <div v-for="c in colors" :key="'subtle-'+c" class="badge-col">
        <span
          class="badge"
          :style="{
            background: colorMap[c].subtle.bg,
            color: colorMap[c].subtle.text,
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
.badge-info {
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  padding: 3px 10px;
  font-size: 12px;
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
