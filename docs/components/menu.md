# Menu (Dropdown)

트리거 클릭 시 나타나는 드롭다운 메뉴 컴포넌트입니다. 카드 더보기, 정렬/필터, 레이아웃 선택 등에 사용됩니다.

<span class="status-badge stable">Stable</span>

## 상태별 케이스

<MenuStates />

---

## 토큰 매핑

| 토큰 | Light | Dark |
|------|-------|------|
| `--menu-bg` | `var(--gray-0)` | `var(--gray-800)` |
| `--menu-border` | `var(--gray-200)` | `var(--gray-700)` |
| `--menu-shadow` | `0 4px 12px rgba(0,0,0,0.1)` | `0 4px 12px rgba(0,0,0,0.4)` |
| `--menu-radius` | `10px` | `10px` |
| `--menu-item-hover-bg` | `var(--gray-50)` | `var(--gray-700)` |
| `--menu-item-active-bg` | `rgba(59,130,246,0.08)` | `rgba(96,165,250,0.1)` |
| `--menu-item-active-text` | `#3B82F6` | `#60A5FA` |
| `--menu-item-danger-text` | `#DC2626` | `#F87171` |
| `--menu-item-danger-hover-bg` | `#FEF2F2` | `#450A0A` |
| `--menu-item-disabled-opacity` | `0.5` | `0.5` |
| `--menu-divider-color` | `var(--gray-200)` | `var(--gray-700)` |
| `--menu-header-text` | `var(--gray-400)` | `var(--gray-500)` |
| `--menu-item-font-size` | `13px` | `13px` |
| `--menu-item-padding` | `8px 12px` | `8px 12px` |
| `--menu-min-width` | `180px` | `180px` |

---

## Props

### Menu.Trigger

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `open` | `boolean` | - | 제어 모드 열림 상태 |
| `defaultOpen` | `boolean` | `false` | 비제어 초기 상태 |
| `placement` | `'bottom-start' \| 'bottom-end' \| 'top-start' \| 'right-start'` 등 | `'bottom-start'` | 배치 방향 |
| `dropdown` | `ReactNode` | - | 드롭다운 내용 |
| `onOpen` | `() => void` | - | 열림 핸들러 |
| `onClose` | `() => void` | - | 닫힘 핸들러 |

### Menu.Item

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `icon` | `ReactNode` | - | 좌측 아이콘 |
| `danger` | `boolean` | `false` | 위험 스타일 |
| `disabled` | `boolean` | `false` | 비활성 |
| `onClick` | `() => void` | - | 클릭 핸들러 |

### Menu.CheckItem

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `checked` | `boolean` | `false` | 체크 상태 |
| `onChange` | `(checked: boolean) => void` | - | 변경 핸들러 |
