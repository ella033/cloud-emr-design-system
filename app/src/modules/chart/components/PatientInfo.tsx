import { useState } from 'react'
import Icon from '../ui/Icon'
import Badge from '../ui/Badge'

interface PatientInfoProps {
  collapsed?: boolean
}

export default function PatientInfo({ collapsed = false }: PatientInfoProps) {
  const [expanded, setExpanded] = useState(!collapsed)

  return (
    <div className="pi-card">
      {/* 알러지 경고 바 */}
      <div className="pi-alert-bar">
        <Icon name="alert-triangle" size={12} /> 알러지: 페니실린, 아스피린
      </div>

      {/* 섹션 1: 핵심 인적정보 */}
      <div className="pi-section pi-core">
        <div className="pi-row-top">
          <Badge variant="solid" color="red" size="xsmall">신환</Badge>
          <span className="pi-name">홍길동</span>
          <span className="pi-chart-no">#2026-00847</span>
        </div>
        <div className="pi-row-sub">
          <span>남 / 45세</span>
          <span className="pi-divider">·</span>
          <span className="pi-rrn">810315-1******</span>
        </div>
        <div className="pi-row-sub">
          <Icon name="link" size={11} />
          <span>010-1234-5678</span>
        </div>
      </div>

      {/* 섹션 2: 배지 영역 */}
      <div className="pi-section pi-badges">
        <Badge variant="info" size="xsmall">건강보험</Badge>
        <Badge variant="info" size="xsmall">A+ 형</Badge>
        <Badge variant="info" size="xsmall">168cm / 72kg</Badge>
        <Badge variant="subtle" color="red" size="xsmall">만성: 고혈압</Badge>
        <Badge variant="subtle" color="red" size="xsmall">만성: 당뇨</Badge>
        <span className="pi-tag-hash">#내과VIP</span>
        <span className="pi-tag-hash">#정기검진</span>
      </div>

      {expanded && (
        <>
          {/* 섹션 3: 자격/특이사항 배지 */}
          <div className="pi-section pi-qualifications">
            <div className="pi-section-label">자격 및 특이사항</div>
            <div className="pi-badges">
              <Badge variant="info" size="xsmall">국가유공자</Badge>
              <Badge variant="subtle" color="yellow" size="xsmall">임산부 아님</Badge>
            </div>
          </div>

          {/* 섹션 4: 알러지/특이사항 상세 */}
          <div className="pi-section pi-allergy">
            <div className="pi-section-label">알러지 / 투약금기</div>
            <div className="pi-allergy-list">
              <div className="pi-allergy-row">
                <Icon name="alert-circle" size={11} />
                <Badge variant="subtle" color="red" size="xsmall">페니실린</Badge>
                <span className="pi-allergy-detail">아나필락시스, 호흡곤란 (2024.08)</span>
              </div>
              <div className="pi-allergy-row">
                <Icon name="alert-circle" size={11} />
                <Badge variant="subtle" color="red" size="xsmall">아스피린</Badge>
                <span className="pi-allergy-detail">위장관 출혈 (2023.03)</span>
              </div>
            </div>
          </div>

          {/* 섹션 5: 가족 정보 */}
          <div className="pi-section">
            <div className="pi-section-label">가족 / 보호자</div>
            <div className="pi-family-list">
              <div className="pi-family-row">
                <span className="pi-family-rel">배우자</span>
                <span>김영희</span>
                <span className="pi-family-tel">010-9876-5432</span>
              </div>
              <div className="pi-family-row">
                <span className="pi-family-rel">비상</span>
                <span>홍철수 (아들)</span>
                <span className="pi-family-tel">010-5555-1234</span>
              </div>
            </div>
            <div className="pi-section-label" style={{ marginTop: 8 }}>가족력</div>
            <div className="pi-badges">
              <Badge variant="info" size="xsmall">고혈압 (부)</Badge>
              <Badge variant="info" size="xsmall">당뇨 (모)</Badge>
              <Badge variant="info" size="xsmall">대장암 (형)</Badge>
            </div>
          </div>

          {/* 섹션 6: 예방접종 */}
          <div className="pi-section">
            <div className="pi-section-label">예방접종</div>
            <div className="pi-vacc-list">
              <div className="pi-vacc-row">
                <Icon name="check-circle" size={11} />
                <span>독감</span>
                <span className="pi-vacc-date">2025.10.15</span>
              </div>
              <div className="pi-vacc-row">
                <Icon name="check-circle" size={11} />
                <span>코로나 5차</span>
                <span className="pi-vacc-date">2025.03.20</span>
              </div>
              <div className="pi-vacc-row pending">
                <Icon name="clock" size={11} />
                <span>대상포진</span>
                <span className="pi-vacc-date">미접종 (권고)</span>
              </div>
            </div>
          </div>

          {/* 섹션 7: 생활습관 / 기타 */}
          <div className="pi-section">
            <div className="pi-section-label">생활습관</div>
            <div className="pi-badges">
              <Badge variant="info" size="xsmall">비흡연</Badge>
              <Badge variant="info" size="xsmall">주 1-2회 음주</Badge>
            </div>
          </div>

          {/* 섹션 8: 동의서 / 담당의 */}
          <div className="pi-section pi-meta">
            <div className="pi-meta-row">
              <Icon name="check-circle" size={11} /> <span>개인정보 동의</span>
              <Icon name="check-circle" size={11} /> <span>진료 동의</span>
            </div>
            <div className="pi-meta-row">
              <span className="pi-meta-label">담당의</span> 오윤경
              <span className="pi-divider">·</span>
              <span className="pi-meta-label">최근 내원</span> 2026.03.15
            </div>
          </div>
        </>
      )}

      {/* 접기/펼치기 */}
      <button className="pi-toggle" onClick={() => setExpanded(!expanded)}>
        <Icon name={expanded ? 'chevron-down' : 'chevron-right'} size={12} />
        {expanded ? '접기' : '더보기'}
      </button>
    </div>
  )
}
