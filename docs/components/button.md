# Button

사용자의 액션을 트리거하는 핵심 인터랙션 컴포넌트입니다.

<span class="status-badge stable">Stable</span>

## 상태별 케이스

Variant, State, Size를 모두 한눈에 확인할 수 있습니다.

<ButtonStates />

---

## 사용법

```tsx
import { Button } from '@cloud-emr/design-system';

<Button variant="primary" size="medium">처방 전송</Button>
<Button variant="secondary" size="medium">저장</Button>
<Button variant="outline" size="medium">취소</Button>
<Button variant="danger" size="medium">삭제</Button>
```

---

## Props

| Prop | Type | Required | Default | 설명 |
|------|------|----------|---------|------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | No | `'primary'` | 버튼 스타일 |
| `size` | `'small' \| 'medium' \| 'large'` | No | `'medium'` | 버튼 크기 |
| `disabled` | `boolean` | No | `false` | 비활성 상태 |
| `loading` | `boolean` | No | `false` | 로딩 상태 (스피너 표시) |
| `fullWidth` | `boolean` | No | `false` | 전체 너비 사용 |
| `leftIcon` | `ReactNode` | No | - | 왼쪽 아이콘 |
| `rightIcon` | `ReactNode` | No | - | 오른쪽 아이콘 |
| `onClick` | `() => void` | No | - | 클릭 핸들러 |

---

## Variant

| Variant | 용도 | 배경 | 텍스트 |
|---------|------|------|--------|
| `primary` | 주요 액션 (처방 전송, 확인) | `blue-500` | `white` |
| `secondary` | 보조 액션 (저장, 수정) | `blue-50` | `blue-600` |
| `outline` | 일반 액션 (취소, 닫기) | `transparent` | `gray-600` |
| `ghost` | 최소 강조 액션 | `transparent` | `gray-500` |
| `danger` | 위험 액션 (삭제, 중단) | `red-600` | `white` |

---

## Size

| Size | Height | Padding | Font Size | 용도 |
|------|--------|---------|-----------|------|
| `small` | 32px | 6px 12px | 13px | 테이블 내 액션, 인라인 버튼 |
| `medium` | 40px | 10px 20px | 14px | 기본 버튼 |
| `large` | 48px | 12px 24px | 16px | 주요 CTA, 모달 확인 |

---

## 상태 (States)

```
Default → Hover → Active → Focus
                              ↘ Disabled
                              ↘ Loading
```

| 상태 | 시각적 변화 |
|------|-----------|
| `hover` | 배경 한 단계 진하게 |
| `active` | 배경 두 단계 진하게 + scale(0.98) |
| `focus` | `--color-border-focus` 링 2px |
| `disabled` | opacity: 0.5, cursor: not-allowed |
| `loading` | 텍스트 숨기고 스피너 표시, 클릭 방지 |

---

## EMR 활용 예시

### 진단 및 처방 카드

```tsx
// Footer의 주요 액션
<Button variant="primary" size="large" fullWidth>
  처방 전송
</Button>

// 보조 액션들
<Button variant="secondary" size="medium">임시 저장</Button>
<Button variant="outline" size="medium">초기화</Button>
```

### 위험한 동작

```tsx
// 처방 삭제 시 danger + 확인 과정 필수
<Button variant="danger" size="medium" onClick={handleDeleteWithConfirm}>
  처방 삭제
</Button>
```

### 로딩 상태

```tsx
// 처방 전송 중
<Button variant="primary" size="large" loading>
  전송 중...
</Button>
```

---

## 접근성

- 모든 버튼은 키보드 `Tab`으로 접근 가능
- `Enter` 또는 `Space`로 활성화
- `disabled` 상태에서도 포커스는 유지 (스크린리더 접근성)
- `danger` 버튼은 반드시 확인 모달과 함께 사용

---

## Do & Don't

### Do
- 한 화면에 primary 버튼은 1~2개만 사용
- 위험한 동작에는 반드시 danger variant 사용
- loading 상태로 중복 클릭 방지

### Don't
- 버튼 텍스트에 "클릭하세요" 같은 문구 사용 금지
- disabled 상태에서 툴팁 없이 사용 금지 (왜 비활성인지 안내)
- 너무 많은 버튼을 한 줄에 나열하지 않기 (최대 3개)
