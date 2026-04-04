<script setup>
import { ref, computed } from 'vue'

const copied = ref(null)
const activeCategory = ref('all')
const searchQuery = ref('')
const activeSize = ref(24)

const categories = [
  { key: 'all', label: '전체' },
  { key: 'ui', label: 'General UI' },
  { key: 'clinical', label: '진료/환자' },
  { key: 'emr', label: 'EMR 기능' },
]

const icons = [
  // General UI
  { name: 'search', label: '검색', category: 'ui' },
  { name: 'close', label: '닫기', category: 'ui' },
  { name: 'menu', label: '메뉴', category: 'ui' },
  { name: 'chevron-down', label: '아래 화살표', category: 'ui' },
  { name: 'chevron-right', label: '오른쪽 화살표', category: 'ui' },
  { name: 'chevron-left', label: '왼쪽 화살표', category: 'ui' },
  { name: 'plus', label: '추가', category: 'ui' },
  { name: 'minus', label: '빼기', category: 'ui' },
  { name: 'check', label: '체크', category: 'ui' },
  { name: 'settings', label: '설정', category: 'ui' },
  { name: 'bell', label: '알림', category: 'ui' },
  { name: 'filter', label: '필터', category: 'ui' },
  { name: 'sort', label: '정렬', category: 'ui' },
  { name: 'edit', label: '편집', category: 'ui' },
  { name: 'trash', label: '삭제', category: 'ui' },
  { name: 'copy', label: '복사', category: 'ui' },
  { name: 'download', label: '다운로드', category: 'ui' },
  { name: 'upload', label: '업로드', category: 'ui' },
  { name: 'refresh', label: '새로고침', category: 'ui' },
  { name: 'more-horizontal', label: '더보기', category: 'ui' },
  // Clinical
  { name: 'user', label: '환자', category: 'clinical' },
  { name: 'users', label: '환자목록', category: 'clinical' },
  { name: 'heart', label: '바이탈', category: 'clinical' },
  { name: 'thermometer', label: '체온', category: 'clinical' },
  { name: 'stethoscope', label: '진찰', category: 'clinical' },
  { name: 'pill', label: '약물', category: 'clinical' },
  { name: 'syringe', label: '주사', category: 'clinical' },
  { name: 'clipboard', label: '차트', category: 'clinical' },
  { name: 'file-text', label: '문서', category: 'clinical' },
  { name: 'calendar', label: '일정', category: 'clinical' },
  // EMR
  { name: 'chart', label: '차트그래프', category: 'emr' },
  { name: 'clock', label: '시간', category: 'emr' },
  { name: 'message', label: '메시지', category: 'emr' },
  { name: 'alert-triangle', label: '경고', category: 'emr' },
  { name: 'alert-circle', label: '주의', category: 'emr' },
  { name: 'info', label: '정보', category: 'emr' },
  { name: 'check-circle', label: '완료', category: 'emr' },
  { name: 'x-circle', label: '실패', category: 'emr' },
  { name: 'eye', label: '보기', category: 'emr' },
  { name: 'lock', label: '잠금', category: 'emr' },
  { name: 'printer', label: '인쇄', category: 'emr' },
  { name: 'image', label: '이미지', category: 'emr' },
  { name: 'link', label: '링크', category: 'emr' },
  { name: 'star', label: '즐겨찾기', category: 'emr' },
  { name: 'bookmark', label: '북마크', category: 'emr' },
]

const filteredIcons = computed(() => {
  return icons.filter(icon => {
    const matchCategory = activeCategory.value === 'all' || icon.category === activeCategory.value
    const matchSearch = !searchQuery.value ||
      icon.name.includes(searchQuery.value.toLowerCase()) ||
      icon.label.includes(searchQuery.value)
    return matchCategory && matchSearch
  })
})

async function copyName(name) {
  try { await navigator.clipboard.writeText(name) } catch {}
  copied.value = name
  setTimeout(() => { copied.value = null }, 1200)
}
</script>

<template>
  <div class="icon-preview-wrap">
    <!-- Controls -->
    <div class="icon-controls">
      <div class="icon-categories">
        <span
          v-for="cat in categories" :key="cat.key"
          :class="['cat-chip', { active: activeCategory === cat.key }]"
          @click="activeCategory = cat.key"
        >{{ cat.label }}</span>
      </div>
      <div class="icon-search">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="아이콘 검색..."
          class="search-input"
        />
      </div>
      <div class="icon-sizes">
        <span
          v-for="s in [16, 20, 24]" :key="s"
          :class="['size-chip', { active: activeSize === s }]"
          @click="activeSize = s"
        >{{ s }}px</span>
      </div>
    </div>

    <!-- Grid -->
    <div class="icon-grid">
      <div
        v-for="icon in filteredIcons" :key="icon.name"
        class="icon-item"
        @click="copyName(icon.name)"
        :title="`Click to copy: ${icon.name}`"
      >
        <div class="icon-box" :style="{ width: activeSize + 'px', height: activeSize + 'px' }">
          <img
            :src="`/icons/${icon.name}.svg`"
            :width="activeSize"
            :height="activeSize"
            :alt="icon.label"
            class="icon-img"
          />
        </div>
        <span class="icon-name">{{ icon.name }}</span>
        <span class="icon-label">{{ icon.label }}</span>
        <span v-if="copied === icon.name" class="icon-copied">Copied!</span>
      </div>
    </div>

    <div class="icon-count">{{ filteredIcons.length }}개 아이콘</div>
  </div>
</template>

<style scoped>
.icon-preview-wrap { margin: 20px 0 28px; }

/* Controls */
.icon-controls {
  display: flex; flex-wrap: wrap; gap: 12px; align-items: center;
  margin-bottom: 16px;
}
.icon-categories { display: flex; gap: 6px; }
.cat-chip {
  padding: 5px 12px; border-radius: 9999px; font-size: 12px; font-weight: 500;
  cursor: pointer; background: var(--vp-c-bg-soft); color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider); transition: all 0.15s;
}
.cat-chip.active { background: #3B82F6; color: #fff; border-color: #3B82F6; }

.search-input {
  padding: 5px 10px; border: 1px solid var(--vp-c-divider); border-radius: 6px;
  font-size: 12px; background: var(--vp-c-bg); color: var(--vp-c-text-1);
  outline: none; width: 160px; font-family: inherit;
}
.search-input:focus { border-color: #3B82F6; }

.icon-sizes { display: flex; gap: 4px; margin-left: auto; }
.size-chip {
  padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 600;
  cursor: pointer; background: var(--vp-c-bg-soft); color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono); transition: all 0.15s;
}
.size-chip.active { background: var(--vp-c-text-1); color: var(--vp-c-bg); }

/* Grid */
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 4px;
}

.icon-item {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  padding: 14px 8px 10px; border-radius: 10px; cursor: pointer;
  transition: background 0.1s; position: relative;
  border: 1px solid transparent;
}
.icon-item:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}
.icon-item:active { transform: scale(0.96); }

.icon-box {
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

.icon-img {
  display: block;
}
/* Dark mode: invert black SVGs to white */
.dark .icon-img { filter: invert(1); }

.icon-name {
  font-size: 10px; font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2); text-align: center;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  max-width: 100%;
}
.icon-label {
  font-size: 9px; color: var(--vp-c-text-3); text-align: center;
}

.icon-copied {
  position: absolute; top: 4px; right: 4px;
  font-size: 9px; color: #22C55E; font-weight: 600;
  background: var(--vp-c-bg); padding: 1px 4px; border-radius: 3px;
}

.icon-count {
  margin-top: 12px; font-size: 11px; color: var(--vp-c-text-3); text-align: right;
}
</style>
