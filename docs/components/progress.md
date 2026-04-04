# Progress Bar & Stepper

진행 상태를 시각적으로 표시하는 컴포넌트입니다. 파일 업로드, 진료 워크플로우, 처방 전송 단계에 사용됩니다.

<span class="status-badge stable">Stable</span>

## 상태별 케이스

<ProgressStates />

---

## Progress Bar 토큰

| 토큰 | Light | Dark |
|------|-------|------|
| `--progress-track-bg` | `var(--gray-100)` | `var(--gray-800)` |
| `--progress-track-height` | `6px` | `6px` |
| `--progress-track-radius` | `3px` | `3px` |
| `--progress-fill-blue` | `#3B82F6` | `#60A5FA` |
| `--progress-fill-green` | `#22C55E` | `#4ADE80` |
| `--progress-fill-red` | `#DC2626` | `#F87171` |
| `--progress-label-font-size` | `12px` | `12px` |

## Stepper 토큰

| 토큰 | Light | Dark |
|------|-------|------|
| `--stepper-dot-size` | `28px` | `28px` |
| `--stepper-dot-bg` | `var(--gray-100)` | `var(--gray-800)` |
| `--stepper-dot-border` | `var(--gray-200)` | `var(--gray-700)` |
| `--stepper-dot-done-bg` | `#22C55E` | `#22C55E` |
| `--stepper-dot-active-bg` | `#3B82F6` | `#3B82F6` |
| `--stepper-dot-error-bg` | `#DC2626` | `#DC2626` |
| `--stepper-line-height` | `2px` | `2px` |
| `--stepper-line-bg` | `var(--gray-200)` | `var(--gray-700)` |
| `--stepper-line-done-bg` | `#22C55E` | `#22C55E` |

---

## Progress Bar Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `value` | `number` | `0` | 진행률 (0-100) |
| `color` | `'blue' \| 'green' \| 'red'` | `'blue'` | 색상 |
| `indeterminate` | `boolean` | `false` | 불확정 애니메이션 |
| `showLabel` | `boolean` | `true` | 라벨 표시 |

## Stepper Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `steps` | `StepItem[]` | - | 단계 목록 |
| `current` | `number` | `0` | 현재 단계 (0-based) |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | 방향 |
| `error` | `number` | - | 에러 발생 단계 |
