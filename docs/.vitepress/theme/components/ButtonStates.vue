<script setup>
</script>

<template>
  <div class="btn-states-wrap">
    <!-- Variant row -->
    <h4 class="section-title">Variants</h4>
    <div class="btn-row">
      <div class="btn-col">
        <div class="btn-state-label">Primary</div>
        <button class="btn btn-primary">처방 전송</button>
      </div>
      <div class="btn-col">
        <div class="btn-state-label">Secondary</div>
        <button class="btn btn-secondary">저장</button>
      </div>
      <div class="btn-col">
        <div class="btn-state-label">Outline</div>
        <button class="btn btn-outline">취소</button>
      </div>
      <div class="btn-col">
        <div class="btn-state-label">Ghost</div>
        <button class="btn btn-ghost">더보기</button>
      </div>
      <div class="btn-col">
        <div class="btn-state-label error-label">Danger</div>
        <button class="btn btn-danger">삭제</button>
      </div>
    </div>

    <!-- States row -->
    <h4 class="section-title">States (Primary)</h4>
    <div class="btn-row">
      <div class="btn-col">
        <div class="btn-state-label">Default</div>
        <button class="btn btn-primary">처방 전송</button>
        <div class="btn-desc">기본 상태</div>
      </div>
      <div class="btn-col">
        <div class="btn-state-label">Hover</div>
        <button class="btn btn-primary btn-hover">처방 전송</button>
        <div class="btn-desc">마우스 오버</div>
      </div>
      <div class="btn-col">
        <div class="btn-state-label accent-label">Active</div>
        <button class="btn btn-primary btn-active">처방 전송</button>
        <div class="btn-desc">클릭/눌림</div>
      </div>
      <div class="btn-col">
        <div class="btn-state-label accent-label">Focus</div>
        <button class="btn btn-primary btn-focus">처방 전송</button>
        <div class="btn-desc">키보드 포커스</div>
      </div>
      <div class="btn-col">
        <div class="btn-state-label dim-label">Disabled</div>
        <button class="btn btn-primary btn-disabled" disabled>처방 전송</button>
        <div class="btn-desc">비활성</div>
      </div>
      <div class="btn-col">
        <div class="btn-state-label accent-label">Loading</div>
        <button class="btn btn-primary btn-loading">
          <span class="spinner"></span>
          전송 중...
        </button>
        <div class="btn-desc">로딩 중 (클릭 방지)</div>
      </div>
    </div>

    <!-- Sizes row -->
    <h4 class="section-title">Sizes</h4>
    <div class="btn-row align-end">
      <div class="btn-col">
        <div class="btn-state-label">Small (32px)</div>
        <button class="btn btn-primary btn-sm">저장</button>
        <div class="btn-desc">테이블 내 액션</div>
      </div>
      <div class="btn-col">
        <div class="btn-state-label">Medium (40px)</div>
        <button class="btn btn-primary">처방 전송</button>
        <div class="btn-desc">기본 버튼</div>
      </div>
      <div class="btn-col">
        <div class="btn-state-label">Large (48px)</div>
        <button class="btn btn-primary btn-lg">처방 전송</button>
        <div class="btn-desc">주요 CTA</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-states-wrap {
  margin: 20px 0 28px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 20px 0 12px;
}
.section-title:first-child { margin-top: 0; }

.btn-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
}
.btn-row.align-end { align-items: flex-end; }

.btn-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  min-width: 100px;
}

.btn-state-label {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  letter-spacing: 0.05em;
}
.accent-label { color: #3B82F6; }
.error-label { color: #EF4444; }
.dim-label { color: var(--vp-c-text-3); }

.btn-desc {
  font-size: 10px;
  color: var(--vp-c-text-3);
  text-align: center;
}

/* Base button */
.btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.15s;
  font-family: inherit;
  white-space: nowrap;
}

/* Variants */
.btn-primary { background: #3B82F6; color: #fff; }
.btn-secondary { background: #EFF6FF; color: #2563EB; border: 1px solid #BFDBFE; }
.btn-outline { background: transparent; color: var(--vp-c-text-2); border: 1px solid var(--vp-c-divider); }
.btn-ghost { background: transparent; color: var(--vp-c-text-3); }
.btn-danger { background: #DC2626; color: #fff; }

.dark .btn-secondary { background: #172554; color: #60A5FA; border-color: #1E3A8A; }
.dark .btn-outline { border-color: var(--vp-c-divider); color: var(--vp-c-text-2); }

/* States */
.btn-hover { background: #2563EB; }
.btn-active { background: #1D4ED8; transform: scale(0.97); }
.btn-focus { background: #3B82F6; box-shadow: 0 0 0 3px rgba(59,130,246,0.3); outline: none; }
.btn-disabled { background: #3B82F6; opacity: 0.5; cursor: not-allowed; }
.btn-loading { background: #2563EB; cursor: wait; pointer-events: none; }

/* Sizes */
.btn-sm { padding: 6px 12px; font-size: 13px; height: 32px; }
.btn-lg { padding: 12px 24px; font-size: 16px; height: 48px; }

/* Spinner */
.spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
