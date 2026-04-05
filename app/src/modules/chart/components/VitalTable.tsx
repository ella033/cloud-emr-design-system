import { useState } from 'react'
import Icon from '../../../components/ui/Icon'

interface VitalRow {
  time: string
  bp: string
  hr: string
  bt: string
  spo2: string
  rr: string
  note: string
}

const initialVitals: VitalRow[] = [
  { time: '14:30', bp: '130/85', hr: '78', bt: '37.8', spo2: '97', rr: '18', note: '접수 시' },
  { time: '14:45', bp: '128/82', hr: '76', bt: '37.6', spo2: '98', rr: '17', note: '진료 중' },
]

export default function VitalTable() {
  const [vitals, setVitals] = useState(initialVitals)
  const [editing, setEditing] = useState(false)
  const [newRow, setNewRow] = useState<VitalRow>({ time: '', bp: '', hr: '', bt: '', spo2: '', rr: '', note: '' })

  const addRow = () => {
    if (!newRow.bp) return
    const now = new Date()
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
    setVitals([...vitals, { ...newRow, time }])
    setNewRow({ time: '', bp: '', hr: '', bt: '', spo2: '', rr: '', note: '' })
    setEditing(false)
  }

  const isAbnormal = (field: string, value: string) => {
    const v = parseFloat(value)
    if (field === 'bt' && v >= 37.5) return 'high'
    if (field === 'hr' && (v > 100 || v < 60)) return 'high'
    if (field === 'spo2' && v < 95) return 'low'
    return ''
  }

  return (
    <div className="vt-card">
      <table className="vt-table">
        <thead>
          <tr>
            <th>시간</th>
            <th className="c">BP</th>
            <th className="c">HR</th>
            <th className="c">BT</th>
            <th className="c">SpO2</th>
            <th className="c">RR</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          {vitals.map((v, i) => (
            <tr key={i}>
              <td className="mono">{v.time}</td>
              <td className="c mono">{v.bp}</td>
              <td className={`c mono ${isAbnormal('hr', v.hr)}`}>{v.hr}</td>
              <td className={`c mono ${isAbnormal('bt', v.bt)}`}>{v.bt}</td>
              <td className={`c mono ${isAbnormal('spo2', v.spo2)}`}>{v.spo2}</td>
              <td className="c mono">{v.rr}</td>
              <td className="vt-note">{v.note}</td>
            </tr>
          ))}
          {editing && (
            <tr className="vt-new-row">
              <td className="mono">지금</td>
              <td className="c"><input className="vt-input" placeholder="120/80" value={newRow.bp} onChange={e => setNewRow({...newRow, bp: e.target.value})} /></td>
              <td className="c"><input className="vt-input" placeholder="72" value={newRow.hr} onChange={e => setNewRow({...newRow, hr: e.target.value})} /></td>
              <td className="c"><input className="vt-input" placeholder="36.5" value={newRow.bt} onChange={e => setNewRow({...newRow, bt: e.target.value})} /></td>
              <td className="c"><input className="vt-input" placeholder="98" value={newRow.spo2} onChange={e => setNewRow({...newRow, spo2: e.target.value})} /></td>
              <td className="c"><input className="vt-input" placeholder="18" value={newRow.rr} onChange={e => setNewRow({...newRow, rr: e.target.value})} /></td>
              <td><input className="vt-input wide" placeholder="비고" value={newRow.note} onChange={e => setNewRow({...newRow, note: e.target.value})} /></td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="vt-actions">
        {editing ? (
          <>
            <button className="vt-btn primary" onClick={addRow}><Icon name="check" size={12} /> 저장</button>
            <button className="vt-btn" onClick={() => setEditing(false)}>취소</button>
          </>
        ) : (
          <button className="vt-btn" onClick={() => setEditing(true)}><Icon name="plus" size={12} /> 바이탈 추가</button>
        )}
      </div>
    </div>
  )
}
