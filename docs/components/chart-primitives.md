# Chart Primitives (차트 원자 요소)

의료 데이터 시각화 차트를 구성하는 **재사용 가능한 원자 요소**입니다. 이 요소들을 조합하여 다양한 차트를 만들 수 있습니다.

<span class="status-badge beta">Beta</span>

---

## 구조

```
Primitives (원자 요소)          → 단독으로 사용 가능
├── TimeAxis                   — 시간축 + 월 마커
├── TrackRow                   — 트랙 컨테이너 (라벨 + 접기)
├── BarSegment                 — 기간 바 (시작~종료)
├── DotMarker                  — 시점 도트 (●)
├── TriangleMarker             — 삼각형 마커 (▲)
├── DiamondMarker              — 다이아몬드 마커 (◆)
├── VLineMarker                — 수직선 마커 (│)
├── Sparkline                  — 미니 라인차트
├── FrameCursor                — 프레임 마커 (노란선)
└── Crosshair                  — 호버 크로스헤어

Composed (조합 차트)            → Primitives로 구성
├── ClinicalTimeline           — 멀티트랙 NLE 타임라인
├── MedicationTimeline         — 약물 타임라인
├── VitalChart                 — 바이탈 추이 차트
└── AdherenceHeatmap           — 복약 순응도 히트맵
```

---

## Primitives 상세

### TimeAxis

시간축 + 월/주 마커를 표시합니다. 줌/스크롤에 따라 마커 간격이 자동 조절됩니다.

```tsx
<TimeAxis :months="monthMarkers" :dayToX="dayToX" :isVisible="isVisible"
  @hover="onHover" @leave="onLeave" @click="onClick" />
```

| Prop | Type | 설명 |
|------|------|------|
| `months` | `{ day, label }[]` | 월 마커 데이터 |
| `dayToX` | `(day) => px` | 일수 → 픽셀 변환 함수 |
| `isVisible` | `(day) => boolean` | 가시 영역 판정 함수 |

---

### TrackRow

트랙 컨테이너. 라벨 + 접기/펼치기 + 내부 콘텐츠 영역을 제공합니다.

```tsx
<TrackRow name="약 처방" color="#22C55E" :collapsed="false" height="150px"
  @toggle="onToggle" @hover="onHover" @click="onClick">
  <!-- Primitives를 여기에 배치 -->
</TrackRow>
```

| Prop | Type | 설명 |
|------|------|------|
| `name` | `string` | 트랙 이름 |
| `color` | `string` | 트랙 식별 컬러 |
| `collapsed` | `boolean` | 접힘 상태 |
| `height` | `string` | 트랙 높이 |

---

### BarSegment

기간 기반 이벤트를 가로 바로 표시합니다. 진단, 처방 등에 사용됩니다.

```tsx
<BarSegment :left="100" :width="200" :top="2" :height="18"
  color="#3B82F6" label="I10 고혈압"
  endType="stopped" endReason="부작용" />
```

| Prop | Type | 설명 |
|------|------|------|
| `left` | `number` | X 위치 (px) |
| `width` | `number` | 너비 (px) |
| `top` | `number` | Y 오프셋 (다중 바 배치) |
| `height` | `number` | 높이 |
| `color` | `string` | 배경색 |
| `label` | `string` | 바 내부 텍스트 |
| `endType` | `'stopped' \| 'changed' \| null` | 종료 마커 |
| `endReason` | `string` | 종료 사유 (툴팁) |

---

### DotMarker

시점 기반 이벤트를 원형 도트로 표시합니다. 증상 기록 등에 사용됩니다.

```tsx
<DotMarker :x="150" color="#8B5CF6" :size="10" label="두통" />
```

| Prop | Type | 설명 |
|------|------|------|
| `x` | `number` | X 위치 |
| `color` | `string` | 색상 |
| `size` | `number` | 크기 (px) |
| `label` | `string` | 툴팁 텍스트 |

---

### TriangleMarker

1회성 시점 이벤트를 삼각형으로 표시합니다. 주사, 시술 등에 사용됩니다.

```tsx
<TriangleMarker :x="200" color="#F97316" label="독감 백신" />
```

---

### DiamondMarker

시점 이벤트를 다이아몬드로 표시합니다. 검사, 결과 확인 등에 사용됩니다.

```tsx
<DiamondMarker :x="300" color="#EC4899" label="HbA1c 7.5%" :highlight="true" />
```

| Prop | Type | 설명 |
|------|------|------|
| `highlight` | `boolean` | 강조 표시 (글로우 효과) |

---

### Sparkline

미니 라인차트. 바이탈 추이 등의 트렌드를 트랙 안에 표시합니다.

```tsx
<Sparkline :points="[160,155,148,145,140]" color="#DC2626"
  :width="560" :height="32" :min="100" :max="170"
  :bandMin="90" :bandMax="139" bandColor="#22C55E" />
```

| Prop | Type | 설명 |
|------|------|------|
| `points` | `number[]` | 데이터 포인트 |
| `bandMin/bandMax` | `number` | 정상 범위 밴드 |
| `bandColor` | `string` | 밴드 색상 |

---

### FrameCursor / Crosshair

타임라인 위 인터랙션 커서입니다.

```tsx
<FrameCursor :x="frameX" :visible="true" />   <!-- 노란 프레임 마커 -->
<Crosshair :x="hoverX" :visible="true" />     <!-- 회색 호버 가이드 -->
```

---

## 토큰 매핑

| 토큰 | Light | Dark |
|------|-------|------|
| `--chart-track-label-bg` | `var(--gray-50)` | `var(--gray-800)` |
| `--chart-track-label-width` | `100px` | `100px` |
| `--chart-track-border` | `var(--gray-200)` | `var(--gray-700)` |
| `--chart-crosshair-color` | `var(--gray-400)` | `var(--gray-500)` |
| `--chart-frame-color` | `#EAB308` | `#EAB308` |
| `--chart-dot-border` | `var(--gray-0)` | `var(--gray-900)` |
| `--chart-bar-radius` | `3px` | `3px` |
| `--chart-bar-label-font-size` | `9px` | `9px` |
| `--chart-sparkline-stroke-width` | `1.5px` | `1.5px` |
| `--chart-band-opacity` | `0.06` | `0.06` |

---

## 조합 예시

```tsx
// 커스텀 차트: 약물 + 검사만 표시
<div class="my-chart">
  <TimeAxis :months="months" :dayToX="dayToX" :isVisible="isVisible" />

  <TrackRow name="약 처방" color="#22C55E" height="80px">
    <BarSegment v-for="med in medications" :key="med.id"
      :left="dayToX(med.start)" :width="dayToX(med.end) - dayToX(med.start)"
      :color="med.color" :label="med.name" />
  </TrackRow>

  <TrackRow name="검사" color="#EC4899" height="36px">
    <DiamondMarker v-for="lab in labResults" :key="lab.id"
      :x="dayToX(lab.day)" :label="lab.name" />
  </TrackRow>
</div>
```
