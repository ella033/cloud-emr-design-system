import { useState, useEffect, useRef, useCallback } from 'react'
import ReactGridLayout from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import Icon from '../../../components/ui/Icon'
import Button from '../../../components/ui/Button'
import Badge from '../../../components/ui/Badge'
import Input from '../../../components/ui/Input'
import Card from '../../../components/ui/Card'
import FreeText from '../../../components/ui/FreeText'
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
const allModules = [
  { id: 'patient-info', name: '환자 기본정보', icon: 'user', w: 4, h: 5 },
  { id: 'visit-thread', name: '내원 히스토리', icon: 'calendar', w: 4, h: 5 },
  { id: 'vital-table', name: '바이탈', icon: 'heart', w: 4, h: 5 },
  { id: 'diagnosis-order', name: '진단 및 처방', icon: 'pill', w: 12, h: 4 },
  { id: 'clinical-note', name: '임상메모', icon: 'edit', w: 6, h: 3 },
  { id: 'patient-chat', name: '환자메모', icon: 'message', w: 6, h: 3 },
  { id: 'symptom-input', name: '증상 입력', icon: 'stethoscope', w: 6, h: 3 },
  { id: 'lab-result', name: '검사 결과', icon: 'chart', w: 6, h: 3 },
  { id: 'image-viewer', name: '이미지 뷰어', icon: 'image', w: 6, h: 4 },
  { id: 'medication-timeline', name: '약물 타임라인', icon: 'clock', w: 12, h: 3 },
]
const defaultActive = ['patient-info', 'visit-thread', 'diagnosis-order', 'clinical-note', 'patient-chat']
const symptomPhrases = [
  { label: '두통', content: '두통 호소', soap: { s: '두통 호소', a: '두통 (R51)' } },
  { label: '발열', content: '발열 38°C 이상', soap: { s: '발열', o: 'BT 38.2°C' } },
  { label: '감기 증상', content: '두통, 발열, 기침, 콧물', soap: { s: '두통, 발열, 기침, 콧물', a: '급성 상기도감염 의심', p: '대증치료' } },
  { label: '고혈압 f/u', content: '고혈압 경과 관찰' },
  { label: '당뇨 f/u', content: '당뇨 경과 관찰' },
]

export default function ChartPage() {
  const [activePatient, setActivePatient] = useState('hong')
  const [activeTab, setActiveTab] = useState('전체')
  const [showModuleSettings, setShowModuleSettings] = useState(false)
  const [activeModules, setActiveModules] = useState(defaultActive)
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [gridWidth, setGridWidth] = useState(0)
  const [symptomText, setSymptomText] = useState('')
  const [soapData, setSoapData] = useState({ s: '', o: '', a: '', p: '' })
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return
    const el = gridRef.current
    const update = () => setGridWidth(el.clientWidth)
    const observer = new ResizeObserver(update)
    observer.observe(el)
    update()
    return () => observer.disconnect()
  }, [])

  const toggleModule = (id: string) => setActiveModules(prev => prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id])
  const tabs = ['전체', '대기', '진료중', '완료']
  const filteredPatients = activeTab === '전체' ? patients : patients.filter(p => statusConfig[p.status].label === activeTab)

  const layout = activeModules.map((id) => {
    const mod = allModules.find(m => m.id === id)!
    return { i: id, x: 0, y: 0, w: mod.w, h: mod.h, minW: 3, minH: 2 }
  })

  const handleQuickApply = useCallback((phrase: any) => {
    if (phrase.soap) setSoapData((prev: any) => ({ s: phrase.soap?.s || prev.s, o: phrase.soap?.o || prev.o, a: phrase.soap?.a || prev.a, p: phrase.soap?.p || prev.p }))
  }, [])

  const renderCard = (id: string) => {
    switch (id) {
      case 'patient-info': return <Card title="환자 기본정보" icon={<Icon name="user" size={14} />}><PatientInfo /></Card>
      case 'visit-thread': return (
        <Card title="내원 히스토리" icon={<Icon name="calendar" size={14} />}>
          <div className="thread-list">
            <div className="thread-card current"><div className="thread-header"><span className="thread-date">04.05 (오늘)</span><Badge variant="solid" color="blue" size="xsmall">진료중</Badge></div><div className="thread-body"><div className="thread-row"><Icon name="alert-circle" size={11} /><span className="tl">증상</span>두통, 발열 38.2°C</div><div className="thread-row"><Icon name="clipboard" size={11} /><span className="tl">진단</span>J06.9 급성 상기도감염</div><div className="thread-row"><Icon name="pill" size={11} /><span className="tl">처방</span>타이레놀 500mg 외 1건</div></div></div>
            <div className="thread-card"><div className="thread-header"><span className="thread-date">03.15</span><Badge variant="solid" color="green" size="xsmall">완료</Badge></div><div className="thread-body"><div className="thread-row"><Icon name="clipboard" size={11} /><span className="tl">진단</span>Z00.0 건강검진</div><div className="thread-row"><Icon name="pill" size={11} /><span className="tl">처방</span>아무로디핀 5mg</div></div></div>
          </div>
        </Card>)
      case 'vital-table': return <Card title="바이탈" icon={<Icon name="heart" size={14} />}><VitalTable /></Card>
      case 'diagnosis-order': return (
        <Card title="진단 및 처방" icon={<Icon name="pill" size={14} />} footer={<><Button variant="outline" size="small">임시 저장</Button><Button variant="primary" size="small">처방 전송</Button></>}>
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ flex: 1 }}><div className="section-label">진단</div><Input leftIcon="search" placeholder="KCD 코드 또는 질환명" inputSize="small" /><div className="dx-list"><div className="dx-item"><span className="dx-badge primary">주</span> J06.9 급성 상기도감염 <button className="dx-remove"><Icon name="close" size={12} /></button></div><div className="dx-item"><span className="dx-badge sub">부</span> R51 두통 <button className="dx-remove"><Icon name="close" size={12} /></button></div></div></div>
            <div style={{ flex: 2 }}><div className="section-label">처방</div><table className="rx-table"><thead><tr><th>약품명</th><th className="c">용량</th><th className="c">횟수</th><th className="c">일수</th><th className="c">경로</th><th></th></tr></thead><tbody><tr><td className="fw">타이레놀 500mg</td><td className="c mono">1T</td><td className="c mono">3회</td><td className="c mono">3일</td><td className="c">경구</td><td className="c"><button className="dx-remove"><Icon name="close" size={10} /></button></td></tr><tr><td className="fw">클로르페니라민 4mg</td><td className="c mono">1T</td><td className="c mono">2회</td><td className="c mono">3일</td><td className="c">경구</td><td className="c"><button className="dx-remove"><Icon name="close" size={10} /></button></td></tr></tbody></table><button className="text-btn"><Icon name="plus" size={12} /> 약품 추가</button></div>
          </div>
        </Card>)
      case 'clinical-note': return (
        <Card title="임상메모" icon={<Icon name="edit" size={14} />} footer={<span className="auto-save"><Icon name="check-circle" size={12} /> 자동저장 14:42</span>}>
          <div className="soap">{(['S','O','A','P'] as const).map(k => (<div key={k} className="soap-row"><span className="soap-label">{k}</span><span className="soap-text">{soapData[k.toLowerCase() as 's'|'o'|'a'|'p'] || ({S:'두통과 발열 지속.',O:'BP 130/85, BT 37.8.',A:'급성 상기도감염 의심',P:'대증치료 처방'}[k])}</span></div>))}</div>
        </Card>)
      case 'patient-chat': return (
        <Card title="환자메모" icon={<Icon name="message" size={14} />}>
          <div className="chat"><div className="chat-msg sent"><div className="chat-sender">오윤경 의사 · 14:35</div><div className="chat-bubble sent">혈압 추적 관찰 필요합니다.</div></div><div className="chat-msg received"><div className="chat-sender">김간호사 · 14:37</div><div className="chat-bubble received">네, 예약했습니다.</div></div></div>
          <div className="chat-input-row"><input type="text" placeholder="메시지 입력..." className="chat-input" /><button className="chat-send"><Icon name="chevron-right" size={14} /></button></div>
        </Card>)
      case 'symptom-input': return (
        <Card title="증상 입력" icon={<Icon name="stethoscope" size={14} />}>
          <FreeText value={symptomText} onChange={setSymptomText} placeholder="증상을 입력하세요" quickPhrases={symptomPhrases} onQuickApply={handleQuickApply} />
        </Card>)
      case 'lab-result': return (
        <Card title="검사 결과" icon={<Icon name="chart" size={14} />}>
          <table className="rx-table"><thead><tr><th>항목</th><th className="c">결과</th><th className="c">판정</th></tr></thead><tbody><tr><td>WBC</td><td className="c mono" style={{color:'#DC2626',fontWeight:600}}>11.2</td><td className="c"><Badge variant="solid" color="red" size="xsmall">H</Badge></td></tr><tr><td>RBC</td><td className="c mono">4.85</td><td className="c"><Badge variant="solid" color="green" size="xsmall">N</Badge></td></tr></tbody></table>
        </Card>)
      case 'image-viewer': return <Card title="이미지 뷰어" icon={<Icon name="image" size={14} />}><div className="image-placeholder"><Icon name="image" size={32} /><span>Chest X-ray</span></div></Card>
      case 'medication-timeline': return (
        <Card title="약물 타임라인" icon={<Icon name="clock" size={14} />}>
          <div className="med-timeline-mini"><div className="med-bar"><span className="med-name">아스피린 100mg</span><div className="med-track"><div className="med-fill stopped" style={{width:'35%'}} /></div></div><div className="med-bar"><span className="med-name">클로피도그렐 75mg</span><div className="med-track"><div className="med-fill active" style={{width:'65%',marginLeft:'35%'}} /></div></div></div>
        </Card>)
      default: return null
    }
  }

  return (
    <div className="chart-page">
      <div className="chart-body">
        <aside className="chart-sidebar">
          <div className="chart-module-btn-wrap">
            <button className="chart-module-btn" onClick={() => setShowModuleSettings(!showModuleSettings)}>
              <Icon name="plus" size={14} /> <span>카드 모듈</span>
            </button>
            {showModuleSettings && (
              <div className="chart-module-dropdown">
                <div className="cmd-header">카드 모듈 설정</div>
                {allModules.map(m => (
                  <label key={m.id} className="cmd-item">
                    <input type="checkbox" checked={activeModules.includes(m.id)} onChange={() => toggleModule(m.id)} />
                    <Icon name={m.icon} size={13} /><span>{m.name}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          <div className="sidebar-search"><Icon name="search" size={14} /><input type="text" placeholder="환자 검색..." className="sidebar-search-input" /></div>
          <div className="sidebar-tabs">{tabs.map(t => (<button key={t} className={`sidebar-tab ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>{t}</button>))}</div>
          <div className="sidebar-list">
            {filteredPatients.map(p => (
              <div key={p.id} className={`patient-row ${activePatient === p.id ? 'active' : ''}`} onClick={() => setActivePatient(p.id)}>
                <span className="patient-dot" style={{ background: `var(--${statusConfig[p.status].color}-500)` }} />
                <div className="patient-info"><span className="patient-name">{p.name}</span><span className="patient-meta">{p.gender}/{p.age} · {p.dept}</span></div>
                <Badge variant="subtle" color={statusConfig[p.status].color} size="xsmall">{statusConfig[p.status].label}</Badge>
              </div>
            ))}
          </div>
        </aside>

        <div className="chart-grid-wrap" ref={gridRef}>
          {gridWidth > 0 && (
            <ReactGridLayout
              className="chart-grid-layout"
              cols={12}
              rowHeight={60}
              width={gridWidth}
              margin={[8, 8]}
              draggableHandle=".card-header"
              layout={layout}
              isResizable
              isDraggable
              compactType="vertical"
            >
              {activeModules.map(id => (
                <div key={id} className={`grid-card-wrap ${selectedCard === id ? 'grid-card-selected' : ''}`} onClick={() => setSelectedCard(id)}>
                  {renderCard(id)}
                </div>
              ))}
            </ReactGridLayout>
          )}
          {activeModules.length === 0 && <div className="chart-empty"><Icon name="plus" size={24} /><p>카드 모듈을 추가하세요</p></div>}
        </div>

        <aside className="chart-quick">
          <div className="qp-section"><div className="qp-title"><Icon name="search" size={14} /> 퀵오더</div><input type="text" placeholder="약품/검사 검색..." className="qp-search" /><div className="qp-sub">최근 사용</div><div className="qp-item">타이레놀 500mg</div><div className="qp-item">CBC 검사</div></div>
          <div className="qp-section"><div className="qp-title"><Icon name="bookmark" size={14} /> 묶음처방</div><div className="qp-set"><div className="qp-set-name">감기 기본 셋</div><div className="qp-set-desc">타이레놀 + 항히스타민</div><Button variant="secondary" size="small">적용</Button></div></div>
        </aside>
      </div>
    </div>
  )
}
