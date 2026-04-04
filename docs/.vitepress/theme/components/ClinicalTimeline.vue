<script setup>
import { ref, computed } from 'vue'

// State
const zoomLevel = ref(1) // 0.5=6개월, 1=3개월, 2=1개월
const scrollOffset = ref(0)
const hoverDay = ref(null)
const frameDay = ref(60) // 프레임 마커 (3/1 기준 60일째)
const collapsedTracks = ref([])

const zoomOptions = [
  { label: '6개월', value: 0.5 },
  { label: '3개월', value: 1 },
  { label: '1개월', value: 2 },
]

// 데이터: 2025.01.01 기준 day 0
const totalDays = 150 // 5개월
const startDate = new Date(2025, 0, 1)

function dayToDate(day) {
  const d = new Date(startDate)
  d.setDate(d.getDate() + day)
  return `${d.getMonth() + 1}/${d.getDate()}`
}
function dayToMonth(day) {
  const d = new Date(startDate)
  d.setDate(d.getDate() + day)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}`
}

// 트랙 데이터
const tracks = [
  {
    id: 'symptom', name: '증상', type: 'dot', color: '#8B5CF6',
    items: [
      { day: 5, label: '두통' },
      { day: 20, label: '발열 38.2°C' },
      { day: 58, label: '기침' },
      { day: 62, label: '두통+어지러움' },
      { day: 90, label: '피로감' },
      { day: 105, label: '구역' },
    ]
  },
  {
    id: 'diagnosis', name: '진단(상병)', type: 'bar', color: '#3B82F6',
    items: [
      { start: 20, end: 35, label: 'J06.9 급성 상기도감염', color: '#60A5FA' },
      { start: 0, end: 150, label: 'I10 본태성 고혈압', color: '#3B82F6' },
      { start: 30, end: 150, label: 'E11 2형 당뇨병', color: '#2563EB' },
    ]
  },
  {
    id: 'medication', name: '약 처방', type: 'step-bar', color: '#22C55E',
    items: [
      { start: 0, end: 45, label: '아스피린 100mg', dose: '100mg', color: '#22C55E', endType: 'stopped', endReason: '위장관 출혈' },
      { start: 46, end: 150, label: '클로피도그렐 75mg', dose: '75mg', color: '#16A34A' },
      { start: 0, end: 60, label: '아무로디핀 10mg', dose: '10mg', color: '#14B8A6' },
      { start: 61, end: 150, label: '아무로디핀 5mg', dose: '5mg', color: '#14B8A6' },
      { start: 61, end: 150, label: '로사르탄 50mg', dose: '50mg', color: '#0D9488' },
      { start: 0, end: 30, label: '메트포르민', dose: '500mg', color: '#EAB308' },
      { start: 31, end: 90, label: '메트포르민', dose: '1000mg', color: '#CA8A04' },
      { start: 91, end: 150, label: '메트포르민', dose: '1500mg', color: '#A16207' },
    ]
  },
  {
    id: 'injection', name: '주사', type: 'triangle', color: '#F97316',
    items: [
      { day: 15, label: '독감 백신' },
      { day: 95, label: '인슐린 글라진 시작' },
    ]
  },
  {
    id: 'lab', name: '검사', type: 'diamond', color: '#EC4899',
    items: [
      { day: 10, label: 'CBC' },
      { day: 30, label: '간기능(LFT)' },
      { day: 60, label: 'HbA1c 7.5%', highlight: true },
      { day: 90, label: 'CBC + 지질검사' },
      { day: 120, label: 'HbA1c 6.8%' },
    ]
  },
  {
    id: 'vital', name: '바이탈', type: 'sparkline', color: '#DC2626',
    points: [160, 155, 148, 145, 140, 138, 135, 132, 130, 128, 125, 125]
  },
  {
    id: 'visit', name: '내원', type: 'vline', color: '#64748B',
    items: [
      { day: 0 }, { day: 20 }, { day: 45 }, { day: 60 }, { day: 90 }, { day: 120 },
    ]
  },
]

// 월 마커 생성
const monthMarkers = computed(() => {
  const markers = []
  for (let m = 0; m < 5; m++) {
    markers.push({ day: m * 30, label: dayToMonth(m * 30) })
  }
  return markers
})

// 위치 계산
const visibleDays = computed(() => totalDays / zoomLevel.value)
const pxPerDay = computed(() => 560 / visibleDays.value)

function dayToX(day) {
  return (day - scrollOffset.value) * pxPerDay.value
}

function isVisible(day) {
  const xPos = dayToX(day)
  return xPos >= 0 && xPos <= 560
}

function isTrackCollapsed(id) { return collapsedTracks.value.includes(id) }
function toggleTrack(id) {
  const i = collapsedTracks.value.indexOf(id)
  if (i >= 0) collapsedTracks.value.splice(i, 1)
  else collapsedTracks.value.push(id)
}

// 스크롤 핸들러
function onTimelineScroll(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  hoverDay.value = Math.round(scrollOffset.value + mouseX / pxPerDay.value)
}
function onTimelineLeave() { hoverDay.value = null }

function onTimelineClick(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  frameDay.value = Math.round(scrollOffset.value + mouseX / pxPerDay.value)
}

// 줌 변경
function setZoom(val) {
  zoomLevel.value = val
  if (scrollOffset.value + visibleDays.value > totalDays) {
    scrollOffset.value = Math.max(0, totalDays - visibleDays.value)
  }
}

// 스크롤바 드래그
function scrollTo(direction) {
  const step = 15
  scrollOffset.value = Math.max(0, Math.min(totalDays - visibleDays.value, scrollOffset.value + (direction === 'right' ? step : -step)))
}

// 프레임 정보
const frameInfo = computed(() => {
  if (frameDay.value === null) return null
  const d = frameDay.value
  const info = { date: dayToDate(d), symptoms: [], diagnoses: [], meds: [], injections: [], labs: [] }
  tracks.forEach(t => {
    if (t.type === 'dot' && t.items) t.items.filter(i => Math.abs(i.day - d) < 5).forEach(i => info.symptoms.push(i.label))
    if (t.type === 'bar' && t.items) t.items.filter(i => d >= i.start && d <= i.end).forEach(i => info.diagnoses.push(i.label))
    if (t.type === 'step-bar' && t.items) t.items.filter(i => d >= i.start && d <= i.end).forEach(i => info.meds.push(`${i.label} ${i.dose}`))
    if (t.type === 'triangle' && t.items) t.items.filter(i => Math.abs(i.day - d) < 5).forEach(i => info.injections.push(i.label))
    if (t.type === 'diamond' && t.items) t.items.filter(i => Math.abs(i.day - d) < 5).forEach(i => info.labs.push(i.label))
  })
  return info
})
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
        <button class="ct-nav-btn" @click="scrollTo('left')"><SvgIcon name="chevron-left" :size="14" /></button>
        <span class="ct-nav-info">{{ dayToMonth(scrollOffset) }} ~ {{ dayToMonth(scrollOffset + visibleDays) }}</span>
        <button class="ct-nav-btn" @click="scrollTo('right')"><SvgIcon name="chevron-right" :size="14" /></button>
      </div>
    </div>

    <!-- Timeline -->
    <div class="ct-timeline">
      <!-- Time axis -->
      <div class="ct-row ct-axis-row">
        <div class="ct-track-label"></div>
        <div class="ct-track-area ct-axis" @mousemove="onTimelineScroll" @mouseleave="onTimelineLeave" @click="onTimelineClick">
          <template v-for="m in monthMarkers" :key="m.day">
            <div v-if="isVisible(m.day)" class="ct-month-mark" :style="{ left: dayToX(m.day) + 'px' }">
              <span class="ct-month-label">{{ m.label }}</span>
            </div>
          </template>
        </div>
      </div>

      <!-- Track rows -->
      <div v-for="track in tracks" :key="track.id" class="ct-track-group">
        <div class="ct-row" :class="{ collapsed: isTrackCollapsed(track.id) }">
          <div class="ct-track-label" @click="toggleTrack(track.id)">
            <span class="ct-collapse-icon">{{ isTrackCollapsed(track.id) ? '▸' : '▾' }}</span>
            <span class="ct-track-dot" :style="{ background: track.color }"></span>
            <span class="ct-track-name">{{ track.name }}</span>
          </div>
          <div class="ct-track-area" @mousemove="onTimelineScroll" @mouseleave="onTimelineLeave" @click="onTimelineClick"
            v-show="!isTrackCollapsed(track.id)">

            <!-- Hover crosshair -->
            <div v-if="hoverDay !== null && isVisible(hoverDay)" class="ct-crosshair" :style="{ left: dayToX(hoverDay) + 'px' }"></div>

            <!-- Frame marker -->
            <div v-if="frameDay !== null && isVisible(frameDay)" class="ct-frame" :style="{ left: dayToX(frameDay) + 'px' }"></div>

            <!-- Dot type (증상) -->
            <template v-if="track.type === 'dot'">
              <div v-for="item in track.items" :key="item.day"
                v-show="isVisible(item.day)"
                class="ct-dot" :style="{ left: dayToX(item.day) + 'px', background: track.color }"
                :title="item.label">
              </div>
            </template>

            <!-- Bar type (진단) -->
            <template v-if="track.type === 'bar'">
              <div v-for="(item, idx) in track.items" :key="idx"
                class="ct-bar"
                :style="{
                  left: Math.max(0, dayToX(item.start)) + 'px',
                  width: Math.max(4, dayToX(item.end) - Math.max(0, dayToX(item.start))) + 'px',
                  background: item.color || track.color,
                  top: (idx * 22 + 2) + 'px',
                }"
                :title="item.label">
                <span class="ct-bar-label">{{ item.label }}</span>
              </div>
            </template>

            <!-- Step-bar type (약 처방) -->
            <template v-if="track.type === 'step-bar'">
              <div v-for="(item, idx) in track.items" :key="idx"
                class="ct-step-bar"
                :style="{
                  left: Math.max(0, dayToX(item.start)) + 'px',
                  width: Math.max(4, dayToX(item.end) - Math.max(0, dayToX(item.start))) + 'px',
                  background: item.color || track.color,
                  top: (idx * 18 + 2) + 'px',
                }"
                :title="`${item.label} ${item.dose}`">
                <span class="ct-bar-label" v-if="(item.end - item.start) * pxPerDay > 60">{{ item.dose }}</span>
                <span v-if="item.endType === 'stopped'" class="ct-stop-marker" :title="item.endReason">✕</span>
              </div>
            </template>

            <!-- Triangle type (주사) -->
            <template v-if="track.type === 'triangle'">
              <div v-for="item in track.items" :key="item.day"
                v-show="isVisible(item.day)"
                class="ct-triangle" :style="{ left: dayToX(item.day) + 'px' }"
                :title="item.label">
                <span class="ct-tri-shape" :style="{ borderBottomColor: track.color }"></span>
              </div>
            </template>

            <!-- Diamond type (검사) -->
            <template v-if="track.type === 'diamond'">
              <div v-for="item in track.items" :key="item.day"
                v-show="isVisible(item.day)"
                :class="['ct-diamond', { highlight: item.highlight }]"
                :style="{ left: dayToX(item.day) + 'px' }"
                :title="item.label">
                <span class="ct-dia-shape" :style="{ background: track.color }"></span>
              </div>
            </template>

            <!-- Sparkline type (바이탈) -->
            <template v-if="track.type === 'sparkline'">
              <svg class="ct-sparkline" width="560" height="32">
                <polyline
                  :points="track.points.map((v, i) => `${i * (560 / (track.points.length - 1))},${32 - ((v - 120) / 50) * 28}`).join(' ')"
                  fill="none" :stroke="track.color" stroke-width="1.5" stroke-linejoin="round" />
                <!-- 정상 밴드 -->
                <rect x="0" :y="32 - ((139 - 120) / 50) * 28" width="560" :height="((139 - 90) / 50) * 28" fill="#22C55E" opacity="0.06" />
              </svg>
            </template>

            <!-- VLine type (내원) -->
            <template v-if="track.type === 'vline'">
              <div v-for="item in track.items" :key="item.day"
                v-show="isVisible(item.day)"
                class="ct-vline" :style="{ left: dayToX(item.day) + 'px', background: track.color }">
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Frame info panel -->
    <div v-if="frameInfo" class="ct-frame-panel">
      <div class="ct-frame-header">
        <SvgIcon name="clock" :size="12" />
        <span>프레임: {{ frameInfo.date }} (Day {{ frameDay }})</span>
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
      <span class="ct-legend-item"><span class="ct-lg-dot" style="background:#8B5CF6;"></span> 증상 (도트)</span>
      <span class="ct-legend-item"><span class="ct-lg-bar" style="background:#3B82F6;"></span> 진단 (바)</span>
      <span class="ct-legend-item"><span class="ct-lg-bar" style="background:#22C55E;"></span> 약 처방 (스텝바)</span>
      <span class="ct-legend-item"><span class="ct-lg-tri" style="border-bottom-color:#F97316;"></span> 주사 (삼각형)</span>
      <span class="ct-legend-item"><span class="ct-lg-dia" style="background:#EC4899;"></span> 검사 (다이아몬드)</span>
      <span class="ct-legend-item"><span class="ct-lg-line" style="background:#DC2626;"></span> 바이탈 (스파크라인)</span>
      <span class="ct-legend-item"><span class="ct-lg-vl" style="background:#64748B;"></span> 내원</span>
    </div>
  </div>
</template>

<style scoped>
.ct-wrap { margin: 20px 0 28px; }

/* Toolbar */
.ct-toolbar {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 12px; flex-wrap: wrap; gap: 8px;
}
.ct-zoom { display: flex; align-items: center; gap: 4px; }
.ct-zoom-label { font-size: 12px; color: var(--vp-c-text-3); margin-right: 4px; }
.ct-zoom-btn {
  padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 500;
  border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg);
  color: var(--vp-c-text-2); cursor: pointer;
}
.ct-zoom-btn.active { background: #3B82F6; color: #fff; border-color: #3B82F6; }

.ct-nav { display: flex; align-items: center; gap: 6px; }
.ct-nav-btn {
  width: 28px; height: 28px; border-radius: 6px; border: 1px solid var(--vp-c-divider);
  display: flex; align-items: center; justify-content: center;
  background: var(--vp-c-bg); cursor: pointer; color: var(--vp-c-text-2);
}
.ct-nav-btn:hover { background: var(--vp-c-bg-soft); }
.ct-nav-info { font-size: 11px; color: var(--vp-c-text-2); font-family: var(--vp-font-family-mono); }

/* Timeline container */
.ct-timeline {
  border: 1px solid var(--vp-c-divider); border-radius: 12px;
  background: var(--vp-c-bg); overflow: hidden;
}

/* Row */
.ct-row {
  display: flex; border-bottom: 1px solid var(--vp-c-divider);
}
.ct-row:last-child { border-bottom: none; }
.ct-row.collapsed .ct-track-area { display: none; }

/* Track label */
.ct-track-label {
  width: 100px; flex-shrink: 0; padding: 8px; display: flex; align-items: center; gap: 4px;
  border-right: 1px solid var(--vp-c-divider); cursor: pointer;
  font-size: 11px; color: var(--vp-c-text-2); background: var(--vp-c-bg-soft);
  user-select: none;
}
.ct-track-label:hover { background: var(--vp-c-bg-alt); }
.ct-collapse-icon { font-size: 9px; color: var(--vp-c-text-3); width: 10px; }
.ct-track-dot { width: 6px; height: 6px; border-radius: 2px; flex-shrink: 0; }
.ct-track-name { font-weight: 500; white-space: nowrap; }

/* Track area */
.ct-track-area {
  flex: 1; position: relative; min-height: 32px; overflow: hidden; cursor: crosshair;
}

/* Axis */
.ct-axis-row .ct-track-label { background: transparent; cursor: default; }
.ct-axis { min-height: 24px; border-bottom: 2px solid var(--vp-c-divider); }
.ct-month-mark { position: absolute; top: 0; height: 100%; border-left: 1px solid var(--vp-c-divider); }
.ct-month-label { position: absolute; top: 4px; left: 4px; font-size: 9px; font-weight: 600; color: var(--vp-c-text-3); white-space: nowrap; font-family: var(--vp-font-family-mono); }

/* Crosshair */
.ct-crosshair {
  position: absolute; top: 0; width: 1px; height: 100%;
  background: var(--vp-c-text-3); opacity: 0.3; pointer-events: none; z-index: 5;
}

/* Frame marker */
.ct-frame {
  position: absolute; top: 0; width: 2px; height: 100%;
  background: #EAB308; pointer-events: none; z-index: 6;
  box-shadow: 0 0 4px rgba(234,179,8,0.4);
}

/* Dot (증상) */
.ct-dot {
  position: absolute; top: 50%; transform: translate(-50%, -50%);
  width: 10px; height: 10px; border-radius: 50%;
  border: 2px solid var(--vp-c-bg); cursor: pointer; z-index: 2;
}
.ct-dot:hover { transform: translate(-50%, -50%) scale(1.4); }

/* Bar (진단) */
.ct-bar {
  position: absolute; height: 18px; border-radius: 3px;
  display: flex; align-items: center; overflow: hidden; z-index: 1;
}
.ct-bar-label {
  font-size: 9px; color: rgba(255,255,255,0.9); padding: 0 4px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* Step-bar (약 처방) */
.ct-step-bar {
  position: absolute; height: 14px; border-radius: 2px;
  display: flex; align-items: center; overflow: hidden; z-index: 1;
}
.ct-stop-marker {
  position: absolute; right: -1px; top: -1px;
  background: #DC2626; color: #fff; font-size: 8px; font-weight: 700;
  width: 14px; height: 14px; border-radius: 2px;
  display: flex; align-items: center; justify-content: center;
}

/* Triangle (주사) */
.ct-triangle {
  position: absolute; top: 50%; transform: translate(-50%, -50%);
  cursor: pointer; z-index: 2;
}
.ct-tri-shape {
  display: block; width: 0; height: 0;
  border-left: 6px solid transparent; border-right: 6px solid transparent;
  border-bottom: 10px solid;
}
.ct-triangle:hover { transform: translate(-50%, -50%) scale(1.3); }

/* Diamond (검사) */
.ct-diamond {
  position: absolute; top: 50%; transform: translate(-50%, -50%);
  cursor: pointer; z-index: 2;
}
.ct-dia-shape {
  display: block; width: 10px; height: 10px;
  transform: rotate(45deg); border-radius: 1px;
}
.ct-diamond.highlight .ct-dia-shape { box-shadow: 0 0 0 3px rgba(236,72,153,0.3); }
.ct-diamond:hover { transform: translate(-50%, -50%) scale(1.3); }

/* Sparkline (바이탈) */
.ct-sparkline { display: block; width: 100%; height: 32px; }

/* VLine (내원) */
.ct-vline {
  position: absolute; top: 0; width: 1px; height: 100%; opacity: 0.4;
}

/* Track heights */
.ct-track-group:nth-child(2) .ct-track-area { min-height: 36px; } /* 증상 */
.ct-track-group:nth-child(3) .ct-track-area { min-height: 70px; } /* 진단 */
.ct-track-group:nth-child(4) .ct-track-area { min-height: 150px; } /* 약 처방 */
.ct-track-group:nth-child(5) .ct-track-area { min-height: 36px; } /* 주사 */
.ct-track-group:nth-child(6) .ct-track-area { min-height: 36px; } /* 검사 */
.ct-track-group:nth-child(7) .ct-track-area { min-height: 36px; } /* 바이탈 */
.ct-track-group:nth-child(8) .ct-track-area { min-height: 28px; } /* 내원 */

/* Frame info panel */
.ct-frame-panel {
  margin-top: 12px; border: 1px solid var(--vp-c-divider); border-radius: 10px;
  background: var(--vp-c-bg); overflow: hidden;
}
.ct-frame-header {
  display: flex; align-items: center; gap: 6px; padding: 8px 12px;
  background: var(--vp-c-bg-soft); border-bottom: 1px solid var(--vp-c-divider);
  font-size: 12px; font-weight: 600; color: var(--vp-c-text-1);
}
.ct-frame-body { padding: 10px 12px; }
.ct-frame-section { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; flex-wrap: wrap; }
.ct-frame-section:last-child { margin-bottom: 0; }
.ct-frame-label { font-size: 10px; font-weight: 600; color: var(--vp-c-text-3); min-width: 30px; }
.ct-frame-tag {
  padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 500;
}
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
.ct-legend {
  display: flex; gap: 12px; flex-wrap: wrap; margin-top: 12px;
  font-size: 10px; color: var(--vp-c-text-3);
}
.ct-legend-item { display: flex; align-items: center; gap: 4px; }
.ct-lg-dot { width: 8px; height: 8px; border-radius: 50%; }
.ct-lg-bar { width: 16px; height: 8px; border-radius: 2px; }
.ct-lg-tri {
  width: 0; height: 0;
  border-left: 5px solid transparent; border-right: 5px solid transparent;
  border-bottom: 8px solid;
}
.ct-lg-dia { width: 8px; height: 8px; transform: rotate(45deg); border-radius: 1px; }
.ct-lg-line { width: 16px; height: 2px; border-radius: 1px; }
.ct-lg-vl { width: 2px; height: 10px; border-radius: 1px; }
</style>
