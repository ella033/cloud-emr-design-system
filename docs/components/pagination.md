# Pagination

목록 데이터를 페이지 단위로 탐색하는 컴포넌트입니다. 환자 목록, 처방 이력, 검사 결과 페이징에 사용됩니다.

<span class="status-badge stable">Stable</span>

## 상태별 케이스

<PaginationStates />

---

## 토큰 매핑

| 토큰 | Light | Dark |
|------|-------|------|
| `--pagination-btn-bg` | `var(--gray-0)` | `var(--gray-900)` |
| `--pagination-btn-border` | `var(--gray-200)` | `var(--gray-700)` |
| `--pagination-btn-hover-bg` | `var(--gray-50)` | `var(--gray-800)` |
| `--pagination-active-bg` | `#3B82F6` | `#3B82F6` |
| `--pagination-active-text` | `#FFFFFF` | `#FFFFFF` |
| `--pagination-text` | `var(--gray-600)` | `var(--gray-300)` |
| `--pagination-disabled-opacity` | `0.3` | `0.3` |
| `--pagination-size` | `32px` | `32px` |
| `--pagination-radius` | `6px` | `6px` |

---

## Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `current` | `number` | `1` | 현재 페이지 |
| `total` | `number` | - | 전체 페이지 수 |
| `variant` | `'default' \| 'compact'` | `'default'` | 스타일 |
| `showTotal` | `boolean` | `false` | 총 건수 표시 |
| `onChange` | `(page: number) => void` | - | 페이지 변경 핸들러 |
