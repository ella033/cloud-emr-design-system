# Button

사용자의 액션을 트리거하는 핵심 인터랙션 컴포넌트입니다.

<span class="status-badge stable">Stable</span>

## 상태별 케이스

Variant, State, Size를 모두 한눈에 확인할 수 있습니다.

<ButtonStates />

---

## 사용법

```tsx
import { Button } from '@cloud-emr/design-system';

<Button variant="primary" size="medium">처방 전송</Button>
<Button variant="secondary" size="medium">저장</Button>
<Button variant="outline" size="medium">취소</Button>
<Button variant="danger" size="medium">삭제</Button>
```

---

## Props

| Prop | Type | Required | Default | 설명 |
|------|------|----------|---------|------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | No | `'primary'` | 버튼 스타일 |
| `size` | `'small' \| 'medium' \| 'large'` | No | `'medium'` | 버튼 크기 |
| `disabled` | `boolean` | No | `false` | 비활성 상태 |
| `loading` | `boolean` | No | `false` | 로딩 상태 (스피너 표시) |
| `fullWidth` | `boolean` | No | `false` | 전체 너비 사용 |
| `leftIcon` | `ReactNode` | No | - | 왼쪽 아이콘 |
| `rightIcon` | `ReactNode` | No | - | 오른쪽 아이콘 |
| `onClick` | `() => void` | No | - | 클릭 핸들러 |

---

## Variant x State 토큰 매핑

### Primary

| State | 토큰 | Light | Dark |
|-------|------|-------|------|
| Default | `--btn-primary-bg` | `#3B82F6` | `#3B82F6` |
| Hover | `--btn-primary-bg-hover` | `#2563EB` | `#60A5FA` |
| Active | `--btn-primary-bg-active` | `#1D4ED8` | `#93C5FD` |
| Disabled | `--btn-primary-bg-disabled` | `#3B82F6` (opacity 0.5) | `#3B82F6` (opacity 0.5) |
| Text | `--btn-primary-text` | `#FFFFFF` | `#FFFFFF` |
| Border | `--btn-primary-border` | `transparent` | `transparent` |
| Focus Ring | `--btn-primary-focus-ring` | `0 0 0 3px rgba(59,130,246,0.3)` | `0 0 0 3px rgba(96,165,250,0.3)` |

### Secondary

| State | 토큰 | Light | Dark |
|-------|------|-------|------|
| Default | `--btn-secondary-bg` | `#EFF6FF` | `#172554` |
| Hover | `--btn-secondary-bg-hover` | `#DBEAFE` | `#1E3A8A` |
| Active | `--btn-secondary-bg-active` | `#BFDBFE` | `#1E40AF` |
| Text | `--btn-secondary-text` | `#2563EB` | `#60A5FA` |
| Border | `--btn-secondary-border` | `#BFDBFE` | `#1E3A8A` |
| Border Hover | `--btn-secondary-border-hover` | `#93C5FD` | `#1E40AF` |

### Outline

| State | 토큰 | Light | Dark |
|-------|------|-------|------|
| Default | `--btn-outline-bg` | `transparent` | `transparent` |
| Hover | `--btn-outline-bg-hover` | `var(--gray-50)` | `var(--gray-800)` |
| Active | `--btn-outline-bg-active` | `var(--gray-100)` | `var(--gray-700)` |
| Text | `--btn-outline-text` | `var(--gray-600)` | `var(--gray-300)` |
| Text Hover | `--btn-outline-text-hover` | `var(--gray-700)` | `var(--gray-100)` |
| Border | `--btn-outline-border` | `var(--gray-200)` | `var(--gray-700)` |

### Ghost

| State | 토큰 | Light | Dark |
|-------|------|-------|------|
| Default | `--btn-ghost-bg` | `transparent` | `transparent` |
| Hover | `--btn-ghost-bg-hover` | `var(--gray-100)` | `var(--gray-800)` |
| Text | `--btn-ghost-text` | `var(--gray-500)` | `var(--gray-400)` |
| Text Hover | `--btn-ghost-text-hover` | `var(--gray-700)` | `var(--gray-200)` |

### Danger

| State | 토큰 | Light | Dark |
|-------|------|-------|------|
| Default | `--btn-danger-bg` | `#DC2626` | `#DC2626` |
| Hover | `--btn-danger-bg-hover` | `#B91C1C` | `#EF4444` |
| Active | `--btn-danger-bg-active` | `#991B1B` | `#F87171` |
| Text | `--btn-danger-text` | `#FFFFFF` | `#FFFFFF` |
| Focus Ring | `--btn-danger-focus-ring` | `0 0 0 3px rgba(220,38,38,0.3)` | `0 0 0 3px rgba(239,68,68,0.3)` |

---

## Size 토큰

| Size | 토큰 (Height) | 토큰 (Padding) | 토큰 (Font Size) | 용도 |
|------|--------------|----------------|-----------------|------|
| `small` | `--btn-sm-height` 32px | `--btn-sm-padding` 6px 12px | `--btn-sm-font-size` 13px | 테이블 내 액션 |
| `medium` | `--btn-md-height` 40px | `--btn-md-padding` 10px 20px | `--btn-md-font-size` 14px | 기본 버튼 |
| `large` | `--btn-lg-height` 48px | `--btn-lg-padding` 12px 24px | `--btn-lg-font-size` 16px | 주요 CTA |

공통: `--btn-font-weight: 600` / `--btn-transition: all 0.15s ease` / `--btn-active-scale: 0.98` / `--btn-radius: var(--radius-md)`

---

## 상태 흐름

```
Default → Hover → Active → Focus
                              ↘ Disabled (opacity: --btn-*-opacity-disabled)
                              ↘ Loading (스피너 + pointer-events: none)
```

---

## EMR 활용 예시

### 진단 및 처방 카드

```tsx
// Footer의 주요 액션
<Button variant="primary" size="large" fullWidth>
  처방 전송
</Button>

// 보조 액션들
<Button variant="secondary" size="medium">임시 저장</Button>
<Button variant="outline" size="medium">초기화</Button>
```

### 위험한 동작

```tsx
// 처방 삭제 시 danger + 확인 과정 필수
<Button variant="danger" size="medium" onClick={handleDeleteWithConfirm}>
  처방 삭제
</Button>
```

### 로딩 상태

```tsx
// 처방 전송 중
<Button variant="primary" size="large" loading>
  전송 중...
</Button>
```

---

## 접근성

- 모든 버튼은 키보드 `Tab`으로 접근 가능
- `Enter` 또는 `Space`로 활성화
- `disabled` 상태에서도 포커스는 유지 (스크린리더 접근성)
- `danger` 버튼은 반드시 확인 모달과 함께 사용

---

## Do & Don't

### Do
- 한 화면에 primary 버튼은 1~2개만 사용
- 위험한 동작에는 반드시 danger variant 사용
- loading 상태로 중복 클릭 방지

### Don't
- 버튼 텍스트에 "클릭하세요" 같은 문구 사용 금지
- disabled 상태에서 툴팁 없이 사용 금지 (왜 비활성인지 안내)
- 너무 많은 버튼을 한 줄에 나열하지 않기 (최대 3개)
