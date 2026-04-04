# Badge

상태나 카테고리를 강조하여 빠르게 인지할 수 있도록 도와주는 인라인 컴포넌트입니다.

<span class="status-badge stable">Stable</span>

## 상태별 케이스

Variant, Color, Size 모든 조합과 EMR 활용 예시를 확인할 수 있습니다.

<BadgeStates />

---

## 사용법

```tsx
import { Badge } from '@cloud-emr/design-system';

<Badge variant="solid" color="blue" size="small">진료중</Badge>
<Badge variant="subtle" color="green" size="small">완료</Badge>
<Badge variant="solid" color="red" size="medium">응급</Badge>
```

---

## Props

| Prop | Type | Required | Default | 설명 |
|------|------|----------|---------|------|
| `variant` | `'solid' \| 'subtle'` | Yes | - | solid: 진한 배경, subtle: 연한 배경 |
| `size` | `'xsmall' \| 'small' \| 'medium' \| 'large'` | No | `'small'` | 뱃지 크기 |
| `color` | `'blue' \| 'green' \| 'red' \| 'yellow' \| 'teal' \| 'gray'` | No | `'blue'` | 뱃지 색상 |
| `children` | `ReactNode` | Yes | - | 뱃지 내용 |

---

## Variant

### solid
배경 색상이 진하고 텍스트가 흰색인 강조형 뱃지입니다. 중요한 상태를 표시할 때 사용합니다.

```tsx
<Badge variant="solid" color="blue">진료중</Badge>
<Badge variant="solid" color="red">응급</Badge>
<Badge variant="solid" color="green">완료</Badge>
```

### subtle
배경 색상이 연하고 텍스트가 해당 색상인 보조형 뱃지입니다. 일반적인 상태 표시에 사용합니다.

```tsx
<Badge variant="subtle" color="blue">접수</Badge>
<Badge variant="subtle" color="yellow">대기</Badge>
<Badge variant="subtle" color="gray">취소</Badge>
```

---

## Size

| Size | Font Size | Padding | 용도 |
|------|-----------|---------|------|
| `xsmall` | 11px | 1px 6px | 테이블 셀 내 상태 |
| `small` | 12px | 2px 8px | 기본 상태 뱃지 |
| `medium` | 14px | 4px 10px | 강조 상태 뱃지 |
| `large` | 16px | 6px 12px | 카드 헤더 상태 |

---

## EMR 활용 예시

### 환자 상태 표시

```tsx
// 환자 목록에서 진료 상태 표시
<Badge variant="solid" color="yellow" size="small">대기</Badge>
<Badge variant="solid" color="blue" size="small">진료중</Badge>
<Badge variant="solid" color="green" size="small">진료완료</Badge>
<Badge variant="solid" color="red" size="small">응급</Badge>
<Badge variant="subtle" color="gray" size="small">취소</Badge>
```

### 검사 수치 이상 여부

```tsx
// 검사 결과에서 정상/이상 표시
<Badge variant="subtle" color="green" size="xsmall">정상</Badge>
<Badge variant="subtle" color="yellow" size="xsmall">주의</Badge>
<Badge variant="solid" color="red" size="xsmall">위험</Badge>
```

### 처방 상태

```tsx
<Badge variant="subtle" color="blue" size="small">처방완료</Badge>
<Badge variant="subtle" color="teal" size="small">조제중</Badge>
<Badge variant="subtle" color="green" size="small">투약완료</Badge>
```

---

## 디자인 토큰

```css
/* Badge sizing tokens */
--badge-xsmall-font-size: 11px;
--badge-xsmall-padding: 1px 6px;
--badge-small-font-size: 12px;
--badge-small-padding: 2px 8px;
--badge-medium-font-size: 14px;
--badge-medium-padding: 4px 10px;
--badge-large-font-size: 16px;
--badge-large-padding: 6px 12px;
--badge-border-radius: 9999px;
--badge-font-weight: 500;
```

---

## Do & Don't

### Do
- 상태를 나타낼 때 color와 텍스트를 함께 사용
- 한 행에 1~2개의 뱃지만 사용하여 가독성 유지
- 일관된 색상-의미 매핑 유지 (blue=진행, green=완료, red=위험)

### Don't
- 색상만으로 상태를 구분하지 않기 (접근성)
- 뱃지에 긴 텍스트 넣지 않기 (최대 6자 권장)
- 한 행에 3개 이상의 뱃지 나열 지양
