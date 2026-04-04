# 아이콘

의사랑AI 아이콘 시스템은 EMR 환경에 최적화된 **45종의 라인 아이콘**을 제공합니다.
모든 아이콘은 SVG 기반이며, 3가지 크기(16/20/24px)로 사용할 수 있습니다.

::: tip 아이콘 이름 복사
아이콘을 클릭하면 이름이 클립보드에 복사됩니다. 상단에서 카테고리 필터, 검색, 크기 전환이 가능합니다.
:::

---

## 아이콘 목록

<IconPreview />

---

## 사용법

### React 컴포넌트

```tsx
import { Icon } from '@cloud-emr/design-system';

// 기본 (24px)
<Icon name="search" />

// 크기 지정
<Icon name="user" size={16} />
<Icon name="heart" size={20} />
<Icon name="stethoscope" size={24} />

// 색상 지정
<Icon name="alert-triangle" color="var(--dr-ai-color-error)" />
<Icon name="check-circle" color="var(--dr-ai-color-success)" />
```

### CSS에서 직접 사용

```css
.icon-search {
  width: 20px;
  height: 20px;
  background: url('/icons/search.svg') no-repeat center;
  background-size: contain;
}
```

### img 태그로 사용

```html
<img src="/icons/bell.svg" width="24" height="24" alt="알림" />
```

---

## 크기 체계

| 크기 | 용도 |
|------|------|
| **16px** | 인라인 텍스트 옆, 뱃지 내부, 테이블 셀 액션 |
| **20px** | 버튼 아이콘, 입력 필드 아이콘, 리스트 아이템 |
| **24px** | 카드 헤더, 내비게이션, 독립 아이콘 버튼 |

---

## 카테고리

### General UI (20종)
검색, 닫기, 메뉴, 화살표, 추가/제거, 체크, 설정, 알림, 필터, 정렬, 편집, 삭제, 복사, 다운로드, 업로드, 새로고침, 더보기

### 진료/환자 (10종)
환자, 환자목록, 바이탈, 체온, 진찰, 약물, 주사, 차트, 문서, 일정

### EMR 기능 (15종)
차트그래프, 시간, 메시지, 경고, 주의, 정보, 완료, 실패, 보기, 잠금, 인쇄, 이미지, 링크, 즐겨찾기, 북마크

---

## 디자인 규칙

### 스타일 가이드
- **스트로크 기반**: fill 없이 stroke만 사용 (1.5px)
- **currentColor**: 부모 요소의 color를 상속하여 자동 테마 대응
- **라운드캡**: stroke-linecap="round", stroke-linejoin="round"

### Do
- 아이콘과 텍스트 사이 최소 4px 간격 유지
- 같은 화면에서 같은 크기의 아이콘 사용 (혼용 금지)
- 의미가 명확한 아이콘은 텍스트 없이 사용 가능 (검색, 닫기 등)

### Don't
- 아이콘 색상을 임의로 변경하지 않기 (시맨틱 토큰 사용)
- 16px 미만으로 축소하지 않기 (가독성)
- 아이콘만으로 중요한 상태를 표현하지 않기 (접근성 — 텍스트 병행)

---

## EMR 활용 예시

### 카드 모듈 헤더
```tsx
<CardModule icon={<Icon name="clipboard" />} title="환자 기본정보" />
<CardModule icon={<Icon name="calendar" />} title="내원일 히스토리" />
<CardModule icon={<Icon name="pill" />} title="진단 및 처방" />
<CardModule icon={<Icon name="edit" />} title="임상메모" />
<CardModule icon={<Icon name="message" />} title="환자메모" />
```

### 상태 아이콘

```tsx
<Icon name="check-circle" color="var(--dr-ai-color-success)" /> 정상
<Icon name="alert-triangle" color="var(--dr-ai-color-warning)" /> 주의
<Icon name="x-circle" color="var(--dr-ai-color-error)" /> 위험
<Icon name="info" color="var(--dr-ai-color-info)" /> 참고
```

### 버튼 + 아이콘

```tsx
<Button leftIcon={<Icon name="plus" size={16} />}>약품 추가</Button>
<Button leftIcon={<Icon name="printer" size={16} />} variant="outline">인쇄</Button>
<Button leftIcon={<Icon name="trash" size={16} />} variant="danger">삭제</Button>
```

---

> 다음 문서: [컴포넌트 - Badge](../components/badge.md)
