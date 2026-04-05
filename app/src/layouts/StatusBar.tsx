import Icon from '../components/ui/Icon'

interface StatusBarProps {
  moduleInfo?: string
}

export default function StatusBar({ moduleInfo }: StatusBarProps) {
  return (
    <footer className="statusbar-common">
      <span>접속: 오윤경 의사</span>
      {moduleInfo && <span>{moduleInfo}</span>}
      <span><Icon name="check-circle" size={10} /> 자동저장: {new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}</span>
    </footer>
  )
}
