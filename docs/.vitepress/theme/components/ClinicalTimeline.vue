<script setup>
import { ref, computed } from 'vue'
import { TimeAxis, TrackRow, Crosshair, FrameCursor, BarSegment, DotMarker, TriangleMarker, DiamondMarker, VLineMarker, Sparkline } from './chart-primitives'

// State
const zoomLevel = ref(1)
const scrollOffset = ref(0)
const hoverX = ref(null)
const hoverDay = ref(null)
const frameDay = ref(60)
const collapsedTracks = ref([])

const zoomOptions = [
  { label: '6개월', value: 0.5 },
  { label: '3개월', value: 1 },
  { label: '1개월', value: 2 },
]

const totalDays = 150
const startDate = new Date(2025, 0, 1)
const trackWidth = 560

function dayToDate(day) {
  const d = new Date(startDate); d.setDate(d.getDate() + day)
  return `${d.getMonth() + 1}/${d.getDate()}`
}
function dayToMonth(day) {
  const d = new Date(startDate); d.setDate(d.getDate() + day)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}`
}

const visibleDays = computed(() => totalDays / zoomLevel.value)
const pxPerDay = computed(() => trackWidth / visibleDays.value)

function dayToX(day) { return (day - scrollOffset.value) * pxPerDay.value }
function xToDay(x) { return Math.round(scrollOffset.value + x / pxPerDay.value) }
function isVisible(day) { const xp = dayToX(day); return xp >= -20 && xp <= trackWidth + 20 }

const monthMarkers = computed(() => {
  const markers = []
  for (let m = 0; m < 6; m++) markers.push({ day: m * 30, label: dayToMonth(m * 30) })
  return markers
})

// Track data
const symptomItems = [
  { day: 5, label: '두통' }, { day: 20, label: '발열 38.2°C' },
  { day: 58, label: '기침' }, { day: 62, label: '두통+어지러움' },
  { day: 90, label: '피로감' }, { day: 105, label: '구역' },
]
const diagnosisItems = [
  { start: 20, end: 35, label: 'J06.9 급성 상기도감염', color: '#60A5FA' },
  { start: 0, end: 150, label: 'I10 본태성 고혈압', color: '#3B82F6' },
  { start: 30, end: 150, label: 'E11 2형 당뇨병', color: '#2563EB' },
]
const medItems = [
  { start: 0, end: 45, label: '아스피린 100mg', color: '#22C55E', endType: 'stopped', endReason: '위장관 출혈' },
  { start: 46, end: 150, label: '클로피도그렐 75mg', color: '#16A34A' },
  { start: 0, end: 60, label: '아무로디핀 10mg', color: '#14B8A6' },
  { start: 61, end: 150, label: '아무로디핀 5mg', color: '#14B8A6' },
  { start: 61, end: 150, label: '로사르탄 50mg', color: '#0D9488' },
  { start: 0, end: 30, label: '메트포르민 500mg', color: '#EAB308' },
  { start: 31, end: 90, label: '메트포르민 1000mg', color: '#CA8A04' },
  { start: 91, end: 150, label: '메트포르민 1500mg', color: '#A16207' },
]
const injectionItems = [
  { day: 15, label: '독감 백신' }, { day: 95, label: '인슐린 글라진 시작' },
]
const labItems = [
  { day: 10, label: 'CBC' }, { day: 30, label: '간기능(LFT)' },
  { day: 60, label: 'HbA1c 7.5%', highlight: true },
  { day: 90, label: 'CBC + 지질검사' }, { day: 120, label: 'HbA1c 6.8%' },
]
const vitalPoints = [160, 155, 148, 145, 140, 138, 135, 132, 130, 128, 125, 125]
const visitItems = [{ day: 0 }, { day: 20 }, { day: 45 }, { day: 60 }, { day: 90 }, { day: 120 }]

// Handlers
function onTrackHover(mouseX) { hoverX.value = mouseX; hoverDay.value = xToDay(mouseX) }
function onTrackLeave() { hoverX.value = null; hoverDay.value = null }
function onTrackClick(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  frameDay.value = xToDay(e.clientX - rect.left)
}
function toggleTrack(id) {
  const i = collapsedTracks.value.indexOf(id)
  if (i >= 0) collapsedTracks.value.splice(i, 1)
  else collapsedTracks.value.push(id)
}
function setZoom(val) {
  zoomLevel.value = val
  if (scrollOffset.value + visibleDays.value > totalDays)
    scrollOffset.value = Math.max(0, totalDays - visibleDays.value)
}
function scrollNav(dir) {
  scrollOffset.value = Math.max(0, Math.min(totalDays - visibleDays.value, scrollOffset.value + (dir === 'right' ? 15 : -15)))
}

// Frame info
const frameInfo = computed(() => {
  if (frameDay.value === null) return null
  const d = frameDay.value
  return {
    date: dayToDate(d), day: d,
    diagnoses: diagnosisItems.filter(i => d >= i.start && d <= i.end).map(i => i.label),
    meds: medItems.filter(i => d >= i.start && d <= i.end).map(i => i.label),
    symptoms: symptomItems.filter(i => Math.abs(i.day - d) < 5).map(i => i.label),
    labs: labItems.filter(i => Math.abs(i.day - d) < 5).map(i => i.label),
    injections: injectionItems.filter(i => Math.abs(i.day - d) < 5).map(i => i.label),
  }
})
const frameX = computed(() => frameDay.value !== null ? dayToX(frameDay.value) : null)
</script>

<template>
  <div class="ct-wrap">
    <!-- Toolbar -->
    <div class="ct-toolbar">
      <div class="ct-zoom">
        <span class="ct-zoom-label">기간:</span>
        <button v-for="z in zoomOptions" :key="z.value"
          :class="['ct-zoom-btn', { active: zoomLevel === z.value }]"
          @click="setZoom(z.value)">{{ z.label }}</button>
      </div>
      <div class="ct-nav">
        <button class="ct-nav-btn" @click="scrollNav('left')"><SvgIcon name="chevron-left" :size="14" /></button>
        <span class="ct-nav-info">{{ dayToMonth(scrollOffset) }} ~ {{ dayToMonth(scrollOffset + visibleDays) }}</span>
        <button class="ct-nav-btn" @click="scrollNav('right')"><SvgIcon name="chevron-right" :size="14" /></button>
      </div>
    </div>

    <!-- Timeline -->
    <div class="ct-timeline">
      <!-- Axis -->
      <div class="ct-axis-row">
        <div class="ct-axis-label-spacer"></div>
        <TimeAxis :months="monthMarkers" :dayToX="dayToX" :isVisible="isVisible"
          @hover="(x) => { hoverX = x; hoverDay = xToDay(x) }"
          @leave="onTrackLeave" @click="(e) => { frameDay = xToDay(hoverX) }">
          <Crosshair :x="hoverX" :visible="hoverX !== null" />
          <FrameCursor :x="frameX" :visible="frameDay !== null" />
        </TimeAxis>
      </div>

      <!-- 증상 -->
      <TrackRow name="증상" color="#8B5CF6" :collapsed="collapsedTracks.includes('symptom')" height="36px"
        @toggle="toggleTrack('symptom')" @hover="onTrackHover" @leave="onTrackLeave" @click="onTrackClick">
        <Crosshair :x="hoverX" :visible="hoverX !== null" />
        <FrameCursor :x="frameX" :visible="frameDay !== null" />
        <DotMarker v-for="item in symptomItems" :key="item.day"
          v-show="isVisible(item.day)" :x="dayToX(item.day)" color="#8B5CF6" :label="item.label" />
      </TrackRow>

      <!-- 진단 -->
      <TrackRow name="진단(상병)" color="#3B82F6" :collapsed="collapsedTracks.includes('diagnosis')" height="70px"
        @toggle="toggleTrack('diagnosis')" @hover="onTrackHover" @leave="onTrackLeave" @click="onTrackClick">
        <Crosshair :x="hoverX" :visible="hoverX !== null" />
        <FrameCursor :x="frameX" :visible="frameDay !== null" />
        <BarSegment v-for="(item, idx) in diagnosisItems" :key="idx"
          :left="Math.max(0, dayToX(item.start))" :width="dayToX(item.end) - Math.max(0, dayToX(item.start))"
          :top="idx * 22 + 2" :color="item.color" :label="item.label" />
      </TrackRow>

      <!-- 약 처방 -->
      <TrackRow name="약 처방" color="#22C55E" :collapsed="collapsedTracks.includes('medication')" height="150px"
        @toggle="toggleTrack('medication')" @hover="onTrackHover" @leave="onTrackLeave" @click="onTrackClick">
        <Crosshair :x="hoverX" :visible="hoverX !== null" />
        <FrameCursor :x="frameX" :visible="frameDay !== null" />
        <BarSegment v-for="(item, idx) in medItems" :key="idx"
          :left="Math.max(0, dayToX(item.start))" :width="dayToX(item.end) - Math.max(0, dayToX(item.start))"
          :top="idx * 18 + 2" :height="14" :color="item.color" :label="item.label"
          :endType="item.endType || null" :endReason="item.endReason || ''" />
      </TrackRow>

      <!-- 주사 -->
      <TrackRow name="주사" color="#F97316" :collapsed="collapsedTracks.includes('injection')" height="36px"
        @toggle="toggleTrack('injection')" @hover="onTrackHover" @leave="onTrackLeave" @click="onTrackClick">
        <Crosshair :x="hoverX" :visible="hoverX !== null" />
        <FrameCursor :x="frameX" :visible="frameDay !== null" />
        <TriangleMarker v-for="item in injectionItems" :key="item.day"
          v-show="isVisible(item.day)" :x="dayToX(item.day)" color="#F97316" :label="item.label" />
      </TrackRow>

      <!-- 검사 -->
      <TrackRow name="검사" color="#EC4899" :collapsed="collapsedTracks.includes('lab')" height="36px"
        @toggle="toggleTrack('lab')" @hover="onTrackHover" @leave="onTrackLeave" @click="onTrackClick">
        <Crosshair :x="hoverX" :visible="hoverX !== null" />
        <FrameCursor :x="frameX" :visible="frameDay !== null" />
        <DiamondMarker v-for="item in labItems" :key="item.day"
          v-show="isVisible(item.day)" :x="dayToX(item.day)" color="#EC4899" :label="item.label" :highlight="item.highlight || false" />
      </TrackRow>

      <!-- 바이탈 -->
      <TrackRow name="바이탈" color="#DC2626" :collapsed="collapsedTracks.includes('vital')" height="36px"
        @toggle="toggleTrack('vital')" @hover="onTrackHover" @leave="onTrackLeave" @click="onTrackClick">
        <Crosshair :x="hoverX" :visible="hoverX !== null" />
        <FrameCursor :x="frameX" :visible="frameDay !== null" />
        <Sparkline :points="vitalPoints" color="#DC2626" :width="560" :height="32" :min="100" :max="170" :bandMin="90" :bandMax="139" />
      </TrackRow>

      <!-- 내원 -->
      <TrackRow name="내원" color="#64748B" :collapsed="collapsedTracks.includes('visit')" height="28px"
        @toggle="toggleTrack('visit')" @hover="onTrackHover" @leave="onTrackLeave" @click="onTrackClick">
        <Crosshair :x="hoverX" :visible="hoverX !== null" />
        <FrameCursor :x="frameX" :visible="frameDay !== null" />
        <VLineMarker v-for="item in visitItems" :key="item.day"
          v-show="isVisible(item.day)" :x="dayToX(item.day)" color="#64748B" />
      </TrackRow>
    </div>

    <!-- Frame info -->
    <div v-if="frameInfo" class="ct-frame-panel">
      <div class="ct-frame-header">
        <SvgIcon name="clock" :size="12" />
        <span>프레임: {{ frameInfo.date }} (Day {{ frameInfo.day }})</span>
      </div>
      <div class="ct-frame-body">
        <div v-if="frameInfo.diagnoses.length" class="ct-frame-section">
          <span class="ct-frame-label">진단</span>
          <span v-for="d in frameInfo.diagnoses" :key="d" class="ct-frame-tag blue">{{ d }}</span>
        </div>
        <div v-if="frameInfo.meds.length" class="ct-frame-section">
          <span class="ct-frame-label">처방</span>
          <span v-for="m in frameInfo.meds" :key="m" class="ct-frame-tag green">{{ m }}</span>
        </div>
        <div v-if="frameInfo.symptoms.length" class="ct-frame-section">
          <span class="ct-frame-label">증상</span>
          <span v-for="s in frameInfo.symptoms" :key="s" class="ct-frame-tag purple">{{ s }}</span>
        </div>
        <div v-if="frameInfo.labs.length" class="ct-frame-section">
          <span class="ct-frame-label">검사</span>
          <span v-for="l in frameInfo.labs" :key="l" class="ct-frame-tag pink">{{ l }}</span>
        </div>
        <div v-if="frameInfo.injections.length" class="ct-frame-section">
          <span class="ct-frame-label">주사</span>
          <span v-for="j in frameInfo.injections" :key="j" class="ct-frame-tag orange">{{ j }}</span>
        </div>
        <div v-if="!frameInfo.diagnoses.length && !frameInfo.meds.length && !frameInfo.symptoms.length && !frameInfo.labs.length && !frameInfo.injections.length" class="ct-frame-empty">
          이 시점에 기록된 정보가 없습니다
        </div>
      </div>
    </div>

    <!-- Legend -->
    <div class="ct-legend">
      <span class="ct-legend-item"><span class="lg-dot" style="background:#8B5CF6;"></span> 증상</span>
      <span class="ct-legend-item"><span class="lg-bar" style="background:#3B82F6;"></span> 진단</span>
      <span class="ct-legend-item"><span class="lg-bar" style="background:#22C55E;"></span> 약 처방</span>
      <span class="ct-legend-item"><span class="lg-tri" style="border-bottom-color:#F97316;"></span> 주사</span>
      <span class="ct-legend-item"><span class="lg-dia" style="background:#EC4899;"></span> 검사</span>
      <span class="ct-legend-item"><span class="lg-line" style="background:#DC2626;"></span> 바이탈</span>
      <span class="ct-legend-item"><span class="lg-vl" style="background:#64748B;"></span> 내원</span>
    </div>
  </div>
</template>

<style scoped>
.ct-wrap { margin: 20px 0 28px; }

.ct-toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px; }
.ct-zoom { display: flex; align-items: center; gap: 4px; }
.ct-zoom-label { font-size: 12px; color: var(--vp-c-text-3); margin-right: 4px; }
.ct-zoom-btn { padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 500; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-2); cursor: pointer; }
.ct-zoom-btn.active { background: #3B82F6; color: #fff; border-color: #3B82F6; }
.ct-nav { display: flex; align-items: center; gap: 6px; }
.ct-nav-btn { width: 28px; height: 28px; border-radius: 6px; border: 1px solid var(--vp-c-divider); display: flex; align-items: center; justify-content: center; background: var(--vp-c-bg); cursor: pointer; color: var(--vp-c-text-2); }
.ct-nav-btn:hover { background: var(--vp-c-bg-soft); }
.ct-nav-info { font-size: 11px; color: var(--vp-c-text-2); font-family: var(--vp-font-family-mono); }

.ct-timeline { border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg); overflow: hidden; }
.ct-axis-row { display: flex; border-bottom: 1px solid var(--vp-c-divider); }
.ct-axis-label-spacer { width: 100px; flex-shrink: 0; border-right: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); }

/* Frame panel */
.ct-frame-panel { margin-top: 12px; border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg); overflow: hidden; }
.ct-frame-header { display: flex; align-items: center; gap: 6px; padding: 8px 12px; background: var(--vp-c-bg-soft); border-bottom: 1px solid var(--vp-c-divider); font-size: 12px; font-weight: 600; color: var(--vp-c-text-1); }
.ct-frame-body { padding: 10px 12px; }
.ct-frame-section { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; flex-wrap: wrap; }
.ct-frame-section:last-child { margin-bottom: 0; }
.ct-frame-label { font-size: 10px; font-weight: 600; color: var(--vp-c-text-3); min-width: 30px; }
.ct-frame-tag { padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 500; }
.ct-frame-tag.blue { background: #DBEAFE; color: #1D4ED8; }
.ct-frame-tag.green { background: #DCFCE7; color: #15803D; }
.ct-frame-tag.purple { background: #EDE9FE; color: #7C3AED; }
.ct-frame-tag.pink { background: #FCE7F3; color: #BE185D; }
.ct-frame-tag.orange { background: #FFF7ED; color: #C2410C; }
.dark .ct-frame-tag.blue { background: #172554; color: #60A5FA; }
.dark .ct-frame-tag.green { background: #052E16; color: #4ADE80; }
.dark .ct-frame-tag.purple { background: #2E1065; color: #A78BFA; }
.dark .ct-frame-tag.pink { background: #500724; color: #F472B6; }
.dark .ct-frame-tag.orange { background: #431407; color: #FB923C; }
.ct-frame-empty { font-size: 11px; color: var(--vp-c-text-3); font-style: italic; }

/* Legend */
.ct-legend { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 12px; font-size: 10px; color: var(--vp-c-text-3); }
.ct-legend-item { display: flex; align-items: center; gap: 4px; }
.lg-dot { width: 8px; height: 8px; border-radius: 50%; }
.lg-bar { width: 16px; height: 8px; border-radius: 2px; }
.lg-tri { width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-bottom: 8px solid; }
.lg-dia { width: 8px; height: 8px; transform: rotate(45deg); border-radius: 1px; }
.lg-line { width: 16px; height: 2px; border-radius: 1px; }
.lg-vl { width: 2px; height: 10px; border-radius: 1px; }
</style>
