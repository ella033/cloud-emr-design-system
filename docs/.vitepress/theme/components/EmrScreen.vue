<script setup>
import { ref } from 'vue'

const activePatient = ref('hong')
const activeTab = ref('all')

const patients = [
  { id: 'hong', name: '홍길동', age: 45, gender: '남', status: 'progress', time: '14:30', dept: '내과' },
  { id: 'kim', name: '김영희', age: 51, gender: '여', status: 'waiting', time: '14:25', dept: '내과' },
  { id: 'lee', name: '이철수', age: 36, gender: '남', status: 'emergency', time: '14:15', dept: '외과' },
  { id: 'park', name: '박지수', age: 38, gender: '여', status: 'done', time: '13:50', dept: '내과' },
  { id: 'choi', name: '최미영', age: 61, gender: '여', status: 'waiting', time: '14:35', dept: '정형외과' },
]

const statusMap = {
  waiting: { label: '대기', color: '#EAB308', bg: '#FEF9C3', text: '#A16207' },
  progress: { label: '진료중', color: '#3B82F6', bg: '#DBEAFE', text: '#1D4ED8' },
  done: { label: '완료', color: '#22C55E', bg: '#DCFCE7', text: '#15803D' },
  emergency: { label: '응급', color: '#DC2626', bg: '#FEE2E2', text: '#DC2626' },
}

const tabs = [
  { key: 'all', label: '전체', count: 5 },
  { key: 'waiting', label: '대기', count: 2 },
  { key: 'progress', label: '진료중', count: 1 },
  { key: 'done', label: '완료', count: 1 },
]

const filteredPatients = ref(patients)
function filterByTab(tab) {
  activeTab.value = tab
  filteredPatients.value = tab === 'all' ? patients : patients.filter(p => p.status === tab)
}

const chatMsg = ref('')
</script>

<template>
  <div class="emr-screen">
    <!-- Top Navigation -->
    <header class="emr-topbar">
      <div class="topbar-left">
        <span class="topbar-logo">의사랑AI</span>
      </div>
      <div class="topbar-center">
        <span class="topbar-patient-ctx">
          <SvgIcon name="user" :size="14" />
          <strong>홍길동</strong> (남 / 45세) · 내과
        </span>
      </div>
      <div class="topbar-right">
        <button class="topbar-icon-btn"><SvgIcon name="search" :size="16" /></button>
        <button class="topbar-icon-btn"><SvgIcon name="bell" :size="16" /></button>
        <button class="topbar-icon-btn"><SvgIcon name="settings" :size="16" /></button>
        <div class="topbar-avatar">오</div>
      </div>
    </header>

    <!-- Main Layout -->
    <div class="emr-body">
      <!-- Sidebar -->
      <aside class="emr-sidebar">
        <div class="sidebar-search">
          <SvgIcon name="search" :size="14" />
          <input type="text" placeholder="환자 검색..." class="sidebar-search-input" />
        </div>
        <div class="sidebar-tabs">
          <button v-for="t in tabs" :key="t.key"
            :class="['sidebar-tab', { active: activeTab === t.key }]"
            @click="filterByTab(t.key)">
            {{ t.label }} <span class="tab-count">{{ t.count }}</span>
          </button>
        </div>
        <div class="sidebar-list">
          <div v-for="p in filteredPatients" :key="p.id"
            :class="['patient-row', { active: activePatient === p.id }]"
            @click="activePatient = p.id">
            <span class="patient-dot" :style="{ background: statusMap[p.status].color }"></span>
            <div class="patient-info">
              <span class="patient-name">{{ p.name }}</span>
              <span class="patient-meta">{{ p.gender }}/{{ p.age }} · {{ p.dept }}</span>
            </div>
            <div class="patient-right">
              <span class="patient-badge" :style="{ background: statusMap[p.status].bg, color: statusMap[p.status].text }">
                {{ statusMap[p.status].label }}
              </span>
              <span class="patient-time">{{ p.time }}</span>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="emr-main">
        <div class="card-grid">
          <!-- 환자 기본정보 -->
          <div class="emr-card">
            <div class="card-header">
              <SvgIcon name="user" :size="14" /> <span>환자 기본정보</span>
              <div class="card-actions">
                <button class="card-action-btn"><SvgIcon name="more-horizontal" :size="12" /></button>
              </div>
            </div>
            <div class="card-body">
              <div class="patient-detail-name">홍길동 <span class="patient-detail-sub">(남 / 45세)</span></div>
              <div class="patient-detail-birth">1981.03.15 · 810315-1******</div>
              <div class="patient-tags">
                <span class="p-tag blue">건강보험</span>
                <span class="p-tag teal">A+ 형</span>
                <span class="p-tag red">알러지: 페니실린</span>
              </div>
              <div class="patient-contact">
                <SvgIcon name="link" :size="12" /> 010-1234-5678
              </div>
            </div>
          </div>

          <!-- 내원일 히스토리 -->
          <div class="emr-card">
            <div class="card-header">
              <SvgIcon name="calendar" :size="14" /> <span>내원일 히스토리</span>
              <div class="card-actions">
                <button class="card-action-btn"><SvgIcon name="filter" :size="12" /></button>
              </div>
            </div>
            <div class="card-body">
              <div class="visit-item current">
                <span class="visit-dot current"></span>
                <div class="visit-info">
                  <span class="visit-date">2026.04.01 (오늘)</span>
                  <span class="visit-desc">감기 증상</span>
                </div>
              </div>
              <div class="visit-item">
                <span class="visit-dot"></span>
                <div class="visit-info">
                  <span class="visit-date">2026.03.15</span>
                  <span class="visit-desc">정기검진 · 혈압약 갱신</span>
                </div>
              </div>
              <div class="visit-item">
                <span class="visit-dot"></span>
                <div class="visit-info">
                  <span class="visit-date">2026.01.20</span>
                  <span class="visit-desc">독감 · 타미플루 처방</span>
                </div>
              </div>
              <button class="visit-more">더보기 (총 23건)</button>
            </div>
          </div>

          <!-- 진단 및 처방 (wide) -->
          <div class="emr-card wide">
            <div class="card-header">
              <SvgIcon name="pill" :size="14" /> <span>진단 및 처방</span>
              <div class="card-actions">
                <button class="card-action-btn"><SvgIcon name="bookmark" :size="12" /></button>
                <button class="card-action-btn"><SvgIcon name="more-horizontal" :size="12" /></button>
              </div>
            </div>
            <div class="card-body">
              <!-- 진단 -->
              <div class="dx-section">
                <div class="dx-title">진단</div>
                <div class="dx-input-wrap">
                  <SvgIcon name="search" :size="14" />
                  <input type="text" placeholder="KCD 코드 또는 질환명 검색" class="dx-input" />
                </div>
                <div class="dx-list">
                  <div class="dx-item">
                    <span class="dx-badge primary">주</span>
                    <span>J06.9 급성 상기도감염</span>
                    <button class="dx-remove"><SvgIcon name="close" :size="12" /></button>
                  </div>
                  <div class="dx-item">
                    <span class="dx-badge sub">부</span>
                    <span>R51 두통</span>
                    <button class="dx-remove"><SvgIcon name="close" :size="12" /></button>
                  </div>
                </div>
              </div>
              <!-- 처방 테이블 -->
              <div class="rx-section">
                <div class="rx-title">처방</div>
                <table class="rx-table">
                  <thead>
                    <tr><th>약품명</th><th class="center">용량</th><th class="center">횟수</th><th class="center">일수</th><th class="center">경로</th><th></th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="rx-drug">타이레놀 500mg</td>
                      <td class="center mono">1T</td>
                      <td class="center mono">3회</td>
                      <td class="center mono">3일</td>
                      <td class="center">경구</td>
                      <td class="center"><button class="rx-del"><SvgIcon name="close" :size="10" /></button></td>
                    </tr>
                    <tr>
                      <td class="rx-drug">클로르페니라민 4mg</td>
                      <td class="center mono">1T</td>
                      <td class="center mono">2회</td>
                      <td class="center mono">3일</td>
                      <td class="center">경구</td>
                      <td class="center"><button class="rx-del"><SvgIcon name="close" :size="10" /></button></td>
                    </tr>
                  </tbody>
                </table>
                <div class="rx-actions">
                  <button class="rx-add"><SvgIcon name="plus" :size="12" /> 약품 추가</button>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <button class="footer-btn outline">임시 저장</button>
              <button class="footer-btn primary">처방 전송</button>
            </div>
          </div>

          <!-- 임상메모 -->
          <div class="emr-card">
            <div class="card-header">
              <SvgIcon name="edit" :size="14" /> <span>임상메모</span>
              <div class="card-actions">
                <button class="card-action-btn"><SvgIcon name="more-horizontal" :size="12" /></button>
              </div>
            </div>
            <div class="card-body soap-body">
              <div class="soap-section">
                <div class="soap-label">S</div>
                <div class="soap-text">3일 전부터 두통과 발열 지속. 기침은 어제부터 시작.</div>
              </div>
              <div class="soap-section">
                <div class="soap-label">O</div>
                <div class="soap-text">BP 130/85, HR 78, BT 37.8. 인후 발적(+).</div>
              </div>
              <div class="soap-section">
                <div class="soap-label">A</div>
                <div class="soap-text">급성 상기도감염 의심</div>
              </div>
              <div class="soap-section">
                <div class="soap-label">P</div>
                <div class="soap-text">대증치료 처방, 3일 후 f/u</div>
              </div>
            </div>
            <div class="card-footer">
              <span class="auto-save"><SvgIcon name="check-circle" :size="12" /> 자동저장 14:42</span>
            </div>
          </div>

          <!-- 환자메모 (채팅) -->
          <div class="emr-card">
            <div class="card-header">
              <SvgIcon name="message" :size="14" /> <span>환자메모</span>
              <div class="card-actions">
                <button class="card-action-btn"><SvgIcon name="more-horizontal" :size="12" /></button>
              </div>
            </div>
            <div class="card-body chat-body">
              <div class="chat-messages">
                <div class="chat-msg sent">
                  <div class="chat-sender">오윤경 의사 · 14:35</div>
                  <div class="chat-bubble sent">혈압이 약간 높으니 추적 관찰 필요합니다.</div>
                </div>
                <div class="chat-msg received">
                  <div class="chat-sender">김간호사 · 14:37</div>
                  <div class="chat-bubble received">네, 다음 내원 시 혈압 재측정 예약했습니다.</div>
                </div>
                <div class="chat-msg sent">
                  <div class="chat-sender">오윤경 의사 · 14:40</div>
                  <div class="chat-bubble sent">감사합니다. 알러지 이력도 다시 확인 부탁드립니다.</div>
                </div>
              </div>
              <div class="chat-input-wrap">
                <input type="text" v-model="chatMsg" placeholder="메시지 입력..." class="chat-input" />
                <button class="chat-send"><SvgIcon name="chevron-right" :size="14" /></button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Quick Panel -->
      <aside class="emr-quick">
        <div class="quick-section">
          <div class="quick-title"><SvgIcon name="search" :size="14" /> 퀵오더</div>
          <div class="quick-search">
            <input type="text" placeholder="약품/검사 검색..." class="quick-search-input" />
          </div>
          <div class="quick-sub">최근 사용</div>
          <div class="quick-item">타이레놀 500mg</div>
          <div class="quick-item">아목시실린 250mg</div>
          <div class="quick-item">CBC 검사</div>
          <div class="quick-sub">자주 사용</div>
          <div class="quick-item">일반혈액검사 (CBC)</div>
          <div class="quick-item">소변검사</div>
          <div class="quick-item">Chest X-ray</div>
        </div>
        <div class="quick-section">
          <div class="quick-title"><SvgIcon name="bookmark" :size="14" /> 묶음처방</div>
          <div class="quick-set">
            <div class="quick-set-name">감기 기본 셋</div>
            <div class="quick-set-desc">타이레놀 + 항히스타민 + 기침약</div>
            <button class="quick-set-apply">적용</button>
          </div>
          <div class="quick-set">
            <div class="quick-set-name">고혈압 f/u</div>
            <div class="quick-set-desc">아무로디핀 + 혈압 모니터링</div>
            <button class="quick-set-apply">적용</button>
          </div>
        </div>
      </aside>
    </div>

    <!-- Status Bar -->
    <footer class="emr-statusbar">
      <span>접속: 오윤경 의사</span>
      <span>대기 환자: 2명</span>
      <span><SvgIcon name="check-circle" :size="10" /> 마지막 저장: 14:42</span>
    </footer>
  </div>
</template>

<style scoped>
/* ─── Full screen layout ─── */
.emr-screen {
  display: flex; flex-direction: column; height: 100vh; width: 100vw;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #F8FAFC; color: #0F172A; font-size: 13px;
  position: fixed; top: 0; left: 0; z-index: 100;
}
.dark .emr-screen { background: #020617; color: #F8FAFC; }

/* ─── Top Navigation ─── */
.emr-topbar {
  height: 56px; display: flex; align-items: center; justify-content: space-between;
  padding: 0 16px; background: #0F172A; color: #F8FAFC; flex-shrink: 0;
}
.topbar-left { display: flex; align-items: center; }
.topbar-logo { font-size: 16px; font-weight: 700; color: #60A5FA; }
.topbar-center { display: flex; align-items: center; gap: 8px; font-size: 13px; }
.topbar-patient-ctx { display: flex; align-items: center; gap: 6px; }
.topbar-right { display: flex; align-items: center; gap: 4px; }
.topbar-icon-btn {
  width: 36px; height: 36px; border-radius: 8px; border: none;
  background: transparent; color: #94A3B8; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
}
.topbar-icon-btn:hover { background: rgba(255,255,255,0.1); color: #F8FAFC; }
.topbar-avatar {
  width: 32px; height: 32px; border-radius: 50%; background: #3B82F6;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 600; color: #fff; margin-left: 8px;
}

/* ─── Body ─── */
.emr-body { flex: 1; display: flex; overflow: hidden; }

/* ─── Sidebar ─── */
.emr-sidebar {
  width: 220px; flex-shrink: 0; background: #fff; border-right: 1px solid #E2E8F0;
  display: flex; flex-direction: column; overflow: hidden;
}
.dark .emr-sidebar { background: #0F172A; border-color: #1E293B; }

.sidebar-search {
  display: flex; align-items: center; gap: 6px; padding: 12px;
  border-bottom: 1px solid #E2E8F0;
}
.dark .sidebar-search { border-color: #1E293B; }
.sidebar-search-input {
  flex: 1; border: none; outline: none; font-size: 12px; background: transparent;
  color: inherit; font-family: inherit;
}

.sidebar-tabs {
  display: flex; padding: 8px 8px 0; gap: 2px;
}
.sidebar-tab {
  flex: 1; padding: 6px 0; border: none; background: transparent;
  font-size: 11px; font-weight: 500; color: #94A3B8; cursor: pointer;
  border-bottom: 2px solid transparent; font-family: inherit;
}
.sidebar-tab.active { color: #3B82F6; border-bottom-color: #3B82F6; }
.tab-count { font-size: 10px; opacity: 0.7; }

.sidebar-list { flex: 1; overflow-y: auto; padding: 4px; }

.patient-row {
  display: flex; align-items: center; gap: 8px; padding: 10px 8px;
  border-radius: 8px; cursor: pointer; transition: background 0.1s;
}
.patient-row:hover { background: #F1F5F9; }
.dark .patient-row:hover { background: #1E293B; }
.patient-row.active { background: rgba(59,130,246,0.08); }
.dark .patient-row.active { background: rgba(96,165,250,0.1); }

.patient-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.patient-info { flex: 1; min-width: 0; }
.patient-name { display: block; font-size: 13px; font-weight: 600; color: inherit; }
.patient-meta { display: block; font-size: 10px; color: #94A3B8; }
.patient-right { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; }
.patient-badge {
  padding: 1px 6px; border-radius: 9999px; font-size: 10px; font-weight: 500;
}
.patient-time { font-size: 10px; color: #94A3B8; font-family: 'JetBrains Mono', monospace; }

/* ─── Main Content ─── */
.emr-main { flex: 1; overflow-y: auto; padding: 12px; }

.card-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
}

/* ─── Card ─── */
.emr-card {
  background: #fff; border: 1px solid #E2E8F0; border-radius: 12px;
  display: flex; flex-direction: column; overflow: hidden;
}
.dark .emr-card { background: #0F172A; border-color: #1E293B; }
.emr-card.wide { grid-column: span 2; }

.card-header {
  display: flex; align-items: center; gap: 6px; padding: 10px 14px;
  border-bottom: 1px solid #E2E8F0; font-size: 13px; font-weight: 600;
  background: #F8FAFC;
}
.dark .card-header { background: #0F172A; border-color: #1E293B; }
.card-actions { margin-left: auto; display: flex; gap: 2px; }
.card-action-btn {
  width: 24px; height: 24px; border-radius: 4px; border: none; background: transparent;
  color: #94A3B8; cursor: pointer; display: flex; align-items: center; justify-content: center;
}
.card-action-btn:hover { background: #F1F5F9; }
.dark .card-action-btn:hover { background: #1E293B; }

.card-body { padding: 14px; flex: 1; }
.card-footer {
  padding: 10px 14px; border-top: 1px solid #E2E8F0;
  display: flex; align-items: center; justify-content: flex-end; gap: 8px;
}
.dark .card-footer { border-color: #1E293B; }

/* Footer buttons */
.footer-btn {
  padding: 7px 16px; border-radius: 8px; font-size: 12px; font-weight: 600;
  cursor: pointer; border: none; font-family: inherit;
}
.footer-btn.primary { background: #3B82F6; color: #fff; }
.footer-btn.primary:hover { background: #2563EB; }
.footer-btn.outline { background: transparent; color: #64748B; border: 1px solid #E2E8F0; }

/* ─── Patient Info Card ─── */
.patient-detail-name { font-size: 18px; font-weight: 700; margin-bottom: 2px; }
.patient-detail-sub { font-size: 13px; font-weight: 400; color: #64748B; }
.patient-detail-birth { font-size: 12px; color: #94A3B8; margin-bottom: 10px; }
.patient-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }
.p-tag {
  padding: 2px 8px; border-radius: 6px; font-size: 11px; font-weight: 500;
}
.p-tag.blue { background: #DBEAFE; color: #1D4ED8; }
.p-tag.teal { background: #CCFBF1; color: #0F766E; }
.p-tag.red { background: #FEE2E2; color: #DC2626; }
.dark .p-tag.blue { background: #172554; color: #60A5FA; }
.dark .p-tag.teal { background: #042F2E; color: #14B8A6; }
.dark .p-tag.red { background: #450A0A; color: #F87171; }
.patient-contact { font-size: 12px; color: #64748B; display: flex; align-items: center; gap: 4px; }

/* ─── Visit History ─── */
.visit-item { display: flex; align-items: flex-start; gap: 10px; padding: 8px 0; }
.visit-dot {
  width: 8px; height: 8px; border-radius: 50%; background: #CBD5E1;
  margin-top: 4px; flex-shrink: 0;
}
.visit-dot.current { background: #3B82F6; }
.visit-info { flex: 1; }
.visit-date { display: block; font-size: 12px; font-weight: 600; }
.visit-desc { display: block; font-size: 11px; color: #64748B; }
.visit-more {
  width: 100%; padding: 6px; border: none; background: transparent;
  color: #3B82F6; font-size: 11px; font-weight: 500; cursor: pointer;
  text-align: center; font-family: inherit;
}

/* ─── Diagnosis & Order ─── */
.dx-section { margin-bottom: 14px; }
.dx-title, .rx-title { font-size: 12px; font-weight: 600; color: #64748B; margin-bottom: 6px; }
.dx-input-wrap {
  display: flex; align-items: center; gap: 6px; padding: 8px 10px;
  border: 1px solid #E2E8F0; border-radius: 8px; margin-bottom: 8px;
}
.dark .dx-input-wrap { border-color: #334155; }
.dx-input { flex: 1; border: none; outline: none; font-size: 12px; background: transparent; color: inherit; font-family: inherit; }
.dx-list { display: flex; flex-direction: column; gap: 4px; }
.dx-item {
  display: flex; align-items: center; gap: 8px; padding: 6px 8px;
  background: #F8FAFC; border-radius: 6px; font-size: 12px;
}
.dark .dx-item { background: #1E293B; }
.dx-badge {
  padding: 1px 6px; border-radius: 4px; font-size: 10px; font-weight: 600;
}
.dx-badge.primary { background: #3B82F6; color: #fff; }
.dx-badge.sub { background: #94A3B8; color: #fff; }
.dx-remove { border: none; background: transparent; color: #94A3B8; cursor: pointer; margin-left: auto; }

.rx-table {
  width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 8px;
}
.rx-table th {
  padding: 6px 8px; text-align: left; font-weight: 600; color: #64748B;
  border-bottom: 1px solid #E2E8F0; font-size: 11px;
}
.dark .rx-table th { border-color: #1E293B; }
.rx-table td { padding: 8px; border-bottom: 1px solid #E2E8F0; }
.dark .rx-table td { border-color: #1E293B; }
.rx-drug { font-weight: 500; }
.center { text-align: center; }
.mono { font-family: 'JetBrains Mono', monospace; }
.rx-del { border: none; background: transparent; color: #94A3B8; cursor: pointer; }
.rx-actions { display: flex; gap: 8px; }
.rx-add {
  display: flex; align-items: center; gap: 4px; padding: 4px 8px;
  border: none; background: transparent; color: #3B82F6;
  font-size: 12px; font-weight: 500; cursor: pointer; font-family: inherit;
}

/* ─── SOAP ─── */
.soap-body { display: flex; flex-direction: column; gap: 8px; }
.soap-section { display: flex; gap: 8px; }
.soap-label {
  width: 20px; height: 20px; border-radius: 4px; background: #3B82F6; color: #fff;
  font-size: 10px; font-weight: 700; display: flex; align-items: center;
  justify-content: center; flex-shrink: 0;
}
.soap-text { font-size: 12px; color: #475569; line-height: 1.5; }
.dark .soap-text { color: #94A3B8; }
.auto-save { font-size: 11px; color: #22C55E; display: flex; align-items: center; gap: 4px; margin-right: auto; }

/* ─── Chat ─── */
.chat-body { display: flex; flex-direction: column; height: 200px; }
.chat-messages { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; }
.chat-msg { display: flex; flex-direction: column; }
.chat-msg.sent { align-items: flex-end; }
.chat-msg.received { align-items: flex-start; }
.chat-sender { font-size: 10px; color: #94A3B8; margin-bottom: 2px; }
.chat-bubble {
  max-width: 80%; padding: 8px 12px; border-radius: 12px; font-size: 12px; line-height: 1.4;
}
.chat-bubble.sent { background: #3B82F6; color: #fff; border-bottom-right-radius: 2px; }
.chat-bubble.received { background: #F1F5F9; color: #334155; border-bottom-left-radius: 2px; }
.dark .chat-bubble.received { background: #1E293B; color: #E2E8F0; }

.chat-input-wrap {
  display: flex; gap: 6px; margin-top: 8px; padding-top: 8px; border-top: 1px solid #E2E8F0;
}
.dark .chat-input-wrap { border-color: #1E293B; }
.chat-input {
  flex: 1; padding: 6px 10px; border: 1px solid #E2E8F0; border-radius: 8px;
  font-size: 12px; outline: none; background: transparent; color: inherit; font-family: inherit;
}
.dark .chat-input { border-color: #334155; }
.chat-send {
  width: 32px; height: 32px; border-radius: 8px; border: none;
  background: #3B82F6; color: #fff; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
}

/* ─── Quick Panel ─── */
.emr-quick {
  width: 280px; flex-shrink: 0; background: #fff; border-left: 1px solid #E2E8F0;
  overflow-y: auto; padding: 12px;
}
.dark .emr-quick { background: #0F172A; border-color: #1E293B; }

.quick-section { margin-bottom: 16px; }
.quick-title {
  display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700;
  margin-bottom: 8px;
}
.quick-search-input {
  width: 100%; padding: 7px 10px; border: 1px solid #E2E8F0; border-radius: 8px;
  font-size: 12px; outline: none; margin-bottom: 8px; background: transparent;
  color: inherit; font-family: inherit;
}
.dark .quick-search-input { border-color: #334155; }
.quick-sub { font-size: 10px; font-weight: 600; color: #94A3B8; margin: 8px 0 4px; text-transform: uppercase; }
.quick-item {
  padding: 6px 8px; font-size: 12px; color: #475569; border-radius: 6px; cursor: pointer;
}
.quick-item:hover { background: #F1F5F9; }
.dark .quick-item { color: #94A3B8; }
.dark .quick-item:hover { background: #1E293B; }

.quick-set {
  padding: 10px; border: 1px solid #E2E8F0; border-radius: 8px; margin-bottom: 8px;
}
.dark .quick-set { border-color: #1E293B; }
.quick-set-name { font-size: 12px; font-weight: 600; margin-bottom: 2px; }
.quick-set-desc { font-size: 10px; color: #94A3B8; margin-bottom: 6px; }
.quick-set-apply {
  padding: 4px 12px; border-radius: 6px; border: none;
  background: #EFF6FF; color: #2563EB; font-size: 11px; font-weight: 600;
  cursor: pointer; font-family: inherit;
}
.dark .quick-set-apply { background: #172554; color: #60A5FA; }

/* ─── Status Bar ─── */
.emr-statusbar {
  height: 32px; display: flex; align-items: center; justify-content: space-between;
  padding: 0 16px; background: #0F172A; color: #94A3B8; font-size: 11px;
  flex-shrink: 0;
}
</style>
