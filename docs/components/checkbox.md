# Checkbox

하나 이상의 항목을 선택하는 체크박스 컴포넌트입니다. EMR에서 검사 항목 선택, 동의서 확인, 환자 다중 선택에 사용됩니다.

<span class="status-badge stable">Stable</span>

## 상태별 케이스

<CheckboxStates />

---

## 토큰 매핑

| 토큰 | Light | Dark | 설명 |
|------|-------|------|------|
| `--checkbox-size` | `18px` | `18px` | 체크박스 크기 |
| `--checkbox-radius` | `4px` | `4px` | 라운딩 |
| `--checkbox-border` | `var(--gray-300)` | `var(--gray-600)` | 기본 보더 |
| `--checkbox-border-hover` | `var(--gray-400)` | `var(--gray-500)` | 호버 보더 |
| `--checkbox-checked-bg` | `#3B82F6` | `#3B82F6` | 체크 시 배경 |
| `--checkbox-checked-icon` | `#FFFFFF` | `#FFFFFF` | 체크 아이콘 색 |
| `--checkbox-indeterminate-bg` | `#3B82F6` | `#3B82F6` | 불확정 배경 |
| `--checkbox-disabled-opacity` | `0.5` | `0.5` | 비활성 투명도 |
| `--checkbox-error-border` | `#EF4444` | `#F87171` | 에러 보더 |
| `--checkbox-focus-ring` | `0 0 0 3px rgba(59,130,246,0.2)` | `0 0 0 3px rgba(96,165,250,0.2)` | 포커스 링 |
| `--checkbox-label-gap` | `8px` | `8px` | 레이블 간격 |
| `--checkbox-label-font-size` | `13px` | `13px` | 레이블 크기 |

---

## Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `checked` | `boolean` | `false` | 체크 상태 |
| `indeterminate` | `boolean` | `false` | 불확정 상태 (전체 선택 시) |
| `disabled` | `boolean` | `false` | 비활성 |
| `error` | `boolean` | `false` | 에러 상태 |
| `label` | `string` | - | 레이블 텍스트 |
| `onChange` | `(checked: boolean) => void` | - | 변경 핸들러 |
