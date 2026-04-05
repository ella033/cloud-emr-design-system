import { useState } from 'react'
import Icon from '../../../components/ui/Icon'
import Button from '../../../components/ui/Button'
import Badge from '../../../components/ui/Badge'
import Input from '../../../components/ui/Input'
import Card from '../../../components/ui/Card'

const mockPatients = [
  { id: 'hong', name: '홍길동', chartNo: '#2026-00847', birth: '1981.03.15', gender: '남', age: 45, phone: '010-1234-5678', insurance: '건강보험', lastVisit: '2026.03.15', allergies: ['페니실린'] },
  { id: 'kim', name: '김영희', chartNo: '#2026-00512', birth: '1975.08.22', gender: '여', age: 51, phone: '010-9876-5432', insurance: '건강보험', lastVisit: '2026.02.20', allergies: [] },
]

const waitingList = [
  { name: '이철수', dept: '외과', doctor: '김외과', status: 'waiting' as const, time: '14:15', waitMin: 25 },
  { name: '박지수', dept: '내과', doctor: '오윤경', status: 'progress' as const, time: '13:50', waitMin: 0 },
  { name: '최미영', dept: '정형외과', doctor: '박정형', status: 'done' as const, time: '13:30', waitMin: 0 },
]

const statusConfig = {
  waiting: { label: '대기', color: 'yellow' as const },
  progress: { label: '진료중', color: 'blue' as const },
  done: { label: '완료', color: 'green' as const },
}

export default function ReceptionPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPatient, setSelectedPatient] = useState<typeof mockPatients[0] | null>(null)
  const [dept, setDept] = useState('내과')
  const [doctor, setDoctor] = useState('오윤경')
  const [activeTab, setActiveTab] = useState('전체')

  const searchResults = searchQuery.length >= 2
    ? mockPatients.filter(p => p.name.includes(searchQuery) || p.chartNo.includes(searchQuery))
    : []

  return (
    <div className="reception-page">
      {/* 좌측: 검색 + 접수 폼 */}
      <div className="reception-left">
        {/* 환자 검색 */}
        <Card title="환자 검색" icon={<Icon name="search" size={14} />}>
          <Input
            leftIcon="search"
            placeholder="환자명, 차트번호, 주민번호, 전화번호"
            inputSize="large"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery.length >= 2 && (
            <div className="search-results">
              {searchResults.length > 0 ? (
                <table className="rx-table" style={{ marginTop: 8 }}>
                  <thead>
                    <tr><th>환자명</th><th>차트번호</th><th>생년월일</th><th>최근 내원</th></tr>
                  </thead>
                  <tbody>
                    {searchResults.map(p => (
                      <tr key={p.id} className={selectedPatient?.id === p.id ? 'row-active' : ''} style={{ cursor: 'pointer' }} onClick={() => setSelectedPatient(p)}>
                        <td className="fw">{p.name}</td>
                        <td className="mono">{p.chartNo}</td>
                        <td>{p.birth}</td>
                        <td>{p.lastVisit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="search-empty">
                  <p>검색 결과가 없습니다</p>
                  <Button variant="primary" size="small" leftIcon="plus">신환 등록</Button>
                </div>
              )}
            </div>
          )}
        </Card>

        {/* 선택된 환자 정보 + 접수 폼 */}
        {selectedPatient && (
          <Card title="접수 정보" icon={<Icon name="clipboard" size={14} />}
            footer={<Button variant="primary" size="large" fullWidth>접수</Button>}>
            {/* 환자 요약 */}
            <div className="rcp-patient-summary">
              <div className="rcp-patient-name">{selectedPatient.name} <span className="rcp-sub">{selectedPatient.chartNo}</span></div>
              <div className="rcp-patient-meta">{selectedPatient.gender} / {selectedPatient.age}세 · {selectedPatient.birth}</div>
              <div className="rcp-patient-tags">
                <Badge variant="info" size="xsmall">{selectedPatient.insurance}</Badge>
                {selectedPatient.allergies.map(a => (
                  <Badge key={a} variant="subtle" color="red" size="xsmall">알러지: {a}</Badge>
                ))}
              </div>
            </div>

            {/* 접수 입력 */}
            <div className="rcp-form">
              <div className="rcp-form-row">
                <div className="rcp-form-field">
                  <label className="rcp-label">진료과</label>
                  <select className="rcp-select" value={dept} onChange={e => setDept(e.target.value)}>
                    <option>내과</option>
                    <option>외과</option>
                    <option>소아청소년과</option>
                    <option>정형외과</option>
                  </select>
                </div>
                <div className="rcp-form-field">
                  <label className="rcp-label">담당의</label>
                  <select className="rcp-select" value={doctor} onChange={e => setDoctor(e.target.value)}>
                    <option>오윤경</option>
                    <option>김내과</option>
                    <option>박외과</option>
                  </select>
                </div>
              </div>
              <div className="rcp-form-row">
                <div className="rcp-visit-type">
                  <button className="rcp-type-btn active">재진</button>
                  <button className="rcp-type-btn">초진</button>
                </div>
              </div>
              <Input label="접수 메모" placeholder="증상이나 요청사항 (선택)" inputSize="small" />
            </div>

            {/* 바이탈 사전 입력 */}
            <details className="rcp-vital-details">
              <summary className="rcp-vital-summary"><Icon name="heart" size={12} /> 바이탈 사전 입력 (선택)</summary>
              <div className="rcp-vital-grid">
                <Input label="BP" placeholder="130/85" inputSize="small" />
                <Input label="HR" placeholder="78" inputSize="small" />
                <Input label="BT" placeholder="36.5" inputSize="small" />
                <Input label="SpO2" placeholder="98" inputSize="small" />
              </div>
            </details>
          </Card>
        )}
      </div>

      {/* 우측: 대기 목록 */}
      <div className="reception-right">
        <Card title="대기 목록" icon={<Icon name="users" size={14} />}>
          {/* 탭 필터 */}
          <div className="rcp-tabs">
            {['전체', '대기', '진료중', '완료'].map(t => (
              <button key={t} className={`rcp-tab ${activeTab === t ? 'active' : ''}`}
                onClick={() => setActiveTab(t)}>{t}</button>
            ))}
          </div>

          {/* 대기 테이블 */}
          <table className="rx-table">
            <thead>
              <tr><th>환자명</th><th>진료과</th><th>담당의</th><th className="c">상태</th><th className="c">접수</th><th className="c">대기</th></tr>
            </thead>
            <tbody>
              {waitingList.filter(w => activeTab === '전체' || statusConfig[w.status].label === activeTab).map((w, i) => (
                <tr key={i}>
                  <td className="fw">{w.name}</td>
                  <td>{w.dept}</td>
                  <td>{w.doctor}</td>
                  <td className="c"><Badge variant="solid" color={statusConfig[w.status].color} size="xsmall">{statusConfig[w.status].label}</Badge></td>
                  <td className="c mono">{w.time}</td>
                  <td className="c mono">{w.waitMin > 0 ? `${w.waitMin}분` : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
