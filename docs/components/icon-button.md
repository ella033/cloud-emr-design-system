# Icon Button

아이콘만으로 구성된 버튼 컴포넌트입니다. 카드 헤더 액션, 테이블 행 액션, 툴바 퀵 액션에 사용됩니다.

<span class="status-badge stable">Stable</span>

## 상태별 케이스

<IconButtonStates />

---

## 토큰 매핑

### Variant x State

| Variant | 배경 토큰 | Hover 토큰 | 텍스트/아이콘 토큰 |
|---------|----------|-----------|-----------------|
| Default | `--icon-btn-default-bg: var(--gray-100)` | `--icon-btn-default-bg-hover: var(--gray-200)` | `--icon-btn-default-color: var(--gray-600)` |
| Primary | `--icon-btn-primary-bg: #3B82F6` | `--icon-btn-primary-bg-hover: #2563EB` | `--icon-btn-primary-color: #FFFFFF` |
| Danger | `--icon-btn-danger-bg: #FEF2F2` | `--icon-btn-danger-bg-hover: #FEE2E2` | `--icon-btn-danger-color: #DC2626` |
| Ghost | `--icon-btn-ghost-bg: transparent` | `--icon-btn-ghost-bg-hover: var(--gray-100)` | `--icon-btn-ghost-color: var(--gray-500)` |
| Outline | `--icon-btn-outline-bg: transparent` | `--icon-btn-outline-bg-hover: var(--gray-50)` | `--icon-btn-outline-color: var(--gray-600)` |

### Size 토큰

| Size | `--icon-btn-{size}` | Radius |
|------|---------------------|--------|
| small | 28px | 6px |
| medium | 36px | 8px |
| large | 44px | 10px |

공통: `--icon-btn-focus-ring: 0 0 0 3px rgba(59,130,246,0.3)` / `--icon-btn-disabled-opacity: 0.5`

---

## Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `icon` | `ReactNode` | - | 아이콘 (`<Icon name="..." />`) |
| `variant` | `'default' \| 'primary' \| 'danger' \| 'ghost' \| 'outline'` | `'default'` | 스타일 |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 크기 |
| `disabled` | `boolean` | `false` | 비활성 |
| `title` | `string` | - | 툴팁/aria-label |
| `onClick` | `() => void` | - | 클릭 핸들러 |
