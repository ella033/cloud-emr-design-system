<script setup>
import { ref } from 'vue'
const activeCase = ref('patient-list')

const cases = [
  { key: 'patient-list', label: '환자 목록' },
  { key: 'prescription', label: '처방 내역' },
  { key: 'lab-result', label: '검사 결과' },
  { key: 'vital', label: '바이탈 사인' },
  { key: 'visit-history', label: '내원 이력' },
  { key: 'allergy', label: '약물 알러지' },
  { key: 'billing', label: '수납/청구' },
  { key: 'order-set', label: '묶음처방 관리' },
  { key: 'schedule', label: '스케줄/예약' },
  { key: 'empty-states', label: '빈 상태/로딩/에러' },
]

const expandedRow = ref(null)
const selectedRows = ref([])

function toggleExpand(id) {
  expandedRow.value = expandedRow.value === id ? null : id
}
function toggleSelect(id) {
  const i = selectedRows.value.indexOf(id)
  if (i >= 0) selectedRows.value.splice(i, 1)
  else selectedRows.value.push(id)
}
function isSelected(id) { return selectedRows.value.includes(id) }
</script>

<template>
  <div class="table-states-wrap">
    <div class="case-selector">
      <div
        v-for="c in cases" :key="c.key"
        :class="['case-chip', { active: activeCase === c.key }]"
        @click="activeCase = c.key; expandedRow = null; selectedRows = []"
      >{{ c.label }}</div>
    </div>

    <div class="table-stage">

      <!-- 1. 환자 목록 -->
      <div v-if="activeCase === 'patient-list'" class="table-case">
        <div class="case-tag">환자 목록 테이블 — 상태 뱃지, 행 선택, 정렬 헤더</div>
        <table class="emr-table">
          <thead>
            <tr>
              <th class="sortable">환자명 ↕</th>
              <th>생년월일</th>
              <th>성별</th>
              <th class="sortable">진료과 ↕</th>
              <th class="center">상태</th>
              <th class="right sortable">접수시간 ↕</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row-selected">
              <td class="cell-name">홍길동</td>
              <td>1981.03.15</td>
              <td>남</td>
              <td>내과</td>
              <td class="center"><span class="badge badge-blue">진료중</span></td>
              <td class="right mono">14:30</td>
            </tr>
            <tr>
              <td class="cell-name">김영희</td>
              <td>1975.08.22</td>
              <td>여</td>
              <td>내과</td>
              <td class="center"><span class="badge badge-yellow">대기</span></td>
              <td class="right mono">14:25</td>
            </tr>
            <tr class="row-emergency">
              <td class="cell-name">이철수 <span class="inline-icon">🚨</span></td>
              <td>1990.11.03</td>
              <td>남</td>
              <td>외과</td>
              <td class="center"><span class="badge badge-red">응급</span></td>
              <td class="right mono">14:15</td>
            </tr>
            <tr>
              <td class="cell-name">박지수</td>
              <td>1988.05.17</td>
              <td>여</td>
              <td>내과</td>
              <td class="center"><span class="badge badge-green">완료</span></td>
              <td class="right mono">13:50</td>
            </tr>
            <tr>
              <td class="cell-name dim">최미영</td>
              <td class="dim">1965.12.08</td>
              <td class="dim">여</td>
              <td class="dim">정형외과</td>
              <td class="center"><span class="badge badge-gray">취소</span></td>
              <td class="right mono dim">13:30</td>
            </tr>
          </tbody>
        </table>
        <div class="table-footer-info">총 5명 · 대기 1 · 진료중 1 · 완료 1 · 응급 1 · 취소 1</div>
      </div>

      <!-- 2. 처방 내역 -->
      <div v-if="activeCase === 'prescription'" class="table-case">
        <div class="case-tag">처방 내역 테이블 — 인라인 편집, 삭제, 합계 Footer</div>
        <table class="emr-table">
          <thead>
            <tr>
              <th style="width:200px;">약품명</th>
              <th class="center" style="width:70px;">용량</th>
              <th class="center" style="width:50px;">횟수</th>
              <th class="center" style="width:50px;">일수</th>
              <th class="center" style="width:60px;">경로</th>
              <th class="center" style="width:70px;">총량</th>
              <th style="width:40px;"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="drug-name">타이레놀 500mg</span><span class="drug-code">TYLENOL</span></td>
              <td class="center mono editable">1T</td>
              <td class="center mono editable">3회</td>
              <td class="center mono editable">3일</td>
              <td class="center">경구</td>
              <td class="center mono">9T</td>
              <td class="center"><span class="row-delete">✕</span></td>
            </tr>
            <tr>
              <td><span class="drug-name">클로르페니라민 4mg</span><span class="drug-code">CHLORPHENIRAMINE</span></td>
              <td class="center mono editable">1T</td>
              <td class="center mono editable">2회</td>
              <td class="center mono editable">3일</td>
              <td class="center">경구</td>
              <td class="center mono">6T</td>
              <td class="center"><span class="row-delete">✕</span></td>
            </tr>
            <tr>
              <td><span class="drug-name">덱스트로메토르판 15mg</span><span class="drug-code">DEXTROMETHORPHAN</span></td>
              <td class="center mono editable">1T</td>
              <td class="center mono editable">3회</td>
              <td class="center mono editable">3일</td>
              <td class="center">경구</td>
              <td class="center mono">9T</td>
              <td class="center"><span class="row-delete">✕</span></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5" class="right foot-label">총 처방 약품</td>
              <td class="center mono foot-value">3종</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
        <div class="table-actions">
          <span class="action-btn">+ 약품 추가</span>
          <span class="action-btn">📋 묶음처방</span>
          <span class="action-btn">⭐ 즐겨찾기</span>
        </div>
      </div>

      <!-- 3. 검사 결과 -->
      <div v-if="activeCase === 'lab-result'" class="table-case">
        <div class="case-tag">검사 결과 테이블 — 이상치 하이라이트, H/L 판정 뱃지</div>
        <div class="table-sub-header">
          <span class="sub-title">일반혈액검사 (CBC)</span>
          <span class="sub-date">2026.04.01 14:20</span>
        </div>
        <table class="emr-table">
          <thead>
            <tr>
              <th style="width:160px;">검사 항목</th>
              <th class="right" style="width:120px;">결과</th>
              <th class="right" style="width:120px;">참고치</th>
              <th class="center" style="width:50px;">판정</th>
              <th class="center" style="width:60px;">이전</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row-abnormal-high">
              <td>WBC (백혈구)</td>
              <td class="right mono val-high">11.2 x10³/μL</td>
              <td class="right mono dim">4.0 - 10.0</td>
              <td class="center"><span class="result-badge high">H</span></td>
              <td class="center mono dim">8.5</td>
            </tr>
            <tr>
              <td>RBC (적혈구)</td>
              <td class="right mono">4.85 x10⁶/μL</td>
              <td class="right mono dim">4.2 - 5.8</td>
              <td class="center"><span class="result-badge normal">N</span></td>
              <td class="center mono dim">4.90</td>
            </tr>
            <tr>
              <td>Hemoglobin (혈색소)</td>
              <td class="right mono">14.2 g/dL</td>
              <td class="right mono dim">13.0 - 17.0</td>
              <td class="center"><span class="result-badge normal">N</span></td>
              <td class="center mono dim">14.5</td>
            </tr>
            <tr class="row-abnormal-low">
              <td>Platelet (혈소판)</td>
              <td class="right mono val-low">135 x10³/μL</td>
              <td class="right mono dim">150 - 400</td>
              <td class="center"><span class="result-badge low">L</span></td>
              <td class="center mono dim">180</td>
            </tr>
            <tr class="row-abnormal-high">
              <td>CRP (C-반응성 단백)</td>
              <td class="right mono val-high">3.8 mg/dL</td>
              <td class="right mono dim">0.0 - 0.5</td>
              <td class="center"><span class="result-badge critical">C</span></td>
              <td class="center mono dim">0.3</td>
            </tr>
            <tr>
              <td>ESR (적혈구침강속도)</td>
              <td class="right mono">12 mm/hr</td>
              <td class="right mono dim">0 - 20</td>
              <td class="center"><span class="result-badge normal">N</span></td>
              <td class="center mono dim">10</td>
            </tr>
          </tbody>
        </table>
        <div class="legend-row">
          <span class="legend-item"><span class="result-badge normal small">N</span> 정상</span>
          <span class="legend-item"><span class="result-badge high small">H</span> 고수치</span>
          <span class="legend-item"><span class="result-badge low small">L</span> 저수치</span>
          <span class="legend-item"><span class="result-badge critical small">C</span> 임계</span>
        </div>
      </div>

      <!-- 4. 바이탈 사인 -->
      <div v-if="activeCase === 'vital'" class="table-case">
        <div class="case-tag">바이탈 사인 테이블 — 시간별 추적, 트렌드 화살표, 임계값 경고</div>
        <table class="emr-table compact">
          <thead>
            <tr>
              <th style="width:100px;">항목</th>
              <th class="center">13:00</th>
              <th class="center">14:00</th>
              <th class="center highlight-col">15:00 (현재)</th>
              <th class="center" style="width:60px;">트렌드</th>
              <th class="center" style="width:70px;">정상 범위</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="vital-label">혈압 (수축기)</td>
              <td class="center mono">128</td>
              <td class="center mono">132</td>
              <td class="center mono highlight-col val-high">140</td>
              <td class="center"><span class="trend up">↑</span></td>
              <td class="center mono dim">90-139</td>
            </tr>
            <tr>
              <td class="vital-label">혈압 (이완기)</td>
              <td class="center mono">82</td>
              <td class="center mono">85</td>
              <td class="center mono highlight-col">88</td>
              <td class="center"><span class="trend up">↑</span></td>
              <td class="center mono dim">60-89</td>
            </tr>
            <tr>
              <td class="vital-label">맥박 (HR)</td>
              <td class="center mono">76</td>
              <td class="center mono">78</td>
              <td class="center mono highlight-col">80</td>
              <td class="center"><span class="trend stable">→</span></td>
              <td class="center mono dim">60-100</td>
            </tr>
            <tr>
              <td class="vital-label">체온 (BT)</td>
              <td class="center mono">37.2</td>
              <td class="center mono">37.8</td>
              <td class="center mono highlight-col val-high">38.2</td>
              <td class="center"><span class="trend up">↑</span></td>
              <td class="center mono dim">36.1-37.5</td>
            </tr>
            <tr>
              <td class="vital-label">산소포화도</td>
              <td class="center mono">98</td>
              <td class="center mono">97</td>
              <td class="center mono highlight-col">97</td>
              <td class="center"><span class="trend stable">→</span></td>
              <td class="center mono dim">95-100</td>
            </tr>
            <tr>
              <td class="vital-label">호흡수 (RR)</td>
              <td class="center mono">18</td>
              <td class="center mono">20</td>
              <td class="center mono highlight-col">20</td>
              <td class="center"><span class="trend stable">→</span></td>
              <td class="center mono dim">12-20</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 5. 내원 이력 -->
      <div v-if="activeCase === 'visit-history'" class="table-case">
        <div class="case-tag">내원 이력 테이블 — 행 확장(Accordion), 상세 정보 펼치기</div>
        <table class="emr-table">
          <thead>
            <tr>
              <th style="width:30px;"></th>
              <th style="width:110px;">내원일</th>
              <th>주 진단</th>
              <th>담당의</th>
              <th style="width:60px;">진료과</th>
            </tr>
          </thead>
          <tbody>
            <tr :class="{ 'row-expanded': expandedRow === 1 }" @click="toggleExpand(1)" style="cursor:pointer;">
              <td class="expand-icon">{{ expandedRow === 1 ? '▾' : '▸' }}</td>
              <td class="mono">2026.04.01</td>
              <td>J06.9 급성 상기도감염</td>
              <td>오윤경</td>
              <td>내과</td>
            </tr>
            <tr v-if="expandedRow === 1" class="expanded-detail">
              <td colspan="5">
                <div class="detail-grid">
                  <div class="detail-section">
                    <div class="detail-title">처방 내역</div>
                    <div class="detail-item">타이레놀 500mg · 1T · 3회 · 3일</div>
                    <div class="detail-item">클로르페니라민 4mg · 1T · 2회 · 3일</div>
                  </div>
                  <div class="detail-section">
                    <div class="detail-title">임상 소견</div>
                    <div class="detail-item">두통, 발열 3일째. 인후 발적 (+)</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr :class="{ 'row-expanded': expandedRow === 2 }" @click="toggleExpand(2)" style="cursor:pointer;">
              <td class="expand-icon">{{ expandedRow === 2 ? '▾' : '▸' }}</td>
              <td class="mono">2026.03.15</td>
              <td>Z00.0 건강검진</td>
              <td>오윤경</td>
              <td>내과</td>
            </tr>
            <tr v-if="expandedRow === 2" class="expanded-detail">
              <td colspan="5">
                <div class="detail-grid">
                  <div class="detail-section">
                    <div class="detail-title">처방 내역</div>
                    <div class="detail-item">혈압약 처방 갱신 (아무로디핀 5mg)</div>
                  </div>
                  <div class="detail-section">
                    <div class="detail-title">검사</div>
                    <div class="detail-item">CBC, 간기능, 혈당, 지질검사</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr @click="toggleExpand(3)" style="cursor:pointer;">
              <td class="expand-icon">▸</td>
              <td class="mono">2026.01.20</td>
              <td>J11 인플루엔자</td>
              <td>김내과</td>
              <td>내과</td>
            </tr>
            <tr @click="toggleExpand(4)" style="cursor:pointer;">
              <td class="expand-icon">▸</td>
              <td class="mono">2025.11.08</td>
              <td>Z00.0 건강검진</td>
              <td>오윤경</td>
              <td>내과</td>
            </tr>
          </tbody>
        </table>
        <div class="table-footer-info">클릭하여 상세 정보를 펼칠 수 있습니다 · 총 4건</div>
      </div>

      <!-- 6. 약물 알러지 -->
      <div v-if="activeCase === 'allergy'" class="table-case">
        <div class="case-tag">약물 알러지 테이블 — 위험도 컬러 행, 읽기 전용</div>
        <table class="emr-table">
          <thead>
            <tr>
              <th class="center" style="width:60px;">위험도</th>
              <th>알러지 약물</th>
              <th>반응 증상</th>
              <th style="width:80px;">등록일</th>
              <th style="width:70px;">보고자</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row-danger">
              <td class="center"><span class="severity severe">심각</span></td>
              <td class="cell-name">페니실린 (Penicillin)</td>
              <td>아나필락시스, 호흡곤란, 두드러기</td>
              <td class="mono">2024.08.12</td>
              <td>오윤경</td>
            </tr>
            <tr class="row-warning">
              <td class="center"><span class="severity moderate">중등</span></td>
              <td class="cell-name">아스피린 (Aspirin)</td>
              <td>위장관 출혈, 구역</td>
              <td class="mono">2023.03.05</td>
              <td>김내과</td>
            </tr>
            <tr>
              <td class="center"><span class="severity mild">경미</span></td>
              <td class="cell-name">설파제 (Sulfonamide)</td>
              <td>피부 발진</td>
              <td class="mono">2022.11.20</td>
              <td>박외과</td>
            </tr>
          </tbody>
        </table>
        <div class="legend-row">
          <span class="legend-item"><span class="severity severe small">심각</span> 아나필락시스 위험</span>
          <span class="legend-item"><span class="severity moderate small">중등</span> 주의 필요</span>
          <span class="legend-item"><span class="severity mild small">경미</span> 경미한 반응</span>
        </div>
      </div>

      <!-- 7. 수납/청구 -->
      <div v-if="activeCase === 'billing'" class="table-case">
        <div class="case-tag">수납/청구 테이블 — 숫자 우측 정렬, 합계 행, 보험 구분</div>
        <table class="emr-table">
          <thead>
            <tr>
              <th>항목</th>
              <th class="center" style="width:60px;">구분</th>
              <th class="center" style="width:40px;">수량</th>
              <th class="right" style="width:90px;">금액</th>
              <th class="right" style="width:90px;">본인부담</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>초진 진찰료</td>
              <td class="center"><span class="badge badge-teal-sm">급여</span></td>
              <td class="center mono">1</td>
              <td class="right mono">16,800</td>
              <td class="right mono">5,040</td>
            </tr>
            <tr>
              <td>타이레놀 500mg</td>
              <td class="center"><span class="badge badge-teal-sm">급여</span></td>
              <td class="center mono">9</td>
              <td class="right mono">1,890</td>
              <td class="right mono">570</td>
            </tr>
            <tr>
              <td>클로르페니라민 4mg</td>
              <td class="center"><span class="badge badge-teal-sm">급여</span></td>
              <td class="center mono">6</td>
              <td class="right mono">960</td>
              <td class="right mono">290</td>
            </tr>
            <tr>
              <td>덱스트로메토르판 15mg</td>
              <td class="center"><span class="badge badge-teal-sm">급여</span></td>
              <td class="center mono">9</td>
              <td class="right mono">2,700</td>
              <td class="right mono">810</td>
            </tr>
            <tr>
              <td>조제료</td>
              <td class="center"><span class="badge badge-teal-sm">급여</span></td>
              <td class="center mono">1</td>
              <td class="right mono">4,500</td>
              <td class="right mono">1,350</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="total-row">
              <td colspan="3" class="right foot-label">합계</td>
              <td class="right mono foot-value">26,850</td>
              <td class="right mono foot-value">8,060</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- 8. 묶음처방 관리 -->
      <div v-if="activeCase === 'order-set'" class="table-case">
        <div class="case-tag">묶음처방 관리 테이블 — 체크박스 다중 선택, 일괄 작업</div>
        <div class="table-toolbar">
          <span class="toolbar-selected" v-if="selectedRows.length">{{ selectedRows.length }}개 선택됨</span>
          <span class="toolbar-btn delete-btn" v-if="selectedRows.length">🗑 삭제</span>
          <span class="toolbar-btn" v-if="selectedRows.length">📋 복제</span>
          <span class="toolbar-btn" style="margin-left:auto;">+ 새 묶음처방</span>
        </div>
        <table class="emr-table">
          <thead>
            <tr>
              <th style="width:36px;" class="center">
                <input type="checkbox" disabled />
              </th>
              <th>세트명</th>
              <th>포함 약물</th>
              <th style="width:60px;">진료과</th>
              <th style="width:60px;">공유</th>
              <th style="width:80px;">수정일</th>
            </tr>
          </thead>
          <tbody>
            <tr :class="{ 'row-selected': isSelected(1) }" @click="toggleSelect(1)" style="cursor:pointer;">
              <td class="center"><input type="checkbox" :checked="isSelected(1)" /></td>
              <td class="cell-name">감기 기본 셋</td>
              <td class="dim">타이레놀 + 클로르페니라민 + 덱스트로메토르판</td>
              <td>내과</td>
              <td class="center"><span class="badge badge-blue-sm">공유</span></td>
              <td class="mono dim">04.01</td>
            </tr>
            <tr :class="{ 'row-selected': isSelected(2) }" @click="toggleSelect(2)" style="cursor:pointer;">
              <td class="center"><input type="checkbox" :checked="isSelected(2)" /></td>
              <td class="cell-name">고혈압 f/u</td>
              <td class="dim">아무로디핀 5mg + 혈압 모니터링</td>
              <td>내과</td>
              <td class="center"><span class="badge badge-gray-sm">개인</span></td>
              <td class="mono dim">03.28</td>
            </tr>
            <tr :class="{ 'row-selected': isSelected(3) }" @click="toggleSelect(3)" style="cursor:pointer;">
              <td class="center"><input type="checkbox" :checked="isSelected(3)" /></td>
              <td class="cell-name">당뇨 초진 세트</td>
              <td class="dim">메트포르민 + HbA1c + 혈당검사</td>
              <td>내과</td>
              <td class="center"><span class="badge badge-blue-sm">공유</span></td>
              <td class="mono dim">03.15</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 9. 스케줄/예약 -->
      <div v-if="activeCase === 'schedule'" class="table-case">
        <div class="case-tag">스케줄/예약 테이블 — 시간 그리드, 상태 변경</div>
        <table class="emr-table compact">
          <thead>
            <tr>
              <th style="width:60px;">시간</th>
              <th>환자명</th>
              <th>진료 유형</th>
              <th class="center" style="width:80px;">상태</th>
              <th style="width:100px;">메모</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row-past">
              <td class="mono">09:00</td>
              <td>김민수</td>
              <td>정기 검진</td>
              <td class="center"><span class="badge badge-green">완료</span></td>
              <td class="dim">혈압약 갱신</td>
            </tr>
            <tr class="row-past">
              <td class="mono">09:30</td>
              <td>이수진</td>
              <td>초진</td>
              <td class="center"><span class="badge badge-green">완료</span></td>
              <td class="dim"></td>
            </tr>
            <tr class="row-past">
              <td class="mono">10:00</td>
              <td class="dim">—</td>
              <td class="dim">—</td>
              <td class="center"><span class="badge badge-gray-sm">공석</span></td>
              <td></td>
            </tr>
            <tr class="row-current">
              <td class="mono current-time">10:30</td>
              <td class="cell-name">홍길동</td>
              <td>재진</td>
              <td class="center"><span class="badge badge-blue">진료중</span></td>
              <td class="dim">감기 증상</td>
            </tr>
            <tr>
              <td class="mono">11:00</td>
              <td>박영희</td>
              <td>초진</td>
              <td class="center"><span class="badge badge-yellow">대기</span></td>
              <td class="dim">두통</td>
            </tr>
            <tr>
              <td class="mono">11:30</td>
              <td>최철호</td>
              <td>재진</td>
              <td class="center"><span class="badge badge-yellow">대기</span></td>
              <td class="dim">당뇨 f/u</td>
            </tr>
            <tr class="row-cancelled">
              <td class="mono dim">14:00</td>
              <td class="dim line-through">정미래</td>
              <td class="dim">재진</td>
              <td class="center"><span class="badge badge-gray">취소</span></td>
              <td class="dim">환자 요청</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 10. 빈 상태 / 로딩 / 에러 -->
      <div v-if="activeCase === 'empty-states'" class="table-case">
        <div class="case-tag">빈 상태 / 로딩 / 에러 — 데이터 없음, 스켈레톤, 오류 안내</div>

        <div class="sub-label">Empty (데이터 없음)</div>
        <table class="emr-table">
          <thead>
            <tr><th>환자명</th><th>생년월일</th><th>진료과</th><th class="center">상태</th></tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4" class="empty-cell">
                <div class="empty-state">
                  <div class="empty-icon">📋</div>
                  <div class="empty-title">검색 결과가 없습니다</div>
                  <div class="empty-desc">검색 조건을 변경하거나 필터를 초기화해 주세요.</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="sub-label" style="margin-top:20px;">Loading (로딩 중)</div>
        <table class="emr-table">
          <thead>
            <tr><th>환자명</th><th>생년월일</th><th>진료과</th><th class="center">상태</th></tr>
          </thead>
          <tbody>
            <tr v-for="i in 3" :key="i" class="skeleton-row">
              <td><div class="skeleton skel-name"></div></td>
              <td><div class="skeleton skel-date"></div></td>
              <td><div class="skeleton skel-short"></div></td>
              <td class="center"><div class="skeleton skel-badge"></div></td>
            </tr>
          </tbody>
        </table>

        <div class="sub-label" style="margin-top:20px;">Error (에러)</div>
        <table class="emr-table">
          <thead>
            <tr><th>환자명</th><th>생년월일</th><th>진료과</th><th class="center">상태</th></tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4" class="empty-cell">
                <div class="error-state">
                  <div class="error-icon">⚠️</div>
                  <div class="error-title">데이터를 불러올 수 없습니다</div>
                  <div class="error-desc">네트워크 연결을 확인하고 다시 시도해 주세요.</div>
                  <button class="retry-btn">재시도</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<style scoped>
.table-states-wrap { margin: 20px 0 28px; }

/* Case selector */
.case-selector { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.case-chip {
  padding: 6px 14px; border-radius: 9999px; font-size: 12px; font-weight: 500;
  cursor: pointer; background: var(--vp-c-bg-soft); color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider); transition: all 0.15s;
}
.case-chip:hover { border-color: var(--vp-c-text-3); }
.case-chip.active { background: #3B82F6; color: #fff; border-color: #3B82F6; }

/* Stage */
.table-stage {
  border: 1px solid var(--vp-c-divider); border-radius: 12px; overflow: hidden;
  background: var(--vp-c-bg); padding: 16px;
}

.table-case { position: relative; }
.case-tag {
  font-size: 10px; font-weight: 600; color: var(--vp-c-text-3);
  margin-bottom: 12px; padding: 4px 8px; background: var(--vp-c-bg-soft);
  border-radius: 4px; display: inline-block;
}

/* Core table — horizontal lines only */
.emr-table {
  width: 100%; border-collapse: collapse; font-size: 13px;
}
.emr-table th {
  padding: 10px 12px; text-align: left; font-weight: 600; font-size: 12px;
  color: var(--vp-c-text-2); border-bottom: 2px solid var(--vp-c-divider);
  background: transparent; white-space: nowrap;
}
.emr-table td {
  padding: 10px 12px; border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2); vertical-align: middle;
}
.emr-table tbody tr:last-child td { border-bottom: 1px solid var(--vp-c-divider); }
.emr-table tbody tr:hover { background: var(--vp-c-bg-soft); }
.emr-table.compact td { padding: 7px 12px; }

/* Alignment */
.center { text-align: center !important; }
.right { text-align: right !important; }
.mono { font-family: var(--vp-font-family-mono); font-variant-numeric: tabular-nums; }
.dim { color: var(--vp-c-text-3) !important; }

/* Sortable */
.sortable { cursor: pointer; user-select: none; }
.sortable:hover { color: #3B82F6; }

/* Cell types */
.cell-name { font-weight: 600; color: var(--vp-c-text-1) !important; }
.inline-icon { font-size: 11px; }
.drug-name { display: block; font-weight: 500; color: var(--vp-c-text-1); }
.drug-code { display: block; font-size: 10px; color: var(--vp-c-text-3); font-family: var(--vp-font-family-mono); }
.editable {
  background: rgba(59,130,246,0.05); border-radius: 4px; cursor: text;
  border: 1px dashed rgba(59,130,246,0.2);
}
.row-delete { color: var(--vp-c-text-3); cursor: pointer; font-size: 14px; }
.row-delete:hover { color: #DC2626; }
.line-through { text-decoration: line-through; }

/* Badges */
.badge {
  display: inline-block; padding: 2px 8px; border-radius: 9999px;
  font-size: 11px; font-weight: 500; white-space: nowrap;
}
.badge-blue { background: #DBEAFE; color: #1D4ED8; }
.badge-green { background: #DCFCE7; color: #15803D; }
.badge-red { background: #FEE2E2; color: #DC2626; }
.badge-yellow { background: #FEF9C3; color: #A16207; }
.badge-gray { background: #F1F5F9; color: #64748B; }
.badge-teal-sm { background: #CCFBF1; color: #0F766E; font-size: 10px; padding: 1px 6px; }
.badge-blue-sm { background: #DBEAFE; color: #1D4ED8; font-size: 10px; padding: 1px 6px; }
.badge-gray-sm { background: #F1F5F9; color: #64748B; font-size: 10px; padding: 1px 6px; }

.dark .badge-blue { background: #172554; color: #60A5FA; }
.dark .badge-green { background: #052E16; color: #4ADE80; }
.dark .badge-red { background: #450A0A; color: #F87171; }
.dark .badge-yellow { background: #422006; color: #FACC15; }
.dark .badge-gray { background: #334155; color: #94A3B8; }
.dark .badge-teal-sm { background: #042F2E; color: #14B8A6; }
.dark .badge-blue-sm { background: #172554; color: #60A5FA; }
.dark .badge-gray-sm { background: #334155; color: #94A3B8; }

/* Result badges */
.result-badge {
  display: inline-block; width: 22px; height: 22px; border-radius: 4px;
  font-size: 11px; font-weight: 700; text-align: center; line-height: 22px;
}
.result-badge.small { width: 18px; height: 18px; font-size: 9px; line-height: 18px; }
.result-badge.normal { background: #DCFCE7; color: #15803D; }
.result-badge.high { background: #FEE2E2; color: #DC2626; }
.result-badge.low { background: #FEF9C3; color: #A16207; }
.result-badge.critical { background: #DC2626; color: #fff; }
.dark .result-badge.normal { background: #052E16; color: #4ADE80; }
.dark .result-badge.high { background: #450A0A; color: #F87171; }
.dark .result-badge.low { background: #422006; color: #FACC15; }

/* Severity */
.severity {
  display: inline-block; padding: 2px 8px; border-radius: 4px;
  font-size: 10px; font-weight: 700;
}
.severity.small { padding: 1px 5px; font-size: 9px; }
.severity.severe { background: #DC2626; color: #fff; }
.severity.moderate { background: #EAB308; color: #fff; }
.severity.mild { background: #94A3B8; color: #fff; }

/* Row states */
.row-selected { background: rgba(59,130,246,0.08) !important; }
.row-emergency { background: rgba(239,68,68,0.06) !important; }
.row-danger { background: rgba(239,68,68,0.04) !important; }
.row-warning { background: rgba(234,179,8,0.04) !important; }
.row-expanded { background: var(--vp-c-bg-soft) !important; }
.row-past td { color: var(--vp-c-text-3) !important; }
.row-current { background: rgba(59,130,246,0.08) !important; }
.row-cancelled { opacity: 0.5; }

.current-time { color: #3B82F6 !important; font-weight: 600; }

/* Values */
.val-high { color: #DC2626 !important; font-weight: 600; }
.val-low { color: #A16207 !important; font-weight: 600; }
.dark .val-high { color: #F87171 !important; }
.dark .val-low { color: #FACC15 !important; }
.row-abnormal-high { background: rgba(239,68,68,0.04); }
.row-abnormal-low { background: rgba(234,179,8,0.04); }

/* Trends */
.trend { font-weight: 700; font-size: 14px; }
.trend.up { color: #DC2626; }
.trend.down { color: #2563EB; }
.trend.stable { color: #22C55E; }
.dark .trend.up { color: #F87171; }

/* Highlight column */
.highlight-col { background: rgba(59,130,246,0.06); }

/* Vitals */
.vital-label { font-weight: 500; color: var(--vp-c-text-1) !important; }

/* Expand / Accordion */
.expand-icon { color: var(--vp-c-text-3); font-size: 11px; text-align: center; }
.expanded-detail td { padding: 0 12px 12px 42px !important; border-bottom: 1px solid var(--vp-c-divider); }
.detail-grid { display: flex; gap: 24px; }
.detail-section { flex: 1; }
.detail-title { font-size: 11px; font-weight: 600; color: var(--vp-c-text-3); margin-bottom: 4px; text-transform: uppercase; }
.detail-item { font-size: 12px; color: var(--vp-c-text-2); padding: 2px 0; }

/* Footer */
.table-footer-info {
  padding: 8px 12px; font-size: 11px; color: var(--vp-c-text-3);
  border-top: 1px solid var(--vp-c-divider);
}
.emr-table tfoot td {
  padding: 10px 12px; border-top: 2px solid var(--vp-c-divider); border-bottom: none;
}
.total-row { background: var(--vp-c-bg-soft); }
.foot-label { font-weight: 600; color: var(--vp-c-text-3); font-size: 12px; }
.foot-value { font-weight: 700; color: var(--vp-c-text-1); }

/* Table actions */
.table-actions {
  display: flex; gap: 12px; padding: 10px 0 0;
}
.action-btn {
  font-size: 12px; color: #3B82F6; cursor: pointer; font-weight: 500;
}
.action-btn:hover { text-decoration: underline; }

/* Toolbar */
.table-toolbar {
  display: flex; align-items: center; gap: 8px; padding: 8px 0; margin-bottom: 4px;
}
.toolbar-selected { font-size: 12px; color: #3B82F6; font-weight: 600; }
.toolbar-btn {
  font-size: 11px; padding: 4px 10px; border-radius: 6px;
  border: 1px solid var(--vp-c-divider); cursor: pointer;
  color: var(--vp-c-text-2); background: var(--vp-c-bg);
}
.toolbar-btn.delete-btn { color: #DC2626; border-color: #FECACA; }
.dark .toolbar-btn.delete-btn { color: #F87171; border-color: #7F1D1D; }

/* Sub header */
.table-sub-header {
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;
}
.sub-title { font-size: 14px; font-weight: 600; color: var(--vp-c-text-1); }
.sub-date { font-size: 12px; color: var(--vp-c-text-3); font-family: var(--vp-font-family-mono); }
.sub-label { font-size: 13px; font-weight: 600; color: var(--vp-c-text-2); margin-bottom: 8px; }

/* Legend */
.legend-row {
  display: flex; gap: 16px; padding: 8px 0; font-size: 11px; color: var(--vp-c-text-3);
}
.legend-item { display: flex; align-items: center; gap: 4px; }

/* Empty / Loading / Error states */
.empty-cell { padding: 40px 12px !important; }
.empty-state, .error-state { text-align: center; }
.empty-icon, .error-icon { font-size: 32px; margin-bottom: 8px; }
.empty-title, .error-title { font-size: 14px; font-weight: 600; color: var(--vp-c-text-2); margin-bottom: 4px; }
.empty-desc, .error-desc { font-size: 12px; color: var(--vp-c-text-3); }
.retry-btn {
  margin-top: 10px; padding: 6px 16px; border-radius: 6px;
  background: #3B82F6; color: #fff; border: none; font-size: 12px;
  font-weight: 600; cursor: pointer; font-family: inherit;
}

/* Skeleton */
.skeleton-row td { padding: 12px 12px !important; }
.skeleton {
  border-radius: 4px; background: var(--vp-c-bg-soft);
  animation: shimmer 1.5s infinite;
  height: 16px;
}
.skel-name { width: 80px; }
.skel-date { width: 70px; }
.skel-short { width: 40px; }
.skel-badge { width: 50px; height: 20px; margin: 0 auto; border-radius: 10px; }

@keyframes shimmer {
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
}

/* Checkbox */
input[type="checkbox"] { accent-color: #3B82F6; cursor: pointer; }
</style>
