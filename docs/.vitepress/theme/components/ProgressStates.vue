<script setup>
</script>

<template>
  <div class="pr-wrap">
    <!-- Progress Bar -->
    <h4 class="section-title">Progress Bar</h4>
    <div class="pr-demo">
      <div class="pr-item">
        <div class="pr-label-row"><span>파일 업로드</span><span class="pr-pct">45%</span></div>
        <div class="pr-track"><div class="pr-fill pr-blue" style="width:45%"></div></div>
      </div>
      <div class="pr-item">
        <div class="pr-label-row"><span>진료 진행</span><span class="pr-pct">75%</span></div>
        <div class="pr-track"><div class="pr-fill pr-green" style="width:75%"></div></div>
      </div>
      <div class="pr-item">
        <div class="pr-label-row"><span>디스크 사용량</span><span class="pr-pct pr-warn">92%</span></div>
        <div class="pr-track"><div class="pr-fill pr-red" style="width:92%"></div></div>
      </div>
      <div class="pr-item">
        <div class="pr-label-row"><span>로딩 중...</span></div>
        <div class="pr-track"><div class="pr-fill pr-blue pr-indeterminate"></div></div>
      </div>
    </div>

    <!-- Stepper -->
    <h4 class="section-title">Progress Stepper (수평)</h4>
    <div class="pr-demo">
      <div class="st-horizontal">
        <div class="st-step done">
          <div class="st-dot done"><SvgIcon name="check" :size="12" /></div>
          <span class="st-text">접수</span>
        </div>
        <div class="st-line done"></div>
        <div class="st-step done">
          <div class="st-dot done"><SvgIcon name="check" :size="12" /></div>
          <span class="st-text">바이탈</span>
        </div>
        <div class="st-line active"></div>
        <div class="st-step active">
          <div class="st-dot active">3</div>
          <span class="st-text active-text">진료중</span>
        </div>
        <div class="st-line"></div>
        <div class="st-step">
          <div class="st-dot">4</div>
          <span class="st-text">처방</span>
        </div>
        <div class="st-line"></div>
        <div class="st-step">
          <div class="st-dot">5</div>
          <span class="st-text">수납</span>
        </div>
      </div>
    </div>

    <!-- Stepper Error -->
    <h4 class="section-title">Stepper with Error</h4>
    <div class="pr-demo">
      <div class="st-horizontal">
        <div class="st-step done">
          <div class="st-dot done"><SvgIcon name="check" :size="12" /></div>
          <span class="st-text">처방 입력</span>
        </div>
        <div class="st-line done"></div>
        <div class="st-step done">
          <div class="st-dot done"><SvgIcon name="check" :size="12" /></div>
          <span class="st-text">DUR 확인</span>
        </div>
        <div class="st-line error-line"></div>
        <div class="st-step error-step">
          <div class="st-dot error-dot"><SvgIcon name="close" :size="12" /></div>
          <span class="st-text error-text">전송 실패</span>
        </div>
        <div class="st-line"></div>
        <div class="st-step">
          <div class="st-dot">4</div>
          <span class="st-text">완료</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pr-wrap { margin: 20px 0 28px; }
.section-title { font-size: 14px; font-weight: 600; color: var(--vp-c-text-1); margin: 20px 0 12px; }
.section-title:first-child { margin-top: 0; }

.pr-demo {
  padding: 16px; border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg);
}

/* Progress Bar */
.pr-item { margin-bottom: 14px; }
.pr-item:last-child { margin-bottom: 0; }
.pr-label-row { display: flex; justify-content: space-between; font-size: 12px; color: var(--vp-c-text-2); margin-bottom: 4px; }
.pr-pct { font-family: var(--vp-font-family-mono); font-weight: 600; }
.pr-pct.pr-warn { color: #DC2626; }

.pr-track { height: 6px; background: var(--vp-c-bg-soft); border-radius: 3px; overflow: hidden; }
.pr-fill { height: 100%; border-radius: 3px; transition: width 0.5s ease; }
.pr-fill.pr-blue { background: #3B82F6; }
.pr-fill.pr-green { background: #22C55E; }
.pr-fill.pr-red { background: #DC2626; }

.pr-fill.pr-indeterminate {
  width: 30% !important;
  animation: indeterminate 1.5s ease-in-out infinite;
}
@keyframes indeterminate {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}

/* Stepper */
.st-horizontal { display: flex; align-items: center; }

.st-step { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.st-dot {
  width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 600; background: var(--vp-c-bg-soft); color: var(--vp-c-text-3);
  border: 2px solid var(--vp-c-divider);
}
.st-dot.done { background: #22C55E; color: #fff; border-color: #22C55E; }
.st-dot.active { background: #3B82F6; color: #fff; border-color: #3B82F6; }
.st-dot.error-dot { background: #DC2626; color: #fff; border-color: #DC2626; }

.st-line { flex: 1; height: 2px; background: var(--vp-c-divider); margin: 0 4px; min-width: 30px; margin-bottom: 22px; }
.st-line.done { background: #22C55E; }
.st-line.active { background: #3B82F6; }
.st-line.error-line { background: #DC2626; }

.st-text { font-size: 11px; color: var(--vp-c-text-3); white-space: nowrap; }
.st-text.active-text { color: #3B82F6; font-weight: 600; }
.st-text.error-text { color: #DC2626; font-weight: 600; }
</style>
