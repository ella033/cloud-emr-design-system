# Table

대량의 구조화된 데이터를 행과 열로 표시하는 컴포넌트입니다. EMR에서 환자 목록, 검사 결과, 처방 내역 등에 핵심적으로 사용됩니다.

<span class="status-badge stable">Stable</span>

## Preview

<div class="component-preview" style="overflow-x: auto;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:#F8FAFC; border-bottom:2px solid #E2E8F0;">
        <th style="padding:10px 12px; text-align:left; font-weight:600; color:#334155;">환자명</th>
        <th style="padding:10px 12px; text-align:left; font-weight:600; color:#334155;">생년월일</th>
        <th style="padding:10px 12px; text-align:left; font-weight:600; color:#334155;">진료과</th>
        <th style="padding:10px 12px; text-align:center; font-weight:600; color:#334155;">상태</th>
        <th style="padding:10px 12px; text-align:right; font-weight:600; color:#334155;">접수시간</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #E2E8F0;">
        <td style="padding:10px 12px; color:#0F172A; font-weight:500;">홍길동</td>
        <td style="padding:10px 12px; color:#64748B;">1981.03.15</td>
        <td style="padding:10px 12px; color:#64748B;">내과</td>
        <td style="padding:10px 12px; text-align:center;"><span style="padding:2px 8px; border-radius:9999px; font-size:11px; font-weight:500; background:#DBEAFE; color:#1D4ED8;">진료중</span></td>
        <td style="padding:10px 12px; text-align:right; color:#64748B; font-family:monospace;">14:30</td>
      </tr>
      <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
        <td style="padding:10px 12px; color:#0F172A; font-weight:500;">김영희</td>
        <td style="padding:10px 12px; color:#64748B;">1975.08.22</td>
        <td style="padding:10px 12px; color:#64748B;">내과</td>
        <td style="padding:10px 12px; text-align:center;"><span style="padding:2px 8px; border-radius:9999px; font-size:11px; font-weight:500; background:#FEF9C3; color:#A16207;">대기</span></td>
        <td style="padding:10px 12px; text-align:right; color:#64748B; font-family:monospace;">14:25</td>
      </tr>
      <tr style="border-bottom:1px solid #E2E8F0;">
        <td style="padding:10px 12px; color:#0F172A; font-weight:500;">이철수</td>
        <td style="padding:10px 12px; color:#64748B;">1990.11.03</td>
        <td style="padding:10px 12px; color:#64748B;">외과</td>
        <td style="padding:10px 12px; text-align:center;"><span style="padding:2px 8px; border-radius:9999px; font-size:11px; font-weight:500; background:#FEF2F2; color:#DC2626;">응급</span></td>
        <td style="padding:10px 12px; text-align:right; color:#64748B; font-family:monospace;">14:15</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 사용법

```tsx
import { Table } from '@cloud-emr/design-system';

const columns = [
  { key: 'name', title: '환자명', width: 120, sortable: true },
  { key: 'birthDate', title: '생년월일', width: 100 },
  { key: 'department', title: '진료과', width: 80 },
  { key: 'status', title: '상태', width: 80, align: 'center',
    render: (val) => <Badge variant="fill" color={statusColor[val]}>{val}</Badge>
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
    render: (val) => <Badge variant="weak" color={val === '정상' ? 'green' : 'red'} size="xsmall">{val}</Badge>
  },
];
```

---

## 접근성

- `role="table"`, `role="row"`, `role="columnheader"`, `role="cell"` 적용
- 정렬 가능 컬럼에 `aria-sort` 속성
- 키보드 화살표 키로 행 이동 지원
- 선택된 행에 `aria-selected="true"`
