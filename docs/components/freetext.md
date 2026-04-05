# FreeText

자유 텍스트 입력 컴포넌트입니다. 기본형은 테두리 없는 순수 텍스트 입력이며, 확장형은 하단에 상용구(퀵메뉴)가 추가됩니다.

<span class="status-badge stable">Stable</span>

## 케이스

### 기본형 (텍스트만)

<div class="component-preview">
  <div style="padding:12px;">
    <textarea style="width:100%; min-height:80px; border:none; outline:none; font-size:13px; line-height:1.6; resize:none; background:transparent; color:var(--vp-c-text-1); font-family:var(--vp-font-family-base);" placeholder="내용을 입력하세요" readonly></textarea>
  </div>
</div>

### 확장형 (상용구 퀵메뉴 포함)

<div class="component-preview">
  <div style="padding:12px;">
    <textarea style="width:100%; min-height:60px; border:none; outline:none; font-size:13px; line-height:1.6; resize:none; background:transparent; color:var(--vp-c-text-1); font-family:var(--vp-font-family-base);" readonly>3일 전부터 두통과 발열 지속. 기침은 어제부터 시작.</textarea>
    <div style="display:flex; align-items:flex-start; gap:8px; padding-top:8px; margin-top:8px; border-top:1px solid var(--vp-c-divider);">
      <span style="font-size:10px; font-weight:600; color:var(--vp-c-text-3); white-space:nowrap; padding-top:3px;">상용구</span>
      <div style="display:flex; gap:4px; flex-wrap:wrap;">
        <span style="padding:3px 10px; border-radius:9999px; font-size:11px; border:1px solid var(--vp-c-divider); color:var(--vp-c-text-2); cursor:pointer;">두통</span>
        <span style="padding:3px 10px; border-radius:9999px; font-size:11px; border:1px solid var(--vp-c-divider); color:var(--vp-c-text-2); cursor:pointer;">발열</span>
        <span style="padding:3px 10px; border-radius:9999px; font-size:11px; border:1px solid var(--vp-c-divider); color:var(--vp-c-text-2); cursor:pointer;">감기 증상</span>
        <span style="padding:3px 10px; border-radius:9999px; font-size:11px; border:1px solid var(--vp-c-divider); color:var(--vp-c-text-2); cursor:pointer;">고혈압 f/u</span>
        <span style="padding:3px 10px; border-radius:9999px; font-size:11px; border:1px solid var(--vp-c-divider); color:var(--vp-c-text-2); cursor:pointer;">당뇨 f/u</span>
      </div>
    </div>
  </div>
</div>

---

## 토큰 매핑

| 토큰 | Light | Dark |
|------|-------|------|
| `--freetext-text` | `var(--gray-900)` | `var(--gray-50)` |
| `--freetext-placeholder` | `var(--gray-400)` | `var(--gray-500)` |
| `--freetext-font-size` | `13px` | `13px` |
| `--freetext-line-height` | `1.6` | `1.6` |
| `--freetext-quick-border` | `var(--gray-200)` | `var(--gray-700)` |
| `--freetext-quick-hover-border` | `#3B82F6` | `#60A5FA` |
| `--freetext-quick-hover-bg` | `rgba(59,130,246,0.04)` | `rgba(96,165,250,0.06)` |

---

## Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `value` | `string` | `''` | 입력값 |
| `onChange` | `(value: string) => void` | - | 변경 핸들러 |
| `placeholder` | `string` | `'내용을 입력하세요'` | 플레이스홀더 |
| `quickPhrases` | `QuickPhrase[]` | `undefined` | 하단 상용구 목록 (확장형) |
| `onQuickApply` | `(phrase: QuickPhrase) => void` | - | 상용구 적용 콜백 |
| `minHeight` | `number` | `60` | 최소 높이 (px) |
| `maxHeight` | `number` | `300` | 최대 높이 (px) |
| `disabled` | `boolean` | `false` | 비활성 |
| `readOnly` | `boolean` | `false` | 읽기 전용 |

### QuickPhrase

| 필드 | Type | 설명 |
|------|------|------|
| `label` | `string` | 버튼에 표시되는 텍스트 |
| `content` | `string` | 클릭 시 입력되는 텍스트 |
| `soap` | `{ s?, o?, a?, p? }` | SOAP 자동 채움 (선택) |

---

## 사용법

### 기본형

```tsx
<FreeText value={text} onChange={setText} placeholder="메모를 입력하세요" />
```

### 확장형 (상용구)

```tsx
<FreeText
  value={symptom}
  onChange={setSymptom}
  placeholder="증상을 입력하세요"
  quickPhrases={[
    { label: '두통', content: '두통 호소', soap: { s: '두통 호소', a: '두통 (R51)' } },
    { label: '발열', content: '발열 38°C 이상', soap: { s: '발열', o: 'BT 38.2°C' } },
    { label: '감기 증상', content: '두통, 발열, 기침, 콧물',
      soap: { s: '두통, 발열, 기침, 콧물', o: '인후 발적(+)', a: '급성 상기도감염 의심', p: '대증치료' } },
  ]}
  onQuickApply={(phrase) => {
    if (phrase.soap) setSoapData(phrase.soap)
  }}
/>
```

---

## EMR 활용 예시

### 증상 입력 카드
상용구 클릭 시 FreeText에 증상 텍스트가 입력되고, 동시에 SOAP 임상메모가 자동 작성됩니다.

### 임상메모 카드
SOAP 각 섹션에 FreeText를 사용. 상용구 없는 기본형.

### 환자 메모
기본형 FreeText로 자유 메모 입력.

---

## 디자인 원칙

### Do
- 기본형은 테두리 없이 깔끔하게 (카드 안에서 사용)
- 상용구는 자주 쓰는 것만 5~8개 이내로
- 상용구 클릭 시 기존 텍스트에 추가 (덮어쓰기 X)

### Don't
- 기본형에 테두리/보더 추가하지 않기 (카드 내부에서 사용하므로)
- 상용구를 10개 이상 나열하지 않기 (환경설정에서 관리)
- placeholder를 긴 문장으로 쓰지 않기
