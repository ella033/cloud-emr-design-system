<script setup>
const spacingItems = [
  { token: '--dr-ai-spacing-0', value: '0px', usage: '없음' },
  { token: '--dr-ai-spacing-2', value: '2px', usage: '미세 간격 (아이콘-텍스트 보정)' },
  { token: '--dr-ai-spacing-4', value: '4px', usage: '최소 간격 (인라인 요소)' },
  { token: '--dr-ai-spacing-6', value: '6px', usage: '압축 간격' },
  { token: '--dr-ai-spacing-8', value: '8px', usage: '컴팩트 간격 (카드 내부)' },
  { token: '--dr-ai-spacing-12', value: '12px', usage: '기본 요소 간격' },
  { token: '--dr-ai-spacing-16', value: '16px', usage: '기본 패딩' },
  { token: '--dr-ai-spacing-20', value: '20px', usage: '섹션 내 간격' },
  { token: '--dr-ai-spacing-24', value: '24px', usage: '카드 패딩' },
  { token: '--dr-ai-spacing-32', value: '32px', usage: '섹션 간 간격' },
  { token: '--dr-ai-spacing-40', value: '40px', usage: '큰 섹션 간격' },
  { token: '--dr-ai-spacing-48', value: '48px', usage: '페이지 여백' },
  { token: '--dr-ai-spacing-64', value: '64px', usage: '최대 간격' },
]

const radiusItems = [
  { token: 'radius-none', value: '0px', usage: '직각' },
  { token: 'radius-sm', value: '4px', usage: '뱃지, 태그' },
  { token: 'radius-md', value: '8px', usage: '버튼, 입력 필드' },
  { token: 'radius-lg', value: '12px', usage: '카드 모듈' },
  { token: 'radius-xl', value: '16px', usage: '모달, 바텀시트' },
  { token: 'radius-full', value: '9999px', usage: '아바타, 칩' },
]

const shadowItems = [
  { token: 'shadow-sm', value: '0 1px 2px rgba(0,0,0,0.05)', usage: '카드 기본' },
  { token: 'shadow-md', value: '0 4px 6px -1px rgba(0,0,0,0.1)', usage: '카드 호버, 드롭다운' },
  { token: 'shadow-lg', value: '0 10px 15px -3px rgba(0,0,0,0.1)', usage: '모달, 플로팅' },
  { token: 'shadow-xl', value: '0 20px 25px -5px rgba(0,0,0,0.1)', usage: '최상위 오버레이' },
]
</script>

# 스페이싱 & 레이아웃

의사랑AI스페이싱 시스템은 **4px 기반 그리드**를 사용하며, EMR의 고밀도 정보 레이아웃에 최적화되어 있습니다.

::: tip 토큰 복사
스페이싱 바와 Radius 카드를 클릭하면 값이 클립보드에 복사됩니다.
:::

---

## Spacing Scale

모든 간격은 4px의 배수로 구성됩니다. 파란 바의 너비가 실제 간격 크기입니다.

<SpacingScale :items="spacingItems" />

---

## Border Radius

<RadiusPreview :items="radiusItems" />

---

## Shadow (Elevation)

> Dark 모드에서는 shadow 대신 `border` + `bg-elevated`로 구분합니다.

<ShadowPreview :items="shadowItems" />

---

## EMR 레이아웃 시스템

### 진료 화면 구조

아래는 실제 진료 화면의 레이아웃 구조를 시각화한 것입니다. 좌측 환자 목록 사이드바, 중앙 카드 모듈 그리드, 우측 퀵오더/묶음처방 패널로 구성됩니다.

<LayoutDiagram />

### 레이아웃 토큰

| Token | Value | 용도 |
|-------|-------|------|
| `--dr-ai-layout-topbar-height` | 56px | 상단 내비게이션 |
| `--dr-ai-layout-sidebar-width` | 240px | 좌측 사이드바 |
| `--dr-ai-layout-sidebar-collapsed` | 64px | 사이드바 접힌 상태 |
| `--dr-ai-layout-quick-panel-width` | 320px | 우측 퀵 패널 |
| `--dr-ai-layout-statusbar-height` | 32px | 하단 상태바 |
| `--dr-ai-layout-card-gap` | 12px | 카드 모듈 간 간격 |
| `--dr-ai-layout-card-min-width` | 280px | 카드 최소 너비 |
| `--dr-ai-layout-card-min-height` | 200px | 카드 최소 높이 |

---

## Z-Index Scale

| Token | Value | 용도 |
|-------|-------|------|
| `--dr-ai-z-base` | 0 | 기본 콘텐츠 |
| `--dr-ai-z-card` | 10 | 카드 모듈 |
| `--dr-ai-z-card-dragging` | 20 | 드래그 중인 카드 |
| `--dr-ai-z-sidebar` | 30 | 사이드바 |
| `--dr-ai-z-topbar` | 40 | 상단 내비게이션 |
| `--dr-ai-z-dropdown` | 50 | 드롭다운 메뉴 |
| `--dr-ai-z-overlay` | 60 | 오버레이/딤 |
| `--dr-ai-z-modal` | 70 | 모달 |
| `--dr-ai-z-toast` | 80 | 토스트 알림 |
| `--dr-ai-z-tooltip` | 90 | 툴팁 |

---

> 다음 문서: [컴포넌트 - Badge](../components/badge.md)
