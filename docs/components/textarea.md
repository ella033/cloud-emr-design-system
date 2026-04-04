# TextArea

여러 줄 텍스트를 입력받는 컴포넌트입니다. EMR에서 임상메모(SOAP), 증상 기록, 소견서 작성에 사용됩니다.

<span class="status-badge stable">Stable</span>

## 상태별 케이스

<TextAreaStates />

---

## 토큰 매핑

Input 토큰을 공유하며, TextArea 전용 토큰이 추가됩니다.

| 토큰 | Light | Dark | 설명 |
|------|-------|------|------|
| `--input-bg` | `#FFFFFF` | `var(--gray-800)` | 배경 |
| `--input-border` | `var(--gray-200)` | `var(--gray-700)` | 기본 보더 |
| `--input-border-focus` | `#3B82F6` | `#60A5FA` | 포커스 보더 |
| `--input-border-error` | `#EF4444` | `#F87171` | 에러 보더 |
| `--input-focus-ring` | `0 0 0 3px rgba(59,130,246,0.15)` | `0 0 0 3px rgba(96,165,250,0.2)` | 포커스 링 |
| `--textarea-min-height` | `72px` | `72px` | 최소 높이 |
| `--textarea-counter-color` | `var(--gray-400)` | `var(--gray-500)` | 글자수 카운터 |

---

## Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `value` | `string` | - | 입력값 |
| `label` | `string` | - | 레이블 |
| `placeholder` | `string` | - | 플레이스홀더 |
| `rows` | `number` | `3` | 기본 행 수 |
| `minHeight` | `number` | `72` | 최소 높이 (px) |
| `maxLength` | `number` | - | 최대 글자수 |
| `showCount` | `boolean` | `false` | 글자수 카운터 표시 |
| `autoHeight` | `boolean` | `false` | 내용에 따라 자동 높이 |
| `error` | `string` | - | 에러 메시지 |
| `disabled` | `boolean` | `false` | 비활성 |
| `readOnly` | `boolean` | `false` | 읽기 전용 |
