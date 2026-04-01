# 디자인 토큰 (CSS Variables)

개발 시 사용할 CEDS 디자인 토큰의 CSS 변수 정의입니다.
`foundation/` 문서의 디자인 값을 코드에서 직접 사용할 수 있는 형태로 제공합니다.

---

## 전체 토큰 파일

```css
/* ============================================
   CEDS (Cloud EMR Design System) - Design Tokens
   ============================================ */

/* ─── Scale Colors (고정) ─── */

:root {
  /* Blue */
  --ceds-blue-50: #EFF6FF;
  --ceds-blue-100: #DBEAFE;
  --ceds-blue-200: #BFDBFE;
  --ceds-blue-300: #93C5FD;
  --ceds-blue-400: #60A5FA;
  --ceds-blue-500: #3B82F6;
  --ceds-blue-600: #2563EB;
  --ceds-blue-700: #1D4ED8;
  --ceds-blue-800: #1E40AF;
  --ceds-blue-900: #1E3A8A;
  --ceds-blue-950: #172554;

  /* Gray */
  --ceds-gray-0: #FFFFFF;
  --ceds-gray-50: #F8FAFC;
  --ceds-gray-100: #F1F5F9;
  --ceds-gray-200: #E2E8F0;
  --ceds-gray-300: #CBD5E1;
  --ceds-gray-400: #94A3B8;
  --ceds-gray-500: #64748B;
  --ceds-gray-600: #475569;
  --ceds-gray-700: #334155;
  --ceds-gray-800: #1E293B;
  --ceds-gray-900: #0F172A;
  --ceds-gray-950: #020617;

  /* Green */
  --ceds-green-50: #F0FDF4;
  --ceds-green-100: #DCFCE7;
  --ceds-green-200: #BBF7D0;
  --ceds-green-500: #22C55E;
  --ceds-green-600: #16A34A;
  --ceds-green-700: #15803D;

  /* Red */
  --ceds-red-50: #FEF2F2;
  --ceds-red-100: #FEE2E2;
  --ceds-red-200: #FECACA;
  --ceds-red-500: #EF4444;
  --ceds-red-600: #DC2626;
  --ceds-red-700: #B91C1C;

  /* Yellow */
  --ceds-yellow-50: #FEFCE8;
  --ceds-yellow-100: #FEF9C3;
  --ceds-yellow-200: #FEF08A;
  --ceds-yellow-500: #EAB308;
  --ceds-yellow-600: #CA8A04;
  --ceds-yellow-700: #A16207;

  /* Teal */
  --ceds-teal-50: #F0FDFA;
  --ceds-teal-100: #CCFBF1;
  --ceds-teal-200: #99F6E4;
  --ceds-teal-500: #14B8A6;
  --ceds-teal-600: #0D9488;
  --ceds-teal-700: #0F766E;

  /* ─── Typography ─── */
  --ceds-font-family-base: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --ceds-font-family-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;

  --ceds-font-weight-regular: 400;
  --ceds-font-weight-medium: 500;
  --ceds-font-weight-semibold: 600;
  --ceds-font-weight-bold: 700;

  /* ─── Spacing ─── */
  --ceds-spacing-0: 0px;
  --ceds-spacing-2: 2px;
  --ceds-spacing-4: 4px;
  --ceds-spacing-6: 6px;
  --ceds-spacing-8: 8px;
  --ceds-spacing-12: 12px;
  --ceds-spacing-16: 16px;
  --ceds-spacing-20: 20px;
  --ceds-spacing-24: 24px;
  --ceds-spacing-32: 32px;
  --ceds-spacing-40: 40px;
  --ceds-spacing-48: 48px;
  --ceds-spacing-64: 64px;

  /* ─── Border Radius ─── */
  --ceds-radius-none: 0px;
  --ceds-radius-sm: 4px;
  --ceds-radius-md: 8px;
  --ceds-radius-lg: 12px;
  --ceds-radius-xl: 16px;
  --ceds-radius-full: 9999px;

  /* ─── Shadow ─── */
  --ceds-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --ceds-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --ceds-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --ceds-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  /* ─── Layout ─── */
  --ceds-layout-topbar-height: 56px;
  --ceds-layout-sidebar-width: 240px;
  --ceds-layout-sidebar-collapsed: 64px;
  --ceds-layout-quick-panel-width: 320px;
  --ceds-layout-statusbar-height: 32px;
  --ceds-layout-card-gap: 12px;
  --ceds-layout-card-min-width: 280px;
  --ceds-layout-card-min-height: 200px;

  /* ─── Z-Index ─── */
  --ceds-z-base: 0;
  --ceds-z-card: 10;
  --ceds-z-card-dragging: 20;
  --ceds-z-sidebar: 30;
  --ceds-z-topbar: 40;
  --ceds-z-dropdown: 50;
  --ceds-z-overlay: 60;
  --ceds-z-modal: 70;
  --ceds-z-toast: 80;
  --ceds-z-tooltip: 90;
}

/* ─── Light Theme ─── */

:root[data-theme="light"] {
  /* Background */
  --ceds-color-bg-page: var(--ceds-gray-50);
  --ceds-color-bg-card: var(--ceds-gray-0);
  --ceds-color-bg-card-hover: var(--ceds-gray-50);
  --ceds-color-bg-elevated: var(--ceds-gray-0);
  --ceds-color-bg-input: var(--ceds-gray-0);
  --ceds-color-bg-input-disabled: var(--ceds-gray-100);
  --ceds-color-bg-sidebar: var(--ceds-gray-0);
  --ceds-color-bg-overlay: rgba(0, 0, 0, 0.5);

  /* Text */
  --ceds-color-text-primary: var(--ceds-gray-900);
  --ceds-color-text-secondary: var(--ceds-gray-500);
  --ceds-color-text-tertiary: var(--ceds-gray-400);
  --ceds-color-text-disabled: var(--ceds-gray-300);
  --ceds-color-text-inverse: var(--ceds-gray-0);
  --ceds-color-text-link: var(--ceds-blue-600);
  --ceds-color-text-error: var(--ceds-red-600);

  /* Border */
  --ceds-color-border-default: var(--ceds-gray-200);
  --ceds-color-border-strong: var(--ceds-gray-300);
  --ceds-color-border-focus: var(--ceds-blue-500);
  --ceds-color-border-error: var(--ceds-red-500);

  /* Interactive */
  --ceds-color-primary: var(--ceds-blue-500);
  --ceds-color-primary-hover: var(--ceds-blue-600);
  --ceds-color-primary-active: var(--ceds-blue-700);
  --ceds-color-primary-subtle: var(--ceds-blue-50);

  /* Status */
  --ceds-color-success: var(--ceds-green-500);
  --ceds-color-success-subtle: var(--ceds-green-50);
  --ceds-color-warning: var(--ceds-yellow-500);
  --ceds-color-warning-subtle: var(--ceds-yellow-50);
  --ceds-color-error: var(--ceds-red-500);
  --ceds-color-error-subtle: var(--ceds-red-50);
  --ceds-color-info: var(--ceds-teal-500);
  --ceds-color-info-subtle: var(--ceds-teal-50);

  /* EMR Status */
  --ceds-color-status-waiting: var(--ceds-yellow-500);
  --ceds-color-status-in-progress: var(--ceds-blue-500);
  --ceds-color-status-completed: var(--ceds-green-500);
  --ceds-color-status-emergency: var(--ceds-red-600);
  --ceds-color-status-cancelled: var(--ceds-gray-400);

  /* EMR Range */
  --ceds-color-range-normal: var(--ceds-green-600);
  --ceds-color-range-abnormal-low: var(--ceds-yellow-600);
  --ceds-color-range-abnormal-high: var(--ceds-red-600);
  --ceds-color-range-critical: var(--ceds-red-700);
}

/* ─── Dark Theme ─── */

:root[data-theme="dark"] {
  /* Background */
  --ceds-color-bg-page: var(--ceds-gray-950);
  --ceds-color-bg-card: var(--ceds-gray-900);
  --ceds-color-bg-card-hover: var(--ceds-gray-800);
  --ceds-color-bg-elevated: var(--ceds-gray-800);
  --ceds-color-bg-input: var(--ceds-gray-800);
  --ceds-color-bg-input-disabled: var(--ceds-gray-900);
  --ceds-color-bg-sidebar: var(--ceds-gray-900);
  --ceds-color-bg-overlay: rgba(0, 0, 0, 0.7);

  /* Text */
  --ceds-color-text-primary: var(--ceds-gray-50);
  --ceds-color-text-secondary: var(--ceds-gray-400);
  --ceds-color-text-tertiary: var(--ceds-gray-500);
  --ceds-color-text-disabled: var(--ceds-gray-600);
  --ceds-color-text-inverse: var(--ceds-gray-900);
  --ceds-color-text-link: var(--ceds-blue-400);
  --ceds-color-text-error: #F87171;

  /* Border */
  --ceds-color-border-default: var(--ceds-gray-700);
  --ceds-color-border-strong: var(--ceds-gray-600);
  --ceds-color-border-focus: var(--ceds-blue-400);
  --ceds-color-border-error: #F87171;

  /* Interactive */
  --ceds-color-primary: var(--ceds-blue-500);
  --ceds-color-primary-hover: var(--ceds-blue-400);
  --ceds-color-primary-active: var(--ceds-blue-300);
  --ceds-color-primary-subtle: var(--ceds-blue-950);

  /* Status */
  --ceds-color-success: var(--ceds-green-500);
  --ceds-color-success-subtle: #052E16;
  --ceds-color-warning: var(--ceds-yellow-500);
  --ceds-color-warning-subtle: #422006;
  --ceds-color-error: var(--ceds-red-500);
  --ceds-color-error-subtle: #450A0A;
  --ceds-color-info: var(--ceds-teal-500);
  --ceds-color-info-subtle: #042F2E;

  /* EMR Status */
  --ceds-color-status-waiting: #FACC15;
  --ceds-color-status-in-progress: var(--ceds-blue-400);
  --ceds-color-status-completed: #4ADE80;
  --ceds-color-status-emergency: var(--ceds-red-500);
  --ceds-color-status-cancelled: var(--ceds-gray-500);

  /* EMR Range */
  --ceds-color-range-normal: #4ADE80;
  --ceds-color-range-abnormal-low: #FACC15;
  --ceds-color-range-abnormal-high: #F87171;
  --ceds-color-range-critical: var(--ceds-red-500);

  /* Shadow override for dark mode */
  --ceds-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --ceds-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --ceds-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
  --ceds-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
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
          DEFAULT: 'var(--ceds-color-primary)',
          hover: 'var(--ceds-color-primary-hover)',
          active: 'var(--ceds-color-primary-active)',
          subtle: 'var(--ceds-color-primary-subtle)',
        },
        success: {
          DEFAULT: 'var(--ceds-color-success)',
          subtle: 'var(--ceds-color-success-subtle)',
        },
        warning: {
          DEFAULT: 'var(--ceds-color-warning)',
          subtle: 'var(--ceds-color-warning-subtle)',
        },
        error: {
          DEFAULT: 'var(--ceds-color-error)',
          subtle: 'var(--ceds-color-error-subtle)',
        },
        bg: {
          page: 'var(--ceds-color-bg-page)',
          card: 'var(--ceds-color-bg-card)',
          elevated: 'var(--ceds-color-bg-elevated)',
          input: 'var(--ceds-color-bg-input)',
          sidebar: 'var(--ceds-color-bg-sidebar)',
        },
        text: {
          primary: 'var(--ceds-color-text-primary)',
          secondary: 'var(--ceds-color-text-secondary)',
          tertiary: 'var(--ceds-color-text-tertiary)',
        },
        border: {
          DEFAULT: 'var(--ceds-color-border-default)',
          strong: 'var(--ceds-color-border-strong)',
          focus: 'var(--ceds-color-border-focus)',
        },
      },
      spacing: {
        'ceds-2': 'var(--ceds-spacing-2)',
        'ceds-4': 'var(--ceds-spacing-4)',
        'ceds-8': 'var(--ceds-spacing-8)',
        'ceds-12': 'var(--ceds-spacing-12)',
        'ceds-16': 'var(--ceds-spacing-16)',
        'ceds-24': 'var(--ceds-spacing-24)',
        'ceds-32': 'var(--ceds-spacing-32)',
      },
      borderRadius: {
        'ceds-sm': 'var(--ceds-radius-sm)',
        'ceds-md': 'var(--ceds-radius-md)',
        'ceds-lg': 'var(--ceds-radius-lg)',
        'ceds-xl': 'var(--ceds-radius-xl)',
      },
      fontFamily: {
        sans: ['var(--ceds-font-family-base)'],
        mono: ['var(--ceds-font-family-mono)'],
      },
    },
  },
};

export default config;
```

---

> 관련 문서: [컬러 시스템](../design-system/foundation/colors.md) | [타이포그래피](../design-system/foundation/typography.md) | [스페이싱](../design-system/foundation/spacing.md)
