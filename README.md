# Cloud EMR Design System & Development Guide

## Overview

**Cloud EMR**은 클라우드 기반 전자의무기록(Electronic Medical Record) 시스템입니다.
의료진이 진료 현장에서 다양한 환자 정보를 효율적으로 확인하고 관리할 수 있도록 설계되었습니다.

## Project Goals

- **일관된 사용자 경험**: 디자인 시스템을 통해 모든 화면에서 통일된 UI/UX 제공
- **높은 정보 밀도**: 카드 모듈 기반 레이아웃으로 다양한 의료 정보를 한 화면에 표시
- **사용자 맞춤 레이아웃**: 드래그 & 드롭, 리사이즈 가능한 카드 모듈 시스템
- **빠른 업무 처리**: 퀵 오더, 묶음처방 등 의료진 워크플로우 최적화
- **Light/Dark 모드**: 장시간 사용 환경을 고려한 테마 지원

## Documentation Structure

```
design-system/
├── 00-introduction.md       # 디자인 시스템 소개
├── 01-getting-started.md    # 시작하기
├── foundation/
│   ├── colors.md            # 컬러 시스템 (Light/Dark)
│   ├── typography.md        # 타이포그래피
│   └── spacing.md           # 간격 & 레이아웃
├── components/              # UI 컴포넌트
└── utilities/               # 유틸리티
dev/
├── setup.md                 # 개발 환경
├── tokens.md                # CSS 디자인 토큰
└── conventions.md           # 코딩 컨벤션
```

## Design References

- Toss Design System (TDS) 구조 참고
- 토스증권 카드뷰 레이아웃 패턴 참고
- 의료 UX 접근성 가이드라인 준수

## Tech Stack (예정)

| 영역 | 기술 |
|------|------|
| Frontend | React / Next.js |
| Styling | CSS Variables + Tailwind CSS |
| State | Zustand / React Query |
| Layout Engine | react-grid-layout (드래그/리사이즈) |
| Design Token | Style Dictionary |

---

> 이 문서는 Cloud EMR 디자인 시스템의 진입점입니다.
> 각 섹션의 상세 문서를 참고하여 디자인과 개발을 진행해 주세요.
