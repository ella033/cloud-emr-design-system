import { useState, type KeyboardEvent } from 'react'

interface QuickPhrase {
  label: string
  content: string
  /** 상용구 적용 시 SOAP 자동 채움 */
  soap?: { s?: string; o?: string; a?: string; p?: string }
}

interface FreeTextProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  /** 하단 퀵메뉴 (상용구) — 확장형 */
  quickPhrases?: QuickPhrase[]
  /** 퀵메뉴 적용 시 콜백 (SOAP 자동 채움 등) */
  onQuickApply?: (phrase: QuickPhrase) => void
  minHeight?: number
  maxHeight?: number
  disabled?: boolean
  readOnly?: boolean
}

export default function FreeText({
  value, onChange, placeholder = '내용을 입력하세요',
  quickPhrases, onQuickApply,
  minHeight = 60, maxHeight = 300,
  disabled, readOnly,
}: FreeTextProps) {

  return (
    <div className={`freetext ${disabled ? 'freetext-disabled' : ''}`}>
      {/* 텍스트 영역 — 라운드 박스 없는 심플 스타일 */}
      <textarea
        className="freetext-input"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ minHeight, maxHeight }}
        disabled={disabled}
        readOnly={readOnly}
      />

      {/* 확장형: 하단 퀵메뉴 (상용구) */}
      {quickPhrases && quickPhrases.length > 0 && (
        <div className="freetext-quick">
          <span className="freetext-quick-label">상용구</span>
          <div className="freetext-quick-list">
            {quickPhrases.map((phrase, i) => (
              <button
                key={i}
                className="freetext-quick-btn"
                onClick={() => {
                  // 기본: 텍스트에 추가
                  onChange(value + (value ? '\n' : '') + phrase.content)
                  // SOAP 자동 채움이 있으면 콜백
                  if (onQuickApply) onQuickApply(phrase)
                }}
                disabled={disabled || readOnly}
              >
                {phrase.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
