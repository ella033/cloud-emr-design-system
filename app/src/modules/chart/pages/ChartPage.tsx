import { useState } from 'react'
import Icon from '../../../components/ui/Icon'
import Button from '../../../components/ui/Button'
import Badge from '../../../components/ui/Badge'
import Input from '../../../components/ui/Input'
import Card from '../../../components/ui/Card'
import PatientInfo from '../components/PatientInfo'
import VitalTable from '../components/VitalTable'

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

export default function ChartPage() {
  const [activePatient, setActivePatient] = useState('hong')
  const [activeTab, setActiveTab] = useState('전체')

  const tabs = ['전체', '대기', '진료중', '완료']
  const filteredPatients = activeTab === '전체' ? patients : patients.filter(p => statusConfig[p.status].label === activeTab)

  return (
    <div className="chart-page">
      <div className="chart-body">
        {/* Sidebar (환자 목록) */}
        <aside className="chart-sidebar">
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
                <Badge variant="subtle" color={statusConfig[p.status].color} size="xsmall">{statusConfig[p.status].label}</Badge>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Grid — CSS Grid 기반, 뷰포트 fit */}
        <div className="chart-grid">
          {/* Row 1: 환자정보 | 히스토리 */}
          <div className="chart-row" style={{ flex: '1 1 50%' }}>
            <div className="chart-cell" style={{ flex: '1 1 50%' }}>
              <Card title="환자 기본정보" icon={<Icon name="user" size={14} />}
                actions={<button className="text-btn"><Icon name="edit" size={12} /></button>}>
                <PatientInfo />
              </Card>
            </div>
            <div className="chart-cell" style={{ flex: '1 1 50%' }}>
              <Card title="내원 히스토리" icon={<Icon name="calendar" size={14} />}
                actions={<button className="text-btn"><Icon name="filter" size={12} /></button>}>
                <div className="thread-list">
                  <div className="thread-card current">
                    <div className="thread-header"><span className="thread-date">04.05 (오늘)</span><Badge variant="solid" color="blue" size="xsmall">진료중</Badge></div>
                    <div className="thread-body">
                      <div className="thread-row"><Icon name="alert-circle" size={11} /><span className="tl">증상</span>두통, 발열 38.2°C, 기침</div>
                      <div className="thread-row"><Icon name="clipboard" size={11} /><span className="tl">진단</span>J06.9 급성 상기도감염</div>
                      <div className="thread-row"><Icon name="pill" size={11} /><span className="tl">처방</span>타이레놀 500mg 외 1건</div>
                      <div className="thread-row"><Icon name="heart" size={11} /><span className="tl">바이탈</span>BP 130/85, HR 78</div>
                    </div>
                  </div>
                  <div className="thread-card">
                    <div className="thread-header"><span className="thread-date">03.15</span><Badge variant="solid" color="green" size="xsmall">완료</Badge></div>
                    <div className="thread-body">
                      <div className="thread-row"><Icon name="clipboard" size={11} /><span className="tl">진단</span>Z00.0 건강검진</div>
                      <div className="thread-row"><Icon name="pill" size={11} /><span className="tl">처방</span>아무로디핀 5mg (갱신)</div>
                      <div className="thread-row"><Icon name="chart" size={11} /><span className="tl">검사</span>CBC, 간기능, 혈당, 지질</div>
                    </div>
                  </div>
                  <div className="thread-card">
                    <div className="thread-header"><span className="thread-date">01.20</span><Badge variant="solid" color="green" size="xsmall">완료</Badge></div>
                    <div className="thread-body">
                      <div className="thread-row"><Icon name="alert-circle" size={11} /><span className="tl">증상</span>고열 39.2°C, 근육통</div>
                      <div className="thread-row"><Icon name="clipboard" size={11} /><span className="tl">진단</span>J11 인플루엔자</div>
                      <div className="thread-row"><Icon name="pill" size={11} /><span className="tl">처방</span>타미플루 75mg</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Row 2: 진단 및 처방 (full width) */}
          <div className="chart-row" style={{ flex: '1 1 30%' }}>
            <div className="chart-cell" style={{ flex: 1 }}>
              <Card title="진단 및 처방" icon={<Icon name="pill" size={14} />}
                footer={<><Button variant="outline" size="small">임시 저장</Button><Button variant="primary" size="small">처방 전송</Button></>}>
                <div style={{ display: 'flex', gap: 16 }}>
                  <div style={{ flex: 1 }}>
                    <div className="section-label">진단</div>
                    <Input leftIcon="search" placeholder="KCD 코드 또는 질환명 검색" inputSize="small" />
                    <div className="dx-list">
                      <div className="dx-item"><span className="dx-badge primary">주</span> J06.9 급성 상기도감염 <button className="dx-remove"><Icon name="close" size={12} /></button></div>
                      <div className="dx-item"><span className="dx-badge sub">부</span> R51 두통 <button className="dx-remove"><Icon name="close" size={12} /></button></div>
                    </div>
                  </div>
                  <div style={{ flex: 2 }}>
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
                </div>
              </Card>
            </div>
          </div>

          {/* Row 3: 임상메모 | 환자메모 */}
          <div className="chart-row" style={{ flex: '1 1 20%' }}>
            <div className="chart-cell" style={{ flex: '1 1 50%' }}>
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
            <div className="chart-cell" style={{ flex: '1 1 50%' }}>
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
          </div>
        </div>

        {/* Quick Panel */}
        <aside className="chart-quick">
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
      </div>
    </div>
  )
}
