<script setup>
</script>

<template>
  <div class="layout-diagram">
    <!-- Top Bar -->
    <div class="ld-topbar">
      <div class="ld-logo">의사랑AI</div>
      <div class="ld-topbar-center">환자: 홍길동 (M/45)</div>
      <div class="ld-topbar-right">
        <span class="ld-icon-btn">🔍</span>
        <span class="ld-icon-btn">🔔</span>
        <span class="ld-icon-btn">⚙️</span>
      </div>
    </div>

    <!-- Main area -->
    <div class="ld-main">
      <!-- Sidebar -->
      <div class="ld-sidebar">
        <div class="ld-sidebar-title">환자 목록</div>
        <div class="ld-sidebar-search">🔍 검색...</div>
        <div class="ld-sidebar-section">대기</div>
        <div class="ld-patient active">
          <span class="ld-dot waiting"></span> 홍길동
        </div>
        <div class="ld-patient">
          <span class="ld-dot waiting"></span> 김영희
        </div>
        <div class="ld-sidebar-section">진료중</div>
        <div class="ld-patient">
          <span class="ld-dot progress"></span> 이철수
        </div>
        <div class="ld-sidebar-section">완료</div>
        <div class="ld-patient">
          <span class="ld-dot done"></span> 박지수
        </div>
      </div>

      <!-- Content Grid -->
      <div class="ld-content">
        <div class="ld-card small">
          <div class="ld-card-header">👤 환자 기본정보</div>
          <div class="ld-card-body">
            <div style="font-weight:600;">홍길동 (남/45)</div>
            <div style="font-size:10px; color:#94A3B8;">1981.03.15</div>
            <div class="ld-tags">
              <span class="ld-tag blue">건강보험</span>
              <span class="ld-tag red">알러지</span>
            </div>
          </div>
        </div>
        <div class="ld-card small">
          <div class="ld-card-header">📅 내원일 히스토리</div>
          <div class="ld-card-body">
            <div class="ld-timeline-item">● 2026.04.01 감기</div>
            <div class="ld-timeline-item">○ 2026.03.15 정기검진</div>
            <div class="ld-timeline-item">○ 2026.01.20 독감</div>
          </div>
        </div>
        <div class="ld-card large">
          <div class="ld-card-header">💊 진단 및 처방</div>
          <div class="ld-card-body">
            <div class="ld-rx-row"><span>J06.9 급성 상기도감염</span><span class="ld-tag blue">주</span></div>
            <div class="ld-rx-row"><span>타이레놀 500mg</span><span style="font-size:10px; color:#94A3B8;">3T/3일</span></div>
            <div class="ld-rx-row"><span>클로르페니라민</span><span style="font-size:10px; color:#94A3B8;">2T/3일</span></div>
          </div>
          <div class="ld-card-footer">처방 전송</div>
        </div>
        <div class="ld-card small">
          <div class="ld-card-header">📝 임상메모</div>
          <div class="ld-card-body">
            <div style="font-size:10px; font-weight:600; color:#60A5FA;">S (Subjective)</div>
            <div style="font-size:10px;">두통, 발열 3일째...</div>
            <div style="font-size:10px; font-weight:600; color:#60A5FA; margin-top:4px;">O (Objective)</div>
            <div style="font-size:10px;">BP 130/85, BT 37.8</div>
          </div>
        </div>
        <div class="ld-card small">
          <div class="ld-card-header">💬 환자메모</div>
          <div class="ld-card-body chat">
            <div class="ld-chat-msg right">혈압 추적관찰 필요</div>
            <div class="ld-chat-msg left">네, 예약했습니다</div>
          </div>
        </div>
      </div>

      <!-- Quick Panel -->
      <div class="ld-quick">
        <div class="ld-quick-title">퀵오더</div>
        <div class="ld-quick-item">🔍 검색...</div>
        <div class="ld-quick-section">최근 사용</div>
        <div class="ld-quick-item">타이레놀 500mg</div>
        <div class="ld-quick-item">CBC 검사</div>
        <div class="ld-quick-title" style="margin-top:12px;">묶음처방</div>
        <div class="ld-quick-set">
          <div style="font-weight:600;">🏷 감기 기본 셋</div>
          <div style="font-size:9px; color:#94A3B8;">타이레놀 + 항히스타민</div>
          <div class="ld-quick-apply">적용 ▶</div>
        </div>
        <div class="ld-quick-set">
          <div style="font-weight:600;">🏷 고혈압 f/u</div>
          <div style="font-size:9px; color:#94A3B8;">아무로디핀 + 모니터링</div>
          <div class="ld-quick-apply">적용 ▶</div>
        </div>
      </div>
    </div>

    <!-- Status Bar -->
    <div class="ld-statusbar">
      <span>접속: 오윤경 의사</span>
      <span>대기 환자: 2명</span>
      <span>마지막 저장: 14:32</span>
    </div>

    <!-- Labels -->
    <div class="ld-labels">
      <span class="ld-label" style="left:0; top:-20px;">← 240px Sidebar →</span>
      <span class="ld-label" style="left:50%; top:-20px; transform:translateX(-50%);">← Flexible Main Content →</span>
      <span class="ld-label" style="right:0; top:-20px;">← 320px Quick →</span>
    </div>
  </div>
</template>

<style scoped>
.layout-diagram {
  position: relative;
  margin: 24px 0 40px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  font-size: 11px;
  background: var(--vp-c-bg);
}

/* Top bar */
.ld-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: #1E293B;
  color: #F8FAFC;
  height: 36px;
}
.ld-logo { font-weight: 700; color: #60A5FA; }
.ld-topbar-center { font-size: 11px; }
.ld-topbar-right { display: flex; gap: 6px; }
.ld-icon-btn { font-size: 12px; cursor: pointer; }

/* Main layout */
.ld-main {
  display: flex;
  min-height: 300px;
}

/* Sidebar */
.ld-sidebar {
  width: 140px;
  border-right: 1px solid var(--vp-c-divider);
  padding: 8px;
  flex-shrink: 0;
  background: var(--vp-c-bg-alt);
}
.ld-sidebar-title { font-weight: 700; margin-bottom: 6px; color: var(--vp-c-text-1); }
.ld-sidebar-search {
  padding: 4px 6px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  margin-bottom: 8px;
  font-size: 10px;
  color: var(--vp-c-text-3);
}
.ld-sidebar-section { font-size: 9px; font-weight: 600; color: var(--vp-c-text-3); margin: 6px 0 2px; text-transform: uppercase; }
.ld-patient {
  display: flex; align-items: center; gap: 4px;
  padding: 4px 6px; border-radius: 4px; cursor: pointer;
  color: var(--vp-c-text-2);
}
.ld-patient.active { background: rgba(59,130,246,0.15); color: #3B82F6; font-weight: 600; }
.ld-dot { width: 6px; height: 6px; border-radius: 50%; }
.ld-dot.waiting { background: #EAB308; }
.ld-dot.progress { background: #3B82F6; }
.ld-dot.done { background: #22C55E; }

/* Content grid */
.ld-content {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 8px;
}

.ld-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg);
}
.ld-card.large { grid-column: span 2; }

.ld-card-header {
  padding: 6px 10px;
  font-weight: 600;
  font-size: 11px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.ld-card-body { padding: 8px 10px; font-size: 10px; color: var(--vp-c-text-2); }
.ld-card-footer {
  padding: 6px 10px;
  text-align: right;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 10px;
  font-weight: 600;
  color: #3B82F6;
  cursor: pointer;
}

.ld-tags { display: flex; gap: 4px; margin-top: 4px; }
.ld-tag {
  padding: 1px 6px; border-radius: 4px; font-size: 9px; font-weight: 500;
}
.ld-tag.blue { background: #DBEAFE; color: #1D4ED8; }
.ld-tag.red { background: #FEE2E2; color: #DC2626; }

.ld-timeline-item { padding: 2px 0; font-size: 10px; }

.ld-rx-row { display: flex; justify-content: space-between; padding: 2px 0; }

.ld-card-body.chat { display: flex; flex-direction: column; gap: 4px; }
.ld-chat-msg {
  padding: 3px 8px; border-radius: 8px; font-size: 9px; max-width: 80%;
}
.ld-chat-msg.right {
  background: #3B82F6; color: #fff; align-self: flex-end;
  border-bottom-right-radius: 2px;
}
.ld-chat-msg.left {
  background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); align-self: flex-start;
  border-bottom-left-radius: 2px;
}

/* Quick Panel */
.ld-quick {
  width: 150px;
  border-left: 1px solid var(--vp-c-divider);
  padding: 8px;
  flex-shrink: 0;
  background: var(--vp-c-bg-alt);
}
.ld-quick-title { font-weight: 700; margin-bottom: 6px; color: var(--vp-c-text-1); }
.ld-quick-section { font-size: 9px; font-weight: 600; color: var(--vp-c-text-3); margin: 6px 0 2px; }
.ld-quick-item {
  padding: 3px 6px; font-size: 10px; color: var(--vp-c-text-2);
  border-radius: 4px; cursor: pointer;
}
.ld-quick-item:hover { background: var(--vp-c-bg-soft); }

.ld-quick-set {
  padding: 6px; border: 1px solid var(--vp-c-divider);
  border-radius: 6px; margin-bottom: 6px; font-size: 10px;
  color: var(--vp-c-text-2);
}
.ld-quick-apply {
  text-align: right; font-size: 9px; color: #3B82F6; font-weight: 600;
  cursor: pointer; margin-top: 2px;
}

/* Status bar */
.ld-statusbar {
  display: flex; justify-content: space-between;
  padding: 4px 12px; font-size: 10px;
  background: #0F172A; color: #94A3B8;
  border-top: 1px solid var(--vp-c-divider);
}

/* Labels */
.ld-labels { display: none; }
</style>
