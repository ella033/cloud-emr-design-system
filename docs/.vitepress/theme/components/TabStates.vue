<script setup>
import { ref } from 'vue'
const activeTab = ref('all')
const activePill = ref('waiting')
const activeSegment = ref('soap')

const tabs = [
  { key: 'all', label: '전체', count: 12 },
  { key: 'waiting', label: '대기', count: 5 },
  { key: 'progress', label: '진료중', count: 3 },
  { key: 'done', label: '완료', count: 4 },
]

const pillTabs = [
  { key: 'waiting', label: '대기' },
  { key: 'progress', label: '진료중' },
  { key: 'done', label: '완료' },
]

const segmentTabs = [
  { key: 'soap', label: 'SOAP' },
  { key: 'free', label: '자유형식' },
  { key: 'template', label: '템플릿' },
]
</script>

<template>
  <div class="tab-states-wrap">
    <!-- Underline -->
    <h4 class="section-title">Underline (기본)</h4>
    <div class="tab-demo">
      <div class="tab-underline">
        <div
          v-for="t in tabs"
          :key="t.key"
          :class="['tab-item', { active: activeTab === t.key }]"
          @click="activeTab = t.key"
        >
          {{ t.label }}
          <span v-if="t.count" class="tab-count">{{ t.count }}</span>
        </div>
      </div>
      <div class="tab-states-row">
        <span class="tab-state">Default</span>
        <span class="tab-state active-state">Active (파란 밑줄 + 볼드)</span>
        <span class="tab-state">클릭하여 전환해보세요</span>
      </div>
    </div>

    <!-- Pill -->
    <h4 class="section-title">Pill (필터형)</h4>
    <div class="tab-demo">
      <div class="tab-pill-row">
        <div
          v-for="t in pillTabs"
          :key="t.key"
          :class="['tab-pill', { active: activePill === t.key }]"
          @click="activePill = t.key"
        >
          {{ t.label }}
        </div>
      </div>
    </div>

    <!-- Segmented -->
    <h4 class="section-title">Segmented (모드 전환)</h4>
    <div class="tab-demo">
      <div class="tab-segment-wrap">
        <div
          v-for="t in segmentTabs"
          :key="t.key"
          :class="['tab-segment', { active: activeSegment === t.key }]"
          @click="activeSegment = t.key"
        >
          {{ t.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-states-wrap { margin: 20px 0 28px; }

.section-title {
  font-size: 14px; font-weight: 600; color: var(--vp-c-text-1);
  margin: 20px 0 12px;
}
.section-title:first-child { margin-top: 0; }

.tab-demo {
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
}

/* Underline */
.tab-underline {
  display: flex;
  border-bottom: 2px solid var(--vp-c-divider);
}
.tab-item {
  padding: 8px 16px;
  font-size: 13px;
  color: var(--vp-c-text-3);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  gap: 4px;
}
.tab-item:hover { color: var(--vp-c-text-1); }
.tab-item.active {
  color: #3B82F6;
  font-weight: 600;
  border-bottom-color: #3B82F6;
}
.tab-count {
  font-size: 10px;
  background: var(--vp-c-bg-soft);
  padding: 0 5px;
  border-radius: 8px;
  color: var(--vp-c-text-3);
}
.tab-item.active .tab-count {
  background: #DBEAFE;
  color: #1D4ED8;
}
.dark .tab-item.active .tab-count {
  background: #172554;
  color: #60A5FA;
}

.tab-states-row {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}
.tab-state {
  font-size: 10px;
  color: var(--vp-c-text-3);
}
.tab-state.active-state { color: #3B82F6; font-weight: 600; }

/* Pill */
.tab-pill-row { display: flex; gap: 8px; }
.tab-pill {
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 13px;
  cursor: pointer;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  transition: all 0.15s;
  font-weight: 500;
}
.tab-pill:hover { background: var(--vp-c-bg-alt); }
.tab-pill.active {
  background: #3B82F6;
  color: #fff;
}

/* Segmented */
.tab-segment-wrap {
  display: inline-flex;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}
.tab-segment {
  padding: 8px 16px;
  font-size: 13px;
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: all 0.15s;
  font-weight: 500;
}
.tab-segment.active {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
</style>
