import { useState, useEffect, useRef } from 'react'
import ReactGridLayout from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'
import Card from '../components/ui/Card'
import PatientInfo from '../components/modules/PatientInfo'
import VitalTable from '../components/modules/VitalTable'
import '../components/modules/modules.css'

// ─── Data ───
const patients = [
  { id: 'hong', name: '홍길동', age: 45, gender: '남', status: 'progress' as const, time: '14:30', dept: '내과' },
  { id: 'kim', name: '김영희', age: 51, gender: '여', status: 'waiting' as const, time: '14:25', dept: '내과' },
  { id: 'lee', name: '이철수', age: 36, gender: '남', status: 'emergency' as const, time: '14:15', dept: '외과' },
  { id: 'park', name: '박지수', age: 38, gender: '여', status: 'done' as const, time: '13:50', dept: '내과' },
  { id: 'choi', name: '최미영', age: 61, gender: '여', status: 'waiting' as const, time: '14:35', dept: '정형외과' },
]

const statusConfig = {
  waiting: { label: '대기', color: 'yellow' as const },
  progress: { label: '진료중', color: 'blue' as const },
  done: { label: '완료', color: 'green' as const },
  emergency: { label: '응급', color: 'red' as const },
}

const allModules = [
  { id: 'patient-info', name: '환자 기본정보', icon: 'user', defaultW: 2, defaultH: 5 },
  { id: 'visit-thread', name: '내원 히스토리', icon: 'calendar', defaultW: 2, defaultH: 6 },
  { id: 'diagnosis-order', name: '진단 및 처방', icon: 'pill', defaultW: 4, defaultH: 4 },
  { id: 'clinical-note', name: '임상메모', icon: 'edit', defaultW: 2, defaultH: 3 },
  { id: 'patient-chat', name: '환자메모', icon: 'message', defaultW: 2, defaultH: 3 },
  { id: 'symptom-input', name: '증상 입력', icon: 'stethoscope', defaultW: 2, defaultH: 2 },
  { id: 'vital-chart', name: '바이탈 추이', icon: 'heart', defaultW: 2, defaultH: 3 },
  { id: 'lab-result', name: '검사 결과', icon: 'chart', defaultW: 2, defaultH: 3 },
  { id: 'image-viewer', name: '이미지 뷰어', icon: 'image', defaultW: 2, defaultH: 3 },
  { id: 'medication-timeline', name: '약물 타임라인', icon: 'clock', defaultW: 4, defaultH: 3 },
  { id: 'schedule', name: '예약/스케줄', icon: 'calendar', defaultW: 2, defaultH: 3 },
  { id: 'billing', name: '수납/청구', icon: 'file-text', defaultW: 2, defaultH: 3 },
  { id: 'patient-table', name: '환자 목록 (테이블)', icon: 'users', defaultW: 4, defaultH: 4 },
]

const defaultActiveModules = ['patient-info', 'visit-thread', 'diagnosis-order', 'clinical-note', 'patient-chat']

// ─── Component ───
export default function ChartPage() {
  const [activePatient, setActivePatient] = useState('hong')
  const [activeTab, setActiveTab] = useState('전체')
  const [darkMode, setDarkMode] = useState(false)
  const [gridWidth, setGridWidth] = useState(800)
  const [showModuleSettings, setShowModuleSettings] = useState(false)
  const [activeModules, setActiveModules] = useState(defaultActiveModules)
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const [quickPanelVisible, setQuickPanelVisible] = useState(true)
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const updateWidth = () => {
      if (mainRef.current) setGridWidth(mainRef.current.offsetWidth - 16)
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [sidebarVisible, quickPanelVisible])

  const tabs = ['전체', '대기', '진료중', '완료']
  const filteredPatients = activeTab === '전체' ? patients : patients.filter(p => statusConfig[p.status].label === activeTab)

  const toggleModule = (id: string) => {
    setActiveModules(prev => prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id])
  }

  // Generate layout from active modules
  const layout = activeModules.map((id, idx) => {
    const mod = allModules.find(m => m.id === id)!
    const col = (idx % 2) * 2
    const row = Math.floor(idx / 2) * 3
    return { i: id, x: col, y: row, w: mod.defaultW, h: mod.defaultH, minW: 1, minH: 2 }
  })

  return (
    <div className="emr-screen">
      {/* Topbar */}
      <header className="topbar">
        <div className="topbar-left">
          <button className="topbar-btn" onClick={() => setSidebarVisible(!sidebarVisible)}>
            <Icon name="menu" size={16} />
          </button>
          <span className="topbar-logo">의사랑AI</span>
        </div>
        <div className="topbar-center" />
        <div className="topbar-right">
          <button className="topbar-btn" onClick={() => setShowModuleSettings(!showModuleSettings)} title="카드 모듈 설정">
            <Icon name="plus" size={16} />
          </button>
          <button className="topbar-btn"><Icon name="search" size={16} /></button>
          <button className="topbar-btn"><Icon name="bell" size={16} /></button>
          <button className="topbar-btn"><Icon name="settings" size={16} /></button>
          <button className="topbar-btn" onClick={() => setDarkMode(!darkMode)} title={darkMode ? 'Light 모드' : 'Dark 모드'}>
            <Icon name={darkMode ? 'sun' : 'moon'} size={16} />
          </button>
          <div className="topbar-avatar">오</div>
        </div>
      </header>

      {/* Module settings dropdown */}
      {showModuleSettings && (
        <div className="module-settings">
          <div className="ms-header">카드 모듈 설정</div>
          <div className="ms-list">
            {allModules.map(m => (
              <label key={m.id} className="ms-item">
                <input type="checkbox" checked={activeModules.includes(m.id)} onChange={() => toggleModule(m.id)} />
                <Icon name={m.icon} size={14} />
                <span>{m.name}</span>
              </label>
            ))}
          </div>
          <button className="ms-close" onClick={() => setShowModuleSettings(false)}>닫기</button>
        </div>
      )}

      <div className="emr-body">
        {/* Sidebar */}
        {sidebarVisible && (
          <aside className="sidebar">
            <div className="sidebar-search">
              <Icon name="search" size={14} />
              <input type="text" placeholder="환자 검색..." className="sidebar-search-input" />
            </div>
            <div className="sidebar-tabs">
              {tabs.map(t => (
                <button key={t} className={`sidebar-tab ${activeTab === t ? 'active' : ''}`}
                  onClick={() => setActiveTab(t)}>{t}</button>
              ))}
            </div>
            <div className="sidebar-list">
              {filteredPatients.map(p => (
                <div key={p.id} className={`patient-row ${activePatient === p.id ? 'active' : ''}`}
                  onClick={() => setActivePatient(p.id)}>
                  <span className="patient-dot" style={{ background: `var(--${statusConfig[p.status].color}-500)` }} />
                  <div className="patient-info">
                    <span className="patient-name">{p.name}</span>
                    <span className="patient-meta">{p.gender}/{p.age} · {p.dept}</span>
                  </div>
                  <div className="patient-right">
                    <Badge variant="subtle" color={statusConfig[p.status].color} size="xsmall">{statusConfig[p.status].label}</Badge>
                    <span className="patient-time">{p.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        )}

        {/* Main */}
        <main className="main-content" ref={mainRef}>
          <ReactGridLayout
            className="card-grid-layout"
            cols={4}
            rowHeight={80}
            width={gridWidth}
            margin={[8, 8]}
            draggableHandle=".card-header"
            layout={layout}
            isResizable
            isDraggable
          >
            {/* 환자 기본정보 */}
            {activeModules.includes('patient-info') && (
              <div key="patient-info">
                <Card title="환자 기본정보" icon={<Icon name="user" size={14} />}
                  actions={<button className="text-btn"><Icon name="edit" size={12} /></button>}>
                  <PatientInfo />
                </Card>
              </div>
            )}

            {/* 내원 히스토리 (쓰레드형) */}
            {activeModules.includes('visit-thread') && (
              <div key="visit-thread">
                <Card title="내원 히스토리" icon={<Icon name="calendar" size={14} />}
                  actions={<button className="text-btn"><Icon name="filter" size={12} /></button>}>
                  <div className="thread-list">
                    {/* 오늘 */}
                    <div className="thread-card current">
                      <div className="thread-header">
                        <span className="thread-date">04.05 (오늘)</span>
                        <Badge variant="solid" color="blue" size="xsmall">진료중</Badge>
                      </div>
                      <div className="thread-body">
                        <div className="thread-row"><Icon name="alert-circle" size={11} /><span className="tl">증상</span>두통, 발열 38.2°C, 기침</div>
                        <div className="thread-row"><Icon name="clipboard" size={11} /><span className="tl">진단</span>J06.9 급성 상기도감염</div>
                        <div className="thread-row"><Icon name="pill" size={11} /><span className="tl">처방</span>타이레놀 500mg 외 1건</div>
                        <div className="thread-row"><Icon name="chart" size={11} /><span className="tl">검사</span>CBC</div>
                        <div className="thread-row"><Icon name="heart" size={11} /><span className="tl">바이탈</span>BP 130/85, HR 78</div>
                      </div>
                    </div>
                    {/* 2 */}
                    <div className="thread-card">
                      <div className="thread-header">
                        <span className="thread-date">03.15</span>
                        <Badge variant="solid" color="green" size="xsmall">완료</Badge>
                      </div>
                      <div className="thread-body">
                        <div className="thread-row"><Icon name="clipboard" size={11} /><span className="tl">진단</span>Z00.0 건강검진</div>
                        <div className="thread-row"><Icon name="pill" size={11} /><span className="tl">처방</span>아무로디핀 5mg (갱신)</div>
                        <div className="thread-row"><Icon name="chart" size={11} /><span className="tl">검사</span>CBC, 간기능, 혈당, 지질</div>
                        <div className="thread-row"><Icon name="image" size={11} /><span className="tl">영상</span>Chest X-ray</div>
                      </div>
                    </div>
                    {/* 3 */}
                    <div className="thread-card">
                      <div className="thread-header">
                        <span className="thread-date">01.20</span>
                        <Badge variant="solid" color="green" size="xsmall">완료</Badge>
                      </div>
                      <div className="thread-body">
                        <div className="thread-row"><Icon name="alert-circle" size={11} /><span className="tl">증상</span>고열 39.2°C, 근육통</div>
                        <div className="thread-row"><Icon name="clipboard" size={11} /><span className="tl">진단</span>J11 인플루엔자</div>
                        <div className="thread-row"><Icon name="pill" size={11} /><span className="tl">처방</span>타미플루 75mg</div>
                      </div>
                    </div>
                    {/* 4 */}
                    <div className="thread-card">
                      <div className="thread-header">
                        <span className="thread-date">2025.11.08</span>
                        <Badge variant="solid" color="green" size="xsmall">완료</Badge>
                      </div>
                      <div className="thread-body">
                        <div className="thread-row"><Icon name="clipboard" size={11} /><span className="tl">진단</span>Z00.0 건강검진</div>
                        <div className="thread-row"><Icon name="chart" size={11} /><span className="tl">검사</span>간기능, 혈당</div>
                        <div className="thread-row"><Icon name="edit" size={11} /><span className="tl">메모</span>경미한 고지혈증 소견</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* 진단 및 처방 */}
            {activeModules.includes('diagnosis-order') && (
              <div key="diagnosis-order">
                <Card title="진단 및 처방" icon={<Icon name="pill" size={14} />}
                  footer={<><Button variant="outline" size="small">임시 저장</Button><Button variant="primary" size="small">처방 전송</Button></>}>
                  <div className="dx-section">
                    <div className="section-label">진단</div>
                    <Input leftIcon="search" placeholder="KCD 코드 또는 질환명 검색" inputSize="small" />
                    <div className="dx-list">
                      <div className="dx-item"><span className="dx-badge primary">주</span> J06.9 급성 상기도감염 <button className="dx-remove"><Icon name="close" size={12} /></button></div>
                      <div className="dx-item"><span className="dx-badge sub">부</span> R51 두통 <button className="dx-remove"><Icon name="close" size={12} /></button></div>
                    </div>
                  </div>
                  <div className="rx-section">
                    <div className="section-label">처방</div>
                    <table className="rx-table">
                      <thead><tr><th>약품명</th><th className="c">용량</th><th className="c">횟수</th><th className="c">일수</th><th className="c">경로</th><th></th></tr></thead>
                      <tbody>
                        <tr><td className="fw">타이레놀 500mg</td><td className="c mono">1T</td><td className="c mono">3회</td><td className="c mono">3일</td><td className="c">경구</td><td className="c"><button className="dx-remove"><Icon name="close" size={10} /></button></td></tr>
                        <tr><td className="fw">클로르페니라민 4mg</td><td className="c mono">1T</td><td className="c mono">2회</td><td className="c mono">3일</td><td className="c">경구</td><td className="c"><button className="dx-remove"><Icon name="close" size={10} /></button></td></tr>
                      </tbody>
                    </table>
                    <button className="text-btn"><Icon name="plus" size={12} /> 약품 추가</button>
                  </div>
                </Card>
              </div>
            )}

            {/* 임상메모 */}
            {activeModules.includes('clinical-note') && (
              <div key="clinical-note">
                <Card title="임상메모" icon={<Icon name="edit" size={14} />}
                  footer={<span className="auto-save"><Icon name="check-circle" size={12} /> 자동저장 14:42</span>}>
                  <div className="soap">
                    {[
                      { key: 'S', text: '3일 전부터 두통과 발열 지속. 기침은 어제부터.' },
                      { key: 'O', text: 'BP 130/85, HR 78, BT 37.8. 인후 발적(+).' },
                      { key: 'A', text: '급성 상기도감염 의심' },
                      { key: 'P', text: '대증치료 처방, 3일 후 f/u' },
                    ].map(s => (
                      <div key={s.key} className="soap-row">
                        <span className="soap-label">{s.key}</span>
                        <span className="soap-text">{s.text}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {/* 환자메모 */}
            {activeModules.includes('patient-chat') && (
              <div key="patient-chat">
                <Card title="환자메모" icon={<Icon name="message" size={14} />}>
                  <div className="chat">
                    <div className="chat-msg sent">
                      <div className="chat-sender">오윤경 의사 · 14:35</div>
                      <div className="chat-bubble sent">혈압이 약간 높으니 추적 관찰 필요합니다.</div>
                    </div>
                    <div className="chat-msg received">
                      <div className="chat-sender">김간호사 · 14:37</div>
                      <div className="chat-bubble received">네, 다음 내원 시 혈압 재측정 예약했습니다.</div>
                    </div>
                  </div>
                  <div className="chat-input-row">
                    <input type="text" placeholder="메시지 입력..." className="chat-input" />
                    <button className="chat-send"><Icon name="chevron-right" size={14} /></button>
                  </div>
                </Card>
              </div>
            )}

            {/* 증상 입력 */}
            {activeModules.includes('symptom-input') && (
              <div key="symptom-input">
                <Card title="증상 입력" icon={<Icon name="stethoscope" size={14} />}>
                  <textarea className="symptom-textarea" placeholder="환자 증상을 자유롭게 기록하세요" />
                  <div className="symptom-tags">
                    {['두통', '발열', '기침', '콧물', '인후통', '복통'].map(t => (
                      <button key={t} className="symptom-tag">{t}</button>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {/* 바이탈 테이블 */}
            {activeModules.includes('vital-chart') && (
              <div key="vital-chart">
                <Card title="바이탈" icon={<Icon name="heart" size={14} />}>
                  <VitalTable />
                </Card>
              </div>
            )}

            {/* 검사 결과 */}
            {activeModules.includes('lab-result') && (
              <div key="lab-result">
                <Card title="검사 결과" icon={<Icon name="chart" size={14} />}>
                  <table className="rx-table">
                    <thead><tr><th>항목</th><th className="c">결과</th><th className="c">판정</th></tr></thead>
                    <tbody>
                      <tr><td>WBC</td><td className="c mono" style={{color:'#DC2626',fontWeight:600}}>11.2</td><td className="c"><Badge variant="solid" color="red" size="xsmall">H</Badge></td></tr>
                      <tr><td>RBC</td><td className="c mono">4.85</td><td className="c"><Badge variant="solid" color="green" size="xsmall">N</Badge></td></tr>
                      <tr><td>Platelet</td><td className="c mono" style={{color:'#CA8A04',fontWeight:600}}>135</td><td className="c"><Badge variant="solid" color="yellow" size="xsmall">L</Badge></td></tr>
                    </tbody>
                  </table>
                </Card>
              </div>
            )}

            {/* 이미지 뷰어 */}
            {activeModules.includes('image-viewer') && (
              <div key="image-viewer">
                <Card title="이미지 뷰어" icon={<Icon name="image" size={14} />}>
                  <div className="image-placeholder"><Icon name="image" size={32} /><span>Chest X-ray (2026.03.15)</span></div>
                </Card>
              </div>
            )}

            {/* 약물 타임라인 */}
            {activeModules.includes('medication-timeline') && (
              <div key="medication-timeline">
                <Card title="약물 타임라인" icon={<Icon name="clock" size={14} />}>
                  <div className="med-timeline-mini">
                    <div className="med-bar"><span className="med-name">아스피린 100mg</span><div className="med-track"><div className="med-fill stopped" style={{width:'35%'}} /><div className="med-stop-mark" /></div></div>
                    <div className="med-bar"><span className="med-name">클로피도그렐 75mg</span><div className="med-track"><div className="med-fill active" style={{width:'65%', marginLeft:'35%'}} /></div></div>
                    <div className="med-bar"><span className="med-name">메트포르민</span><div className="med-track"><div className="med-fill step" style={{width:'100%'}} /></div></div>
                  </div>
                </Card>
              </div>
            )}

            {/* 예약/스케줄 */}
            {activeModules.includes('schedule') && (
              <div key="schedule">
                <Card title="예약/스케줄" icon={<Icon name="calendar" size={14} />}>
                  <div className="schedule-mini">
                    <div className="sched-row"><span className="sched-time">09:00</span><span>김민수 · 정기검진</span><Badge variant="solid" color="green" size="xsmall">완료</Badge></div>
                    <div className="sched-row current"><span className="sched-time">10:30</span><span>홍길동 · 재진</span><Badge variant="solid" color="blue" size="xsmall">진료중</Badge></div>
                    <div className="sched-row"><span className="sched-time">11:00</span><span>박영희 · 초진</span><Badge variant="solid" color="yellow" size="xsmall">대기</Badge></div>
                  </div>
                </Card>
              </div>
            )}

            {/* 수납/청구 */}
            {activeModules.includes('billing') && (
              <div key="billing">
                <Card title="수납/청구" icon={<Icon name="file-text" size={14} />}>
                  <table className="rx-table">
                    <thead><tr><th>항목</th><th className="c">금액</th></tr></thead>
                    <tbody>
                      <tr><td>초진 진찰료</td><td className="c mono">16,800</td></tr>
                      <tr><td>약제비</td><td className="c mono">5,550</td></tr>
                      <tr><td className="fw">합계</td><td className="c mono fw">22,350</td></tr>
                    </tbody>
                  </table>
                </Card>
              </div>
            )}

            {/* 환자 목록 테이블 */}
            {activeModules.includes('patient-table') && (
              <div key="patient-table">
                <Card title="환자 목록" icon={<Icon name="users" size={14} />}>
                  <table className="rx-table">
                    <thead><tr><th>환자명</th><th>진료과</th><th className="c">상태</th><th className="c">시간</th></tr></thead>
                    <tbody>
                      {patients.map(p => (
                        <tr key={p.id} className={activePatient === p.id ? 'row-active' : ''} onClick={() => setActivePatient(p.id)} style={{cursor:'pointer'}}>
                          <td className="fw">{p.name}</td>
                          <td>{p.dept}</td>
                          <td className="c"><Badge variant="subtle" color={statusConfig[p.status].color} size="xsmall">{statusConfig[p.status].label}</Badge></td>
                          <td className="c mono">{p.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card>
              </div>
            )}

          </ReactGridLayout>
        </main>

        {/* Quick Panel */}
        {quickPanelVisible && (
          <aside className="quick-panel">
            <div className="qp-section">
              <div className="qp-title"><Icon name="search" size={14} /> 퀵오더</div>
              <input type="text" placeholder="약품/검사 검색..." className="qp-search" />
              <div className="qp-sub">최근 사용</div>
              <div className="qp-item">타이레놀 500mg</div>
              <div className="qp-item">CBC 검사</div>
              <div className="qp-sub">자주 사용</div>
              <div className="qp-item">일반혈액검사 (CBC)</div>
              <div className="qp-item">소변검사</div>
            </div>
            <div className="qp-section">
              <div className="qp-title"><Icon name="bookmark" size={14} /> 묶음처방</div>
              <div className="qp-set">
                <div className="qp-set-name">감기 기본 셋</div>
                <div className="qp-set-desc">타이레놀 + 항히스타민 + 기침약</div>
                <Button variant="secondary" size="small">적용</Button>
              </div>
              <div className="qp-set">
                <div className="qp-set-name">고혈압 f/u</div>
                <div className="qp-set-desc">아무로디핀 + 혈압 모니터링</div>
                <Button variant="secondary" size="small">적용</Button>
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* Status Bar */}
      <footer className="statusbar">
        <span>접속: 오윤경 의사</span>
        <span>대기 환자: {patients.filter(p => p.status === 'waiting').length}명</span>
        <span><Icon name="check-circle" size={10} /> 마지막 저장: 14:42</span>
      </footer>
    </div>
  )
}
