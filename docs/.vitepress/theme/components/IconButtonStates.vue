<script setup>
</script>

<template>
  <div class="ib-wrap">
    <!-- Variants -->
    <h4 class="section-title">Variants</h4>
    <div class="ib-row">
      <div class="ib-col">
        <div class="ib-label">Default</div>
        <button class="icon-btn ib-default"><SvgIcon name="settings" :size="16" /></button>
      </div>
      <div class="ib-col">
        <div class="ib-label">Primary</div>
        <button class="icon-btn ib-primary"><SvgIcon name="plus" :size="16" /></button>
      </div>
      <div class="ib-col">
        <div class="ib-label">Danger</div>
        <button class="icon-btn ib-danger"><SvgIcon name="trash" :size="16" /></button>
      </div>
      <div class="ib-col">
        <div class="ib-label">Ghost</div>
        <button class="icon-btn ib-ghost"><SvgIcon name="more-horizontal" :size="16" /></button>
      </div>
      <div class="ib-col">
        <div class="ib-label">Outline</div>
        <button class="icon-btn ib-outline"><SvgIcon name="edit" :size="16" /></button>
      </div>
    </div>

    <!-- Sizes -->
    <h4 class="section-title">Sizes</h4>
    <div class="ib-row align-center">
      <div class="ib-col">
        <div class="ib-label">Small (28px)</div>
        <button class="icon-btn ib-default ib-sm"><SvgIcon name="close" :size="12" /></button>
      </div>
      <div class="ib-col">
        <div class="ib-label">Medium (36px)</div>
        <button class="icon-btn ib-default ib-md"><SvgIcon name="close" :size="16" /></button>
      </div>
      <div class="ib-col">
        <div class="ib-label">Large (44px)</div>
        <button class="icon-btn ib-default ib-lg"><SvgIcon name="close" :size="20" /></button>
      </div>
    </div>

    <!-- States (Primary) -->
    <h4 class="section-title">States (Primary)</h4>
    <div class="ib-row">
      <div class="ib-col">
        <div class="ib-label">Default</div>
        <button class="icon-btn ib-primary"><SvgIcon name="plus" :size="16" /></button>
      </div>
      <div class="ib-col">
        <div class="ib-label">Hover</div>
        <button class="icon-btn ib-primary ib-hover"><SvgIcon name="plus" :size="16" /></button>
      </div>
      <div class="ib-col">
        <div class="ib-label accent-label">Focus</div>
        <button class="icon-btn ib-primary ib-focus"><SvgIcon name="plus" :size="16" /></button>
      </div>
      <div class="ib-col">
        <div class="ib-label dim-label">Disabled</div>
        <button class="icon-btn ib-primary ib-disabled" disabled><SvgIcon name="plus" :size="16" /></button>
      </div>
    </div>

    <!-- EMR Usage -->
    <h4 class="section-title">EMR 활용 예시</h4>
    <div class="ib-emr-demo">
      <div class="ib-emr-section">
        <span class="ib-emr-title">카드 헤더 액션</span>
        <div class="ib-emr-actions">
          <button class="icon-btn ib-ghost ib-sm" title="최소화"><SvgIcon name="minus" :size="12" /></button>
          <button class="icon-btn ib-ghost ib-sm" title="최대화"><SvgIcon name="chevron-right" :size="12" /></button>
          <button class="icon-btn ib-ghost ib-sm" title="더보기"><SvgIcon name="more-horizontal" :size="12" /></button>
        </div>
      </div>
      <div class="ib-emr-section">
        <span class="ib-emr-title">테이블 행 액션</span>
        <div class="ib-emr-actions">
          <button class="icon-btn ib-ghost ib-sm" title="차트"><SvgIcon name="clipboard" :size="12" /></button>
          <button class="icon-btn ib-ghost ib-sm" title="메모"><SvgIcon name="message" :size="12" /></button>
          <button class="icon-btn ib-danger ib-sm" title="삭제"><SvgIcon name="trash" :size="12" /></button>
        </div>
      </div>
      <div class="ib-emr-section">
        <span class="ib-emr-title">퀵 액션</span>
        <div class="ib-emr-actions">
          <button class="icon-btn ib-primary" title="추가"><SvgIcon name="plus" :size="16" /></button>
          <button class="icon-btn ib-outline" title="인쇄"><SvgIcon name="printer" :size="16" /></button>
          <button class="icon-btn ib-outline" title="다운로드"><SvgIcon name="download" :size="16" /></button>
          <button class="icon-btn ib-default" title="새로고침"><SvgIcon name="refresh" :size="16" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ib-wrap { margin: 20px 0 28px; }
.section-title { font-size: 14px; font-weight: 600; color: var(--vp-c-text-1); margin: 20px 0 12px; }
.section-title:first-child { margin-top: 0; }

.ib-row {
  display: flex; gap: 16px; flex-wrap: wrap; padding: 16px;
  border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg);
  align-items: flex-start;
}
.ib-row.align-center { align-items: center; }
.ib-col { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.ib-label { font-size: 10px; font-weight: 600; text-transform: uppercase; color: var(--vp-c-text-3); }
.accent-label { color: #3B82F6; }
.dim-label { color: var(--vp-c-text-3); }

/* Icon Button base */
.icon-btn {
  display: flex; align-items: center; justify-content: center;
  border: none; border-radius: var(--radius-md, 8px); cursor: pointer;
  transition: all 0.15s; width: 36px; height: 36px;
}

/* Variants */
.ib-default { background: var(--vp-c-bg-soft); color: var(--vp-c-text-2); }
.ib-default:hover { background: var(--vp-c-bg-alt); }
.ib-primary { background: #3B82F6; color: #fff; }
.ib-primary:hover { background: #2563EB; }
.ib-danger { background: #FEF2F2; color: #DC2626; }
.ib-danger:hover { background: #FEE2E2; }
.dark .ib-danger { background: #450A0A; color: #F87171; }
.ib-ghost { background: transparent; color: var(--vp-c-text-3); }
.ib-ghost:hover { background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); }
.ib-outline { background: transparent; color: var(--vp-c-text-2); border: 1px solid var(--vp-c-divider); }
.ib-outline:hover { background: var(--vp-c-bg-soft); border-color: var(--vp-c-text-3); }

/* States */
.ib-hover.ib-primary { background: #2563EB; }
.ib-focus.ib-primary { background: #3B82F6; box-shadow: 0 0 0 3px rgba(59,130,246,0.3); }
.ib-disabled { opacity: 0.5; cursor: not-allowed; }

/* Sizes */
.ib-sm { width: 28px; height: 28px; border-radius: 6px; }
.ib-md { width: 36px; height: 36px; }
.ib-lg { width: 44px; height: 44px; border-radius: 10px; }

/* EMR demo */
.ib-emr-demo {
  padding: 16px; border: 1px solid var(--vp-c-divider); border-radius: 10px;
  background: var(--vp-c-bg); display: flex; flex-direction: column; gap: 14px;
}
.ib-emr-section { display: flex; align-items: center; justify-content: space-between; }
.ib-emr-title { font-size: 12px; font-weight: 500; color: var(--vp-c-text-2); }
.ib-emr-actions { display: flex; gap: 6px; }
</style>
