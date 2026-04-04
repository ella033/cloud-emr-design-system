# Charts (의료 데이터 시각화)

환자의 처방 이력, 바이탈 추이, 복약 순응도 등을 시각적으로 표현하는 차트 컴포넌트입니다. [Medication Timeline 연구](https://pmc.ncbi.nlm.nih.gov/articles/PMC7647176/)와 Datadog 스타일 인터랙션을 참고하여 설계되었습니다.

<span class="status-badge beta">Beta</span>

---

## 아키텍처

차트는 **Primitives(원자 요소) → Composed(조합 차트)** 2단계로 구성됩니다.

```
Primitives (원자 요소)           → 단독으로 재사용 가능
├── TimeAxis                    — 시간축 + 월 마커
├── TrackRow                    — 트랙 컨테이너 (라벨 + 접기)
├── BarSegment                  — 기간 바 (시작~종료)
├── DotMarker                   — 시점 도트 (●)
├── TriangleMarker              — 삼각형 마커 (▲)
├── DiamondMarker               — 다이아몬드 마커 (◆)
├── VLineMarker                 — 수직선 마커 (│)
├── Sparkline                   — 미니 라인차트
├── FrameCursor                 — 프레임 마커 (노란선)
└── Crosshair                   — 호버 크로스헤어

Composed (조합 차트)             → Primitives로 구성
├── ClinicalTimeline            — 멀티트랙 NLE 타임라인
├── MedicationTimeline          — 약물 타임라인
├── VitalChart                  — 바이탈 추이 차트
└── AdherenceHeatmap            — 복약 순응도 히트맵
```

---

## 1. Primitives (원자 요소)

### TimeAxis

시간축 + 월/주 마커. 줌/스크롤에 따라 마커 간격이 자동 조절됩니다.

```tsx
<TimeAxis :months="monthMarkers" :dayToX="dayToX" :isVisible="isVisible"
  @hover="onHover" @leave="onLeave" @click="onClick" />
```

| Prop | Type | 설명 |
|------|------|------|
| `months` | `{ day, label }[]` | 월 마커 데이터 |
| `dayToX` | `(day) => px` | 일수 → 픽셀 변환 함수 |
| `isVisible` | `(day) => boolean` | 가시 영역 판정 함수 |

### TrackRow

트랙 컨테이너. 라벨 + 접기/펼치기 + 내부 콘텐츠 영역.

```tsx
<TrackRow name="약 처방" color="#22C55E" :collapsed="false" height="150px"
  @toggle="onToggle" @hover="onHover" @click="onClick">
  <!-- 내부에 BarSegment, DotMarker 등 배치 -->
</TrackRow>
```

| Prop | Type | 설명 |
|------|------|------|
| `name` | `string` | 트랙 이름 |
| `color` | `string` | 트랙 식별 컬러 |
| `collapsed` | `boolean` | 접힘 상태 |
| `height` | `string` | 트랙 높이 |

### BarSegment

기간 기반 가로 바. 진단, 처방 등에 사용.

```tsx
<BarSegment :left="100" :width="200" :top="2" :height="18"
  color="#3B82F6" label="I10 고혈압"
  endType="stopped" endReason="부작용" />
```

| Prop | Type | 설명 |
|------|------|------|
| `left` / `width` | `number` | 위치와 너비 (px) |
| `top` / `height` | `number` | Y 오프셋, 높이 |
| `color` | `string` | 배경색 |
| `label` | `string` | 바 내부 텍스트 |
| `endType` | `'stopped' \| 'changed' \| null` | 종료 마커 (✕ / ↻) |
| `endReason` | `string` | 종료 사유 (툴팁) |

### DotMarker / TriangleMarker / DiamondMarker

시점 기반 마커 3종.

```tsx
<DotMarker :x="150" color="#8B5CF6" :size="10" label="두통" />
<TriangleMarker :x="200" color="#F97316" label="독감 백신" />
<DiamondMarker :x="300" color="#EC4899" label="HbA1c 7.5%" :highlight="true" />
```

| 마커 | 형태 | 용도 |
|------|------|------|
| `DotMarker` | ● 원형 | 증상 등 반복 이벤트 |
| `TriangleMarker` | ▲ 삼각형 | 주사/시술 1회성 |
| `DiamondMarker` | ◆ 다이아몬드 | 검사, `highlight` prop으로 글로우 |

### VLineMarker / Sparkline

```tsx
<VLineMarker :x="250" color="#64748B" />
<Sparkline :points="[160,155,148,145,140]" color="#DC2626"
  :bandMin="90" :bandMax="139" bandColor="#22C55E" />
```

| 컴포넌트 | 용도 |
|---------|------|
| `VLineMarker` | 내원일 수직선 마커 |
| `Sparkline` | 미니 추이 라인 + 정상 범위 밴드 |

### FrameCursor / Crosshair

```tsx
<FrameCursor :x="frameX" :visible="true" />   <!-- 노란 프레임 마커 -->
<Crosshair :x="hoverX" :visible="true" />     <!-- 회색 호버 가이드 -->
```

---

## 2. Composed 차트

### 멀티트랙 클리니컬 타임라인

영상 편집 NLE 스타일의 7트랙 타임라인. 위 Primitives를 조합하여 구성됩니다.

**인터랙션**: 줌 인/아웃 · 좌우 스크롤 · 프레임 마커 · 트랙 접기/펼치기 · 호버 크로스헤어

<ClinicalTimeline />

| 트랙 | Primitive | 설명 |
|------|-----------|------|
| 증상 | `DotMarker` | 시점 기반 이벤트 |
| 진단(상병) | `BarSegment` | 기간 바 |
| 약 처방 | `BarSegment` + endType | 기간 + 중단/변경 마커 |
| 주사 | `TriangleMarker` | 1회성 |
| 검사 | `DiamondMarker` | 시점 + highlight |
| 바이탈 | `Sparkline` | 미니 추이 + 밴드 |
| 내원 | `VLineMarker` | 방문일 |

---

### 약물 타임라인

`BarSegment`를 활용한 처방 시작/중단/변경 시각화.

**시나리오**: 아스피린 부작용→클로피도그렐 변경, 아무로디핀 분할, 메트포르민 증량

<MedicationTimeline />

---

### 바이탈 추이 차트

`Sparkline` 확장형. 정상 밴드 + 약물 변경 마커 + 호버 툴팁.

**시나리오**: 수축기/이완기 혈압 + 아무로디핀 용량 변경 시점

<VitalChart />

---

### 복약 순응도 히트맵

`DotMarker` 그리드 변형. GitHub contribution 스타일.

**시나리오**: 아스피린 복약 기록, 3/15 부작용 보고

<AdherenceHeatmap />

---

## 3. 조합 예시

Primitives를 직접 조합하여 커스텀 차트를 만들 수 있습니다.

```tsx
// 커스텀: 약물 + 검사만 표시하는 미니 타임라인
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

---

## 4. 토큰 매핑

### Primitives 토큰

| 토큰 | Light | Dark |
|------|-------|------|
| `--chart-track-label-bg` | `var(--gray-50)` | `var(--gray-800)` |
| `--chart-track-border` | `var(--gray-200)` | `var(--gray-700)` |
| `--chart-crosshair-color` | `var(--gray-400)` | `var(--gray-500)` |
| `--chart-frame-color` | `#EAB308` | `#EAB308` |
| `--chart-dot-border` | `var(--gray-0)` | `var(--gray-900)` |
| `--chart-bar-radius` | `3px` | `3px` |
| `--chart-sparkline-stroke-width` | `1.5px` | `1.5px` |
| `--chart-band-opacity` | `0.06` | `0.06` |

### Composed 차트 토큰

| 토큰 | 값 |
|------|-----|
| `--chart-bg` | `var(--gray-0)` / `var(--gray-900)` |
| `--chart-radius` | `12px` |
| `--timeline-bar-active` | `#3B82F6` |
| `--timeline-bar-stopped` | `#DC2626` |
| `--timeline-bar-changed` | `#EAB308` |
| `--vital-line-systolic` | `#DC2626` |
| `--vital-line-diastolic` | `#3B82F6` |
| `--vital-band-normal` | `rgba(34,197,94,0.08)` |
| `--heatmap-taken` | `#22C55E` |
| `--heatmap-adverse` | `#DC2626` |

---

## 추가 예정

| 차트 | 설명 | 상태 |
|------|------|------|
| **검사 수치 트렌드** | HbA1c/간기능 등 + threshold 밴드 | 예정 |
| **용량 스텝차트** | 용량 증감 계단형 | 예정 |
| **약물 상호작용 네트워크** | 처방 약물 간 상호작용 | 예정 |
