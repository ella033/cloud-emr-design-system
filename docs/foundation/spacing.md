# 스페이싱 & 레이아웃

의사랑 스페이싱 시스템은 **4px 기반 그리드**를 사용하며, EMR의 고밀도 정보 레이아웃에 최적화되어 있습니다.

---

## Spacing Scale

모든 간격은 4px의 배수로 구성됩니다.

| Token | Value | 용도 |
|-------|-------|------|
| `--dr-ai-spacing-0` | 0px | 없음 |
| `--dr-ai-spacing-2` | 2px | 미세 간격 (아이콘-텍스트 보정) |
| `--dr-ai-spacing-4` | 4px | 최소 간격 (인라인 요소) |
| `--dr-ai-spacing-6` | 6px | 압축 간격 |
| `--dr-ai-spacing-8` | 8px | 컴팩트 간격 (카드 내부 요소) |
| `--dr-ai-spacing-12` | 12px | 기본 요소 간격 |
| `--dr-ai-spacing-16` | 16px | **기본 패딩** |
| `--dr-ai-spacing-20` | 20px | 섹션 내 간격 |
| `--dr-ai-spacing-24` | 24px | 카드 패딩 |
| `--dr-ai-spacing-32` | 32px | 섹션 간 간격 |
| `--dr-ai-spacing-40` | 40px | 큰 섹션 간격 |
| `--dr-ai-spacing-48` | 48px | 페이지 여백 |
| `--dr-ai-spacing-64` | 64px | 최대 간격 |

---

## Border Radius

| Token | Value | 용도 |
|-------|-------|------|
| `--dr-ai-radius-none` | 0px | 직각 |
| `--dr-ai-radius-sm` | 4px | 작은 요소 (뱃지, 태그) |
| `--dr-ai-radius-md` | 8px | **기본** (버튼, 입력 필드) |
| `--dr-ai-radius-lg` | 12px | 카드 모듈 |
| `--dr-ai-radius-xl` | 16px | 모달, 바텀시트 |
| `--dr-ai-radius-full` | 9999px | 원형 (아바타, 칩) |

---

## Shadow (Elevation)

| Token | Value | 용도 |
|-------|-------|------|
| `--dr-ai-shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | 카드 기본 |
| `--dr-ai-shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1)` | 카드 호버, 드롭다운 |
| `--dr-ai-shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1)` | 모달, 플로팅 |
| `--dr-ai-shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1)` | 최상위 오버레이 |

> Dark 모드에서는 shadow 대신 `border` + `bg-elevated`로 구분합니다.

---

## EMR 레이아웃 시스템

### 메인 레이아웃 구조

```
┌─────────────────────────────────────────────────┐
│  Top Navigation Bar (56px)                       │
├──────────┬──────────────────────┬───────────────┤
│          │                      │               │
│ Sidebar  │   Main Content Area  │  Quick Panel  │
│  (240px) │   (flexible)         │   (320px)     │
│          │                      │               │
│ - 환자목록│   카드 모듈 그리드     │ - 퀵오더      │
│ - 검색   │   (드래그/리사이즈)    │ - 묶음처방    │
│ - 필터   │                      │ - 즐겨찾기    │
│          │                      │               │
├──────────┴──────────────────────┴───────────────┤
│  Status Bar (32px)                               │
└─────────────────────────────────────────────────┘
```

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
