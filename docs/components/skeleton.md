# Skeleton

콘텐츠 로딩 중 레이아웃 구조를 미리 보여주는 플레이스홀더 컴포넌트입니다.

<span class="status-badge stable">Stable</span>

## 케이스

<div class="component-preview" style="display:flex; flex-direction:column; gap:24px;">
  <div>
    <div style="font-size:12px; color:var(--vp-c-text-3); margin-bottom:8px;">텍스트 Skeleton</div>
    <div style="display:flex; flex-direction:column; gap:8px;">
      <div style="height:16px; width:60%; background:var(--vp-c-bg-soft); border-radius:4px; animation:shimmer 1.5s infinite;"></div>
      <div style="height:14px; width:100%; background:var(--vp-c-bg-soft); border-radius:4px; animation:shimmer 1.5s infinite;"></div>
      <div style="height:14px; width:80%; background:var(--vp-c-bg-soft); border-radius:4px; animation:shimmer 1.5s infinite;"></div>
    </div>
  </div>
  <div>
    <div style="font-size:12px; color:var(--vp-c-text-3); margin-bottom:8px;">카드 Skeleton</div>
    <div style="border:1px solid var(--vp-c-divider); border-radius:12px; padding:16px; display:flex; gap:12px;">
      <div style="width:48px; height:48px; background:var(--vp-c-bg-soft); border-radius:50%; flex-shrink:0; animation:shimmer 1.5s infinite;"></div>
      <div style="flex:1; display:flex; flex-direction:column; gap:8px;">
        <div style="height:14px; width:40%; background:var(--vp-c-bg-soft); border-radius:4px; animation:shimmer 1.5s infinite;"></div>
        <div style="height:12px; width:70%; background:var(--vp-c-bg-soft); border-radius:4px; animation:shimmer 1.5s infinite;"></div>
        <div style="height:12px; width:55%; background:var(--vp-c-bg-soft); border-radius:4px; animation:shimmer 1.5s infinite;"></div>
      </div>
    </div>
  </div>
  <div>
    <div style="font-size:12px; color:var(--vp-c-text-3); margin-bottom:8px;">테이블 Skeleton</div>
    <div style="border:1px solid var(--vp-c-divider); border-radius:12px; overflow:hidden;">
      <div style="display:flex; gap:16px; padding:10px 12px; background:var(--vp-c-bg-soft);">
        <div style="height:12px; width:80px; background:var(--vp-c-divider); border-radius:4px;"></div>
        <div style="height:12px; width:60px; background:var(--vp-c-divider); border-radius:4px;"></div>
        <div style="height:12px; width:50px; background:var(--vp-c-divider); border-radius:4px;"></div>
        <div style="height:12px; width:40px; background:var(--vp-c-divider); border-radius:4px;"></div>
      </div>
      <div v-for="i in 3" :key="i" style="display:flex; gap:16px; padding:12px; border-top:1px solid var(--vp-c-divider);">
        <div style="height:14px; width:80px; background:var(--vp-c-bg-soft); border-radius:4px; animation:shimmer 1.5s infinite;"></div>
        <div style="height:14px; width:60px; background:var(--vp-c-bg-soft); border-radius:4px; animation:shimmer 1.5s infinite;"></div>
        <div style="height:14px; width:50px; background:var(--vp-c-bg-soft); border-radius:4px; animation:shimmer 1.5s infinite;"></div>
        <div style="height:20px; width:40px; background:var(--vp-c-bg-soft); border-radius:10px; animation:shimmer 1.5s infinite;"></div>
      </div>
    </div>
  </div>
</div>

<style>
@keyframes shimmer { 0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; } }
</style>

## 토큰 매핑

| 토큰 | Light | Dark |
|------|-------|------|
| `--skeleton-bg` | `var(--gray-100)` | `var(--gray-800)` |
| `--skeleton-highlight` | `var(--gray-200)` | `var(--gray-700)` |
| `--skeleton-radius-text` | `4px` | `4px` |
| `--skeleton-radius-circle` | `50%` | `50%` |
| `--skeleton-radius-card` | `12px` | `12px` |
| `--skeleton-animation-duration` | `1.5s` | `1.5s` |

## Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `variant` | `'text' \| 'circle' \| 'card' \| 'table'` | `'text'` | 형태 |
| `width` | `string \| number` | `'100%'` | 너비 |
| `height` | `string \| number` | `'auto'` | 높이 |
| `rows` | `number` | `3` | 텍스트 줄 수 |
| `animate` | `boolean` | `true` | 애니메이션 |
