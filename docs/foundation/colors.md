<script setup>
const blue = [
  { token: 'blue-50', hex: '#EFF6FF', name: '가장 밝은 배경' },
  { token: 'blue-100', hex: '#DBEAFE', name: '연한 배경, 호버' },
  { token: 'blue-200', hex: '#BFDBFE', name: '보조 배경' },
  { token: 'blue-300', hex: '#93C5FD', name: '비활성 요소' },
  { token: 'blue-400', hex: '#60A5FA', name: '보조 액션' },
  { token: 'blue-500', hex: '#3B82F6', name: 'Primary 기본' },
  { token: 'blue-600', hex: '#2563EB', name: 'Primary 호버' },
  { token: 'blue-700', hex: '#1D4ED8', name: 'Primary 액티브' },
  { token: 'blue-800', hex: '#1E40AF', name: '강조 텍스트' },
  { token: 'blue-900', hex: '#1E3A8A', name: '진한 배경' },
  { token: 'blue-950', hex: '#172554', name: '가장 진한 배경' },
]

const gray = [
  { token: 'gray-0', hex: '#FFFFFF', name: '순백' },
  { token: 'gray-50', hex: '#F8FAFC', name: '페이지 배경' },
  { token: 'gray-100', hex: '#F1F5F9', name: '카드 배경 (Dark 입력필드)' },
  { token: 'gray-200', hex: '#E2E8F0', name: '보더, 구분선' },
  { token: 'gray-300', hex: '#CBD5E1', name: '비활성 보더' },
  { token: 'gray-400', hex: '#94A3B8', name: '플레이스홀더' },
  { token: 'gray-500', hex: '#64748B', name: '보조 텍스트' },
  { token: 'gray-600', hex: '#475569', name: '본문 텍스트' },
  { token: 'gray-700', hex: '#334155', name: '제목 텍스트' },
  { token: 'gray-800', hex: '#1E293B', name: '강조 텍스트' },
  { token: 'gray-900', hex: '#0F172A', name: '최고 강조' },
  { token: 'gray-950', hex: '#020617', name: '순흑에 가까운 배경' },
]

const green = [
  { token: 'green-50', hex: '#F0FDF4', name: '성공 배경' },
  { token: 'green-100', hex: '#DCFCE7', name: '연한 성공' },
  { token: 'green-200', hex: '#BBF7D0', name: '보조 성공' },
  { token: 'green-500', hex: '#22C55E', name: '성공 기본' },
  { token: 'green-600', hex: '#16A34A', name: '성공 강조' },
  { token: 'green-700', hex: '#15803D', name: '성공 액티브' },
]

const red = [
  { token: 'red-50', hex: '#FEF2F2', name: '에러 배경' },
  { token: 'red-100', hex: '#FEE2E2', name: '연한 에러' },
  { token: 'red-200', hex: '#FECACA', name: '보조 에러' },
  { token: 'red-500', hex: '#EF4444', name: '에러 기본' },
  { token: 'red-600', hex: '#DC2626', name: '에러 강조' },
  { token: 'red-700', hex: '#B91C1C', name: '에러 액티브' },
]

const yellow = [
  { token: 'yellow-50', hex: '#FEFCE8', name: '경고 배경' },
  { token: 'yellow-100', hex: '#FEF9C3', name: '연한 경고' },
  { token: 'yellow-200', hex: '#FEF08A', name: '보조 경고' },
  { token: 'yellow-500', hex: '#EAB308', name: '경고 기본' },
  { token: 'yellow-600', hex: '#CA8A04', name: '경고 강조' },
  { token: 'yellow-700', hex: '#A16207', name: '경고 액티브' },
]

const teal = [
  { token: 'teal-50', hex: '#F0FDFA', name: '정보 배경' },
  { token: 'teal-100', hex: '#CCFBF1', name: '연한 정보' },
  { token: 'teal-200', hex: '#99F6E4', name: '보조 정보' },
  { token: 'teal-500', hex: '#14B8A6', name: '정보 기본' },
  { token: 'teal-600', hex: '#0D9488', name: '정보 강조' },
  { token: 'teal-700', hex: '#0F766E', name: '정보 액티브' },
]

const bgTokens = [
  { token: '--dr-ai-color-bg-page', lightHex: '#F8FAFC', darkHex: '#020617', usage: '페이지 전체 배경' },
  { token: '--dr-ai-color-bg-card', lightHex: '#FFFFFF', darkHex: '#0F172A', usage: '카드/모듈 배경' },
  { token: '--dr-ai-color-bg-card-hover', lightHex: '#F8FAFC', darkHex: '#1E293B', usage: '카드 호버' },
  { token: '--dr-ai-color-bg-elevated', lightHex: '#FFFFFF', darkHex: '#1E293B', usage: '모달, 드롭다운' },
  { token: '--dr-ai-color-bg-input', lightHex: '#FFFFFF', darkHex: '#1E293B', usage: '입력 필드 배경' },
  { token: '--dr-ai-color-bg-sidebar', lightHex: '#FFFFFF', darkHex: '#0F172A', usage: '사이드바 배경' },
]

const textTokens = [
  { token: '--dr-ai-color-text-primary', lightHex: '#0F172A', darkHex: '#F8FAFC', usage: '주요 텍스트' },
  { token: '--dr-ai-color-text-secondary', lightHex: '#64748B', darkHex: '#94A3B8', usage: '보조 텍스트' },
  { token: '--dr-ai-color-text-tertiary', lightHex: '#94A3B8', darkHex: '#64748B', usage: '3차 텍스트, 힌트' },
  { token: '--dr-ai-color-text-disabled', lightHex: '#CBD5E1', darkHex: '#475569', usage: '비활성 텍스트' },
  { token: '--dr-ai-color-text-link', lightHex: '#2563EB', darkHex: '#60A5FA', usage: '링크 텍스트' },
  { token: '--dr-ai-color-text-error', lightHex: '#DC2626', darkHex: '#F87171', usage: '에러 텍스트' },
]

const borderTokens = [
  { token: '--dr-ai-color-border-default', lightHex: '#E2E8F0', darkHex: '#334155', usage: '기본 보더' },
  { token: '--dr-ai-color-border-strong', lightHex: '#CBD5E1', darkHex: '#475569', usage: '강조 보더' },
  { token: '--dr-ai-color-border-focus', lightHex: '#3B82F6', darkHex: '#60A5FA', usage: '포커스 링' },
  { token: '--dr-ai-color-border-error', lightHex: '#EF4444', darkHex: '#F87171', usage: '에러 보더' },
]

const interactiveTokens = [
  { token: '--dr-ai-color-primary', lightHex: '#3B82F6', darkHex: '#3B82F6', usage: 'Primary 버튼/액션' },
  { token: '--dr-ai-color-primary-hover', lightHex: '#2563EB', darkHex: '#60A5FA', usage: 'Primary 호버' },
  { token: '--dr-ai-color-primary-active', lightHex: '#1D4ED8', darkHex: '#93C5FD', usage: 'Primary 액티브' },
  { token: '--dr-ai-color-primary-subtle', lightHex: '#EFF6FF', darkHex: '#172554', usage: 'Primary 연한 배경' },
]

const statusTokens = [
  { token: '--dr-ai-color-success', lightHex: '#22C55E', darkHex: '#22C55E', usage: '정상, 완료' },
  { token: '--dr-ai-color-success-subtle', lightHex: '#F0FDF4', darkHex: '#052E16', usage: '정상 배경' },
  { token: '--dr-ai-color-warning', lightHex: '#EAB308', darkHex: '#EAB308', usage: '주의' },
  { token: '--dr-ai-color-warning-subtle', lightHex: '#FEFCE8', darkHex: '#422006', usage: '주의 배경' },
  { token: '--dr-ai-color-error', lightHex: '#EF4444', darkHex: '#EF4444', usage: '위험, 에러' },
  { token: '--dr-ai-color-error-subtle', lightHex: '#FEF2F2', darkHex: '#450A0A', usage: '에러 배경' },
  { token: '--dr-ai-color-info', lightHex: '#14B8A6', darkHex: '#14B8A6', usage: '정보' },
  { token: '--dr-ai-color-info-subtle', lightHex: '#F0FDFA', darkHex: '#042F2E', usage: '정보 배경' },
]

const emrStatusTokens = [
  { token: '--dr-ai-color-status-waiting', lightHex: '#EAB308', darkHex: '#FACC15', usage: '대기중' },
  { token: '--dr-ai-color-status-in-progress', lightHex: '#3B82F6', darkHex: '#60A5FA', usage: '진료중' },
  { token: '--dr-ai-color-status-completed', lightHex: '#22C55E', darkHex: '#4ADE80', usage: '진료완료' },
  { token: '--dr-ai-color-status-emergency', lightHex: '#DC2626', darkHex: '#EF4444', usage: '응급' },
  { token: '--dr-ai-color-status-cancelled', lightHex: '#94A3B8', darkHex: '#64748B', usage: '취소' },
]

const emrRangeTokens = [
  { token: '--dr-ai-color-range-normal', lightHex: '#16A34A', darkHex: '#4ADE80', usage: '정상 범위' },
  { token: '--dr-ai-color-range-abnormal-low', lightHex: '#CA8A04', darkHex: '#FACC15', usage: '저수치 주의' },
  { token: '--dr-ai-color-range-abnormal-high', lightHex: '#DC2626', darkHex: '#F87171', usage: '고수치 위험' },
  { token: '--dr-ai-color-range-critical', lightHex: '#B91C1C', darkHex: '#EF4444', usage: '임계 위험' },
]
</script>

# 컬러 시스템

의사랑 컬러 시스템은 **의료 환경에 최적화된 블루 톤** 기반으로, Light/Dark 모드를 완벽하게 지원합니다.

::: tip 컬러 칩 복사
아래 컬러 칩을 클릭하면 HEX 값이 클립보드에 복사됩니다.
:::

---

## 컬러 구조

```
Scale Colors (원색 팔레트)
  └─ Semantic Tokens (의미 기반 토큰)
       └─ Component Tokens (컴포넌트별 토큰)
```

---

## Scale Colors (고정 팔레트)

### Primary - Blue

의료 서비스의 신뢰감과 전문성을 표현하는 메인 컬러입니다.

<ColorSwatch :colors="blue" />

### Neutral - Gray

텍스트, 배경, 보더 등 기본 UI 요소에 사용됩니다.

<ColorSwatch :colors="gray" />

### Green (Success / 정상)

<ColorSwatch :colors="green" />

### Red (Error / 위험 / 긴급)

<ColorSwatch :colors="red" />

### Yellow (Warning / 주의)

<ColorSwatch :colors="yellow" />

### Teal (Info / 참고)

<ColorSwatch :colors="teal" />

---

## Semantic Tokens - Light & Dark 비교

시맨틱 토큰은 Light/Dark 모드에 따라 값이 자동으로 전환됩니다. 아래 테이블에서 양쪽 모드의 컬러를 확인하고, **컬러 칩을 클릭하면 HEX 값이 복사**됩니다.

### 배경 (Background)

<SemanticColorTable :tokens="bgTokens" title="Background Tokens" />

### 텍스트 (Text)

<SemanticColorTable :tokens="textTokens" title="Text Tokens" />

### 보더 (Border)

<SemanticColorTable :tokens="borderTokens" title="Border Tokens" />

### 인터랙션 (Interactive)

<SemanticColorTable :tokens="interactiveTokens" title="Interactive Tokens" />

### 상태 (Status)

<SemanticColorTable :tokens="statusTokens" title="Status Tokens" />

---

## EMR 전용 컬러 토큰

의료 도메인에서 특별히 사용되는 컬러 토큰입니다.

### 진료 상태

<SemanticColorTable :tokens="emrStatusTokens" title="진료 상태 컬러" />

### 검사 수치 범위

<SemanticColorTable :tokens="emrRangeTokens" title="검사 수치 범위 컬러" />

---

## 접근성 가이드

### 대비율 (Contrast Ratio)

모든 텍스트-배경 조합은 WCAG 2.1 AA 기준을 충족해야 합니다.

| 용도 | 최소 대비율 |
|------|-----------|
| 본문 텍스트 (16px 이하) | 4.5:1 |
| 큰 텍스트 (18px 이상) | 3:1 |
| UI 요소 (아이콘, 보더) | 3:1 |
| 비활성 요소 | 기준 면제 |

### 색각 이상 대응

- 상태 표시에 색상만 의존하지 않고, **아이콘 + 텍스트**를 반드시 함께 사용
- 위험/정상 구분에 빨강/초록만 사용하지 않고, 형태와 위치로도 구분 가능하게 설계

---

## CSS 변수 사용 예시

```css
:root[data-theme="light"] {
  --dr-ai-color-bg-page: #F8FAFC;
  --dr-ai-color-bg-card: #FFFFFF;
  --dr-ai-color-text-primary: #0F172A;
  --dr-ai-color-primary: #3B82F6;
}

:root[data-theme="dark"] {
  --dr-ai-color-bg-page: #020617;
  --dr-ai-color-bg-card: #0F172A;
  --dr-ai-color-text-primary: #F8FAFC;
  --dr-ai-color-primary: #3B82F6;
}
```

---

> 다음 문서: [타이포그래피](./typography.md)
