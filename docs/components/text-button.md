# Text Button

텍스트만으로 구성된 최소한의 버튼입니다. "더보기", "전체보기", "초기화" 등 인라인 텍스트 액션에 사용됩니다.

<span class="status-badge stable">Stable</span>

## 케이스

<div class="component-preview" style="display:flex; gap:20px; flex-wrap:wrap; align-items:center;">
  <span style="font-size:13px; color:#3B82F6; cursor:pointer; font-weight:500;">더보기</span>
  <span style="font-size:13px; color:#3B82F6; cursor:pointer; font-weight:500; text-decoration:underline;">전체보기</span>
  <span style="font-size:13px; color:#DC2626; cursor:pointer; font-weight:500;">삭제</span>
  <span style="font-size:13px; color:var(--vp-c-text-3); cursor:pointer; font-weight:500;">초기화</span>
  <span style="font-size:13px; color:var(--vp-c-text-3); cursor:not-allowed; font-weight:500; opacity:0.5;">비활성</span>
</div>

## 토큰 매핑

| 토큰 | Light | Dark |
|------|-------|------|
| `--text-btn-primary-color` | `#3B82F6` | `#60A5FA` |
| `--text-btn-primary-hover` | `#2563EB` | `#93C5FD` |
| `--text-btn-danger-color` | `#DC2626` | `#F87171` |
| `--text-btn-default-color` | `var(--gray-500)` | `var(--gray-400)` |
| `--text-btn-disabled-opacity` | `0.5` | `0.5` |
| `--text-btn-font-size` | `13px` | `13px` |
| `--text-btn-font-weight` | `500` | `500` |

## Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `variant` | `'primary' \| 'danger' \| 'default'` | `'primary'` | 색상 |
| `underline` | `boolean` | `false` | 밑줄 표시 |
| `disabled` | `boolean` | `false` | 비활성 |
| `leftIcon` | `ReactNode` | - | 왼쪽 아이콘 |
| `onClick` | `() => void` | - | 클릭 핸들러 |
