# Card Module

EMR 진료 화면의 핵심 단위인 **카드 모듈** 컴포넌트입니다. 드래그 & 드롭 이동, 리사이즈가 가능한 정보 컨테이너입니다.

<span class="status-badge beta">Beta</span>

## Preview

<div class="component-preview">
  <div style="border:1px solid #E2E8F0; border-radius:12px; overflow:hidden; max-width:420px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
    <div style="display:flex; align-items:center; justify-content:space-between; padding:12px 16px; border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span>👤</span>
        <span style="font-size:14px; font-weight:600; color:#0F172A;">환자 기본정보</span>
      </div>
      <div style="display:flex; gap:4px;">
        <span style="width:24px; height:24px; display:flex; align-items:center; justify-content:center; border-radius:4px; font-size:12px; color:#94A3B8; cursor:pointer;">─</span>
        <span style="width:24px; height:24px; display:flex; align-items:center; justify-content:center; border-radius:4px; font-size:12px; color:#94A3B8; cursor:pointer;">□</span>
        <span style="width:24px; height:24px; display:flex; align-items:center; justify-content:center; border-radius:4px; font-size:12px; color:#94A3B8; cursor:pointer;">⋯</span>
      </div>
    </div>
    <div style="padding:16px;">
      <div style="font-size:18px; font-weight:600; color:#0F172A; margin-bottom:4px;">홍길동 <span style="font-size:13px; font-weight:400; color:#64748B;">(남 / 45세)</span></div>
      <div style="font-size:13px; color:#94A3B8; margin-bottom:12px;">1981.03.15 | 810315-1******</div>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <span style="padding:4px 8px; background:#EFF6FF; color:#2563EB; border-radius:6px; font-size:12px;">건강보험</span>
        <span style="padding:4px 8px; background:#DCFCE7; color:#15803D; border-radius:6px; font-size:12px;">A+ 형</span>
        <span style="padding:4px 8px; background:#FEF2F2; color:#DC2626; border-radius:6px; font-size:12px;">알러지: 페니실린</span>
      </div>
    </div>
  </div>
</div>

---

## 사용법

```tsx
import { CardModule } from '@cloud-emr/design-system';

<CardModule
  id="patient-info"
  title="환자 기본정보"
  icon={<UserIcon />}
  defaultW={4}
  defaultH={3}
  minW={3}
  minH={2}
>
  <PatientInfoContent patientId={patientId} />
</CardModule>
```

---

## Props

| Prop | Type | Required | Default | 설명 |
|------|------|----------|---------|------|
| `id` | `string` | Yes | - | 모듈 고유 ID |
| `title` | `string` | Yes | - | 헤더 타이틀 |
| `icon` | `ReactNode` | No | - | 헤더 아이콘 |
| `defaultW` | `number` | Yes | - | 기본 너비 (그리드 컬럼 수) |
| `defaultH` | `number` | Yes | - | 기본 높이 (그리드 행 수) |
| `minW` | `number` | No | `2` | 최소 너비 |
| `minH` | `number` | No | `2` | 최소 높이 |
| `maxW` | `number` | No | `12` | 최대 너비 |
| `maxH` | `number` | No | `Infinity` | 최대 높이 |
| `isDraggable` | `boolean` | No | `true` | 드래그 가능 여부 |
| `isResizable` | `boolean` | No | `true` | 리사이즈 가능 여부 |
| `headerActions` | `ReactNode` | No | - | 헤더 우측 커스텀 액션 |
| `footer` | `ReactNode` | No | - | 푸터 영역 |
| `onMaximize` | `() => void` | No | - | 최대화 핸들러 |
| `onMinimize` | `() => void` | No | - | 최소화 핸들러 |

---

## 카드 구조

```
┌─────────────────────────────────────┐
│  [Icon] Title           [Actions]   │ ← Header (고정 40px)
│─────────────────────────────────────│
│                                     │
│           Content Area              │ ← Content (스크롤 가능)
│           (children)                │
│                                     │
├─────────────────────────────────────┤
│  Footer (optional)                  │ ← Footer (고정, 선택적)
└─────────────────────────────────────┘
                                    ↘ Resize Handle
```

---

## 상태

| 상태 | 시각적 표현 | CSS |
|------|-----------|-----|
| `default` | 흰색 배경, 경미한 그림자 | `shadow-sm, bg-card` |
| `hover` | 살짝 밝은 배경 | `shadow-md, bg-card-hover` |
| `dragging` | 기울기 + 큰 그림자 + 반투명 | `rotate(2deg), shadow-xl, opacity:0.9` |
| `focused` | Primary 보더 | `border: 2px solid primary` |
| `minimized` | 헤더만 표시 | `height: 40px, overflow: hidden` |
| `maximized` | 메인 영역 전체 | `position: fixed, z-index: 70` |
| `loading` | 스켈레톤 UI | content 영역 스켈레톤 |
| `error` | 에러 배경 + 재시도 | `bg-error-subtle` |

---

## 그리드 시스템

```
12 컬럼 그리드
├── 카드 간격: 12px
├── 최소 카드 크기: 2 컬럼
├── 최대 카드 크기: 12 컬럼
└── 행 높이: 약 80px
```

### 모듈별 권장 크기

| 모듈 | 기본 (W x H) | 최소 (W x H) |
|------|-------------|-------------|
| 환자 기본정보 | 4 x 3 | 3 x 2 |
| 내원일 히스토리 | 4 x 4 | 3 x 3 |
| 진료 타임라인 | 3 x 4 | 3 x 3 |
| 진단 및 처방 | 6 x 5 | 4 x 4 |
| 임상메모 | 4 x 4 | 3 x 3 |
| 환자메모 (채팅) | 4 x 4 | 3 x 3 |
| 증상 입력 | 4 x 3 | 3 x 2 |
| 이미지 뷰어 | 6 x 5 | 4 x 4 |

---

## 레이아웃 프리셋

```tsx
import { useLayoutPreset } from '@cloud-emr/design-system';

const { savePreset, loadPreset, resetToDefault } = useLayoutPreset();

// 현재 레이아웃 저장
savePreset({ name: '내과 기본 레이아웃' });

// 저장된 레이아웃 불러오기
loadPreset('preset-id');

// 기본 레이아웃으로 복귀
resetToDefault();
```

---

## 접근성

- 카드 헤더에 `role="heading"` 적용
- 드래그 핸들에 `aria-label="카드 이동"` 제공
- 키보드로 카드 포커스 이동: `Tab` / `Shift+Tab`
- 최대화/최소화 상태 변경 시 `aria-expanded` 업데이트
