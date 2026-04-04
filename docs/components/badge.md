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

## 디자인 토큰 매핑

### Solid Variant (Light / Dark)

| Color | 배경 토큰 | Light | Dark | 텍스트 |
|-------|----------|-------|------|--------|
| blue | `--badge-solid-blue-bg` | `#3B82F6` | `#3B82F6` | `#FFFFFF` |
| green | `--badge-solid-green-bg` | `#22C55E` | `#22C55E` | `#FFFFFF` |
| red | `--badge-solid-red-bg` | `#DC2626` | `#DC2626` | `#FFFFFF` |
| yellow | `--badge-solid-yellow-bg` | `#EAB308` | `#EAB308` | `#FFFFFF` |
| teal | `--badge-solid-teal-bg` | `#14B8A6` | `#14B8A6` | `#FFFFFF` |
| gray | `--badge-solid-gray-bg` | `#64748B` | `#64748B` | `#FFFFFF` |

### Subtle Variant (Light / Dark)

| Color | 배경 토큰 | Light BG | Dark BG | Light Text | Dark Text |
|-------|----------|----------|---------|------------|-----------|
| blue | `--badge-subtle-blue-bg` | `#DBEAFE` | `#172554` | `#1D4ED8` | `#60A5FA` |
| green | `--badge-subtle-green-bg` | `#DCFCE7` | `#052E16` | `#15803D` | `#4ADE80` |
| red | `--badge-subtle-red-bg` | `#FEE2E2` | `#450A0A` | `#DC2626` | `#F87171` |
| yellow | `--badge-subtle-yellow-bg` | `#FEF9C3` | `#422006` | `#A16207` | `#FACC15` |
| teal | `--badge-subtle-teal-bg` | `#CCFBF1` | `#042F2E` | `#0F766E` | `#14B8A6` |
| gray | `--badge-subtle-gray-bg` | `#F1F5F9` | `#334155` | `#475569` | `#94A3B8` |

### Size 토큰

| Size | Font Size 토큰 | Padding 토큰 |
|------|---------------|-------------|
| xsmall | `--badge-xs-font-size` 11px | `--badge-xs-padding` 1px 6px |
| small | `--badge-sm-font-size` 12px | `--badge-sm-padding` 2px 8px |
| medium | `--badge-md-font-size` 14px | `--badge-md-padding` 4px 10px |
| large | `--badge-lg-font-size` 16px | `--badge-lg-padding` 6px 12px |

공통: `--badge-radius: var(--radius-full)` / `--badge-font-weight: 500`

```css
/* 사용 예시 */
.badge-solid-blue {
  background: var(--badge-solid-blue-bg);
  color: var(--badge-solid-blue-text);
  font-size: var(--badge-sm-font-size);
  padding: var(--badge-sm-padding);
  border-radius: var(--badge-radius);
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
