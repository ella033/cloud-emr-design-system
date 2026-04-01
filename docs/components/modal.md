# Modal / Dialog

사용자 확인이 필요한 중요 동작이나 추가 정보를 오버레이로 표시하는 컴포넌트입니다.

<span class="status-badge stable">Stable</span>

## Preview

<div class="component-preview" style="display: flex; justify-content: center;">
  <div style="width:400px; background:white; border-radius:16px; box-shadow:0 20px 25px -5px rgba(0,0,0,0.1); overflow:hidden; border:1px solid #E2E8F0;">
    <div style="padding:24px 24px 16px;">
      <div style="font-size:18px; font-weight:600; color:#0F172A; margin-bottom:8px;">처방을 전송하시겠습니까?</div>
      <div style="font-size:14px; color:#64748B; line-height:1.5;">홍길동 환자에게 아래 처방을 전송합니다.<br/>타이레놀 500mg 외 2건</div>
    </div>
    <div style="display:flex; gap:8px; padding:16px 24px 24px; justify-content:flex-end;">
      <button style="padding:10px 20px; border-radius:8px; font-size:14px; font-weight:500; background:transparent; color:#64748B; border:1px solid #E2E8F0; cursor:pointer;">취소</button>
      <button style="padding:10px 20px; border-radius:8px; font-size:14px; font-weight:600; background:#3B82F6; color:#fff; border:none; cursor:pointer;">전송</button>
    </div>
  </div>
</div>

---

## 사용법

### ConfirmDialog

```tsx
import { ConfirmDialog } from '@cloud-emr/design-system';

<ConfirmDialog
  open={isOpen}
  title="처방을 전송하시겠습니까?"
  description="홍길동 환자에게 타이레놀 500mg 외 2건을 전송합니다."
  confirmText="전송"
  cancelText="취소"
  onConfirm={handleConfirm}
  onCancel={handleCancel}
/>
```

### AlertDialog

```tsx
import { AlertDialog } from '@cloud-emr/design-system';

<AlertDialog
  open={isOpen}
  title="알러지 경고"
  description="이 환자는 페니실린 알러지가 있습니다. 처방을 계속하시겠습니까?"
  variant="danger"
  confirmText="계속 처방"
  onConfirm={handleConfirm}
  onClose={handleClose}
/>
```

---

## Props

### Modal (기본)

| Prop | Type | Required | Default | 설명 |
|------|------|----------|---------|------|
| `open` | `boolean` | Yes | - | 표시 여부 |
| `onClose` | `() => void` | Yes | - | 닫기 핸들러 |
| `title` | `string` | No | - | 모달 제목 |
| `size` | `'small' \| 'medium' \| 'large' \| 'full'` | No | `'medium'` | 크기 |
| `closeOnOverlay` | `boolean` | No | `true` | 오버레이 클릭 시 닫기 |
| `closeOnEsc` | `boolean` | No | `true` | ESC 키로 닫기 |
| `children` | `ReactNode` | Yes | - | 내용 |

### ConfirmDialog

| Prop | Type | Required | Default | 설명 |
|------|------|----------|---------|------|
| `title` | `string` | Yes | - | 제목 |
| `description` | `string` | No | - | 설명 |
| `confirmText` | `string` | No | `'확인'` | 확인 버튼 텍스트 |
| `cancelText` | `string` | No | `'취소'` | 취소 버튼 텍스트 |
| `variant` | `'default' \| 'danger'` | No | `'default'` | 스타일 |
| `onConfirm` | `() => void` | Yes | - | 확인 핸들러 |
| `onCancel` | `() => void` | Yes | - | 취소 핸들러 |

---

## Size

| Size | Width | 용도 |
|------|-------|------|
| `small` | 320px | 간단한 확인/경고 |
| `medium` | 480px | 기본 다이얼로그 |
| `large` | 640px | 폼 입력, 상세 정보 |
| `full` | 90vw x 90vh | 이미지 뷰어, 상세 기록 |

---

## EMR 활용 예시

### 처방 전송 확인

```tsx
<ConfirmDialog
  title="처방을 전송하시겠습니까?"
  description={`${patient.name} 환자에게 ${orders.length}건의 처방을 전송합니다.`}
  confirmText="전송"
  onConfirm={submitOrders}
  onCancel={closeDialog}
/>
```

### 알러지 경고

```tsx
<AlertDialog
  variant="danger"
  title="알러지 주의"
  description="해당 환자에게 페니실린 계열 알러지가 등록되어 있습니다."
  confirmText="확인 후 계속"
  onConfirm={continueWithCaution}
/>
```

### 처방 삭제

```tsx
<ConfirmDialog
  variant="danger"
  title="처방을 삭제하시겠습니까?"
  description="이 동작은 되돌릴 수 없습니다."
  confirmText="삭제"
  cancelText="취소"
  onConfirm={deleteOrder}
/>
```

---

## 접근성

- `role="dialog"` + `aria-modal="true"` 적용
- 오픈 시 첫 번째 포커스 가능 요소에 자동 포커스
- `Tab` 키 트랩 (모달 외부로 포커스 이탈 방지)
- `Esc`로 닫기 (closeOnEsc가 true인 경우)
- danger variant에서 확인 버튼에 자동 포커스 **금지** (실수 방지)
