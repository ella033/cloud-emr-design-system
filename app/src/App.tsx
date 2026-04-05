import { useState } from 'react'
import './tokens/tokens.css'
import './components/ui/components.css'
import './layouts/layout.css'
import './modules/chart/pages/ChartPage.css'
import './modules/chart/components/modules.css'
import './modules/reception/pages/ReceptionPage.css'
import EmrLayout from './layouts/EmrLayout'
import ChartPage from './modules/chart/pages/ChartPage'
import ReceptionPage from './modules/reception/pages/ReceptionPage'

function App() {
  const [currentModule, setCurrentModule] = useState('reception')

  const renderModule = () => {
    switch (currentModule) {
      case 'reception':
        return <ReceptionPage />
      case 'chart':
        return <ChartPage />
      default:
        return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--color-text-tertiary)', fontSize: 14 }}>
            {currentModule} 모듈 — 준비 중
          </div>
        )
    }
  }

  return (
    <EmrLayout
      currentModule={currentModule}
      moduleTitle={currentModule}
      onNavigate={setCurrentModule}
      statusInfo={currentModule === 'chart' ? '대기 환자: 2명' : currentModule === 'reception' ? '오늘 접수: 5건' : undefined}
    >
      {renderModule()}
    </EmrLayout>
  )
}

export default App
