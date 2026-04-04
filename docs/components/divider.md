# Divider

콘텐츠 영역을 시각적으로 구분하는 구분선 컴포넌트입니다.

<span class="status-badge stable">Stable</span>

## 케이스

<div class="component-preview" style="display:flex; flex-direction:column; gap:24px;">
  <div>
    <div style="font-size:12px; color:var(--vp-c-text-3); margin-bottom:8px;">기본 (가로)</div>
    <hr style="border:none; border-top:1px solid var(--vp-c-divider); margin:0;" />
  </div>
  <div>
    <div style="font-size:12px; color:var(--vp-c-text-3); margin-bottom:8px;">텍스트 포함</div>
    <div style="display:flex; align-items:center; gap:12px;">
      <hr style="flex:1; border:none; border-top:1px solid var(--vp-c-divider); margin:0;" />
      <span style="font-size:12px; color:var(--vp-c-text-3); white-space:nowrap;">또는</span>
      <hr style="flex:1; border:none; border-top:1px solid var(--vp-c-divider); margin:0;" />
    </div>
  </div>
  <div>
    <div style="font-size:12px; color:var(--vp-c-text-3); margin-bottom:8px;">강조 (2px)</div>
    <hr style="border:none; border-top:2px solid var(--vp-c-divider); margin:0;" />
  </div>
  <div>
    <div style="font-size:12px; color:var(--vp-c-text-3); margin-bottom:8px;">점선</div>
    <hr style="border:none; border-top:1px dashed var(--vp-c-divider); margin:0;" />
  </div>
</div>

## 토큰 매핑

| 토큰 | Light | Dark |
|------|-------|------|
| `--divider-color` | `var(--gray-200)` | `var(--gray-700)` |
| `--divider-strong-color` | `var(--gray-300)` | `var(--gray-600)` |
| `--divider-spacing-sm` | `8px` | `8px` |
| `--divider-spacing-md` | `16px` | `16px` |
| `--divider-spacing-lg` | `24px` | `24px` |

## Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | 방향 |
| `variant` | `'solid' \| 'dashed' \| 'strong'` | `'solid'` | 스타일 |
| `label` | `string` | - | 중앙 텍스트 |
| `spacing` | `'sm' \| 'md' \| 'lg'` | `'md'` | 상하 간격 |
