<script setup>
const toasts = [
  { type: 'success', icon: '✓', msg: '처방이 전송되었습니다', bg: '#0F172A', border: 'none', textColor: '#F8FAFC', iconColor: '#22C55E' },
  { type: 'error', icon: '✕', msg: '처방 전송에 실패했습니다', bg: '#FEF2F2', border: '1px solid #FECACA', textColor: '#DC2626', iconColor: '#DC2626' },
  { type: 'warning', icon: '⚠', msg: '알러지 약물이 포함되어 있습니다', bg: '#FEF9C3', border: '1px solid #FEF08A', textColor: '#A16207', iconColor: '#A16207' },
  { type: 'info', icon: 'ℹ', msg: '임상메모가 자동 저장되었습니다', bg: '#F0FDFA', border: '1px solid #99F6E4', textColor: '#0F766E', iconColor: '#14B8A6' },
]

const withAction = {
  type: 'warning', icon: '⚠', msg: 'DUR 중복 처방 확인이 필요합니다',
  bg: '#FEF9C3', border: '1px solid #FEF08A', textColor: '#A16207', iconColor: '#A16207',
  action: '확인',
}
</script>

<template>
  <div class="toast-states-wrap">
    <h4 class="section-title">Toast Types</h4>
    <div class="toast-demo">
      <div
        v-for="t in toasts"
        :key="t.type"
        class="toast-item"
        :style="{ background: t.bg, border: t.border, color: t.textColor }"
      >
        <span class="toast-icon" :style="{ color: t.iconColor }">{{ t.icon }}</span>
        <span class="toast-msg">{{ t.msg }}</span>
        <span class="toast-type-label">{{ t.type }}</span>
      </div>
    </div>

    <h4 class="section-title">With Action Button</h4>
    <div class="toast-demo">
      <div
        class="toast-item"
        :style="{ background: withAction.bg, border: withAction.border, color: withAction.textColor }"
      >
        <span class="toast-icon" :style="{ color: withAction.iconColor }">{{ withAction.icon }}</span>
        <span class="toast-msg">{{ withAction.msg }}</span>
        <button class="toast-action" :style="{ color: withAction.iconColor }">{{ withAction.action }}</button>
      </div>
    </div>

    <h4 class="section-title">Position</h4>
    <div class="toast-position-demo">
      <div class="pos-screen">
        <div class="pos-dot top-right">
          <div class="pos-toast">✓ 처방 전송됨</div>
          <div class="pos-label">top-right (기본)</div>
        </div>
        <div class="pos-dot top-center">
          <div class="pos-toast">✓ 저장됨</div>
          <div class="pos-label">top-center</div>
        </div>
        <div class="pos-dot bottom-right">
          <div class="pos-toast">ℹ 자동저장</div>
          <div class="pos-label">bottom-right</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toast-states-wrap { margin: 20px 0 28px; }

.section-title {
  font-size: 14px; font-weight: 600; color: var(--vp-c-text-1);
  margin: 20px 0 12px;
}
.section-title:first-child { margin-top: 0; }

.toast-demo {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 420px;
}

.toast-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 13px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}

.toast-icon { font-size: 16px; flex-shrink: 0; }
.toast-msg { flex: 1; }

.toast-type-label {
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0.5;
  flex-shrink: 0;
}

.toast-action {
  background: none;
  border: none;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline;
  font-family: inherit;
  flex-shrink: 0;
}

/* Position demo */
.toast-position-demo {
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
}

.pos-screen {
  position: relative;
  width: 100%;
  height: 180px;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.pos-dot { position: absolute; }
.pos-dot.top-right { top: 12px; right: 12px; }
.pos-dot.top-center { top: 12px; left: 50%; transform: translateX(-50%); }
.pos-dot.bottom-right { bottom: 12px; right: 12px; }

.pos-toast {
  background: #0F172A;
  color: #F8FAFC;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 11px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.pos-label {
  font-size: 9px;
  color: var(--vp-c-text-3);
  text-align: center;
  margin-top: 4px;
  font-family: var(--vp-font-family-mono);
}
</style>
