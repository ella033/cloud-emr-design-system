# 시작하기

## 설치

```bash
# npm
npm install @cloud-emr/design-system

# yarn
yarn add @cloud-emr/design-system

# pnpm
pnpm add @cloud-emr/design-system
```

## 기본 설정

### 1. 글로벌 스타일 적용

```tsx
// app/layout.tsx (Next.js App Router)
import '@cloud-emr/design-system/styles/global.css';
import { DrAIProvider } from '@cloud-emr/design-system';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <DrAIProvider theme="light">
          {children}
        </DrAIProvider>
      </body>
    </html>
  );
}
```

### 2. 테마 설정

```tsx
import { DrAIProvider } from '@cloud-emr/design-system';

// 시스템 설정 따르기
<DrAIProvider theme="system">{children}</DrAIProvider>

// 라이트 모드 고정
<DrAIProvider theme="light">{children}</DrAIProvider>

// 다크 모드 고정
<DrAIProvider theme="dark">{children}</DrAIProvider>
```

### 3. 컴포넌트 사용

```tsx
import { Button, Badge, Card } from '@cloud-emr/design-system';

function Example() {
  return (
    <Card>
      <Badge variant="solid" color="blue" size="small">진료중</Badge>
      <Button variant="primary" size="medium">
        처방 확인
      </Button>
    </Card>
  );
}
```

## 디자인 토큰 사용

CSS 변수로 디자인 토큰에 직접 접근할 수 있습니다.

```css
.custom-element {
  color: var(--color-text-primary);
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  padding: var(--spacing-16);
  font-size: var(--font-size-body1);
}
```

## 프로젝트 구조 (권장)

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 글로벌 레이아웃 + DrAIProvider
│   ├── page.tsx            # 메인 대시보드
│   └── chart/              # 진료 화면
│       └── [patientId]/
│           └── page.tsx
├── components/
│   ├── modules/            # EMR 카드 모듈 (환자정보, 진단, 처방 등)
│   ├── layout/             # 레이아웃 컴포넌트 (Grid, Sidebar 등)
│   └── common/             # 공통 UI 컴포넌트
├── hooks/                  # 커스텀 훅
├── stores/                 # 상태 관리
├── types/                  # TypeScript 타입
└── utils/                  # 유틸리티 함수
```

## 브라우저 지원

| 브라우저 | 최소 버전 |
|---------|----------|
| Chrome | 90+ |
| Safari | 15+ |
| Firefox | 90+ |
| Edge | 90+ |

> EMR은 웹 기반 데스크탑 환경이 주 사용처이므로,
> 최신 브라우저 기능을 적극 활용합니다.

---

> 다음 문서: [컬러 시스템](./foundation/colors.md)
