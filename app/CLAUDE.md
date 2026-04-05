# 의사랑AI EMR Design System — AI 개발 가이드

이 문서는 AI가 EMR 화면을 구현할 때 참조하는 단일 소스 오브 트루스(Single Source of Truth)입니다.
피그마나 별도 디자인 파일 없이, 이 문서만으로 정확한 디자인을 구현할 수 있습니다.

---

## 1. 프로젝트 구조

```
app/
├── src/
│   ├── tokens/tokens.css        ← 전체 CSS Variables
│   ├── components/ui/           ← 기본 UI 컴포넌트
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Icon.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Table.tsx
│   │   ├── Toast.tsx
│   │   ├── Tab.tsx
│   │   ├── Checkbox.tsx
│   │   ├── IconButton.tsx
│   │   ├── NumberStepper.tsx
│   │   ├── TextArea.tsx
│   │   ├── Tooltip.tsx
│   │   ├── Pagination.tsx
│   │   ├── Menu.tsx
│   │   └── Skeleton.tsx
│   ├── components/modules/      ← EMR 카드 모듈
│   │   ├── PatientInfo.tsx
│   │   ├── VisitHistory.tsx
│   │   ├── DiagnosisOrder.tsx
│   │   ├── ClinicalNote.tsx
│   │   ├── PatientChat.tsx
│   │   └── SymptomInput.tsx
│   ├── layouts/
│   │   ├── EmrLayout.tsx        ← Topbar + Sidebar + Main + QuickPanel + StatusBar
│   │   ├── Topbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── QuickPanel.tsx
│   └── pages/
│       └── ChartPage.tsx        ← 진료 화면
├── public/icons/                ← SVG 아이콘 45종
└── CLAUDE.md                    ← 이 파일
```

---

## 2. 디자인 토큰

모든 스타일은 CSS Variables를 사용합니다. 하드코딩 금지.

### 컬러 팔레트

```
--blue-500: #3B82F6 (Primary)    --blue-600: #2563EB (Hover)
--blue-700: #1D4ED8 (Active)     --blue-50: #EFF6FF (Subtle BG)
--gray-900: #0F172A (Text)       --gray-500: #64748B (Secondary Text)
--gray-200: #E2E8F0 (Border)     --gray-50: #F8FAFC (Page BG)
--gray-0: #FFFFFF (Card BG)      --gray-100: #F1F5F9 (Disabled BG)
--red-500: #EF4444 (Error)       --red-600: #DC2626 (Danger)
--green-500: #22C55E (Success)   --yellow-500: #EAB308 (Warning)
--teal-500: #14B8A6 (Info)
```

### 타이포그래피

```
Font: 'Pretendard', sans-serif
Mono: 'JetBrains Mono', monospace
Weight: 400(Regular) / 500(Medium) / 600(SemiBold) / 700(Bold)
```

### 스페이싱 (4px 기반)

```
4px / 8px / 12px / 16px / 20px / 24px / 32px / 40px / 48px
```

### Border Radius

```
--radius-sm: 4px    --radius-md: 8px    --radius-lg: 12px
--radius-xl: 16px   --radius-full: 9999px
```

---

## 3. 컴포넌트 명세

### Button

```tsx
<Button variant="primary" size="medium">처방 전송</Button>
```

| variant | bg (default → hover → active) | text | border |
|---------|-------------------------------|------|--------|
| primary | #3B82F6 → #2563EB → #1D4ED8 | #fff | none |
| secondary | #EFF6FF → #DBEAFE → #BFDBFE | #2563EB | #BFDBFE |
| outline | transparent → gray-50 → gray-100 | gray-600 | gray-200 |
| ghost | transparent → gray-100 → gray-200 | gray-500 | none |
| danger | #DC2626 → #B91C1C → #991B1B | #fff | none |

Size: small(32px/13px) / medium(40px/14px) / large(48px/16px)
States: disabled(opacity:0.5) / loading(spinner) / focus(ring 3px blue/0.3)
Radius: 8px, Font-weight: 600, Transition: all 0.15s

### Input

```tsx
<Input label="환자명" value={name} onChange={setName} error="필수 입력" />
```

| state | border | bg | ring |
|-------|--------|-----|------|
| default | gray-200 | #fff | - |
| hover | gray-300 | #fff | - |
| focus | #3B82F6 | #fff | 0 0 0 3px rgba(59,130,246,0.15) |
| error | #EF4444 | #fff | 0 0 0 3px rgba(239,68,68,0.1) |
| disabled | gray-200 | gray-100 | - (opacity:0.6) |
| readonly | transparent | gray-50 | - |

Size: small(32px/13px) / medium(40px/14px) / large(48px/16px)
Radius: 8px, Label: 12px/500/gray-600

### Badge

```tsx
<Badge variant="solid" color="blue" size="small">진료중</Badge>
```

| variant | 설명 |
|---------|------|
| solid | 진한 배경 + 흰 텍스트 (blue→#3B82F6, green→#22C55E, red→#DC2626, yellow→#EAB308) |
| subtle | 연한 배경 + 진한 텍스트 (blue→bg:#DBEAFE/text:#1D4ED8) |

Size: xsmall(11px) / small(12px) / medium(14px) / large(16px)
Radius: 9999px (pill), Font-weight: 500

### Icon

```tsx
<Icon name="search" size={20} />
```

45종 SVG 아이콘. stroke: currentColor, strokeWidth: 1.5
크기: 16px(인라인) / 20px(버튼) / 24px(헤더)
Dark 모드: filter: invert(1)

Available: search, close, menu, chevron-down/right/left, plus, minus, check, settings, bell, filter, sort, edit, trash, copy, download, upload, refresh, more-horizontal, user, users, heart, thermometer, stethoscope, pill, syringe, clipboard, file-text, calendar, chart, clock, message, alert-triangle, alert-circle, info, check-circle, x-circle, eye, lock, printer, image, link, star, bookmark

### Card (카드 모듈)

```tsx
<Card title="환자 기본정보" icon={<Icon name="user" />} footer={<Button>저장</Button>}>
  {children}
</Card>
```

구조: Header(40px) + Body(flex:1) + Footer(optional)
Header: bg:gray-50, font:13px/600, 아이콘+제목+액션버튼
Border: 1px solid gray-200, Radius: 12px, Shadow: 0 1px 2px rgba(0,0,0,0.05)
States: hover(shadow-md) / focused(border:blue-500) / minimized(header만) / maximized(full)

### Table

```tsx
<Table columns={columns} data={data} onRowClick={handleClick} />
```

디자인: **가로선만** (세로선 없음), width: 100%, Radius: 12px
Header: bg:gray-50, font:12px/600/gray-700, border-bottom: 1px
Row: padding:10px 12px, hover:gray-50, selected:blue/0.08
수치: font-family: mono, text-align: right
상태행: emergency(red/0.06), warning(yellow/0.04)

### Modal

```tsx
<Modal open={isOpen} onClose={close} title="처방 전송" size="medium">
  {content}
  <Modal.Footer>
    <Button variant="outline">취소</Button>
    <Button variant="primary">확인</Button>
  </Modal.Footer>
</Modal>
```

Size: small(320px) / medium(480px) / large(640px)
Overlay: rgba(0,0,0,0.5), Radius: 16px
Danger variant: 제목 빨강, 빨강 배너

---

## 4. EMR 레이아웃

```
┌─────────────────────────────────────────────────┐
│  Topbar (56px) — dark bg (#0F172A)               │
├──────┬─────────────────────────────┬────────────┤
│      │                             │            │
│ Side │     Main Content            │   Quick    │
│ bar  │     (CSS Grid 2col)         │   Panel    │
│(220px)│     gap: 12px              │  (280px)   │
│      │                             │            │
├──────┴─────────────────────────────┴────────────┤
│  StatusBar (32px) — dark bg (#0F172A)            │
└─────────────────────────────────────────────────┘
```

Topbar: 로고(의사랑AI/blue) + 환자컨텍스트 + 아이콘(search/bell/settings)
Sidebar: 검색 + 필터탭(전체/대기/진료중/완료) + 환자리스트
Main: 2열 CSS Grid, 카드 모듈 배치
QuickPanel: 퀵오더 검색 + 최근/자주 사용 + 묶음처방
StatusBar: 접속 의사 + 대기 수 + 저장 시간

---

## 5. EMR 도메인 용어

| 용어 | 설명 |
|------|------|
| 오더 | 의사가 내리는 지시 (처방, 검사, 시술 등) |
| 처방 | 약물 오더. 약품명 + 용량 + 횟수 + 일수 + 경로 |
| 묶음처방 | 자주 쓰는 처방 세트 (감기 셋, 고혈압 f/u 등) |
| 퀵오더 | 자주 사용하는 오더를 빠르게 입력하는 기능 |
| SOAP | 임상메모 형식: Subjective/Objective/Assessment/Plan |
| KCD | 한국표준질병분류 코드 (J06.9 등) |
| DUR | 의약품 안전사용 서비스 (중복/금기 확인) |
| 바이탈 | 활력징후: BP(혈압)/HR(맥박)/BT(체온)/SpO2(산소포화도) |

---

## 6. 진료 상태 컬러

| 상태 | solid bg | subtle bg | text |
|------|---------|----------|------|
| 대기 | #EAB308 | #FEF9C3 | #A16207 |
| 진료중 | #3B82F6 | #DBEAFE | #1D4ED8 |
| 완료 | #22C55E | #DCFCE7 | #15803D |
| 응급 | #DC2626 | #FEE2E2 | #DC2626 |
| 취소 | #64748B | #F1F5F9 | #475569 |

---

## 7. 코딩 규칙

- CSS Variables 사용 (하드코딩 HEX 금지)
- 컴포넌트는 `src/components/ui/` 에 배치
- EMR 모듈은 `src/components/modules/` 에 배치
- 아이콘은 `<Icon name="xxx" size={n} />` 형태로 사용
- 테이블은 가로선만, 세로선 없음
- 숫자/코드는 mono 폰트
- 뱃지 variant: solid(강조) / subtle(보조)
- Dark 모드: data-theme="dark" 속성으로 전환
