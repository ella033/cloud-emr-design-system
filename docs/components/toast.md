# Toast

사용자에게 일시적인 피드백 메시지를 표시하는 컴포넌트입니다. 자동으로 사라지며, 현재 작업을 방해하지 않습니다.

<span class="status-badge stable">Stable</span>

## Preview

<div class="component-preview" style="display:flex; flex-direction:column; gap:12px; max-width:360px;">
  <div style="display:flex; align-items:center; gap:10px; padding:12px 16px; border-radius:8px; background:#0F172A; color:#F8FAFC; font-size:14px; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
    <span>✓</span> 처방이 전송되었습니다
  </div>
  <div style="display:flex; align-items:center; gap:10px; padding:12px 16px; border-radius:8px; background:#FEF2F2; color:#DC2626; font-size:14px; border:1px solid #FECACA;">
    <span>✕</span> 처방 전송에 실패했습니다
  </div>
  <div style="display:flex; align-items:center; gap:10px; padding:12px 16px; border-radius:8px; background:#FEF9C3; color:#A16207; font-size:14px; border:1px solid #FEF08A;">
    <span>⚠</span> 알러지 약물이 포함되어 있습니다
  </div>
</div>

---

## 사용법

```tsx
import { useToast } from '@cloud-emr/design-system';

function OrderForm() {
  const toast = useToast();

  const handleSubmit = async () => {
    try {
      await submitOrder();
      toast.success('처방이 전송되었습니다');
    } catch {
      toast.error('처방 전송에 실패했습니다');
    }
  };
}
```

---

## API

### useToast()

| Method | 파라미터 | 설명 |
|--------|---------|------|
| `toast.success(message)` | `string` | 성공 토스트 |
| `toast.error(message)` | `string` | 에러 토스트 |
| `toast.warning(message)` | `string` | 경고 토스트 |
| `toast.info(message)` | `string` | 정보 토스트 |
| `toast.custom(options)` | `ToastOptions` | 커스텀 토스트 |

### ToastOptions

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `message` | `string` | - | 메시지 |
| `type` | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` | 타입 |
| `duration` | `number` | `3000` | 표시 시간 (ms) |
| `position` | `'top-right' \| 'top-center' \| 'bottom-right'` | `'top-right'` | 위치 |
| `action` | `{ label: string, onClick: () => void }` | - | 액션 버튼 |

---

## EMR 활용 예시

```tsx
// 자동 저장
toast.info('임상메모가 자동 저장되었습니다');

// 처방 경고
toast.warning('DUR 중복 처방 확인이 필요합니다', {
  duration: 5000,
  action: { label: '확인', onClick: openDurCheck },
});

// 처방 성공
toast.success('처방이 전송되었습니다');

// 에러
toast.error('서버 연결에 실패했습니다. 재시도해 주세요.');
```

---

## 접근성

- `role="alert"` + `aria-live="polite"` (success, info)
- `aria-live="assertive"` (error, warning)
- 포커스를 빼앗지 않음 (현재 작업 유지)
