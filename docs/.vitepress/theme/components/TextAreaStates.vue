<script setup>
import { ref } from 'vue'
const text1 = ref('')
const text2 = ref('3일 전부터 두통과 발열 지속. 기침은 어제부터 시작.')
const textErr = ref('메모')
</script>

<template>
  <div class="ta-wrap">
    <div class="states-grid">
      <!-- Default -->
      <div class="state-card">
        <div class="state-label">Default</div>
        <div class="ta-field">
          <label class="ta-label">임상메모</label>
          <textarea class="ta-input default" placeholder="진료 소견을 입력하세요" readonly></textarea>
        </div>
        <div class="state-desc">빈 상태, placeholder 표시</div>
      </div>

      <!-- Focus -->
      <div class="state-card">
        <div class="state-label accent">Focus</div>
        <div class="ta-field">
          <label class="ta-label">임상메모</label>
          <textarea class="ta-input focus-state" readonly>{{ text1 }}</textarea>
          <div class="ta-cursor"></div>
        </div>
        <div class="state-desc">포커스 시 Primary 보더 + 링</div>
      </div>

      <!-- Filled -->
      <div class="state-card">
        <div class="state-label">Filled</div>
        <div class="ta-field">
          <label class="ta-label">증상 기록</label>
          <textarea class="ta-input filled" readonly>{{ text2 }}</textarea>
          <div class="ta-counter">{{ text2.length }} / 2000</div>
        </div>
        <div class="state-desc">값 입력됨 + 글자수 카운터</div>
      </div>

      <!-- Error -->
      <div class="state-card">
        <div class="state-label error">Error</div>
        <div class="ta-field">
          <label class="ta-label ta-label-error">임상메모 *</label>
          <textarea class="ta-input error-state" readonly>{{ textErr }}</textarea>
          <div class="ta-error-msg">최소 10자 이상 입력해주세요</div>
        </div>
        <div class="state-desc">유효성 실패 + 에러 메시지</div>
      </div>

      <!-- Disabled -->
      <div class="state-card">
        <div class="state-label dim">Disabled</div>
        <div class="ta-field">
          <label class="ta-label ta-label-disabled">임상메모</label>
          <textarea class="ta-input disabled-state" disabled readonly>이전 진료 기록 내용...</textarea>
        </div>
        <div class="state-desc">비활성, 입력 불가</div>
      </div>

      <!-- ReadOnly -->
      <div class="state-card">
        <div class="state-label dim">Read Only</div>
        <div class="ta-field">
          <label class="ta-label">임상메모</label>
          <textarea class="ta-input readonly-state" readonly>환자 3일 전부터 두통 호소. 발열 동반.</textarea>
        </div>
        <div class="state-desc">읽기 전용, 편집 불가</div>
      </div>

      <!-- Auto Height -->
      <div class="state-card wide">
        <div class="state-label accent">Auto Height</div>
        <div class="ta-field">
          <label class="ta-label">SOAP 메모</label>
          <textarea class="ta-input auto-height filled" readonly>S: 3일 전부터 두통과 발열 지속. 기침 어제부터 시작.
O: BP 130/85, HR 78, BT 37.8. 인후 발적(+), 편도 비대(-).
A: 급성 상기도감염 의심.
P: 대증치료 처방, 3일 후 f/u.</textarea>
          <div class="ta-counter">143 / 2000</div>
        </div>
        <div class="state-desc">내용에 따라 자동으로 높이 확장 (minHeight 설정)</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ta-wrap { margin: 20px 0 28px; }

.states-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}
.state-card {
  border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 16px;
  background: var(--vp-c-bg);
}
.state-card.wide { grid-column: span 2; }

.state-label {
  font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
  color: var(--vp-c-text-2); margin-bottom: 12px; padding: 2px 8px; border-radius: 4px;
  display: inline-block; background: var(--vp-c-bg-soft);
}
.state-label.accent { background: #DBEAFE; color: #1D4ED8; }
.state-label.error { background: #FEE2E2; color: #DC2626; }
.state-label.dim { background: var(--vp-c-bg-alt); color: var(--vp-c-text-3); }
.dark .state-label.accent { background: #172554; color: #60A5FA; }
.dark .state-label.error { background: #450A0A; color: #F87171; }

.state-desc { font-size: 11px; color: var(--vp-c-text-3); margin-top: 8px; }

/* TextArea field */
.ta-field { position: relative; }
.ta-label { display: block; font-size: 12px; font-weight: 500; color: var(--vp-c-text-2); margin-bottom: 4px; }
.ta-label-error { color: var(--input-label-error-color, #DC2626); }
.dark .ta-label-error { color: var(--input-label-error-color, #F87171); }
.ta-label-disabled { color: var(--vp-c-text-3); }

.ta-input {
  width: 100%; padding: 8px 10px; border-radius: var(--input-radius, 8px);
  font-size: 13px; font-family: inherit; resize: none; min-height: 72px;
  color: var(--vp-c-text-1); outline: none; line-height: 1.5;
}

.ta-input.default {
  border: 1px solid var(--input-border, #E2E8F0); background: var(--input-bg, #fff);
}
.ta-input.focus-state {
  border: 2px solid var(--input-border-focus, #3B82F6); background: var(--input-bg-focus, #fff);
  box-shadow: var(--input-focus-ring, 0 0 0 3px rgba(59,130,246,0.15));
}
.ta-input.filled {
  border: 1px solid var(--input-border, #E2E8F0); background: var(--input-bg, #fff);
}
.ta-input.error-state {
  border: 2px solid var(--input-border-error, #EF4444); background: var(--input-bg-error, #fff);
  box-shadow: var(--input-error-ring, 0 0 0 3px rgba(239,68,68,0.1));
}
.ta-input.disabled-state {
  border: 1px solid var(--input-border-disabled, #E2E8F0);
  background: var(--input-bg-disabled, #F1F5F9); opacity: 0.6; cursor: not-allowed;
}
.ta-input.readonly-state {
  border: 1px solid var(--input-border-readonly, transparent);
  background: var(--input-bg-readonly, #F8FAFC);
}
.ta-input.auto-height { min-height: 100px; height: auto; }

.ta-counter { font-size: 11px; color: var(--vp-c-text-3); text-align: right; margin-top: 4px; font-family: var(--vp-font-family-mono); }
.ta-error-msg { font-size: 11px; color: var(--input-error-msg-color, #DC2626); margin-top: 4px; }
.dark .ta-error-msg { color: var(--input-error-msg-color, #F87171); }
.ta-cursor { position: absolute; top: 36px; left: 12px; width: 2px; height: 16px; background: #3B82F6; animation: blink 1s infinite; }
@keyframes blink { 0%,50% { opacity:1; } 51%,100% { opacity:0; } }
</style>
