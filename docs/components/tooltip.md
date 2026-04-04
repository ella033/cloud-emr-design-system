# Tooltip

마우스 오버나 포커스 시 추가 정보를 표시하는 팝업 컴포넌트입니다. 약물 정보, 단축키 안내, 아이콘 설명에 사용됩니다.

<span class="status-badge stable">Stable</span>

## 상태별 케이스

<TooltipStates />

---

## 토큰 매핑

| 토큰 | Light | Dark |
|------|-------|------|
| `--tooltip-dark-bg` | `#0F172A` | `#F8FAFC` |
| `--tooltip-dark-text` | `#F8FAFC` | `#0F172A` |
| `--tooltip-light-bg` | `var(--gray-0)` | `var(--gray-800)` |
| `--tooltip-light-text` | `var(--gray-900)` | `var(--gray-50)` |
| `--tooltip-light-border` | `var(--gray-200)` | `var(--gray-700)` |
| `--tooltip-radius` | `6px` | `6px` |
| `--tooltip-padding` | `6px 10px` | `6px 10px` |
| `--tooltip-font-size` | `11px` | `11px` |
| `--tooltip-shadow` | `0 2px 8px rgba(0,0,0,0.15)` | `0 2px 8px rgba(0,0,0,0.4)` |
| `--tooltip-offset` | `8px` | `8px` |

---

## Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `content` | `string \| ReactNode` | - | 툴팁 내용 |
| `direction` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | 표시 방향 |
| `variant` | `'dark' \| 'light'` | `'dark'` | 스타일 |
| `trigger` | `'hover' \| 'click' \| 'focus'` | `'hover'` | 트리거 방식 |
| `delay` | `number` | `200` | 표시 지연 (ms) |
| `maxWidth` | `number` | `240` | 최대 너비 (px) |
