# 컬러 시스템

CEDS 컬러 시스템은 **의료 환경에 최적화된 블루 톤** 기반으로, Light/Dark 모드를 완벽하게 지원합니다.

---

## 컬러 구조

```
Scale Colors (원색 팔레트)
  └─ Semantic Tokens (의미 기반 토큰)
       └─ Component Tokens (컴포넌트별 토큰)
```

- **Scale Colors**: 변하지 않는 고정 색상값 (Blue-50 ~ Blue-950)
- **Semantic Tokens**: Light/Dark에 따라 값이 바뀌는 의미 기반 토큰
- **Component Tokens**: 특정 컴포넌트에 바인딩된 토큰

---

## Scale Colors (고정 팔레트)

### Primary - Blue

의료 서비스의 신뢰감과 전문성을 표현하는 메인 컬러입니다.

| Token | Hex | 용도 |
|-------|-----|------|
| `--ceds-blue-50` | `#EFF6FF` | 가장 밝은 배경 |
| `--ceds-blue-100` | `#DBEAFE` | 연한 배경, 호버 |
| `--ceds-blue-200` | `#BFDBFE` | 보조 배경 |
| `--ceds-blue-300` | `#93C5FD` | 비활성 요소 |
| `--ceds-blue-400` | `#60A5FA` | 보조 액션 |
| `--ceds-blue-500` | `#3B82F6` | **Primary 기본** |
| `--ceds-blue-600` | `#2563EB` | **Primary 호버** |
| `--ceds-blue-700` | `#1D4ED8` | Primary 액티브 |
| `--ceds-blue-800` | `#1E40AF` | 강조 텍스트 |
| `--ceds-blue-900` | `#1E3A8A` | 진한 배경 |
| `--ceds-blue-950` | `#172554` | 가장 진한 배경 |

### Neutral - Gray

텍스트, 배경, 보더 등 기본 UI 요소에 사용됩니다.

| Token | Hex | 용도 |
|-------|-----|------|
| `--ceds-gray-0` | `#FFFFFF` | 순백 |
| `--ceds-gray-50` | `#F8FAFC` | 페이지 배경 |
| `--ceds-gray-100` | `#F1F5F9` | 카드 배경 (Dark의 입력필드) |
| `--ceds-gray-200` | `#E2E8F0` | 보더, 구분선 |
| `--ceds-gray-300` | `#CBD5E1` | 비활성 보더 |
| `--ceds-gray-400` | `#94A3B8` | 플레이스홀더 텍스트 |
| `--ceds-gray-500` | `#64748B` | 보조 텍스트 |
| `--ceds-gray-600` | `#475569` | 본문 텍스트 |
| `--ceds-gray-700` | `#334155` | 제목 텍스트 |
| `--ceds-gray-800` | `#1E293B` | 강조 텍스트 |
| `--ceds-gray-900` | `#0F172A` | 최고 강조 |
| `--ceds-gray-950` | `#020617` | 순흑에 가까운 배경 |

### Semantic - Status Colors

의료 상태와 알림을 표현하는 시맨틱 컬러입니다.

#### Green (Success / 정상)

| Token | Hex |
|-------|-----|
| `--ceds-green-50` | `#F0FDF4` |
| `--ceds-green-100` | `#DCFCE7` |
| `--ceds-green-200` | `#BBF7D0` |
| `--ceds-green-500` | `#22C55E` |
| `--ceds-green-600` | `#16A34A` |
| `--ceds-green-700` | `#15803D` |

#### Red (Error / 위험 / 긴급)

| Token | Hex |
|-------|-----|
| `--ceds-red-50` | `#FEF2F2` |
| `--ceds-red-100` | `#FEE2E2` |
| `--ceds-red-200` | `#FECACA` |
| `--ceds-red-500` | `#EF4444` |
| `--ceds-red-600` | `#DC2626` |
| `--ceds-red-700` | `#B91C1C` |

#### Yellow (Warning / 주의)

| Token | Hex |
|-------|-----|
| `--ceds-yellow-50` | `#FEFCE8` |
| `--ceds-yellow-100` | `#FEF9C3` |
| `--ceds-yellow-200` | `#FEF08A` |
| `--ceds-yellow-500` | `#EAB308` |
| `--ceds-yellow-600` | `#CA8A04` |
| `--ceds-yellow-700` | `#A16207` |

#### Teal (Info / 참고)

| Token | Hex |
|-------|-----|
| `--ceds-teal-50` | `#F0FDFA` |
| `--ceds-teal-100` | `#CCFBF1` |
| `--ceds-teal-200` | `#99F6E4` |
| `--ceds-teal-500` | `#14B8A6` |
| `--ceds-teal-600` | `#0D9488` |
| `--ceds-teal-700` | `#0F766E` |

---

## Semantic Tokens - Light Mode

Light 모드에서의 시맨틱 토큰 매핑입니다.

### 배경 (Background)

| Token | Value | 용도 |
|-------|-------|------|
| `--ceds-color-bg-page` | `gray-50` `#F8FAFC` | 페이지 전체 배경 |
| `--ceds-color-bg-card` | `gray-0` `#FFFFFF` | 카드/모듈 배경 |
| `--ceds-color-bg-card-hover` | `gray-50` `#F8FAFC` | 카드 호버 |
| `--ceds-color-bg-elevated` | `gray-0` `#FFFFFF` | 모달, 드롭다운 |
| `--ceds-color-bg-input` | `gray-0` `#FFFFFF` | 입력 필드 배경 |
| `--ceds-color-bg-input-disabled` | `gray-100` `#F1F5F9` | 비활성 입력 필드 |
| `--ceds-color-bg-sidebar` | `gray-0` `#FFFFFF` | 사이드바 배경 |
| `--ceds-color-bg-overlay` | `rgba(0,0,0,0.5)` | 오버레이/딤 |

### 텍스트 (Text)

| Token | Value | 용도 |
|-------|-------|------|
| `--ceds-color-text-primary` | `gray-900` `#0F172A` | 주요 텍스트 |
| `--ceds-color-text-secondary` | `gray-500` `#64748B` | 보조 텍스트 |
| `--ceds-color-text-tertiary` | `gray-400` `#94A3B8` | 3차 텍스트, 힌트 |
| `--ceds-color-text-disabled` | `gray-300` `#CBD5E1` | 비활성 텍스트 |
| `--ceds-color-text-inverse` | `gray-0` `#FFFFFF` | 반전 텍스트 (어두운 배경 위) |
| `--ceds-color-text-link` | `blue-600` `#2563EB` | 링크 텍스트 |
| `--ceds-color-text-error` | `red-600` `#DC2626` | 에러 텍스트 |

### 보더 (Border)

| Token | Value | 용도 |
|-------|-------|------|
| `--ceds-color-border-default` | `gray-200` `#E2E8F0` | 기본 보더 |
| `--ceds-color-border-strong` | `gray-300` `#CBD5E1` | 강조 보더 |
| `--ceds-color-border-focus` | `blue-500` `#3B82F6` | 포커스 링 |
| `--ceds-color-border-error` | `red-500` `#EF4444` | 에러 보더 |

### 인터랙션 (Interactive)

| Token | Value | 용도 |
|-------|-------|------|
| `--ceds-color-primary` | `blue-500` `#3B82F6` | Primary 버튼/액션 |
| `--ceds-color-primary-hover` | `blue-600` `#2563EB` | Primary 호버 |
| `--ceds-color-primary-active` | `blue-700` `#1D4ED8` | Primary 액티브 |
| `--ceds-color-primary-subtle` | `blue-50` `#EFF6FF` | Primary 연한 배경 |

### 상태 (Status)

| Token | Value | 용도 |
|-------|-------|------|
| `--ceds-color-success` | `green-500` `#22C55E` | 정상, 완료 |
| `--ceds-color-success-subtle` | `green-50` `#F0FDF4` | 정상 배경 |
| `--ceds-color-warning` | `yellow-500` `#EAB308` | 주의 |
| `--ceds-color-warning-subtle` | `yellow-50` `#FEFCE8` | 주의 배경 |
| `--ceds-color-error` | `red-500` `#EF4444` | 위험, 에러 |
| `--ceds-color-error-subtle` | `red-50` `#FEF2F2` | 에러 배경 |
| `--ceds-color-info` | `teal-500` `#14B8A6` | 정보 |
| `--ceds-color-info-subtle` | `teal-50` `#F0FDFA` | 정보 배경 |

---

## Semantic Tokens - Dark Mode

Dark 모드에서의 시맨틱 토큰 매핑입니다. 장시간 사용하는 의료진의 눈 피로도를 줄이기 위해 설계되었습니다.

### 배경 (Background)

| Token | Value | 용도 |
|-------|-------|------|
| `--ceds-color-bg-page` | `gray-950` `#020617` | 페이지 전체 배경 |
| `--ceds-color-bg-card` | `gray-900` `#0F172A` | 카드/모듈 배경 |
| `--ceds-color-bg-card-hover` | `gray-800` `#1E293B` | 카드 호버 |
| `--ceds-color-bg-elevated` | `gray-800` `#1E293B` | 모달, 드롭다운 |
| `--ceds-color-bg-input` | `gray-800` `#1E293B` | 입력 필드 배경 |
| `--ceds-color-bg-input-disabled` | `gray-900` `#0F172A` | 비활성 입력 필드 |
| `--ceds-color-bg-sidebar` | `gray-900` `#0F172A` | 사이드바 배경 |
| `--ceds-color-bg-overlay` | `rgba(0,0,0,0.7)` | 오버레이/딤 |

### 텍스트 (Text)

| Token | Value | 용도 |
|-------|-------|------|
| `--ceds-color-text-primary` | `gray-50` `#F8FAFC` | 주요 텍스트 |
| `--ceds-color-text-secondary` | `gray-400` `#94A3B8` | 보조 텍스트 |
| `--ceds-color-text-tertiary` | `gray-500` `#64748B` | 3차 텍스트 |
| `--ceds-color-text-disabled` | `gray-600` `#475569` | 비활성 텍스트 |
| `--ceds-color-text-inverse` | `gray-900` `#0F172A` | 반전 텍스트 |
| `--ceds-color-text-link` | `blue-400` `#60A5FA` | 링크 텍스트 |
| `--ceds-color-text-error` | `red-400` `#F87171` | 에러 텍스트 |

### 보더 (Border)

| Token | Value | 용도 |
|-------|-------|------|
| `--ceds-color-border-default` | `gray-700` `#334155` | 기본 보더 |
| `--ceds-color-border-strong` | `gray-600` `#475569` | 강조 보더 |
| `--ceds-color-border-focus` | `blue-400` `#60A5FA` | 포커스 링 |
| `--ceds-color-border-error` | `red-400` `#F87171` | 에러 보더 |

### 인터랙션 (Interactive)

| Token | Value | 용도 |
|-------|-------|------|
| `--ceds-color-primary` | `blue-500` `#3B82F6` | Primary 버튼/액션 |
| `--ceds-color-primary-hover` | `blue-400` `#60A5FA` | Primary 호버 |
| `--ceds-color-primary-active` | `blue-300` `#93C5FD` | Primary 액티브 |
| `--ceds-color-primary-subtle` | `blue-950` `#172554` | Primary 연한 배경 |

### 상태 (Status)

| Token | Value | 용도 |
|-------|-------|------|
| `--ceds-color-success` | `green-500` `#22C55E` | 정상, 완료 |
| `--ceds-color-success-subtle` | `#052E16` | 정상 배경 |
| `--ceds-color-warning` | `yellow-500` `#EAB308` | 주의 |
| `--ceds-color-warning-subtle` | `#422006` | 주의 배경 |
| `--ceds-color-error` | `red-500` `#EF4444` | 위험, 에러 |
| `--ceds-color-error-subtle` | `#450A0A` | 에러 배경 |
| `--ceds-color-info` | `teal-500` `#14B8A6` | 정보 |
| `--ceds-color-info-subtle` | `#042F2E` | 정보 배경 |

---

## EMR 전용 컬러 토큰

의료 도메인에서 특별히 사용되는 컬러 토큰입니다.

### 진료 상태

| Token | Light | Dark | 용도 |
|-------|-------|------|------|
| `--ceds-color-status-waiting` | `yellow-500` | `yellow-400` | 대기중 |
| `--ceds-color-status-in-progress` | `blue-500` | `blue-400` | 진료중 |
| `--ceds-color-status-completed` | `green-500` | `green-400` | 진료완료 |
| `--ceds-color-status-emergency` | `red-600` | `red-500` | 응급 |
| `--ceds-color-status-cancelled` | `gray-400` | `gray-500` | 취소 |

### 검사 수치 범위

| Token | Light | Dark | 용도 |
|-------|-------|------|------|
| `--ceds-color-range-normal` | `green-600` | `green-400` | 정상 범위 |
| `--ceds-color-range-abnormal-low` | `yellow-600` | `yellow-400` | 저수치 주의 |
| `--ceds-color-range-abnormal-high` | `red-600` | `red-400` | 고수치 위험 |
| `--ceds-color-range-critical` | `red-700` | `red-500` | 임계 위험 |

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
/* Light/Dark 자동 전환 */
:root[data-theme="light"] {
  --ceds-color-bg-page: #F8FAFC;
  --ceds-color-bg-card: #FFFFFF;
  --ceds-color-text-primary: #0F172A;
  --ceds-color-border-default: #E2E8F0;
  --ceds-color-primary: #3B82F6;
}

:root[data-theme="dark"] {
  --ceds-color-bg-page: #020617;
  --ceds-color-bg-card: #0F172A;
  --ceds-color-text-primary: #F8FAFC;
  --ceds-color-border-default: #334155;
  --ceds-color-primary: #3B82F6;
}
```

```tsx
// 컴포넌트에서 사용
<div style={{
  background: 'var(--ceds-color-bg-card)',
  color: 'var(--ceds-color-text-primary)',
  border: '1px solid var(--ceds-color-border-default)',
}}>
  환자 정보 카드
</div>
```

---

> 다음 문서: [타이포그래피](./typography.md)
