<script setup>
</script>

<template>
  <div class="tt-wrap">
    <!-- Directions -->
    <h4 class="section-title">방향 (Direction)</h4>
    <div class="tt-direction-demo">
      <div class="tt-target-wrap" v-for="dir in ['top','right','bottom','left']" :key="dir">
        <div class="tt-label">{{ dir }}</div>
        <div class="tt-target-area">
          <div :class="['tt-bubble', `tt-${dir}`]">약물 상호작용 정보</div>
          <button class="tt-trigger"><SvgIcon name="info" :size="16" /></button>
        </div>
      </div>
    </div>

    <!-- Variants -->
    <h4 class="section-title">Variants</h4>
    <div class="tt-row">
      <div class="tt-col">
        <div class="tt-label">Dark (기본)</div>
        <div class="tt-bubble tt-top tt-dark">처방 코드: J06.9</div>
      </div>
      <div class="tt-col">
        <div class="tt-label">Light</div>
        <div class="tt-bubble tt-top tt-light">처방 코드: J06.9</div>
      </div>
      <div class="tt-col">
        <div class="tt-label">Multi-line</div>
        <div class="tt-bubble tt-top tt-dark tt-multiline">이 약물은 페니실린 계열입니다.<br/>알러지 환자에게 주의하세요.</div>
      </div>
    </div>

    <!-- EMR -->
    <h4 class="section-title">EMR 활용 예시</h4>
    <div class="tt-emr-row">
      <div class="tt-emr-item">
        <span>단축키 안내</span>
        <div class="tt-bubble tt-top tt-dark tt-inline">⌘+S 저장</div>
      </div>
      <div class="tt-emr-item">
        <span>아이콘 설명</span>
        <div class="tt-bubble tt-top tt-dark tt-inline">환자 차트 열기</div>
      </div>
      <div class="tt-emr-item">
        <span>수치 참고</span>
        <div class="tt-bubble tt-top tt-dark tt-inline">정상 범위: 4.0-10.0</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tt-wrap { margin: 20px 0 28px; }
.section-title { font-size: 14px; font-weight: 600; color: var(--vp-c-text-1); margin: 20px 0 12px; }
.section-title:first-child { margin-top: 0; }

.tt-direction-demo {
  display: flex; gap: 24px; flex-wrap: wrap; padding: 32px 16px;
  border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg);
  justify-content: center;
}
.tt-target-wrap { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.tt-label { font-size: 10px; font-weight: 600; text-transform: uppercase; color: var(--vp-c-text-3); }

.tt-target-area { position: relative; display: flex; align-items: center; justify-content: center; }
.tt-trigger {
  width: 32px; height: 32px; border-radius: 8px; border: 1px solid var(--vp-c-divider);
  display: flex; align-items: center; justify-content: center;
  background: var(--vp-c-bg); cursor: pointer;
}

.tt-bubble {
  position: absolute; padding: 6px 10px; border-radius: 6px; font-size: 11px;
  white-space: nowrap; pointer-events: none; z-index: 10;
}
.tt-bubble.tt-dark { background: #0F172A; color: #F8FAFC; }
.tt-bubble.tt-light { background: var(--vp-c-bg); color: var(--vp-c-text-1); border: 1px solid var(--vp-c-divider); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.tt-bubble.tt-multiline { white-space: normal; width: 180px; line-height: 1.4; }
.tt-bubble.tt-inline { position: static; display: inline-block; }

.tt-bubble.tt-top { bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
.tt-bubble.tt-bottom { top: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
.tt-bubble.tt-left { right: calc(100% + 8px); top: 50%; transform: translateY(-50%); }
.tt-bubble.tt-right { left: calc(100% + 8px); top: 50%; transform: translateY(-50%); }

.tt-row {
  display: flex; gap: 16px; flex-wrap: wrap; padding: 16px;
  border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg);
}
.tt-col { display: flex; flex-direction: column; align-items: center; gap: 8px; }

.tt-emr-row {
  display: flex; gap: 16px; flex-wrap: wrap; padding: 16px;
  border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg);
}
.tt-emr-item { display: flex; flex-direction: column; gap: 6px; font-size: 12px; color: var(--vp-c-text-2); }
</style>
