import Icon from '../components/ui/Icon'

interface TopbarProps {
  moduleTitle: string
  darkMode: boolean
  onToggleTheme: () => void
}

export default function Topbar({ moduleTitle, darkMode, onToggleTheme }: TopbarProps) {
  return (
    <header className="topbar-common">
      <div className="topbar-left">
        <span className="topbar-module-title">{moduleTitle}</span>
      </div>
      <div className="topbar-right">
        <button className="topbar-icon-btn"><Icon name="search" size={18} /></button>
        <button className="topbar-icon-btn topbar-bell">
          <Icon name="bell" size={18} />
          <span className="topbar-badge-count">3</span>
        </button>
        <button className="topbar-icon-btn"><Icon name="settings" size={18} /></button>
        <button className="topbar-icon-btn" onClick={onToggleTheme}>
          <Icon name={darkMode ? 'sun' : 'moon'} size={18} />
        </button>
        <div className="topbar-profile">
          <div className="topbar-avatar">오</div>
        </div>
      </div>
    </header>
  )
}
