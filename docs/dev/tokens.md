# 디자인 토큰 (CSS Variables)

의사랑AI 디자인 토큰은 **3 Layer 구조**로 설계되어, AI 바이브 코딩에서도 정확한 디자인 구현이 가능합니다.

```
Layer 1: Scale Colors      → 고정 색상값 (blue-500, gray-200 등)
Layer 2: Semantic Tokens    → 의미 기반 (color-bg-page, color-text-primary 등)
Layer 3: Component Tokens   → 컴포넌트별 상태 (btn-primary-bg-hover 등)
```

---

## Layer 1: Scale Colors (고정)

```css
:root {
  /* Blue */
  --blue-50: #EFF6FF;   --blue-100: #DBEAFE;  --blue-200: #BFDBFE;
  --blue-300: #93C5FD;  --blue-400: #60A5FA;  --blue-500: #3B82F6;
  --blue-600: #2563EB;  --blue-700: #1D4ED8;  --blue-800: #1E40AF;
  --blue-900: #1E3A8A;  --blue-950: #172554;

  /* Gray */
  --gray-0: #FFFFFF;    --gray-50: #F8FAFC;   --gray-100: #F1F5F9;
  --gray-200: #E2E8F0;  --gray-300: #CBD5E1;  --gray-400: #94A3B8;
  --gray-500: #64748B;  --gray-600: #475569;  --gray-700: #334155;
  --gray-800: #1E293B;  --gray-900: #0F172A;  --gray-950: #020617;

  /* Green */
  --green-50: #F0FDF4;  --green-100: #DCFCE7;  --green-200: #BBF7D0;
  --green-500: #22C55E; --green-600: #16A34A;  --green-700: #15803D;

  /* Red */
  --red-50: #FEF2F2;    --red-100: #FEE2E2;   --red-200: #FECACA;
  --red-500: #EF4444;   --red-600: #DC2626;   --red-700: #B91C1C;

  /* Yellow */
  --yellow-50: #FEFCE8;  --yellow-100: #FEF9C3; --yellow-200: #FEF08A;
  --yellow-500: #EAB308; --yellow-600: #CA8A04;  --yellow-700: #A16207;

  /* Teal */
  --teal-50: #F0FDFA;   --teal-100: #CCFBF1;  --teal-200: #99F6E4;
  --teal-500: #14B8A6;  --teal-600: #0D9488;  --teal-700: #0F766E;

  /* Typography */
  --font-family-base: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-0: 0px;  --spacing-2: 2px;   --spacing-4: 4px;
  --spacing-6: 6px;  --spacing-8: 8px;   --spacing-12: 12px;
  --spacing-16: 16px; --spacing-20: 20px; --spacing-24: 24px;
  --spacing-32: 32px; --spacing-40: 40px; --spacing-48: 48px;
  --spacing-64: 64px;

  /* Radius */
  --radius-none: 0px;  --radius-sm: 4px;   --radius-md: 8px;
  --radius-lg: 12px;   --radius-xl: 16px;  --radius-full: 9999px;

  /* Shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1);

  /* Layout */
  --layout-topbar-height: 56px;
  --layout-sidebar-width: 240px;
  --layout-sidebar-collapsed: 64px;
  --layout-quick-panel-width: 320px;
  --layout-statusbar-height: 32px;
  --layout-card-gap: 12px;

  /* Z-Index */
  --z-base: 0;       --z-card: 10;      --z-card-dragging: 20;
  --z-sidebar: 30;   --z-topbar: 40;    --z-dropdown: 50;
  --z-overlay: 60;   --z-modal: 70;     --z-toast: 80;
  --z-tooltip: 90;
}
```

---

## Layer 2: Semantic Tokens (Light / Dark)

```css
/* ─── Light Theme ─── */
:root[data-theme="light"] {
  /* Background */
  --color-bg-page: var(--gray-50);
  --color-bg-card: var(--gray-0);
  --color-bg-card-hover: var(--gray-50);
  --color-bg-elevated: var(--gray-0);
  --color-bg-input: var(--gray-0);
  --color-bg-input-disabled: var(--gray-100);
  --color-bg-sidebar: var(--gray-0);
  --color-bg-overlay: rgba(0, 0, 0, 0.5);

  /* Text */
  --color-text-primary: var(--gray-900);
  --color-text-secondary: var(--gray-500);
  --color-text-tertiary: var(--gray-400);
  --color-text-disabled: var(--gray-300);
  --color-text-inverse: var(--gray-0);
  --color-text-link: var(--blue-600);
  --color-text-error: var(--red-600);

  /* Border */
  --color-border-default: var(--gray-200);
  --color-border-strong: var(--gray-300);
  --color-border-focus: var(--blue-500);
  --color-border-error: var(--red-500);

  /* Status */
  --color-success: var(--green-500);
  --color-success-subtle: var(--green-50);
  --color-warning: var(--yellow-500);
  --color-warning-subtle: var(--yellow-50);
  --color-error: var(--red-500);
  --color-error-subtle: var(--red-50);
  --color-info: var(--teal-500);
  --color-info-subtle: var(--teal-50);
}

/* ─── Dark Theme ─── */
:root[data-theme="dark"] {
  --color-bg-page: var(--gray-950);
  --color-bg-card: var(--gray-900);
  --color-bg-card-hover: var(--gray-800);
  --color-bg-elevated: var(--gray-800);
  --color-bg-input: var(--gray-800);
  --color-bg-input-disabled: var(--gray-900);
  --color-bg-sidebar: var(--gray-900);
  --color-bg-overlay: rgba(0, 0, 0, 0.7);

  --color-text-primary: var(--gray-50);
  --color-text-secondary: var(--gray-400);
  --color-text-tertiary: var(--gray-500);
  --color-text-disabled: var(--gray-600);
  --color-text-inverse: var(--gray-900);
  --color-text-link: var(--blue-400);
  --color-text-error: #F87171;

  --color-border-default: var(--gray-700);
  --color-border-strong: var(--gray-600);
  --color-border-focus: var(--blue-400);
  --color-border-error: #F87171;

  --color-success: var(--green-500);
  --color-success-subtle: #052E16;
  --color-warning: var(--yellow-500);
  --color-warning-subtle: #422006;
  --color-error: var(--red-500);
  --color-error-subtle: #450A0A;
  --color-info: var(--teal-500);
  --color-info-subtle: #042F2E;

  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.4);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.4);
  --shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.4);
}
```

---

## Layer 3: Component Tokens

### Button

5 Variant x 6 State, Light/Dark 모두 정의.

```css
/* ─── Button: Light Theme ─── */
:root[data-theme="light"] {

  /* Primary */
  --btn-primary-bg: #3B82F6;
  --btn-primary-bg-hover: #2563EB;
  --btn-primary-bg-active: #1D4ED8;
  --btn-primary-bg-disabled: #3B82F6;
  --btn-primary-text: #FFFFFF;
  --btn-primary-text-disabled: rgba(255,255,255,0.6);
  --btn-primary-border: transparent;
  --btn-primary-focus-ring: 0 0 0 3px rgba(59,130,246,0.3);
  --btn-primary-opacity-disabled: 0.5;

  /* Secondary */
  --btn-secondary-bg: #EFF6FF;
  --btn-secondary-bg-hover: #DBEAFE;
  --btn-secondary-bg-active: #BFDBFE;
  --btn-secondary-bg-disabled: #EFF6FF;
  --btn-secondary-text: #2563EB;
  --btn-secondary-text-disabled: rgba(37,99,235,0.5);
  --btn-secondary-border: #BFDBFE;
  --btn-secondary-border-hover: #93C5FD;
  --btn-secondary-focus-ring: 0 0 0 3px rgba(59,130,246,0.2);
  --btn-secondary-opacity-disabled: 0.5;

  /* Outline */
  --btn-outline-bg: transparent;
  --btn-outline-bg-hover: var(--gray-50);
  --btn-outline-bg-active: var(--gray-100);
  --btn-outline-bg-disabled: transparent;
  --btn-outline-text: var(--gray-600);
  --btn-outline-text-hover: var(--gray-700);
  --btn-outline-text-disabled: var(--gray-300);
  --btn-outline-border: var(--gray-200);
  --btn-outline-border-hover: var(--gray-300);
  --btn-outline-focus-ring: 0 0 0 3px rgba(59,130,246,0.2);
  --btn-outline-opacity-disabled: 0.5;

  /* Ghost */
  --btn-ghost-bg: transparent;
  --btn-ghost-bg-hover: var(--gray-100);
  --btn-ghost-bg-active: var(--gray-200);
  --btn-ghost-bg-disabled: transparent;
  --btn-ghost-text: var(--gray-500);
  --btn-ghost-text-hover: var(--gray-700);
  --btn-ghost-text-disabled: var(--gray-300);
  --btn-ghost-border: transparent;
  --btn-ghost-focus-ring: 0 0 0 3px rgba(59,130,246,0.15);
  --btn-ghost-opacity-disabled: 0.5;

  /* Danger */
  --btn-danger-bg: #DC2626;
  --btn-danger-bg-hover: #B91C1C;
  --btn-danger-bg-active: #991B1B;
  --btn-danger-bg-disabled: #DC2626;
  --btn-danger-text: #FFFFFF;
  --btn-danger-text-disabled: rgba(255,255,255,0.6);
  --btn-danger-border: transparent;
  --btn-danger-focus-ring: 0 0 0 3px rgba(220,38,38,0.3);
  --btn-danger-opacity-disabled: 0.5;

  /* Button Sizes */
  --btn-sm-height: 32px;
  --btn-sm-padding: 6px 12px;
  --btn-sm-font-size: 13px;
  --btn-sm-radius: var(--radius-md);

  --btn-md-height: 40px;
  --btn-md-padding: 10px 20px;
  --btn-md-font-size: 14px;
  --btn-md-radius: var(--radius-md);

  --btn-lg-height: 48px;
  --btn-lg-padding: 12px 24px;
  --btn-lg-font-size: 16px;
  --btn-lg-radius: var(--radius-md);

  --btn-font-weight: 600;
  --btn-transition: all 0.15s ease;
  --btn-active-scale: 0.98;
}

/* ─── Button: Dark Theme ─── */
:root[data-theme="dark"] {
  --btn-primary-bg: #3B82F6;
  --btn-primary-bg-hover: #60A5FA;
  --btn-primary-bg-active: #93C5FD;
  --btn-primary-bg-disabled: #3B82F6;
  --btn-primary-text: #FFFFFF;
  --btn-primary-text-disabled: rgba(255,255,255,0.4);
  --btn-primary-border: transparent;
  --btn-primary-focus-ring: 0 0 0 3px rgba(96,165,250,0.3);

  --btn-secondary-bg: #172554;
  --btn-secondary-bg-hover: #1E3A8A;
  --btn-secondary-bg-active: #1E40AF;
  --btn-secondary-bg-disabled: #172554;
  --btn-secondary-text: #60A5FA;
  --btn-secondary-text-disabled: rgba(96,165,250,0.4);
  --btn-secondary-border: #1E3A8A;
  --btn-secondary-border-hover: #1E40AF;
  --btn-secondary-focus-ring: 0 0 0 3px rgba(96,165,250,0.2);

  --btn-outline-bg: transparent;
  --btn-outline-bg-hover: var(--gray-800);
  --btn-outline-bg-active: var(--gray-700);
  --btn-outline-text: var(--gray-300);
  --btn-outline-text-hover: var(--gray-100);
  --btn-outline-text-disabled: var(--gray-600);
  --btn-outline-border: var(--gray-700);
  --btn-outline-border-hover: var(--gray-600);

  --btn-ghost-bg: transparent;
  --btn-ghost-bg-hover: var(--gray-800);
  --btn-ghost-bg-active: var(--gray-700);
  --btn-ghost-text: var(--gray-400);
  --btn-ghost-text-hover: var(--gray-200);
  --btn-ghost-text-disabled: var(--gray-600);

  --btn-danger-bg: #DC2626;
  --btn-danger-bg-hover: #EF4444;
  --btn-danger-bg-active: #F87171;
  --btn-danger-bg-disabled: #DC2626;
  --btn-danger-text: #FFFFFF;
  --btn-danger-focus-ring: 0 0 0 3px rgba(239,68,68,0.3);
}
```

### Input

```css
/* ─── Input: Light Theme ─── */
:root[data-theme="light"] {
  --input-bg: var(--gray-0);
  --input-bg-hover: var(--gray-0);
  --input-bg-focus: var(--gray-0);
  --input-bg-disabled: var(--gray-100);
  --input-bg-readonly: var(--gray-50);
  --input-bg-error: var(--gray-0);

  --input-text: var(--gray-900);
  --input-text-placeholder: var(--gray-400);
  --input-text-disabled: var(--gray-300);
  --input-text-readonly: var(--gray-500);

  --input-border: var(--gray-200);
  --input-border-hover: var(--gray-300);
  --input-border-focus: #3B82F6;
  --input-border-error: #EF4444;
  --input-border-disabled: var(--gray-200);
  --input-border-readonly: transparent;

  --input-focus-ring: 0 0 0 3px rgba(59,130,246,0.15);
  --input-error-ring: 0 0 0 3px rgba(239,68,68,0.1);

  --input-label-color: var(--gray-600);
  --input-label-error-color: #DC2626;
  --input-label-disabled-color: var(--gray-300);
  --input-helper-color: var(--gray-400);
  --input-error-msg-color: #DC2626;

  --input-sm-height: 32px;
  --input-sm-font-size: 13px;
  --input-sm-padding: 6px 10px;

  --input-md-height: 40px;
  --input-md-font-size: 14px;
  --input-md-padding: 10px 12px;

  --input-lg-height: 48px;
  --input-lg-font-size: 16px;
  --input-lg-padding: 12px 14px;

  --input-radius: var(--radius-md);
  --input-transition: border-color 0.15s, box-shadow 0.15s;
}

/* ─── Input: Dark Theme ─── */
:root[data-theme="dark"] {
  --input-bg: var(--gray-800);
  --input-bg-hover: var(--gray-800);
  --input-bg-focus: var(--gray-800);
  --input-bg-disabled: var(--gray-900);
  --input-bg-readonly: var(--gray-900);
  --input-bg-error: var(--gray-800);

  --input-text: var(--gray-50);
  --input-text-placeholder: var(--gray-500);
  --input-text-disabled: var(--gray-600);
  --input-text-readonly: var(--gray-400);

  --input-border: var(--gray-700);
  --input-border-hover: var(--gray-600);
  --input-border-focus: #60A5FA;
  --input-border-error: #F87171;
  --input-border-disabled: var(--gray-700);
  --input-border-readonly: transparent;

  --input-focus-ring: 0 0 0 3px rgba(96,165,250,0.2);
  --input-error-ring: 0 0 0 3px rgba(248,113,113,0.15);

  --input-label-color: var(--gray-400);
  --input-label-error-color: #F87171;
  --input-label-disabled-color: var(--gray-600);
  --input-helper-color: var(--gray-500);
  --input-error-msg-color: #F87171;
}
```

### Badge

```css
/* ─── Badge: Light Theme ─── */
:root[data-theme="light"] {
  /* Solid variant */
  --badge-solid-blue-bg: #3B82F6;      --badge-solid-blue-text: #FFFFFF;
  --badge-solid-green-bg: #22C55E;     --badge-solid-green-text: #FFFFFF;
  --badge-solid-red-bg: #DC2626;       --badge-solid-red-text: #FFFFFF;
  --badge-solid-yellow-bg: #EAB308;    --badge-solid-yellow-text: #FFFFFF;
  --badge-solid-teal-bg: #14B8A6;      --badge-solid-teal-text: #FFFFFF;
  --badge-solid-gray-bg: #64748B;      --badge-solid-gray-text: #FFFFFF;

  /* Subtle variant */
  --badge-subtle-blue-bg: #DBEAFE;     --badge-subtle-blue-text: #1D4ED8;
  --badge-subtle-green-bg: #DCFCE7;    --badge-subtle-green-text: #15803D;
  --badge-subtle-red-bg: #FEE2E2;      --badge-subtle-red-text: #DC2626;
  --badge-subtle-yellow-bg: #FEF9C3;   --badge-subtle-yellow-text: #A16207;
  --badge-subtle-teal-bg: #CCFBF1;     --badge-subtle-teal-text: #0F766E;
  --badge-subtle-gray-bg: #F1F5F9;     --badge-subtle-gray-text: #475569;

  /* Sizes */
  --badge-xs-font-size: 11px;   --badge-xs-padding: 1px 6px;
  --badge-sm-font-size: 12px;   --badge-sm-padding: 2px 8px;
  --badge-md-font-size: 14px;   --badge-md-padding: 4px 10px;
  --badge-lg-font-size: 16px;   --badge-lg-padding: 6px 12px;
  --badge-radius: var(--radius-full);
  --badge-font-weight: 500;
}

/* ─── Badge: Dark Theme ─── */
:root[data-theme="dark"] {
  --badge-solid-blue-bg: #3B82F6;      --badge-solid-blue-text: #FFFFFF;
  --badge-solid-green-bg: #22C55E;     --badge-solid-green-text: #FFFFFF;
  --badge-solid-red-bg: #DC2626;       --badge-solid-red-text: #FFFFFF;
  --badge-solid-yellow-bg: #EAB308;    --badge-solid-yellow-text: #FFFFFF;
  --badge-solid-teal-bg: #14B8A6;      --badge-solid-teal-text: #FFFFFF;
  --badge-solid-gray-bg: #64748B;      --badge-solid-gray-text: #FFFFFF;

  --badge-subtle-blue-bg: #172554;     --badge-subtle-blue-text: #60A5FA;
  --badge-subtle-green-bg: #052E16;    --badge-subtle-green-text: #4ADE80;
  --badge-subtle-red-bg: #450A0A;      --badge-subtle-red-text: #F87171;
  --badge-subtle-yellow-bg: #422006;   --badge-subtle-yellow-text: #FACC15;
  --badge-subtle-teal-bg: #042F2E;     --badge-subtle-teal-text: #14B8A6;
  --badge-subtle-gray-bg: #334155;     --badge-subtle-gray-text: #94A3B8;
}
```

### Modal

```css
/* ─── Modal: Light Theme ─── */
:root[data-theme="light"] {
  --modal-bg: var(--gray-0);
  --modal-overlay: rgba(0,0,0,0.5);
  --modal-shadow: 0 20px 25px -5px rgba(0,0,0,0.15);
  --modal-radius: 16px;

  --modal-title-color: var(--gray-900);
  --modal-body-color: var(--gray-600);

  --modal-danger-title-color: #DC2626;
  --modal-danger-banner-bg: #FEF2F2;
  --modal-danger-banner-border: #FECACA;
  --modal-danger-banner-text: #DC2626;

  --modal-error-icon-bg: #FEE2E2;
  --modal-error-icon-color: #DC2626;

  --modal-info-highlight-bg: var(--gray-50);

  --modal-sm-width: 320px;
  --modal-md-width: 480px;
  --modal-lg-width: 640px;
  --modal-full-width: 90vw;
}

/* ─── Modal: Dark Theme ─── */
:root[data-theme="dark"] {
  --modal-bg: var(--gray-800);
  --modal-overlay: rgba(0,0,0,0.7);
  --modal-shadow: 0 20px 25px -5px rgba(0,0,0,0.4);

  --modal-title-color: var(--gray-50);
  --modal-body-color: var(--gray-300);

  --modal-danger-title-color: #F87171;
  --modal-danger-banner-bg: #450A0A;
  --modal-danger-banner-border: #7F1D1D;
  --modal-danger-banner-text: #F87171;

  --modal-error-icon-bg: #450A0A;
  --modal-error-icon-color: #F87171;

  --modal-info-highlight-bg: var(--gray-900);
}
```

### Table

```css
/* ─── Table: Light Theme ─── */
:root[data-theme="light"] {
  --table-bg: var(--gray-0);
  --table-header-bg: var(--gray-50);
  --table-border: var(--gray-200);
  --table-row-hover-bg: var(--gray-50);
  --table-row-selected-bg: rgba(59,130,246,0.08);
  --table-row-emergency-bg: rgba(239,68,68,0.06);
  --table-row-warning-bg: rgba(234,179,8,0.04);

  --table-text: var(--gray-600);
  --table-text-header: var(--gray-700);
  --table-text-name: var(--gray-900);
  --table-text-dim: var(--gray-400);
  --table-text-mono: var(--gray-600);

  --table-val-high: #DC2626;
  --table-val-low: #A16207;
  --table-val-normal: #16A34A;

  --table-radius: var(--radius-lg);
  --table-cell-padding: 10px 12px;
  --table-compact-padding: 7px 12px;

  --table-footer-bg: var(--gray-50);
  --table-footer-text: var(--gray-500);
  --table-empty-icon-size: 32px;
}

/* ─── Table: Dark Theme ─── */
:root[data-theme="dark"] {
  --table-bg: var(--gray-900);
  --table-header-bg: var(--gray-800);
  --table-border: var(--gray-700);
  --table-row-hover-bg: var(--gray-800);
  --table-row-selected-bg: rgba(96,165,250,0.1);
  --table-row-emergency-bg: rgba(248,113,113,0.08);
  --table-row-warning-bg: rgba(250,204,21,0.06);

  --table-text: var(--gray-300);
  --table-text-header: var(--gray-200);
  --table-text-name: var(--gray-50);
  --table-text-dim: var(--gray-500);

  --table-val-high: #F87171;
  --table-val-low: #FACC15;
  --table-val-normal: #4ADE80;

  --table-footer-bg: var(--gray-800);
  --table-footer-text: var(--gray-400);
}
```

### Toast

```css
/* ─── Toast: Light Theme ─── */
:root[data-theme="light"] {
  --toast-success-bg: var(--gray-900);
  --toast-success-text: var(--gray-50);
  --toast-success-icon: #22C55E;

  --toast-error-bg: #FEF2F2;
  --toast-error-text: #DC2626;
  --toast-error-border: #FECACA;
  --toast-error-icon: #DC2626;

  --toast-warning-bg: #FEF9C3;
  --toast-warning-text: #A16207;
  --toast-warning-border: #FEF08A;
  --toast-warning-icon: #A16207;

  --toast-info-bg: #F0FDFA;
  --toast-info-text: #0F766E;
  --toast-info-border: #99F6E4;
  --toast-info-icon: #14B8A6;

  --toast-shadow: var(--shadow-md);
  --toast-radius: var(--radius-md);
  --toast-padding: 12px 16px;
  --toast-font-size: 13px;
  --toast-duration: 3000ms;
}

/* ─── Toast: Dark Theme ─── */
:root[data-theme="dark"] {
  --toast-success-bg: var(--gray-800);
  --toast-success-text: var(--gray-50);
  --toast-success-icon: #4ADE80;

  --toast-error-bg: #450A0A;
  --toast-error-text: #F87171;
  --toast-error-border: #7F1D1D;
  --toast-error-icon: #F87171;

  --toast-warning-bg: #422006;
  --toast-warning-text: #FACC15;
  --toast-warning-border: #713F12;
  --toast-warning-icon: #FACC15;

  --toast-info-bg: #042F2E;
  --toast-info-text: #14B8A6;
  --toast-info-border: #115E59;
  --toast-info-icon: #14B8A6;
}
```

### Tab

```css
/* ─── Tab: Light Theme ─── */
:root[data-theme="light"] {
  /* Underline */
  --tab-underline-text: var(--gray-400);
  --tab-underline-text-hover: var(--gray-700);
  --tab-underline-text-active: #3B82F6;
  --tab-underline-indicator: #3B82F6;
  --tab-underline-border: var(--gray-200);
  --tab-underline-count-bg: var(--gray-100);
  --tab-underline-count-bg-active: #DBEAFE;
  --tab-underline-count-text-active: #1D4ED8;

  /* Pill */
  --tab-pill-bg: var(--gray-100);
  --tab-pill-bg-hover: var(--gray-200);
  --tab-pill-bg-active: #3B82F6;
  --tab-pill-text: var(--gray-600);
  --tab-pill-text-active: #FFFFFF;

  /* Segmented */
  --tab-segment-bg: var(--gray-100);
  --tab-segment-bg-active: var(--gray-0);
  --tab-segment-text: var(--gray-500);
  --tab-segment-text-active: var(--gray-900);
  --tab-segment-shadow-active: var(--shadow-sm);
  --tab-segment-border: var(--gray-200);

  --tab-font-size: 13px;
  --tab-font-weight: 500;
  --tab-font-weight-active: 600;
  --tab-padding: 8px 16px;
  --tab-transition: all 0.15s ease;
}

/* ─── Tab: Dark Theme ─── */
:root[data-theme="dark"] {
  --tab-underline-text: var(--gray-500);
  --tab-underline-text-hover: var(--gray-200);
  --tab-underline-text-active: #60A5FA;
  --tab-underline-indicator: #60A5FA;
  --tab-underline-border: var(--gray-700);
  --tab-underline-count-bg: var(--gray-800);
  --tab-underline-count-bg-active: #172554;
  --tab-underline-count-text-active: #60A5FA;

  --tab-pill-bg: var(--gray-800);
  --tab-pill-bg-hover: var(--gray-700);
  --tab-pill-bg-active: #3B82F6;
  --tab-pill-text: var(--gray-400);
  --tab-pill-text-active: #FFFFFF;

  --tab-segment-bg: var(--gray-800);
  --tab-segment-bg-active: var(--gray-700);
  --tab-segment-text: var(--gray-400);
  --tab-segment-text-active: var(--gray-50);
  --tab-segment-border: var(--gray-700);
}
```

### Card Module

```css
/* ─── Card Module: Light Theme ─── */
:root[data-theme="light"] {
  --card-bg: var(--gray-0);
  --card-bg-hover: var(--gray-50);
  --card-border: var(--gray-200);
  --card-border-focus: #3B82F6;
  --card-shadow: var(--shadow-sm);
  --card-shadow-hover: var(--shadow-md);
  --card-shadow-dragging: var(--shadow-xl);
  --card-radius: var(--radius-lg);

  --card-header-bg: var(--gray-50);
  --card-header-text: var(--gray-900);
  --card-header-height: 40px;
  --card-header-font-size: 14px;
  --card-header-font-weight: 600;
  --card-header-icon-size: 16px;
  --card-header-icon-color: var(--gray-500);

  --card-body-padding: 16px;
  --card-footer-border: var(--gray-200);
  --card-footer-bg: var(--gray-0);

  --card-dragging-opacity: 0.9;
  --card-dragging-rotate: 2deg;
  --card-dragging-scale: 0.98;
  --card-minimize-height: 40px;
}

/* ─── Card Module: Dark Theme ─── */
:root[data-theme="dark"] {
  --card-bg: var(--gray-900);
  --card-bg-hover: var(--gray-800);
  --card-border: var(--gray-700);
  --card-border-focus: #60A5FA;
  --card-shadow: none;
  --card-shadow-hover: none;

  --card-header-bg: var(--gray-800);
  --card-header-text: var(--gray-50);
  --card-header-icon-color: var(--gray-400);

  --card-footer-border: var(--gray-700);
  --card-footer-bg: var(--gray-900);
}
```

---

## Tailwind CSS 연동

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
          DEFAULT: 'var(--btn-primary-bg)',
          hover: 'var(--btn-primary-bg-hover)',
          active: 'var(--btn-primary-bg-active)',
        },
        bg: {
          page: 'var(--color-bg-page)',
          card: 'var(--color-bg-card)',
          elevated: 'var(--color-bg-elevated)',
          input: 'var(--input-bg)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
        },
        border: {
          DEFAULT: 'var(--color-border-default)',
          focus: 'var(--color-border-focus)',
        },
      },
      fontFamily: {
        sans: ['var(--font-family-base)'],
        mono: ['var(--font-family-mono)'],
      },
    },
  },
};

export default config;
```

---

> 관련 문서: [컬러](../foundation/colors.md) | [타이포그래피](../foundation/typography.md) | [스페이싱](../foundation/spacing.md)
