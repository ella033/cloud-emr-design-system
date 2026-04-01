# Table

대량의 구조화된 데이터를 행과 열로 표시하는 컴포넌트입니다. EMR에서 환자 목록, 검사 결과, 처방 내역 등에 핵심적으로 사용됩니다.

<span class="status-badge stable">Stable</span>

## 상태별 케이스

EMR에서 사용되는 10가지 테이블 패턴을 확인할 수 있습니다. 칩을 클릭하여 케이스를 전환해보세요.

<TableStates />

### 디자인 원칙

- **가로 라인만 사용** — 세로 라인 없이 깔끔한 구조
- **수치 데이터** — 모노스페이스 + 우측 정렬 + tabular-nums
- **상태 표현** — 시맨틱 컬러 뱃지 (blue=진행, green=완료, red=위험, yellow=대기)
- **이상치 강조** — 행 배경 하이라이트 + 수치 색상 변경
- **인터랙션** — 행 hover, 선택, 확장(accordion), 인라인 편집

---

## 사용법

```tsx
import { Table } from '@cloud-emr/design-system';

const columns = [
  { key: 'name', title: '환자명', width: 120, sortable: true },
  { key: 'birthDate', title: '생년월일', width: 100 },
  { key: 'department', title: '진료과', width: 80 },
  { key: 'status', title: '상태', width: 80, align: 'center',
    render: (val) => <Badge variant="solid" color={statusColor[val]}>{val}</Badge>
  },
  { key: 'time', title: '접수시간', width: 80, align: 'right', mono: true },
];

<Table
  columns={columns}
  data={patients}
  rowKey="id"
  onRowClick={(row) => selectPatient(row.id)}
  sortable
  striped
/>
```

---

## Props

| Prop | Type | Required | Default | 설명 |
|------|------|----------|---------|------|
| `columns` | `Column[]` | Yes | - | 컬럼 정의 |
| `data` | `T[]` | Yes | - | 데이터 배열 |
| `rowKey` | `string` | Yes | - | 행 고유 키 필드 |
| `sortable` | `boolean` | No | `false` | 정렬 활성화 |
| `striped` | `boolean` | No | `false` | 줄무늬 배경 |
| `compact` | `boolean` | No | `false` | 행 높이 축소 |
| `stickyHeader` | `boolean` | No | `true` | 헤더 고정 |
| `loading` | `boolean` | No | `false` | 로딩 상태 |
| `emptyText` | `string` | No | `'데이터가 없습니다'` | 빈 상태 메시지 |
| `onRowClick` | `(row: T) => void` | No | - | 행 클릭 핸들러 |
| `selectedRowKey` | `string` | No | - | 선택된 행 키 |
| `maxHeight` | `number` | No | - | 최대 높이 (스크롤) |

### Column

| Prop | Type | 설명 |
|------|------|------|
| `key` | `string` | 데이터 필드 키 |
| `title` | `string` | 헤더 텍스트 |
| `width` | `number \| string` | 컬럼 너비 |
| `align` | `'left' \| 'center' \| 'right'` | 정렬 |
| `sortable` | `boolean` | 개별 컬럼 정렬 |
| `mono` | `boolean` | 모노스페이스 서체 |
| `render` | `(value, row) => ReactNode` | 커스텀 렌더러 |

---

## EMR 활용 예시

### 처방 내역 테이블

```tsx
const prescriptionColumns = [
  { key: 'drugName', title: '약품명', width: 200 },
  { key: 'dose', title: '용량', width: 80, mono: true },
  { key: 'frequency', title: '횟수', width: 60, align: 'center' },
  { key: 'days', title: '일수', width: 60, align: 'center', mono: true },
  { key: 'route', title: '경로', width: 60 },
  { key: 'actions', title: '', width: 40,
    render: () => <Button variant="ghost" size="small">×</Button>
  },
];

<Table columns={prescriptionColumns} data={prescriptions} compact />
```

### 검사 결과 테이블

```tsx
const labColumns = [
  { key: 'testName', title: '검사명', width: 160 },
  { key: 'result', title: '결과', width: 80, mono: true, align: 'right',
    render: (val, row) => (
      <span style={{ color: getResultColor(val, row.range) }}>
        {val} {row.unit}
      </span>
    )
  },
  { key: 'range', title: '참고치', width: 120, mono: true },
  { key: 'status', title: '판정', width: 60,
    render: (val) => <Badge variant="subtle" color={val === '정상' ? 'green' : 'red'} size="xsmall">{val}</Badge>
  },
];
```

---

## 접근성

- `role="table"`, `role="row"`, `role="columnheader"`, `role="cell"` 적용
- 정렬 가능 컬럼에 `aria-sort` 속성
- 키보드 화살표 키로 행 이동 지원
- 선택된 행에 `aria-selected="true"`
