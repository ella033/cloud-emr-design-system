# Input (TextField)

텍스트 데이터를 입력받는 기본 폼 컴포넌트입니다.

<span class="status-badge stable">Stable</span>

## 상태별 케이스

모든 인터랙션 상태를 한눈에 확인할 수 있습니다.

<InputStates />

---

## 사용법

```tsx
import { Input } from '@cloud-emr/design-system';

<Input
  label="환자명"
  value={name}
  onChange={setName}
  placeholder="이름을 입력하세요"
/>

<Input
  label="진단 코드"
  value={code}
  onChange={setCode}
  leftIcon={<SearchIcon />}
  placeholder="KCD 코드 또는 질환명"
/>
```

---

## Props

| Prop | Type | Required | Default | 설명 |
|------|------|----------|---------|------|
| `label` | `string` | No | - | 입력 필드 레이블 |
| `value` | `string` | Yes | - | 입력값 |
| `onChange` | `(value: string) => void` | Yes | - | 변경 핸들러 |
| `placeholder` | `string` | No | - | 플레이스홀더 |
| `type` | `'text' \| 'number' \| 'password' \| 'search'` | No | `'text'` | 입력 타입 |
| `size` | `'small' \| 'medium' \| 'large'` | No | `'medium'` | 크기 |
| `error` | `string` | No | - | 에러 메시지 (표시 시 에러 스타일) |
| `helperText` | `string` | No | - | 도움말 텍스트 |
| `disabled` | `boolean` | No | `false` | 비활성 |
| `readOnly` | `boolean` | No | `false` | 읽기 전용 |
| `required` | `boolean` | No | `false` | 필수 입력 |
| `leftIcon` | `ReactNode` | No | - | 왼쪽 아이콘 |
| `rightIcon` | `ReactNode` | No | - | 오른쪽 아이콘/버튼 |
| `maxLength` | `number` | No | - | 최대 글자수 |

---

## Size

| Size | Height | Font Size | 용도 |
|------|--------|-----------|------|
| `small` | 32px | 13px | 테이블 내 인라인 편집 |
| `medium` | 40px | 14px | 기본 폼 입력 |
| `large` | 48px | 16px | 검색 필드, 주요 입력 |

---

## 상태

| 상태 | Border | Background | 설명 |
|------|--------|------------|------|
| `default` | `gray-200` | `white` | 기본 |
| `hover` | `gray-300` | `white` | 마우스 오버 |
| `focus` | `blue-500` (2px) | `white` | 포커스 |
| `error` | `red-500` | `white` | 에러 |
| `disabled` | `gray-200` | `gray-100` | 비활성 |
| `readOnly` | `transparent` | `gray-50` | 읽기 전용 |

---

## Variants

### TextField (기본)

```tsx
<Input label="환자명" value={name} onChange={setName} />
```

### Search Field

```tsx
<Input
  type="search"
  size="large"
  leftIcon={<SearchIcon />}
  placeholder="환자, 진단코드, 처방 검색"
  rightIcon={<KbdShortcut>⌘K</KbdShortcut>}
/>
```

### TextArea (여러 줄)

```tsx
<TextArea
  label="임상메모"
  value={note}
  onChange={setNote}
  rows={4}
  placeholder="진료 소견을 입력하세요"
  maxLength={2000}
  showCount
/>
```

---

## EMR 활용 예시

### 증상 자유 텍스트 입력

```tsx
<TextArea
  label="증상"
  value={symptoms}
  onChange={setSymptoms}
  placeholder="환자 증상을 자유롭게 기록하세요"
  rows={3}
/>
```

### 진단 코드 검색

```tsx
<Input
  type="search"
  label="진단 코드"
  leftIcon={<SearchIcon />}
  value={diagnosisQuery}
  onChange={setDiagnosisQuery}
  placeholder="J06.9 또는 '급성 상기도감염'"
  helperText="KCD 코드 또는 질환명으로 검색"
/>
```

### 바이탈 수치 입력

```tsx
<div style={{ display: 'flex', gap: 8 }}>
  <Input type="number" label="수축기" size="small" suffix="mmHg" />
  <Input type="number" label="이완기" size="small" suffix="mmHg" />
  <Input type="number" label="맥박" size="small" suffix="bpm" />
  <Input type="number" label="체온" size="small" suffix="°C" />
</div>
```

---

## 접근성

- 모든 Input에 `label` 필수 (시각적으로 숨겨도 `aria-label` 제공)
- 에러 상태에서 `aria-invalid="true"` + `aria-describedby` 연결
- 필수 입력은 `aria-required="true"` + 레이블에 `*` 표시
