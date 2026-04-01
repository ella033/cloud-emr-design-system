<script setup>
import { ref } from 'vue'
const activeCase = ref('confirm')

const cases = [
  { key: 'confirm', label: '처방 확인' },
  { key: 'alert-allergy', label: '알러지 경고' },
  { key: 'error', label: '에러 안내' },
  { key: 'forbidden', label: '금지 처방' },
  { key: 'table', label: '테이블 (검사결과)' },
  { key: 'info', label: '안내 문구' },
  { key: 'delete', label: '삭제 확인' },
  { key: 'form', label: '폼 입력' },
]
</script>

<template>
  <div class="modal-states-wrap">
    <!-- Case selector -->
    <div class="case-selector">
      <div
        v-for="c in cases"
        :key="c.key"
        :class="['case-chip', { active: activeCase === c.key }]"
        @click="activeCase = c.key"
      >{{ c.label }}</div>
    </div>

    <!-- Modal preview area -->
    <div class="modal-stage">
      <div class="modal-overlay">
        <!-- 1. 처방 확인 -->
        <div v-if="activeCase === 'confirm'" class="modal-box">
          <div class="modal-header">
            <span class="modal-title">처방을 전송하시겠습니까?</span>
          </div>
          <div class="modal-body">
            <p class="modal-desc">홍길동 환자에게 아래 처방을 전송합니다.</p>
            <div class="modal-summary">
              <div class="summary-row">
                <span class="summary-label">약품</span>
                <span>타이레놀 500mg 외 2건</span>
              </div>
              <div class="summary-row">
                <span class="summary-label">진단</span>
                <span>J06.9 급성 상기도감염</span>
              </div>
              <div class="summary-row">
                <span class="summary-label">담당의</span>
                <span>오윤경</span>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="modal-btn outline">취소</button>
            <button class="modal-btn primary">전송</button>
          </div>
          <div class="modal-case-tag">ConfirmDialog / default</div>
        </div>

        <!-- 2. 알러지 경고 -->
        <div v-if="activeCase === 'alert-allergy'" class="modal-box danger-modal">
          <div class="modal-header danger-header">
            <span class="modal-icon-danger">⚠️</span>
            <span class="modal-title">알러지 경고</span>
          </div>
          <div class="modal-body">
            <div class="danger-banner">
              <div class="danger-banner-title">페니실린 계열 알러지 등록 환자</div>
              <div class="danger-banner-desc">이 환자에게 페니실린 계열 약물이 처방되었습니다.</div>
            </div>
            <div class="danger-detail">
              <div class="danger-row">
                <span class="danger-label">환자</span>
                <span>홍길동 (M/45)</span>
              </div>
              <div class="danger-row">
                <span class="danger-label">알러지</span>
                <span class="danger-value">페니실린 (Penicillin)</span>
              </div>
              <div class="danger-row">
                <span class="danger-label">처방 약물</span>
                <span class="danger-value">아목시실린 250mg</span>
              </div>
              <div class="danger-row">
                <span class="danger-label">반응 이력</span>
                <span>두드러기, 호흡곤란 (2024.08)</span>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="modal-btn outline">처방 취소</button>
            <button class="modal-btn danger">확인 후 계속 처방</button>
          </div>
          <div class="modal-case-tag danger-tag">AlertDialog / danger</div>
        </div>

        <!-- 3. 에러 안내 -->
        <div v-if="activeCase === 'error'" class="modal-box error-modal">
          <div class="modal-header error-header">
            <span class="modal-icon-error">✕</span>
            <span class="modal-title">처방 전송 실패</span>
          </div>
          <div class="modal-body">
            <p class="modal-desc">서버와의 연결이 일시적으로 끊겼습니다. 다시 시도해 주세요.</p>
            <div class="error-code-box">
              <div class="error-code-title">오류 상세</div>
              <code class="error-code">ERR_CONNECTION_TIMEOUT</code>
              <div class="error-code-desc">요청 시간: 2026.04.01 14:42:35</div>
              <div class="error-code-desc">요청 ID: REQ-20260401-0847</div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="modal-btn outline">닫기</button>
            <button class="modal-btn primary">재시도</button>
          </div>
          <div class="modal-case-tag error-tag">AlertDialog / error</div>
        </div>

        <!-- 4. 금지 처방 -->
        <div v-if="activeCase === 'forbidden'" class="modal-box danger-modal">
          <div class="modal-header danger-header">
            <span class="modal-icon-danger">🚫</span>
            <span class="modal-title">처방 불가 약물</span>
          </div>
          <div class="modal-body">
            <div class="danger-banner forbidden-banner">
              <div class="danger-banner-title">DUR 처방 금기 확인</div>
              <div class="danger-banner-desc">아래 약물은 규정에 의해 처방이 금지되었습니다.</div>
            </div>
            <div class="forbidden-list">
              <div class="forbidden-item">
                <div class="forbidden-drug">
                  <span class="forbidden-badge">금기</span>
                  메토트렉세이트 + 이부프로펜
                </div>
                <div class="forbidden-reason">병용 금기: 메토트렉세이트 혈중 농도 증가로 중독 위험</div>
              </div>
              <div class="forbidden-item">
                <div class="forbidden-drug">
                  <span class="forbidden-badge age">연령</span>
                  아스피린 (15세 미만)
                </div>
                <div class="forbidden-reason">연령 금기: 레이 증후군 위험. 환자 나이 12세</div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="modal-btn danger-outline">처방 목록에서 제거</button>
          </div>
          <div class="modal-case-tag danger-tag">AlertDialog / forbidden</div>
        </div>

        <!-- 5. 테이블 (검사결과) -->
        <div v-if="activeCase === 'table'" class="modal-box wide-modal">
          <div class="modal-header">
            <span class="modal-title">검사 결과 상세</span>
            <span class="modal-subtitle">2026.04.01 일반혈액검사 (CBC)</span>
          </div>
          <div class="modal-body">
            <table class="modal-table">
              <thead>
                <tr>
                  <th>검사 항목</th>
                  <th>결과</th>
                  <th>참고치</th>
                  <th>판정</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>WBC</td>
                  <td class="mono">11.2 x10³/μL</td>
                  <td class="mono dim">4.0 - 10.0</td>
                  <td><span class="result-badge high">H</span></td>
                </tr>
                <tr>
                  <td>RBC</td>
                  <td class="mono">4.85 x10⁶/μL</td>
                  <td class="mono dim">4.2 - 5.8</td>
                  <td><span class="result-badge normal">N</span></td>
                </tr>
                <tr>
                  <td>Hemoglobin</td>
                  <td class="mono">14.2 g/dL</td>
                  <td class="mono dim">13.0 - 17.0</td>
                  <td><span class="result-badge normal">N</span></td>
                </tr>
                <tr>
                  <td>Platelet</td>
                  <td class="mono">135 x10³/μL</td>
                  <td class="mono dim">150 - 400</td>
                  <td><span class="result-badge low">L</span></td>
                </tr>
                <tr>
                  <td>CRP</td>
                  <td class="mono">3.8 mg/dL</td>
                  <td class="mono dim">0.0 - 0.5</td>
                  <td><span class="result-badge high">H</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button class="modal-btn outline">닫기</button>
            <button class="modal-btn secondary">이전 결과 비교</button>
            <button class="modal-btn primary">인쇄</button>
          </div>
          <div class="modal-case-tag">Modal / table content</div>
        </div>

        <!-- 6. 안내 문구 -->
        <div v-if="activeCase === 'info'" class="modal-box">
          <div class="modal-header info-header">
            <span class="modal-icon-info">ℹ️</span>
            <span class="modal-title">진료 안내</span>
          </div>
          <div class="modal-body">
            <div class="info-content">
              <h4 class="info-heading">건강검진 결과 안내</h4>
              <p class="info-text">홍길동 환자의 2026년 1분기 건강검진 결과가 도착했습니다.</p>
              <div class="info-highlights">
                <div class="info-highlight-item normal">
                  <span class="info-dot green"></span>
                  <span>간 기능 검사: 정상 범위</span>
                </div>
                <div class="info-highlight-item warning">
                  <span class="info-dot yellow"></span>
                  <span>혈당 수치: 경계 (공복 혈당 108 mg/dL)</span>
                </div>
                <div class="info-highlight-item normal">
                  <span class="info-dot green"></span>
                  <span>신장 기능: 정상 범위</span>
                </div>
                <div class="info-highlight-item caution">
                  <span class="info-dot red"></span>
                  <span>콜레스테롤: 경미한 고지혈증 (LDL 145)</span>
                </div>
              </div>
              <p class="info-note">상세 결과는 검사 결과 뷰어에서 확인하실 수 있습니다.</p>
            </div>
          </div>
          <div class="modal-footer">
            <button class="modal-btn outline">닫기</button>
            <button class="modal-btn primary">검사 결과 열기</button>
          </div>
          <div class="modal-case-tag info-tag">Modal / info content</div>
        </div>

        <!-- 7. 삭제 확인 -->
        <div v-if="activeCase === 'delete'" class="modal-box danger-modal small-modal">
          <div class="modal-header danger-header">
            <span class="modal-icon-danger">🗑️</span>
            <span class="modal-title">처방을 삭제하시겠습니까?</span>
          </div>
          <div class="modal-body">
            <p class="modal-desc">아래 처방이 영구적으로 삭제됩니다. 이 동작은 되돌릴 수 없습니다.</p>
            <div class="delete-target">
              <div class="delete-item">타이레놀 500mg · 1T · 3회 · 3일</div>
              <div class="delete-item">클로르페니라민 · 1T · 2회 · 3일</div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="modal-btn outline">취소</button>
            <button class="modal-btn danger">삭제</button>
          </div>
          <div class="modal-case-tag danger-tag">ConfirmDialog / danger</div>
        </div>

        <!-- 8. 폼 입력 -->
        <div v-if="activeCase === 'form'" class="modal-box">
          <div class="modal-header">
            <span class="modal-title">묶음처방 저장</span>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">세트 이름 *</label>
              <div class="form-input">
                <input type="text" value="감기 기본 셋" class="form-inp" readonly />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">진료과</label>
              <div class="form-select">
                <span>내과</span>
                <span class="form-arrow">▾</span>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">포함 처방</label>
              <div class="form-chips">
                <span class="form-chip">타이레놀 500mg ✕</span>
                <span class="form-chip">클로르페니라민 ✕</span>
                <span class="form-chip">덱스트로메토르판 ✕</span>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">메모</label>
              <div class="form-textarea">일반 감기 증상 환자에게 사용하는 기본 처방 세트</div>
            </div>
            <div class="form-group">
              <label class="form-check">
                <input type="checkbox" checked disabled /> 다른 의료진에게 공유
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button class="modal-btn outline">취소</button>
            <button class="modal-btn primary">저장</button>
          </div>
          <div class="modal-case-tag">Modal / form content</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-states-wrap { margin: 20px 0 28px; }

/* Case selector */
.case-selector {
  display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;
}
.case-chip {
  padding: 6px 14px; border-radius: 9999px; font-size: 12px; font-weight: 500;
  cursor: pointer; background: var(--vp-c-bg-soft); color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider); transition: all 0.15s;
}
.case-chip:hover { border-color: var(--vp-c-text-3); }
.case-chip.active { background: #3B82F6; color: #fff; border-color: #3B82F6; }

/* Modal stage */
.modal-stage {
  border: 1px solid var(--vp-c-divider); border-radius: 12px; overflow: hidden;
  min-height: 400px;
}
.modal-overlay {
  background: rgba(15, 23, 42, 0.6); min-height: 400px;
  display: flex; align-items: center; justify-content: center; padding: 24px;
}

/* Modal box */
.modal-box {
  background: var(--vp-c-bg); border-radius: 16px; width: 440px; max-width: 100%;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2); position: relative; overflow: hidden;
}
.wide-modal { width: 560px; }
.small-modal { width: 380px; }

.modal-header {
  padding: 20px 24px 12px; display: flex; align-items: center; gap: 8px;
}
.modal-title { font-size: 17px; font-weight: 700; color: var(--vp-c-text-1); }
.modal-subtitle { font-size: 12px; color: var(--vp-c-text-3); margin-left: auto; }

.danger-header .modal-title { color: #DC2626; }
.dark .danger-header .modal-title { color: #F87171; }
.error-header .modal-title { color: #DC2626; }
.dark .error-header .modal-title { color: #F87171; }
.info-header .modal-title { color: var(--vp-c-text-1); }

.modal-icon-danger { font-size: 20px; }
.modal-icon-error { font-size: 18px; width: 24px; height: 24px; background: #FEE2E2; color: #DC2626; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; }
.modal-icon-info { font-size: 20px; }

.modal-body { padding: 4px 24px 16px; }
.modal-desc { font-size: 13px; color: var(--vp-c-text-2); line-height: 1.6; margin: 0 0 12px; }

.modal-footer {
  padding: 12px 24px 20px; display: flex; justify-content: flex-end; gap: 8px;
}

/* Buttons */
.modal-btn {
  padding: 9px 18px; border-radius: 8px; font-size: 13px; font-weight: 600;
  cursor: pointer; border: none; font-family: inherit; transition: all 0.15s;
}
.modal-btn.primary { background: #3B82F6; color: #fff; }
.modal-btn.secondary { background: #EFF6FF; color: #2563EB; }
.dark .modal-btn.secondary { background: #172554; color: #60A5FA; }
.modal-btn.outline { background: transparent; color: var(--vp-c-text-2); border: 1px solid var(--vp-c-divider); }
.modal-btn.danger { background: #DC2626; color: #fff; }
.modal-btn.danger-outline { background: transparent; color: #DC2626; border: 1px solid #FECACA; width: 100%; }
.dark .modal-btn.danger-outline { color: #F87171; border-color: #7F1D1D; }

/* Case tag */
.modal-case-tag {
  position: absolute; top: 8px; right: 12px; font-size: 9px; font-weight: 600;
  padding: 2px 6px; border-radius: 4px; background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-3); text-transform: uppercase; letter-spacing: 0.05em;
}
.modal-case-tag.danger-tag { background: #FEF2F2; color: #DC2626; }
.dark .modal-case-tag.danger-tag { background: #450A0A; color: #F87171; }
.modal-case-tag.error-tag { background: #FEF2F2; color: #DC2626; }
.dark .modal-case-tag.error-tag { background: #450A0A; color: #F87171; }
.modal-case-tag.info-tag { background: #F0FDFA; color: #0F766E; }
.dark .modal-case-tag.info-tag { background: #042F2E; color: #14B8A6; }

/* Summary */
.modal-summary {
  background: var(--vp-c-bg-soft); border-radius: 8px; padding: 10px 14px;
}
.summary-row { display: flex; justify-content: space-between; padding: 3px 0; font-size: 12px; color: var(--vp-c-text-2); }
.summary-label { font-weight: 600; color: var(--vp-c-text-3); min-width: 50px; }

/* Danger banner */
.danger-banner {
  background: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; padding: 12px; margin-bottom: 12px;
}
.dark .danger-banner { background: #450A0A; border-color: #7F1D1D; }
.forbidden-banner { background: #FEF2F2; border-color: #FECACA; }
.dark .forbidden-banner { background: #450A0A; border-color: #7F1D1D; }
.danger-banner-title { font-size: 13px; font-weight: 700; color: #DC2626; margin-bottom: 2px; }
.dark .danger-banner-title { color: #F87171; }
.danger-banner-desc { font-size: 12px; color: #B91C1C; }
.dark .danger-banner-desc { color: #FCA5A5; }

.danger-detail { font-size: 12px; }
.danger-row { display: flex; padding: 4px 0; color: var(--vp-c-text-2); }
.danger-label { font-weight: 600; color: var(--vp-c-text-3); min-width: 70px; }
.danger-value { font-weight: 600; color: #DC2626; }
.dark .danger-value { color: #F87171; }

/* Forbidden */
.forbidden-list { display: flex; flex-direction: column; gap: 10px; }
.forbidden-item { padding: 10px; border: 1px solid var(--vp-c-divider); border-radius: 8px; }
.forbidden-drug { font-size: 13px; font-weight: 600; color: var(--vp-c-text-1); display: flex; align-items: center; gap: 6px; }
.forbidden-reason { font-size: 11px; color: var(--vp-c-text-3); margin-top: 4px; }
.forbidden-badge {
  font-size: 9px; padding: 1px 5px; border-radius: 4px; font-weight: 700;
  background: #DC2626; color: #fff; flex-shrink: 0;
}
.forbidden-badge.age { background: #EAB308; color: #fff; }

/* Error code */
.error-code-box {
  background: var(--vp-c-bg-soft); border-radius: 8px; padding: 12px; margin-top: 4px;
}
.error-code-title { font-size: 11px; font-weight: 600; color: var(--vp-c-text-3); margin-bottom: 4px; }
.error-code { font-size: 13px; font-family: var(--vp-font-family-mono); color: #DC2626; display: block; margin-bottom: 6px; }
.dark .error-code { color: #F87171; }
.error-code-desc { font-size: 11px; color: var(--vp-c-text-3); font-family: var(--vp-font-family-mono); }

/* Table */
.modal-table { width: 100%; border-collapse: collapse; font-size: 12px; }
.modal-table th {
  text-align: left; padding: 8px 10px; font-weight: 600; color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft); border-bottom: 2px solid var(--vp-c-divider);
}
.modal-table td { padding: 8px 10px; border-bottom: 1px solid var(--vp-c-divider); color: var(--vp-c-text-2); }
.modal-table .mono { font-family: var(--vp-font-family-mono); }
.modal-table .dim { color: var(--vp-c-text-3); }

.result-badge {
  display: inline-block; width: 20px; height: 20px; border-radius: 4px;
  font-size: 10px; font-weight: 700; text-align: center; line-height: 20px;
}
.result-badge.normal { background: #DCFCE7; color: #15803D; }
.result-badge.high { background: #FEE2E2; color: #DC2626; }
.result-badge.low { background: #FEF9C3; color: #A16207; }
.dark .result-badge.normal { background: #052E16; color: #4ADE80; }
.dark .result-badge.high { background: #450A0A; color: #F87171; }
.dark .result-badge.low { background: #422006; color: #FACC15; }

/* Info content */
.info-content {}
.info-heading { font-size: 14px; font-weight: 600; margin: 0 0 6px; color: var(--vp-c-text-1); }
.info-text { font-size: 13px; color: var(--vp-c-text-2); margin: 0 0 12px; line-height: 1.5; }
.info-highlights { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; }
.info-highlight-item { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--vp-c-text-2); padding: 6px 10px; border-radius: 6px; background: var(--vp-c-bg-soft); }
.info-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.info-dot.green { background: #22C55E; }
.info-dot.yellow { background: #EAB308; }
.info-dot.red { background: #EF4444; }
.info-note { font-size: 11px; color: var(--vp-c-text-3); font-style: italic; margin: 0; }

/* Delete */
.delete-target { background: var(--vp-c-bg-soft); border-radius: 8px; padding: 10px 14px; }
.delete-item { font-size: 12px; color: var(--vp-c-text-2); padding: 3px 0; font-family: var(--vp-font-family-mono); }

/* Form */
.form-group { margin-bottom: 12px; }
.form-label { font-size: 12px; font-weight: 500; color: var(--vp-c-text-2); margin-bottom: 4px; display: block; }
.form-input { border: 1px solid var(--vp-c-divider); border-radius: 8px; overflow: hidden; }
.form-inp { width: 100%; padding: 8px 10px; border: none; font-size: 13px; background: transparent; color: var(--vp-c-text-1); font-family: inherit; outline: none; }
.form-select {
  display: flex; justify-content: space-between; align-items: center;
  padding: 8px 10px; border: 1px solid var(--vp-c-divider); border-radius: 8px;
  font-size: 13px; color: var(--vp-c-text-1); cursor: pointer;
}
.form-arrow { color: var(--vp-c-text-3); font-size: 11px; }
.form-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.form-chip {
  padding: 4px 10px; background: #DBEAFE; color: #1D4ED8; border-radius: 6px; font-size: 11px; font-weight: 500;
}
.dark .form-chip { background: #172554; color: #60A5FA; }
.form-textarea {
  padding: 8px 10px; border: 1px solid var(--vp-c-divider); border-radius: 8px;
  font-size: 12px; color: var(--vp-c-text-2); min-height: 50px; line-height: 1.5;
}
.form-check { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--vp-c-text-2); cursor: pointer; }
</style>
