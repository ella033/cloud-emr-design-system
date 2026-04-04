# Result State

작업 결과나 빈 상태를 전체 화면/영역으로 표시하는 컴포넌트입니다. 처방 전송 완료/실패, 데이터 없음 등에 사용됩니다.

<span class="status-badge stable">Stable</span>

## 케이스

<div class="component-preview" style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
  <div style="text-align:center; padding:32px 16px; border:1px solid var(--vp-c-divider); border-radius:12px;">
    <div style="font-size:32px; margin-bottom:8px;"><SvgIcon name="check-circle" :size="32" /></div>
    <div style="font-size:16px; font-weight:600; color:var(--vp-c-text-1); margin-bottom:4px;">처방 전송 완료</div>
    <div style="font-size:13px; color:var(--vp-c-text-3); margin-bottom:12px;">홍길동 환자에게 3건의 처방이 전송되었습니다.</div>
    <button style="padding:8px 20px; border-radius:8px; background:#3B82F6; color:#fff; border:none; font-size:13px; font-weight:600; cursor:pointer;">확인</button>
  </div>
  <div style="text-align:center; padding:32px 16px; border:1px solid var(--vp-c-divider); border-radius:12px;">
    <div style="font-size:32px; margin-bottom:8px;"><SvgIcon name="x-circle" :size="32" /></div>
    <div style="font-size:16px; font-weight:600; color:#DC2626; margin-bottom:4px;">전송 실패</div>
    <div style="font-size:13px; color:var(--vp-c-text-3); margin-bottom:12px;">네트워크 오류가 발생했습니다. 다시 시도해주세요.</div>
    <button style="padding:8px 20px; border-radius:8px; background:#3B82F6; color:#fff; border:none; font-size:13px; font-weight:600; cursor:pointer;">재시도</button>
  </div>
  <div style="text-align:center; padding:32px 16px; border:1px solid var(--vp-c-divider); border-radius:12px;">
    <div style="font-size:32px; margin-bottom:8px;"><SvgIcon name="clipboard" :size="32" /></div>
    <div style="font-size:16px; font-weight:600; color:var(--vp-c-text-1); margin-bottom:4px;">데이터 없음</div>
    <div style="font-size:13px; color:var(--vp-c-text-3);">검색 조건에 맞는 결과가 없습니다.</div>
  </div>
  <div style="text-align:center; padding:32px 16px; border:1px solid var(--vp-c-divider); border-radius:12px;">
    <div style="font-size:32px; margin-bottom:8px;"><SvgIcon name="clock" :size="32" /></div>
    <div style="font-size:16px; font-weight:600; color:var(--vp-c-text-1); margin-bottom:4px;">준비 중</div>
    <div style="font-size:13px; color:var(--vp-c-text-3);">해당 기능은 곧 제공될 예정입니다.</div>
  </div>
</div>

## 토큰 매핑

| 토큰 | Light | Dark |
|------|-------|------|
| `--result-success-icon-color` | `#22C55E` | `#4ADE80` |
| `--result-error-icon-color` | `#DC2626` | `#F87171` |
| `--result-empty-icon-color` | `var(--gray-400)` | `var(--gray-500)` |
| `--result-title-font-size` | `16px` | `16px` |
| `--result-desc-font-size` | `13px` | `13px` |
| `--result-padding` | `32px 16px` | `32px 16px` |

## Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `icon` | `ReactNode` | - | 상단 아이콘 |
| `title` | `string` | - | 제목 |
| `description` | `string` | - | 설명 |
| `action` | `ReactNode` | - | 액션 버튼 |
| `variant` | `'success' \| 'error' \| 'empty' \| 'pending'` | `'empty'` | 스타일 |
