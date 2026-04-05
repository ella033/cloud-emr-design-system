import { useState, useEffect } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'
import Card from '../components/ui/Card'

const ResponsiveGridLayout = WidthProvider(Responsive)

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

const tabs = ['전체', '대기', '진료중', '완료']

export default function ChartPage() {
  const [activePatient, setActivePatient] = useState('hong')
  const [activeTab, setActiveTab] = useState('전체')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const filteredPatients = activeTab === '전체'
    ? patients
    : patients.filter(p => statusConfig[p.status].label === activeTab)

  return (
    <div className="emr-screen">
      {/* Topbar */}
      <header className="topbar">
        <div className="topbar-left">
          <span className="topbar-logo">의사랑AI</span>
        </div>
        <div className="topbar-center"></div>
        <div className="topbar-right">
          <button className="topbar-btn"><Icon name="search" size={16} /></button>
          <button className="topbar-btn"><Icon name="bell" size={16} /></button>
          <button className="topbar-btn"><Icon name="settings" size={16} /></button>
          <button className="topbar-btn theme-toggle" onClick={() => setDarkMode(!darkMode)} title={darkMode ? 'Light 모드' : 'Dark 모드'}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <div className="topbar-avatar">오</div>
        </div>
      </header>

      <div className="emr-body">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-search">
            <Icon name="search" size={14} />
            <input type="text" placeholder="환자 검색..." className="sidebar-search-input" />
          </div>
          <div className="sidebar-tabs">
            {tabs.map(t => (
              <button key={t} className={`sidebar-tab ${activeTab === t ? 'active' : ''}`}
                onClick={() => setActiveTab(t)}>
                {t}
              </button>
            ))}
          </div>
          <div className="sidebar-list">
            {filteredPatients.map(p => (
              <div key={p.id}
                className={`patient-row ${activePatient === p.id ? 'active' : ''}`}
                onClick={() => setActivePatient(p.id)}>
                <span className="patient-dot" style={{ background: `var(--${statusConfig[p.status].color}-500)` }} />
                <div className="patient-info">
                  <span className="patient-name">{p.name}</span>
                  <span className="patient-meta">{p.gender}/{p.age} · {p.dept}</span>
                </div>
                <div className="patient-right">
                  <Badge variant="subtle" color={statusConfig[p.status].color} size="xsmall">
                    {statusConfig[p.status].label}
                  </Badge>
                  <span className="patient-time">{p.time}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main className="main-content">
          <ResponsiveGridLayout
            className="card-grid-layout"
            breakpoints={{ lg: 1200, md: 996, sm: 768 }}
            cols={{ lg: 4, md: 4, sm: 2 }}
            rowHeight={80}
            draggableHandle=".card-header"
            layouts={{
              lg: [
                { i: 'patient-info', x: 0, y: 0, w: 2, h: 3 },
                { i: 'visit-history', x: 2, y: 0, w: 2, h: 4 },
                { i: 'diagnosis-order', x: 0, y: 3, w: 4, h: 4 },
                { i: 'clinical-note', x: 0, y: 7, w: 2, h: 3 },
                { i: 'patient-chat', x: 2, y: 7, w: 2, h: 3 },
              ]
            }}
          >
            {/* 환자 기본정보 */}
            <div key="patient-info">
            <Card title="환자 기본정보" icon={<Icon name="user" size={14} />}>
              <div className="pi-name">홍길동 <span className="pi-sub">(남 / 45세)</span></div>
              <div className="pi-birth">1981.03.15 · 810315-1******</div>
              <div className="pi-tags">
                <Badge variant="info" size="xsmall">건강보험</Badge>
                <Badge variant="info" size="xsmall">A+ 형</Badge>
                <Badge variant="info" size="xsmall">내과</Badge>
                <Badge variant="subtle" color="red" size="xsmall">알러지: 페니실린</Badge>
              </div>
              <div className="pi-contact"><Icon name="link" size={12} /> 010-1234-5678</div>
            </Card>
            </div>

            {/* 내원일 히스토리 (고도화) */}
            <div key="visit-history">
            <Card title="내원일 히스토리" icon={<Icon name="calendar" size={14} />}
              actions={<button className="text-btn"><Icon name="filter" size={12} /> 필터</button>}>
              <div className="vh-list">
                {/* 오늘 */}
                <div className="vh-entry current">
                  <div className="vh-date-col">
                    <span className="vh-date">04.05</span>
                    <span className="vh-day">오늘</span>
                    <Badge variant="solid" color="blue" size="xsmall">진료중</Badge>
                  </div>
                  <div className="vh-content">
                    <div className="vh-row"><Icon name="alert-circle" size={12} /><span className="vh-label">증상</span><span>두통, 발열, 기침</span></div>
                    <div className="vh-row"><Icon name="clipboard" size={12} /><span className="vh-label">진단</span><span>J06.9 급성 상기도감염</span></div>
                    <div className="vh-row"><Icon name="pill" size={12} /><span className="vh-label">처방</span><span>타이레놀 500mg, 클로르페니라민 4mg</span></div>
                    <div className="vh-row"><Icon name="chart" size={12} /><span className="vh-label">검사</span><span>CBC</span></div>
                  </div>
                </div>
                {/* 이전 */}
                <div className="vh-entry">
                  <div className="vh-date-col">
                    <span className="vh-date">03.15</span>
                    <span className="vh-day">토</span>
                    <Badge variant="solid" color="green" size="xsmall">완료</Badge>
                  </div>
                  <div className="vh-content">
                    <div className="vh-row"><Icon name="clipboard" size={12} /><span className="vh-label">진단</span><span>Z00.0 건강검진</span></div>
                    <div className="vh-row"><Icon name="pill" size={12} /><span className="vh-label">처방</span><span>아무로디핀 5mg (갱신)</span></div>
                    <div className="vh-row"><Icon name="chart" size={12} /><span className="vh-label">검사</span><span>CBC, 간기능, 혈당, 지질</span></div>
                    <div className="vh-row"><Icon name="image" size={12} /><span className="vh-label">영상</span><span>Chest X-ray</span></div>
                  </div>
                </div>
                <div className="vh-entry">
                  <div className="vh-date-col">
                    <span className="vh-date">01.20</span>
                    <span className="vh-day">월</span>
                    <Badge variant="solid" color="green" size="xsmall">완료</Badge>
                  </div>
                  <div className="vh-content">
                    <div className="vh-row"><Icon name="alert-circle" size={12} /><span className="vh-label">증상</span><span>고열 39.2°C, 근육통</span></div>
                    <div className="vh-row"><Icon name="clipboard" size={12} /><span className="vh-label">진단</span><span>J11 인플루엔자</span></div>
                    <div className="vh-row"><Icon name="pill" size={12} /><span className="vh-label">처방</span><span>타미플루 75mg</span></div>
                  </div>
                </div>
              </div>
              <button className="text-btn">더보기 (총 23건)</button>
            </Card>
            </div>

            {/* 진단 및 처방 */}
            <div key="diagnosis-order">
            <Card title="진단 및 처방" icon={<Icon name="pill" size={14} />}
              footer={
                <>
                  <Button variant="outline" size="small">임시 저장</Button>
                  <Button variant="primary" size="small">처방 전송</Button>
                </>
              }>
              <div className="dx-section">
                <div className="section-label">진단</div>
                <Input leftIcon="search" placeholder="KCD 코드 또는 질환명 검색" inputSize="small" />
                <div className="dx-list">
                  <div className="dx-item">
                    <span className="dx-badge primary">주</span> J06.9 급성 상기도감염
                    <button className="dx-remove"><Icon name="close" size={12} /></button>
                  </div>
                  <div className="dx-item">
                    <span className="dx-badge sub">부</span> R51 두통
                    <button className="dx-remove"><Icon name="close" size={12} /></button>
                  </div>
                </div>
              </div>
              <div className="rx-section">
                <div className="section-label">처방</div>
                <table className="rx-table">
                  <thead>
                    <tr><th>약품명</th><th className="c">용량</th><th className="c">횟수</th><th className="c">일수</th><th className="c">경로</th><th></th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="fw">타이레놀 500mg</td><td className="c mono">1T</td><td className="c mono">3회</td><td className="c mono">3일</td><td className="c">경구</td><td className="c"><button className="dx-remove"><Icon name="close" size={10} /></button></td></tr>
                    <tr><td className="fw">클로르페니라민 4mg</td><td className="c mono">1T</td><td className="c mono">2회</td><td className="c mono">3일</td><td className="c">경구</td><td className="c"><button className="dx-remove"><Icon name="close" size={10} /></button></td></tr>
                  </tbody>
                </table>
                <button className="text-btn"><Icon name="plus" size={12} /> 약품 추가</button>
              </div>
            </Card>
            </div>

            {/* 임상메모 */}
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

            {/* 환자메모 */}
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
          </ResponsiveGridLayout>
        </main>

        {/* Quick Panel */}
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
            <div className="qp-item">Chest X-ray</div>
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
      </div>

      {/* Status Bar */}
      <footer className="statusbar">
        <span>접속: 오윤경 의사</span>
        <span>대기 환자: 2명</span>
        <span><Icon name="check-circle" size={10} /> 마지막 저장: 14:42</span>
      </footer>
    </div>
  )
}
