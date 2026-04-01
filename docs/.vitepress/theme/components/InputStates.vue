<script setup>
import { ref } from 'vue'

const focusedField = ref('')
const hoverField = ref('')
const inputVal = ref('홍길동')
const errorVal = ref('010-1234')
const searchVal = ref('')
</script>

<template>
  <div class="states-grid">
    <!-- Default -->
    <div class="state-card">
      <div class="state-label">Default</div>
      <div class="state-demo">
        <label class="inp-label">환자명</label>
        <div class="inp-wrap default">
          <input type="text" placeholder="이름을 입력하세요" class="inp" readonly />
        </div>
      </div>
      <div class="state-desc">기본 상태. 입력 대기 중</div>
    </div>

    <!-- Hover -->
    <div class="state-card">
      <div class="state-label">Hover</div>
      <div class="state-demo">
        <label class="inp-label">환자명</label>
        <div class="inp-wrap hover">
          <input type="text" placeholder="이름을 입력하세요" class="inp" readonly />
        </div>
      </div>
      <div class="state-desc">마우스 오버 시 보더 강조</div>
    </div>

    <!-- Focus -->
    <div class="state-card">
      <div class="state-label accent">Focus</div>
      <div class="state-demo">
        <label class="inp-label">환자명</label>
        <div class="inp-wrap focus">
          <input type="text" :value="inputVal" class="inp" readonly />
          <div class="inp-cursor"></div>
        </div>
      </div>
      <div class="state-desc">포커스 시 Primary 보더 2px + 커서 표시</div>
    </div>

    <!-- Filled -->
    <div class="state-card">
      <div class="state-label">Filled</div>
      <div class="state-demo">
        <label class="inp-label">환자명</label>
        <div class="inp-wrap filled">
          <input type="text" value="홍길동" class="inp" readonly />
        </div>
      </div>
      <div class="state-desc">값이 입력된 상태</div>
    </div>

    <!-- Error -->
    <div class="state-card">
      <div class="state-label error">Error</div>
      <div class="state-demo">
        <label class="inp-label inp-label-error">연락처 *</label>
        <div class="inp-wrap error-state">
          <input type="text" value="010-1234" class="inp inp-error-text" readonly />
        </div>
        <div class="inp-error-msg">올바른 전화번호 형식이 아닙니다</div>
      </div>
      <div class="state-desc">유효성 검증 실패 시 빨간 보더 + 에러 메시지</div>
    </div>

    <!-- Disabled -->
    <div class="state-card">
      <div class="state-label dim">Disabled</div>
      <div class="state-demo">
        <label class="inp-label inp-label-disabled">환자명</label>
        <div class="inp-wrap disabled-state">
          <input type="text" value="홍길동" class="inp inp-disabled" disabled readonly />
        </div>
      </div>
      <div class="state-desc">비활성 상태. 클릭/입력 불가</div>
    </div>

    <!-- ReadOnly -->
    <div class="state-card">
      <div class="state-label dim">Read Only</div>
      <div class="state-demo">
        <label class="inp-label">환자명</label>
        <div class="inp-wrap readonly-state">
          <input type="text" value="홍길동" class="inp" readonly />
        </div>
      </div>
      <div class="state-desc">읽기 전용. 값 표시만 가능</div>
    </div>

    <!-- With Icon -->
    <div class="state-card">
      <div class="state-label">With Icon</div>
      <div class="state-demo">
        <label class="inp-label">진단 코드</label>
        <div class="inp-wrap default inp-with-icon">
          <span class="inp-icon">🔍</span>
          <input type="text" placeholder="KCD 코드 또는 질환명" class="inp inp-padded" readonly />
        </div>
        <div class="inp-helper">KCD 코드 또는 질환명으로 검색</div>
      </div>
      <div class="state-desc">좌측 아이콘 + 도움말 텍스트</div>
    </div>
  </div>
</template>

<style scoped>
.states-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin: 20px 0 28px;
}

.state-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 16px;
  background: var(--vp-c-bg);
}

.state-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-2);
  margin-bottom: 12px;
  padding: 2px 8px;
  border-radius: 4px;
  display: inline-block;
  background: var(--vp-c-bg-soft);
}
.state-label.accent { background: #DBEAFE; color: #1D4ED8; }
.state-label.error { background: #FEE2E2; color: #DC2626; }
.state-label.dim { background: var(--vp-c-bg-alt); color: var(--vp-c-text-3); }

.dark .state-label.accent { background: #172554; color: #60A5FA; }
.dark .state-label.error { background: #450A0A; color: #F87171; }

.state-demo {
  margin-bottom: 10px;
}

.state-desc {
  font-size: 11px;
  color: var(--vp-c-text-3);
  line-height: 1.4;
}

/* Input styles */
.inp-label {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin-bottom: 4px;
}
.inp-label-error { color: #DC2626; }
.dark .inp-label-error { color: #F87171; }
.inp-label-disabled { color: var(--vp-c-text-3); }

.inp-wrap {
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.15s;
}

.inp-wrap.default {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}

.inp-wrap.hover {
  border: 1px solid var(--vp-c-text-3);
  background: var(--vp-c-bg);
}

.inp-wrap.focus {
  border: 2px solid #3B82F6;
  background: var(--vp-c-bg);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.inp-wrap.filled {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}

.inp-wrap.error-state {
  border: 2px solid #EF4444;
  background: var(--vp-c-bg);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.inp-wrap.disabled-state {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  opacity: 0.6;
  cursor: not-allowed;
}

.inp-wrap.readonly-state {
  border: 1px solid transparent;
  background: var(--vp-c-bg-soft);
}

.inp-wrap.inp-with-icon {
  position: relative;
}

.inp {
  width: 100%;
  padding: 8px 10px;
  border: none;
  outline: none;
  font-size: 13px;
  background: transparent;
  color: var(--vp-c-text-1);
  font-family: inherit;
}

.inp::placeholder { color: var(--vp-c-text-3); }
.inp-error-text { color: var(--vp-c-text-1); }
.inp-disabled { cursor: not-allowed; color: var(--vp-c-text-3); }
.inp-padded { padding-left: 4px; }

.inp-icon {
  padding-left: 10px;
  font-size: 14px;
  flex-shrink: 0;
}

.inp-cursor {
  width: 2px;
  height: 18px;
  background: #3B82F6;
  margin-right: 10px;
  flex-shrink: 0;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.inp-error-msg {
  font-size: 11px;
  color: #DC2626;
  margin-top: 4px;
}
.dark .inp-error-msg { color: #F87171; }

.inp-helper {
  font-size: 11px;
  color: var(--vp-c-text-3);
  margin-top: 4px;
}
</style>
