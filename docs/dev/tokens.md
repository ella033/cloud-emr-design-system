# 디자인 토큰 (CSS Variables)

개발 시 사용할 의사랑AI디자인 토큰의 CSS 변수 정의입니다.
`foundation/` 문서의 디자인 값을 코드에서 직접 사용할 수 있는 형태로 제공합니다.

---

## 전체 토큰 파일

```css
/* ============================================
   의사랑AI(Cloud EMR Design System) - Design Tokens
   ============================================ */

/* ─── Scale Colors (고정) ─── */

:root {
  /* Blue */
  --dr-ai-blue-50: #EFF6FF;
  --dr-ai-blue-100: #DBEAFE;
  --dr-ai-blue-200: #BFDBFE;
  --dr-ai-blue-300: #93C5FD;
  --dr-ai-blue-400: #60A5FA;
  --dr-ai-blue-500: #3B82F6;
  --dr-ai-blue-600: #2563EB;
  --dr-ai-blue-700: #1D4ED8;
  --dr-ai-blue-800: #1E40AF;
  --dr-ai-blue-900: #1E3A8A;
  --dr-ai-blue-950: #172554;

  /* Gray */
  --dr-ai-gray-0: #FFFFFF;
  --dr-ai-gray-50: #F8FAFC;
  --dr-ai-gray-100: #F1F5F9;
  --dr-ai-gray-200: #E2E8F0;
  --dr-ai-gray-300: #CBD5E1;
  --dr-ai-gray-400: #94A3B8;
  --dr-ai-gray-500: #64748B;
  --dr-ai-gray-600: #475569;
  --dr-ai-gray-700: #334155;
  --dr-ai-gray-800: #1E293B;
  --dr-ai-gray-900: #0F172A;
  --dr-ai-gray-950: #020617;

  /* Green */
  --dr-ai-green-50: #F0FDF4;
  --dr-ai-green-100: #DCFCE7;
  --dr-ai-green-200: #BBF7D0;
  --dr-ai-green-500: #22C55E;
  --dr-ai-green-600: #16A34A;
  --dr-ai-green-700: #15803D;

  /* Red */
  --dr-ai-red-50: #FEF2F2;
  --dr-ai-red-100: #FEE2E2;
  --dr-ai-red-200: #FECACA;
  --dr-ai-red-500: #EF4444;
  --dr-ai-red-600: #DC2626;
  --dr-ai-red-700: #B91C1C;

  /* Yellow */
  --dr-ai-yellow-50: #FEFCE8;
  --dr-ai-yellow-100: #FEF9C3;
  --dr-ai-yellow-200: #FEF08A;
  --dr-ai-yellow-500: #EAB308;
  --dr-ai-yellow-600: #CA8A04;
  --dr-ai-yellow-700: #A16207;

  /* Teal */
  --dr-ai-teal-50: #F0FDFA;
  --dr-ai-teal-100: #CCFBF1;
  --dr-ai-teal-200: #99F6E4;
  --dr-ai-teal-500: #14B8A6;
  --dr-ai-teal-600: #0D9488;
  --dr-ai-teal-700: #0F766E;

  /* ─── Typography ─── */
  --dr-ai-font-family-base: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --dr-ai-font-family-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;

  --dr-ai-font-weight-regular: 400;
  --dr-ai-font-weight-medium: 500;
  --dr-ai-font-weight-semibold: 600;
  --dr-ai-font-weight-bold: 700;

  /* ─── Spacing ─── */
  --dr-ai-spacing-0: 0px;
  --dr-ai-spacing-2: 2px;
  --dr-ai-spacing-4: 4px;
  --dr-ai-spacing-6: 6px;
  --dr-ai-spacing-8: 8px;
  --dr-ai-spacing-12: 12px;
  --dr-ai-spacing-16: 16px;
  --dr-ai-spacing-20: 20px;
  --dr-ai-spacing-24: 24px;
  --dr-ai-spacing-32: 32px;
  --dr-ai-spacing-40: 40px;
  --dr-ai-spacing-48: 48px;
  --dr-ai-spacing-64: 64px;

  /* ─── Border Radius ─── */
  --dr-ai-radius-none: 0px;
  --dr-ai-radius-sm: 4px;
  --dr-ai-radius-md: 8px;
  --dr-ai-radius-lg: 12px;
  --dr-ai-radius-xl: 16px;
  --dr-ai-radius-full: 9999px;

  /* ─── Shadow ─── */
  --dr-ai-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --dr-ai-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --dr-ai-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --dr-ai-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  /* ─── Layout ─── */
  --dr-ai-layout-topbar-height: 56px;
  --dr-ai-layout-sidebar-width: 240px;
  --dr-ai-layout-sidebar-collapsed: 64px;
  --dr-ai-layout-quick-panel-width: 320px;
  --dr-ai-layout-statusbar-height: 32px;
  --dr-ai-layout-card-gap: 12px;
  --dr-ai-layout-card-min-width: 280px;
  --dr-ai-layout-card-min-height: 200px;

  /* ─── Z-Index ─── */
  --dr-ai-z-base: 0;
  --dr-ai-z-card: 10;
  --dr-ai-z-card-dragging: 20;
  --dr-ai-z-sidebar: 30;
  --dr-ai-z-topbar: 40;
  --dr-ai-z-dropdown: 50;
  --dr-ai-z-overlay: 60;
  --dr-ai-z-modal: 70;
  --dr-ai-z-toast: 80;
  --dr-ai-z-tooltip: 90;
}

/* ─── Light Theme ─── */

:root[data-theme="light"] {
  /* Background */
  --dr-ai-color-bg-page: var(--dr-ai-gray-50);
  --dr-ai-color-bg-card: var(--dr-ai-gray-0);
  --dr-ai-color-bg-card-hover: var(--dr-ai-gray-50);
  --dr-ai-color-bg-elevated: var(--dr-ai-gray-0);
  --dr-ai-color-bg-input: var(--dr-ai-gray-0);
  --dr-ai-color-bg-input-disabled: var(--dr-ai-gray-100);
  --dr-ai-color-bg-sidebar: var(--dr-ai-gray-0);
  --dr-ai-color-bg-overlay: rgba(0, 0, 0, 0.5);

  /* Text */
  --dr-ai-color-text-primary: var(--dr-ai-gray-900);
  --dr-ai-color-text-secondary: var(--dr-ai-gray-500);
  --dr-ai-color-text-tertiary: var(--dr-ai-gray-400);
  --dr-ai-color-text-disabled: var(--dr-ai-gray-300);
  --dr-ai-color-text-inverse: var(--dr-ai-gray-0);
  --dr-ai-color-text-link: var(--dr-ai-blue-600);
  --dr-ai-color-text-error: var(--dr-ai-red-600);

  /* Border */
  --dr-ai-color-border-default: var(--dr-ai-gray-200);
  --dr-ai-color-border-strong: var(--dr-ai-gray-300);
  --dr-ai-color-border-focus: var(--dr-ai-blue-500);
  --dr-ai-color-border-error: var(--dr-ai-red-500);

  /* Interactive */
  --dr-ai-color-primary: var(--dr-ai-blue-500);
  --dr-ai-color-primary-hover: var(--dr-ai-blue-600);
  --dr-ai-color-primary-active: var(--dr-ai-blue-700);
  --dr-ai-color-primary-subtle: var(--dr-ai-blue-50);

  /* Status */
  --dr-ai-color-success: var(--dr-ai-green-500);
  --dr-ai-color-success-subtle: var(--dr-ai-green-50);
  --dr-ai-color-warning: var(--dr-ai-yellow-500);
  --dr-ai-color-warning-subtle: var(--dr-ai-yellow-50);
  --dr-ai-color-error: var(--dr-ai-red-500);
  --dr-ai-color-error-subtle: var(--dr-ai-red-50);
  --dr-ai-color-info: var(--dr-ai-teal-500);
  --dr-ai-color-info-subtle: var(--dr-ai-teal-50);

  /* EMR Status */
  --dr-ai-color-status-waiting: var(--dr-ai-yellow-500);
  --dr-ai-color-status-in-progress: var(--dr-ai-blue-500);
  --dr-ai-color-status-completed: var(--dr-ai-green-500);
  --dr-ai-color-status-emergency: var(--dr-ai-red-600);
  --dr-ai-color-status-cancelled: var(--dr-ai-gray-400);

  /* EMR Range */
  --dr-ai-color-range-normal: var(--dr-ai-green-600);
  --dr-ai-color-range-abnormal-low: var(--dr-ai-yellow-600);
  --dr-ai-color-range-abnormal-high: var(--dr-ai-red-600);
  --dr-ai-color-range-critical: var(--dr-ai-red-700);
}

/* ─── Dark Theme ─── */

:root[data-theme="dark"] {
  /* Background */
  --dr-ai-color-bg-page: var(--dr-ai-gray-950);
  --dr-ai-color-bg-card: var(--dr-ai-gray-900);
  --dr-ai-color-bg-card-hover: var(--dr-ai-gray-800);
  --dr-ai-color-bg-elevated: var(--dr-ai-gray-800);
  --dr-ai-color-bg-input: var(--dr-ai-gray-800);
  --dr-ai-color-bg-input-disabled: var(--dr-ai-gray-900);
  --dr-ai-color-bg-sidebar: var(--dr-ai-gray-900);
  --dr-ai-color-bg-overlay: rgba(0, 0, 0, 0.7);

  /* Text */
  --dr-ai-color-text-primary: var(--dr-ai-gray-50);
  --dr-ai-color-text-secondary: var(--dr-ai-gray-400);
  --dr-ai-color-text-tertiary: var(--dr-ai-gray-500);
  --dr-ai-color-text-disabled: var(--dr-ai-gray-600);
  --dr-ai-color-text-inverse: var(--dr-ai-gray-900);
  --dr-ai-color-text-link: var(--dr-ai-blue-400);
  --dr-ai-color-text-error: #F87171;

  /* Border */
  --dr-ai-color-border-default: var(--dr-ai-gray-700);
  --dr-ai-color-border-strong: var(--dr-ai-gray-600);
  --dr-ai-color-border-focus: var(--dr-ai-blue-400);
  --dr-ai-color-border-error: #F87171;

  /* Interactive */
  --dr-ai-color-primary: var(--dr-ai-blue-500);
  --dr-ai-color-primary-hover: var(--dr-ai-blue-400);
  --dr-ai-color-primary-active: var(--dr-ai-blue-300);
  --dr-ai-color-primary-subtle: var(--dr-ai-blue-950);

  /* Status */
  --dr-ai-color-success: var(--dr-ai-green-500);
  --dr-ai-color-success-subtle: #052E16;
  --dr-ai-color-warning: var(--dr-ai-yellow-500);
  --dr-ai-color-warning-subtle: #422006;
  --dr-ai-color-error: var(--dr-ai-red-500);
  --dr-ai-color-error-subtle: #450A0A;
  --dr-ai-color-info: var(--dr-ai-teal-500);
  --dr-ai-color-info-subtle: #042F2E;

  /* EMR Status */
  --dr-ai-color-status-waiting: #FACC15;
  --dr-ai-color-status-in-progress: var(--dr-ai-blue-400);
  --dr-ai-color-status-completed: #4ADE80;
  --dr-ai-color-status-emergency: var(--dr-ai-red-500);
  --dr-ai-color-status-cancelled: var(--dr-ai-gray-500);

  /* EMR Range */
  --dr-ai-color-range-normal: #4ADE80;
  --dr-ai-color-range-abnormal-low: #FACC15;
  --dr-ai-color-range-abnormal-high: #F87171;
  --dr-ai-color-range-critical: var(--dr-ai-red-500);

  /* Shadow override for dark mode */
  --dr-ai-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --dr-ai-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --dr-ai-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
  --dr-ai-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
}

/* ─── System Preference Auto-detect ─── */

@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    /* dark theme tokens here (same as above) */
  }
}
```

---

## Tailwind CSS 연동

Tailwind CSS를 사용하는 경우 `tailwind.config.ts`에서 토큰을 매핑합니다.

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--dr-ai-color-primary)',
          hover: 'var(--dr-ai-color-primary-hover)',
          active: 'var(--dr-ai-color-primary-active)',
          subtle: 'var(--dr-ai-color-primary-subtle)',
        },
        success: {
          DEFAULT: 'var(--dr-ai-color-success)',
          subtle: 'var(--dr-ai-color-success-subtle)',
        },
        warning: {
          DEFAULT: 'var(--dr-ai-color-warning)',
          subtle: 'var(--dr-ai-color-warning-subtle)',
        },
        error: {
          DEFAULT: 'var(--dr-ai-color-error)',
          subtle: 'var(--dr-ai-color-error-subtle)',
        },
        bg: {
          page: 'var(--dr-ai-color-bg-page)',
          card: 'var(--dr-ai-color-bg-card)',
          elevated: 'var(--dr-ai-color-bg-elevated)',
          input: 'var(--dr-ai-color-bg-input)',
          sidebar: 'var(--dr-ai-color-bg-sidebar)',
        },
        text: {
          primary: 'var(--dr-ai-color-text-primary)',
          secondary: 'var(--dr-ai-color-text-secondary)',
          tertiary: 'var(--dr-ai-color-text-tertiary)',
        },
        border: {
          DEFAULT: 'var(--dr-ai-color-border-default)',
          strong: 'var(--dr-ai-color-border-strong)',
          focus: 'var(--dr-ai-color-border-focus)',
        },
      },
      spacing: {
        'ceds-2': 'var(--dr-ai-spacing-2)',
        'ceds-4': 'var(--dr-ai-spacing-4)',
        'ceds-8': 'var(--dr-ai-spacing-8)',
        'ceds-12': 'var(--dr-ai-spacing-12)',
        'ceds-16': 'var(--dr-ai-spacing-16)',
        'ceds-24': 'var(--dr-ai-spacing-24)',
        'ceds-32': 'var(--dr-ai-spacing-32)',
      },
      borderRadius: {
        'ceds-sm': 'var(--dr-ai-radius-sm)',
        'ceds-md': 'var(--dr-ai-radius-md)',
        'ceds-lg': 'var(--dr-ai-radius-lg)',
        'ceds-xl': 'var(--dr-ai-radius-xl)',
      },
      fontFamily: {
        sans: ['var(--dr-ai-font-family-base)'],
        mono: ['var(--dr-ai-font-family-mono)'],
      },
    },
  },
};

export default config;
```

---

> 관련 문서: [컬러 시스템](../design-system/foundation/colors.md) | [타이포그래피](../design-system/foundation/typography.md) | [스페이싱](../design-system/foundation/spacing.md)
