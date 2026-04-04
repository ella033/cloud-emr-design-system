# Grid Menu

카테고리나 메뉴 항목을 그리드 형태로 배치하는 컴포넌트입니다. 묶음처방 선택, 검사 항목 카테고리, 진료과 메뉴에 사용됩니다.

<span class="status-badge stable">Stable</span>

## 케이스

<div class="component-preview">
  <div style="font-size:12px; color:var(--vp-c-text-3); margin-bottom:8px;">3 Column (기본)</div>
  <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-bottom:20px;">
    <div v-for="item in ['혈액검사', '소변검사', '영상검사', '심전도', '폐기능', '내시경']" :key="item"
      style="padding:14px; text-align:center; border:1px solid var(--vp-c-divider); border-radius:10px; font-size:13px; cursor:pointer; color:var(--vp-c-text-1);">
      {{ item }}
    </div>
  </div>
  <div style="font-size:12px; color:var(--vp-c-text-3); margin-bottom:8px;">2 Column + 아이콘</div>
  <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:8px;">
    <div v-for="item in [{icon:'pill',label:'내과'},{icon:'syringe',label:'외과'},{icon:'heart',label:'심장내과'},{icon:'eye',label:'안과'}]" :key="item.label"
      style="padding:14px; display:flex; align-items:center; gap:10px; border:1px solid var(--vp-c-divider); border-radius:10px; font-size:13px; cursor:pointer; color:var(--vp-c-text-1);">
      <SvgIcon :name="item.icon" :size="20" /> {{ item.label }}
    </div>
  </div>
</div>

## 토큰 매핑

| 토큰 | Light | Dark |
|------|-------|------|
| `--grid-menu-item-bg` | `var(--gray-0)` | `var(--gray-900)` |
| `--grid-menu-item-bg-hover` | `var(--gray-50)` | `var(--gray-800)` |
| `--grid-menu-item-bg-active` | `rgba(59,130,246,0.08)` | `rgba(96,165,250,0.1)` |
| `--grid-menu-item-border` | `var(--gray-200)` | `var(--gray-700)` |
| `--grid-menu-item-border-active` | `#3B82F6` | `#60A5FA` |
| `--grid-menu-item-radius` | `10px` | `10px` |
| `--grid-menu-gap` | `8px` | `8px` |
| `--grid-menu-padding` | `14px` | `14px` |

## Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `columns` | `1 \| 2 \| 3 \| 4` | `3` | 컬럼 수 |
| `items` | `GridMenuItem[]` | - | 메뉴 항목 |
| `selectedKey` | `string` | - | 선택된 항목 키 |
| `onSelect` | `(key: string) => void` | - | 선택 핸들러 |
