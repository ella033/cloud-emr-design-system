<script setup>
import { ref } from 'vue'
const activeCase = ref('basic')
const selectedSort = ref('name')
const checkedFilters = ref(['진료중'])

const cases = [
  { key: 'basic', label: '기본 드롭다운' },
  { key: 'with-icon', label: '아이콘 포함' },
  { key: 'check', label: '체크 선택형' },
  { key: 'divider', label: '구분선 + 위험항목' },
  { key: 'header', label: '헤더 포함' },
  { key: 'placement', label: '배치 방향' },
  { key: 'disabled', label: '비활성 항목' },
]
</script>

<template>
  <div class="menu-wrap">
    <div class="case-selector">
      <div
        v-for="c in cases" :key="c.key"
        :class="['case-chip', { active: activeCase === c.key }]"
        @click="activeCase = c.key"
      >{{ c.label }}</div>
    </div>

    <div class="menu-stage">
      <!-- 기본 드롭다운 -->
      <div v-if="activeCase === 'basic'" class="menu-case">
        <div class="case-tag">기본 드롭다운 — 트리거 버튼 + 메뉴 항목</div>
        <div class="menu-demo">
          <div class="menu-trigger-area">
            <button class="menu-trigger-btn"><SvgIcon name="more-horizontal" :size="16" /></button>
            <div class="menu-dropdown">
              <div class="menu-item" @click="">차트 열기</div>
              <div class="menu-item">메모 추가</div>
              <div class="menu-item">처방 복사</div>
              <div class="menu-item">인쇄</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 아이콘 포함 -->
      <div v-if="activeCase === 'with-icon'" class="menu-case">
        <div class="case-tag">아이콘 포함 — 각 항목 좌측에 아이콘 배치</div>
        <div class="menu-demo">
          <div class="menu-trigger-area">
            <button class="menu-trigger-btn"><SvgIcon name="more-horizontal" :size="16" /></button>
            <div class="menu-dropdown">
              <div class="menu-item"><SvgIcon name="clipboard" :size="14" /> <span>차트 열기</span></div>
              <div class="menu-item"><SvgIcon name="message" :size="14" /> <span>메모 추가</span></div>
              <div class="menu-item"><SvgIcon name="copy" :size="14" /> <span>처방 복사</span></div>
              <div class="menu-item"><SvgIcon name="printer" :size="14" /> <span>인쇄</span></div>
              <div class="menu-item"><SvgIcon name="download" :size="14" /> <span>PDF 다운로드</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 체크 선택형 -->
      <div v-if="activeCase === 'check'" class="menu-case">
        <div class="case-tag">체크 선택형 — 라디오/체크 선택, 필터 등에 사용</div>
        <div class="menu-demo two-col">
          <div class="menu-trigger-area">
            <div class="menu-trigger-label">정렬 기준</div>
            <div class="menu-dropdown">
              <div :class="['menu-item check-item', { checked: selectedSort === 'name' }]" @click="selectedSort = 'name'">
                <span class="check-radio" :class="{ active: selectedSort === 'name' }"></span> 이름순
              </div>
              <div :class="['menu-item check-item', { checked: selectedSort === 'date' }]" @click="selectedSort = 'date'">
                <span class="check-radio" :class="{ active: selectedSort === 'date' }"></span> 접수시간순
              </div>
              <div :class="['menu-item check-item', { checked: selectedSort === 'dept' }]" @click="selectedSort = 'dept'">
                <span class="check-radio" :class="{ active: selectedSort === 'dept' }"></span> 진료과순
              </div>
            </div>
          </div>
          <div class="menu-trigger-area">
            <div class="menu-trigger-label">상태 필터</div>
            <div class="menu-dropdown">
              <div v-for="s in ['대기','진료중','완료','응급']" :key="s"
                :class="['menu-item check-item']"
                @click="checkedFilters.includes(s) ? checkedFilters.splice(checkedFilters.indexOf(s),1) : checkedFilters.push(s)">
                <input type="checkbox" :checked="checkedFilters.includes(s)" class="menu-checkbox" /> {{ s }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 구분선 + 위험항목 -->
      <div v-if="activeCase === 'divider'" class="menu-case">
        <div class="case-tag">구분선 + 위험 항목 — 그룹 분리, danger 스타일</div>
        <div class="menu-demo">
          <div class="menu-trigger-area">
            <button class="menu-trigger-btn"><SvgIcon name="more-horizontal" :size="16" /></button>
            <div class="menu-dropdown">
              <div class="menu-item"><SvgIcon name="edit" :size="14" /> <span>수정</span></div>
              <div class="menu-item"><SvgIcon name="copy" :size="14" /> <span>복제</span></div>
              <div class="menu-divider"></div>
              <div class="menu-item"><SvgIcon name="bookmark" :size="14" /> <span>즐겨찾기 추가</span></div>
              <div class="menu-item"><SvgIcon name="link" :size="14" /> <span>링크 복사</span></div>
              <div class="menu-divider"></div>
              <div class="menu-item menu-danger"><SvgIcon name="trash" :size="14" /> <span>삭제</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 헤더 포함 -->
      <div v-if="activeCase === 'header'" class="menu-case">
        <div class="case-tag">헤더 포함 — 상단 제목 + 메뉴 항목</div>
        <div class="menu-demo">
          <div class="menu-trigger-area">
            <button class="menu-trigger-btn"><SvgIcon name="settings" :size="16" /></button>
            <div class="menu-dropdown">
              <div class="menu-header">레이아웃 설정</div>
              <div class="menu-item">기본 진료 레이아웃</div>
              <div class="menu-item menu-item-active">초진 진료 레이아웃</div>
              <div class="menu-item">영상 판독 레이아웃</div>
              <div class="menu-item">만성질환 관리</div>
              <div class="menu-divider"></div>
              <div class="menu-item"><SvgIcon name="plus" :size="14" /> <span>새 레이아웃 저장</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 배치 방향 -->
      <div v-if="activeCase === 'placement'" class="menu-case">
        <div class="case-tag">배치 방향 — top / bottom / left / right</div>
        <div class="menu-placement-demo">
          <div class="placement-item">
            <span class="placement-label">bottom-start (기본)</span>
            <div class="placement-box">
              <div class="placement-trigger">트리거</div>
              <div class="placement-dropdown bottom-start">메뉴 항목 1<br/>메뉴 항목 2<br/>메뉴 항목 3</div>
            </div>
          </div>
          <div class="placement-item">
            <span class="placement-label">bottom-end</span>
            <div class="placement-box">
              <div class="placement-trigger" style="margin-left:auto;">트리거</div>
              <div class="placement-dropdown bottom-end">메뉴 항목 1<br/>메뉴 항목 2<br/>메뉴 항목 3</div>
            </div>
          </div>
          <div class="placement-item">
            <span class="placement-label">right-start</span>
            <div class="placement-box row-box">
              <div class="placement-trigger">트리거</div>
              <div class="placement-dropdown right-start">메뉴 항목 1<br/>메뉴 항목 2</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 비활성 항목 -->
      <div v-if="activeCase === 'disabled'" class="menu-case">
        <div class="case-tag">비활성 항목 — disabled 상태 + 툴팁 안내</div>
        <div class="menu-demo">
          <div class="menu-trigger-area">
            <button class="menu-trigger-btn"><SvgIcon name="more-horizontal" :size="16" /></button>
            <div class="menu-dropdown">
              <div class="menu-item"><SvgIcon name="edit" :size="14" /> <span>수정</span></div>
              <div class="menu-item menu-disabled">
                <SvgIcon name="copy" :size="14" /> <span>복제</span>
                <span class="menu-disabled-hint">권한 없음</span>
              </div>
              <div class="menu-item menu-disabled">
                <SvgIcon name="trash" :size="14" /> <span>삭제</span>
                <span class="menu-disabled-hint">처방 전송 후 삭제 불가</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-wrap { margin: 20px 0 28px; }

.case-selector { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.case-chip {
  padding: 6px 14px; border-radius: 9999px; font-size: 12px; font-weight: 500;
  cursor: pointer; background: var(--vp-c-bg-soft); color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider); transition: all 0.15s;
}
.case-chip:hover { border-color: var(--vp-c-text-3); }
.case-chip.active { background: #3B82F6; color: #fff; border-color: #3B82F6; }

.menu-stage { padding: 16px 0; }
.menu-case { position: relative; }
.case-tag {
  font-size: 10px; font-weight: 600; color: var(--vp-c-text-3);
  margin-bottom: 12px; padding: 4px 8px; background: var(--vp-c-bg-soft);
  border-radius: 4px; display: inline-block;
}

/* Demo container */
.menu-demo {
  padding: 24px; border: 1px solid var(--vp-c-divider); border-radius: 10px;
  background: var(--vp-c-bg); display: flex; justify-content: center;
}
.menu-demo.two-col { gap: 32px; }

/* Trigger */
.menu-trigger-area { position: relative; }
.menu-trigger-btn {
  width: 36px; height: 36px; border-radius: 8px; border: 1px solid var(--vp-c-divider);
  display: flex; align-items: center; justify-content: center;
  background: var(--vp-c-bg-soft); cursor: pointer;
}
.menu-trigger-label {
  font-size: 12px; font-weight: 600; color: var(--vp-c-text-2); margin-bottom: 8px;
}

/* Dropdown */
.menu-dropdown {
  min-width: 180px; background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider);
  border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 4px; margin-top: 6px; overflow: hidden;
}
.dark .menu-dropdown { box-shadow: 0 4px 12px rgba(0,0,0,0.4); }

.menu-header {
  padding: 8px 12px 6px; font-size: 11px; font-weight: 700; color: var(--vp-c-text-3);
  text-transform: uppercase; letter-spacing: 0.05em;
}

.menu-item {
  display: flex; align-items: center; gap: 8px; padding: 8px 12px;
  font-size: 13px; color: var(--vp-c-text-1); border-radius: 6px;
  cursor: pointer; transition: background 0.1s;
}
.menu-item:hover { background: var(--vp-c-bg-soft); }
.menu-item-active { background: rgba(59,130,246,0.08); color: #3B82F6; font-weight: 500; }
.dark .menu-item-active { background: rgba(96,165,250,0.1); color: #60A5FA; }

.menu-danger { color: #DC2626 !important; }
.dark .menu-danger { color: #F87171 !important; }
.menu-danger:hover { background: #FEF2F2 !important; }
.dark .menu-danger:hover { background: #450A0A !important; }

.menu-disabled {
  opacity: 0.5; cursor: not-allowed; position: relative;
}
.menu-disabled:hover { background: transparent !important; }
.menu-disabled-hint {
  margin-left: auto; font-size: 10px; color: var(--vp-c-text-3); font-style: italic;
}

.menu-divider {
  height: 1px; background: var(--vp-c-divider); margin: 4px 8px;
}

/* Check items */
.check-item { cursor: pointer; }
.check-item.checked { color: #3B82F6; font-weight: 500; }
.check-radio {
  width: 14px; height: 14px; border-radius: 50%; border: 2px solid var(--vp-c-divider);
  flex-shrink: 0;
}
.check-radio.active { border-color: #3B82F6; background: #3B82F6; box-shadow: inset 0 0 0 2px #fff; }
.dark .check-radio.active { box-shadow: inset 0 0 0 2px var(--vp-c-bg); }

.menu-checkbox { accent-color: #3B82F6; cursor: pointer; }

/* Placement demo */
.menu-placement-demo {
  display: flex; gap: 24px; flex-wrap: wrap; padding: 24px;
  border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg);
}
.placement-item { display: flex; flex-direction: column; gap: 8px; }
.placement-label { font-size: 10px; font-weight: 600; color: var(--vp-c-text-3); text-transform: uppercase; }
.placement-box { position: relative; display: flex; flex-direction: column; }
.placement-box.row-box { flex-direction: row; gap: 4px; }
.placement-trigger {
  padding: 6px 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);
  border-radius: 6px; font-size: 11px; color: var(--vp-c-text-2); width: fit-content;
}
.placement-dropdown {
  padding: 6px; background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider);
  border-radius: 8px; font-size: 11px; color: var(--vp-c-text-2); margin-top: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08); line-height: 1.8; width: fit-content;
}
.placement-dropdown.bottom-end { margin-left: auto; }
.placement-dropdown.right-start { margin-top: 0; margin-left: 4px; }
</style>
