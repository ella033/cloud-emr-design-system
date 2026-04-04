<script setup>
</script>

<template>
  <div class="tt-wrap">
    <!-- Directions -->
    <h4 class="section-title">방향 (Direction)</h4>
    <div class="tt-direction-demo">
      <!-- Top -->
      <div class="tt-dir-card">
        <div class="tt-dir-label">TOP</div>
        <div class="tt-dir-stage top-stage">
          <div class="tt-bubble-static tt-dark">약물 상호작용 정보</div>
          <div class="tt-arrow-down"></div>
          <button class="tt-trigger"><SvgIcon name="info" :size="16" /></button>
        </div>
      </div>
      <!-- Right -->
      <div class="tt-dir-card">
        <div class="tt-dir-label">RIGHT</div>
        <div class="tt-dir-stage right-stage">
          <button class="tt-trigger"><SvgIcon name="info" :size="16" /></button>
          <div class="tt-arrow-right"></div>
          <div class="tt-bubble-static tt-dark">약물 상호작용 정보</div>
        </div>
      </div>
      <!-- Bottom -->
      <div class="tt-dir-card">
        <div class="tt-dir-label">BOTTOM</div>
        <div class="tt-dir-stage bottom-stage">
          <button class="tt-trigger"><SvgIcon name="info" :size="16" /></button>
          <div class="tt-arrow-up"></div>
          <div class="tt-bubble-static tt-dark">약물 상호작용 정보</div>
        </div>
      </div>
      <!-- Left -->
      <div class="tt-dir-card">
        <div class="tt-dir-label">LEFT</div>
        <div class="tt-dir-stage left-stage">
          <div class="tt-bubble-static tt-dark">약물 상호작용 정보</div>
          <div class="tt-arrow-left"></div>
          <button class="tt-trigger"><SvgIcon name="info" :size="16" /></button>
        </div>
      </div>
    </div>

    <!-- Variants -->
    <h4 class="section-title">Variants</h4>
    <div class="tt-variant-row">
      <div class="tt-var-card">
        <div class="tt-dir-label">Dark (기본)</div>
        <div class="tt-bubble-static tt-dark">처방 코드: J06.9</div>
      </div>
      <div class="tt-var-card">
        <div class="tt-dir-label">Light</div>
        <div class="tt-bubble-static tt-light">처방 코드: J06.9</div>
      </div>
      <div class="tt-var-card">
        <div class="tt-dir-label">Multi-line</div>
        <div class="tt-bubble-static tt-dark tt-multiline">이 약물은 페니실린 계열입니다. 알러지 환자에게 주의하세요.</div>
      </div>
    </div>

    <!-- EMR -->
    <h4 class="section-title">EMR 활용 예시</h4>
    <div class="tt-emr-row">
      <div class="tt-emr-item">
        <span class="tt-emr-label">단축키 안내</span>
        <div class="tt-bubble-static tt-dark">⌘+S 저장</div>
      </div>
      <div class="tt-emr-item">
        <span class="tt-emr-label">아이콘 설명</span>
        <div class="tt-bubble-static tt-dark">환자 차트 열기</div>
      </div>
      <div class="tt-emr-item">
        <span class="tt-emr-label">수치 참고</span>
        <div class="tt-bubble-static tt-dark">정상 범위: 4.0-10.0</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tt-wrap { margin: 20px 0 28px; }
.section-title { font-size: 14px; font-weight: 600; color: var(--vp-c-text-1); margin: 20px 0 12px; }
.section-title:first-child { margin-top: 0; }

/* Direction demo */
.tt-direction-demo {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
  padding: 16px; border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg);
}

.tt-dir-card {
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  padding: 16px; border: 1px solid var(--vp-c-divider); border-radius: 8px;
}

.tt-dir-label {
  font-size: 10px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.05em; color: var(--vp-c-text-3);
}

.tt-dir-stage {
  display: flex; align-items: center; gap: 4px;
}
.tt-dir-stage.top-stage,
.tt-dir-stage.bottom-stage {
  flex-direction: column;
}
.tt-dir-stage.right-stage,
.tt-dir-stage.left-stage {
  flex-direction: row;
}

/* Trigger button */
.tt-trigger {
  width: 32px; height: 32px; border-radius: 8px; border: 1px solid var(--vp-c-divider);
  display: flex; align-items: center; justify-content: center;
  background: var(--vp-c-bg-soft); cursor: pointer; flex-shrink: 0;
}

/* Bubble - static (not absolute) */
.tt-bubble-static {
  padding: 6px 12px; border-radius: 6px; font-size: 12px;
  white-space: nowrap;
}
.tt-bubble-static.tt-dark { background: #0F172A; color: #F8FAFC; }
.tt-bubble-static.tt-light {
  background: var(--vp-c-bg); color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider); box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.tt-bubble-static.tt-multiline { white-space: normal; max-width: 200px; line-height: 1.5; }

/* Arrows */
.tt-arrow-down {
  width: 0; height: 0;
  border-left: 5px solid transparent; border-right: 5px solid transparent;
  border-top: 5px solid #0F172A;
}
.tt-arrow-up {
  width: 0; height: 0;
  border-left: 5px solid transparent; border-right: 5px solid transparent;
  border-bottom: 5px solid #0F172A;
}
.tt-arrow-right {
  width: 0; height: 0;
  border-top: 5px solid transparent; border-bottom: 5px solid transparent;
  border-left: 5px solid #0F172A;
}
.tt-arrow-left {
  width: 0; height: 0;
  border-top: 5px solid transparent; border-bottom: 5px solid transparent;
  border-right: 5px solid #0F172A;
}

/* Variant row */
.tt-variant-row {
  display: flex; gap: 16px; flex-wrap: wrap; padding: 16px;
  border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg);
}
.tt-var-card { display: flex; flex-direction: column; align-items: center; gap: 8px; }

/* EMR row */
.tt-emr-row {
  display: flex; gap: 16px; flex-wrap: wrap; padding: 16px;
  border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg);
}
.tt-emr-item { display: flex; flex-direction: column; gap: 6px; }
.tt-emr-label { font-size: 12px; color: var(--vp-c-text-3); }
</style>
