# Charts (의료 데이터 시각화)

환자의 처방 이력, 바이탈 추이, 복약 순응도 등을 시각적으로 표현하는 차트 컴포넌트입니다. [Medication Timeline 연구](https://pmc.ncbi.nlm.nih.gov/articles/PMC7647176/)와 Datadog 스타일 인터랙션을 참고하여 설계되었습니다.

<span class="status-badge beta">Beta</span>

---

## 멀티트랙 클리니컬 타임라인

영상 편집 NLE 스타일의 멀티트랙 타임라인입니다. 증상, 진단(상병), 약 처방, 주사, 검사, 바이탈, 내원을 7개 트랙으로 한 화면에 표시합니다.

**인터랙션**: 줌 인/아웃 (기간 변경) · 좌우 스크롤 · 타임라인 클릭 시 프레임 마커 · 트랙 접기/펼치기 · 호버 크로스헤어

<ClinicalTimeline />

### 트랙별 시각 형태

| 트랙 | 형태 | 설명 |
|------|------|------|
| 증상 | `●` 도트 | 시점 기반 이벤트 |
| 진단(상병) | `████` 바 | 기간 기반, 시작~종료 |
| 약 처방 | `════` 스텝바 | 기간 + 용량 변화 + 중단 마커 |
| 주사 | `▲` 삼각형 | 1회성 시점 이벤트 |
| 검사 | `◆` 다이아몬드 | 시점 기반, 결과 하이라이트 |
| 바이탈 | `~~~~` 스파크라인 | 미니 추이 라인 + 정상 밴드 |
| 내원 | `│` 수직선 | 방문일 마커 |

---

## 약물 타임라인 (Medication Timeline)

처방 시작/중단/변경을 가로 바로 시각화합니다. 부작용 중단, 약물 스위칭, 용량 변경 등을 한눈에 파악할 수 있습니다.

**시나리오**: 홍길동 환자 — 아스피린 부작용으로 클로피도그렐 변경, 아무로디핀 분할 처방, 메트포르민 단계적 증량

<MedicationTimeline />

---

## 바이탈 추이 차트 (Vital Chart)

혈압/맥박/체온 등의 시간에 따른 변화를 라인차트로 표시합니다. 정상 범위 밴드와 약물 변경 시점 마커가 함께 표시됩니다.

**시나리오**: 홍길동 환자 — 수축기/이완기 혈압 변화 + 아무로디핀 용량 변경 시점

<VitalChart />

---

## 복약 순응도 히트맵 (Adherence Heatmap)

날짜별 복약 여부를 GitHub contribution 스타일로 표시합니다. 미복약, 부작용 보고일을 즉시 식별할 수 있습니다.

**시나리오**: 홍길동 환자 — 아스피린 복약 기록, 3/15 부작용 보고

<AdherenceHeatmap />

---

## 차트 토큰 매핑

### 공통

| 토큰 | Light | Dark |
|------|-------|------|
| `--chart-bg` | `var(--gray-0)` | `var(--gray-900)` |
| `--chart-border` | `var(--gray-200)` | `var(--gray-700)` |
| `--chart-grid-line` | `var(--gray-100)` | `var(--gray-800)` |
| `--chart-tooltip-bg` | `#0F172A` | `#F8FAFC` |
| `--chart-tooltip-text` | `#F8FAFC` | `#0F172A` |
| `--chart-axis-text` | `var(--gray-400)` | `var(--gray-500)` |
| `--chart-radius` | `12px` | `12px` |

### 약물 타임라인

| 토큰 | 값 |
|------|-----|
| `--timeline-bar-active` | `#3B82F6` |
| `--timeline-bar-stopped` | `#DC2626` |
| `--timeline-bar-changed` | `#EAB308` |
| `--timeline-bar-height` | `20px` |
| `--timeline-bar-radius` | `4px` |
| `--timeline-row-hover-bg` | `var(--gray-50)` / `var(--gray-800)` |

### 바이탈 차트

| 토큰 | 값 |
|------|-----|
| `--vital-line-systolic` | `#DC2626` |
| `--vital-line-diastolic` | `#3B82F6` |
| `--vital-band-normal` | `rgba(34,197,94,0.08)` |
| `--vital-marker-drug` | `#EAB308` |
| `--vital-point-radius` | `4px` |
| `--vital-point-hover-radius` | `6px` |

### 히트맵

| 토큰 | 값 |
|------|-----|
| `--heatmap-taken` | `#22C55E` |
| `--heatmap-missed` | `var(--gray-100)` / `var(--gray-800)` |
| `--heatmap-adverse` | `#DC2626` |
| `--heatmap-cell-size` | `14px` |
| `--heatmap-gap` | `3px` |

---

## 추가 예정 차트

| 차트 | 설명 | 상태 |
|------|------|------|
| **검사 수치 트렌드** | HbA1c/간기능 등 수치 변화 + threshold 밴드 | 예정 |
| **용량 스텝차트** | 용량 증감을 계단형으로 표시 | 예정 |
| **약물 상호작용 네트워크** | 처방 약물 간 상호작용 시각화 | 예정 |
