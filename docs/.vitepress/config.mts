import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '의사랑AI',
  description: '의사랑AI Design System',
  lang: 'ko-KR',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '의사랑AI',
    nav: [
      { text: 'Guide', link: '/introduction' },
      { text: 'Foundation', link: '/foundation/colors' },
      { text: 'Components', link: '/components/badge' },
      { text: 'Dev', link: '/dev/tokens' },
    ],
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: '소개', link: '/introduction' },
          { text: '시작하기', link: '/getting-started' },
        ],
      },
      {
        text: 'Foundation',
        items: [
          { text: '컬러', link: '/foundation/colors' },
          { text: '타이포그래피', link: '/foundation/typography' },
          { text: '스페이싱 & 레이아웃', link: '/foundation/spacing' },
          { text: '아이콘', link: '/foundation/iconography' },
        ],
      },
      {
        text: 'EMR 아키텍처',
        items: [
          { text: '진료화면 구조', link: '/emr-architecture' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Badge', link: '/components/badge' },
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
          { text: 'Card Module', link: '/components/card-module' },
          { text: 'Modal / Dialog', link: '/components/modal' },
          { text: 'Table', link: '/components/table' },
          { text: 'Toast', link: '/components/toast' },
          { text: 'Tab', link: '/components/tab' },
          { text: 'TextArea', link: '/components/textarea' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Icon Button', link: '/components/icon-button' },
          { text: 'Number Stepper', link: '/components/number-stepper' },
          { text: 'Tooltip', link: '/components/tooltip' },
          { text: 'Pagination', link: '/components/pagination' },
          { text: 'Progress', link: '/components/progress' },
          { text: 'Divider', link: '/components/divider' },
          { text: 'Text Button', link: '/components/text-button' },
          { text: 'Grid Menu', link: '/components/grid-menu' },
          { text: 'Result State', link: '/components/result-state' },
          { text: 'Skeleton', link: '/components/skeleton' },
        ],
      },
      {
        text: 'Development',
        items: [
          { text: '디자인 토큰', link: '/dev/tokens' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: '#' },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '검색', buttonAriaLabel: '검색' },
          modal: {
            noResultsText: '검색 결과가 없습니다',
            resetButtonTitle: '초기화',
            footer: { selectText: '선택', navigateText: '이동', closeText: '닫기' },
          },
        },
      },
    },
    footer: {
      message: '의사랑AI Design System',
      copyright: 'Internal Use Only',
    },
    outline: {
      label: '목차',
      level: [2, 3],
    },
    docFooter: {
      prev: '이전',
      next: '다음',
    },
  },
})
