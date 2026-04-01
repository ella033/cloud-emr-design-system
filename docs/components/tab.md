# Tab

관련된 콘텐츠 그룹을 탭으로 나누어 전환할 수 있는 네비게이션 컴포넌트입니다.

<span class="status-badge stable">Stable</span>

## Preview

<div class="component-preview">
  <div style="border-bottom:2px solid #E2E8F0; display:flex; gap:0;">
    <div style="padding:10px 20px; font-size:14px; font-weight:600; color:#3B82F6; border-bottom:2px solid #3B82F6; margin-bottom:-2px; cursor:pointer;">전체</div>
    <div style="padding:10px 20px; font-size:14px; font-weight:400; color:#94A3B8; cursor:pointer;">대기</div>
    <div style="padding:10px 20px; font-size:14px; font-weight:400; color:#94A3B8; cursor:pointer;">진료중</div>
    <div style="padding:10px 20px; font-size:14px; font-weight:400; color:#94A3B8; cursor:pointer;">완료</div>
  </div>
</div>

---

## 사용법

```tsx
import { Tab } from '@cloud-emr/design-system';

<Tab
  items={[
    { key: 'all', label: '전체', count: 12 },
    { key: 'waiting', label: '대기', count: 5 },
    { key: 'in-progress', label: '진료중', count: 3 },
    { key: 'completed', label: '완료', count: 4 },
  ]}
  activeKey={activeTab}
  onChange={setActiveTab}
/>
```

---

## Props

| Prop | Type | Required | Default | 설명 |
|------|------|----------|---------|------|
| `items` | `TabItem[]` | Yes | - | 탭 목록 |
| `activeKey` | `string` | Yes | - | 활성 탭 키 |
| `onChange` | `(key: string) => void` | Yes | - | 탭 변경 핸들러 |
| `variant` | `'underline' \| 'pill' \| 'segmented'` | No | `'underline'` | 스타일 |
| `size` | `'small' \| 'medium'` | No | `'medium'` | 크기 |
| `fullWidth` | `boolean` | No | `false` | 전체 너비 균등 분할 |

### TabItem

| Prop | Type | 설명 |
|------|------|------|
| `key` | `string` | 고유 키 |
| `label` | `string` | 탭 레이블 |
| `count` | `number` | 카운트 뱃지 (선택) |
| `icon` | `ReactNode` | 아이콘 (선택) |
| `disabled` | `boolean` | 비활성 |

---

## Variant

### underline (기본)
하단 밑줄 인디케이터. 가장 일반적인 탭 스타일입니다.

### pill
배경 색상 강조 형태. 필터 역할의 탭에 적합합니다.

### segmented
세그먼트 컨트롤 형태. 뷰 모드 전환 등에 사용합니다.

---

## EMR 활용 예시

### 환자 목록 필터

```tsx
<Tab
  variant="underline"
  items={[
    { key: 'all', label: '전체', count: 12 },
    { key: 'waiting', label: '대기', count: 5 },
    { key: 'in-progress', label: '진료중', count: 3 },
    { key: 'completed', label: '완료', count: 4 },
  ]}
/>
```

### 임상메모 형식 전환

```tsx
<Tab
  variant="segmented"
  items={[
    { key: 'soap', label: 'SOAP' },
    { key: 'free', label: '자유형식' },
    { key: 'template', label: '템플릿' },
  ]}
/>
```

---

## 접근성

- `role="tablist"`, `role="tab"`, `role="tabpanel"` 적용
- `aria-selected`, `aria-controls` 연결
- 좌/우 화살표 키로 탭 이동
- `Home` / `End` 키로 처음/마지막 탭 이동
