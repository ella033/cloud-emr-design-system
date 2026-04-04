# Number Stepper

숫자 값을 증가/감소 버튼으로 조절하는 컴포넌트입니다. EMR에서 처방 용량, 횟수, 일수 조절에 핵심적으로 사용됩니다.

<span class="status-badge stable">Stable</span>

## 상태별 케이스

<NumberStepperStates />

---

## 토큰 매핑

| 토큰 | Light | Dark |
|------|-------|------|
| `--stepper-bg` | `var(--gray-0)` | `var(--gray-900)` |
| `--stepper-btn-bg` | `var(--gray-100)` | `var(--gray-800)` |
| `--stepper-btn-bg-hover` | `var(--gray-200)` | `var(--gray-700)` |
| `--stepper-btn-bg-active` | `var(--gray-300)` | `var(--gray-600)` |
| `--stepper-border` | `var(--gray-200)` | `var(--gray-700)` |
| `--stepper-text` | `var(--gray-900)` | `var(--gray-50)` |
| `--stepper-btn-disabled-opacity` | `0.3` | `0.3` |
| `--stepper-disabled-opacity` | `0.5` | `0.5` |

### Size 토큰

| Size | `--stepper-{size}-btn-size` | `--stepper-{size}-font-size` | `--stepper-{size}-min-width` |
|------|---------------------------|-----------------------------|-----------------------------|
| small | 28px | 12px | 36px |
| medium | 36px | 14px | 44px |
| large | 44px | 16px | 52px |

---

## Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `value` | `number` | `0` | 현재 값 |
| `defaultValue` | `number` | - | 초기값 (비제어) |
| `min` | `number` | `0` | 최솟값 |
| `max` | `number` | `999` | 최댓값 |
| `step` | `number` | `1` | 증감 단위 |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 크기 |
| `disabled` | `boolean` | `false` | 비활성 |
| `onChange` | `(value: number) => void` | - | 변경 핸들러 |
| `suffix` | `string` | - | 값 뒤 접미사 (T, 회, 일 등) |
