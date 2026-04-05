import { useState, useEffect, type ReactNode } from 'react'
import LNB from './LNB'
import Topbar from './Topbar'
import StatusBar from './StatusBar'

interface EmrLayoutProps {
  children: ReactNode
  currentModule: string
  moduleTitle: string
  statusInfo?: string
  onNavigate: (module: string) => void
}

const moduleTitles: Record<string, string> = {
  home: '홈',
  reception: '접수',
  chart: '진료',
  billing: '수납',
  appointment: '예약',
  statistics: '통계',
  forms: '서식',
  'master-data': '기초자료',
  settings: '환경설정',
}

export default function EmrLayout({ children, currentModule, moduleTitle, statusInfo, onNavigate }: EmrLayoutProps) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className="emr-layout">
      <LNB currentModule={currentModule} onNavigate={onNavigate} />
      <div className="emr-layout-main">
        <Topbar
          moduleTitle={moduleTitles[currentModule] || moduleTitle}
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode(!darkMode)}
        />
        <div className="emr-layout-content">
          {children}
        </div>
        <StatusBar moduleInfo={statusInfo} />
      </div>
    </div>
  )
}
