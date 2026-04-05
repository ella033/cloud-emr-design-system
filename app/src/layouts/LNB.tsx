import { useState } from 'react'
import Icon from '../components/ui/Icon'

interface LNBProps {
  currentModule: string
  onNavigate: (module: string) => void
}

const menuItems = [
  { id: 'home', label: '홈', icon: 'home' },
  { id: 'reception', label: '접수', icon: 'clipboard' },
  { id: 'chart', label: '진료', icon: 'stethoscope' },
  { id: 'billing', label: '수납', icon: 'file-text' },
  { id: 'appointment', label: '예약', icon: 'calendar' },
  { id: 'statistics', label: '통계', icon: 'chart' },
  { id: 'forms', label: '서식', icon: 'printer' },
  { id: 'master-data', label: '기초자료', icon: 'settings' },
]

const bottomItems = [
  { id: 'settings', label: '환경설정', icon: 'settings' },
]

export default function LNB({ currentModule, onNavigate }: LNBProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <nav className={`lnb ${expanded ? 'lnb-expanded' : 'lnb-collapsed'}`}>
      {/* Logo */}
      <div className="lnb-logo" onClick={() => onNavigate('home')}>
        <span className="lnb-logo-icon">의</span>
        {expanded && <span className="lnb-logo-text">의사랑AI</span>}
      </div>

      {/* Menu */}
      <div className="lnb-menu">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`lnb-item ${currentModule === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
            title={!expanded ? item.label : undefined}
          >
            {currentModule === item.id && <span className="lnb-indicator" />}
            <Icon name={item.icon} size={20} />
            {expanded && <span className="lnb-item-label">{item.label}</span>}
          </button>
        ))}
      </div>

      {/* Bottom */}
      <div className="lnb-bottom">
        <div className="lnb-divider" />
        {bottomItems.map(item => (
          <button
            key={item.id}
            className={`lnb-item ${currentModule === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
            title={!expanded ? item.label : undefined}
          >
            {currentModule === item.id && <span className="lnb-indicator" />}
            <Icon name={item.icon} size={20} />
            {expanded && <span className="lnb-item-label">{item.label}</span>}
          </button>
        ))}
        {/* Toggle */}
        <button className="lnb-toggle" onClick={() => setExpanded(!expanded)}>
          <Icon name={expanded ? 'chevron-left' : 'chevron-right'} size={16} />
          {expanded && <span className="lnb-item-label">접기</span>}
        </button>
      </div>
    </nav>
  )
}
