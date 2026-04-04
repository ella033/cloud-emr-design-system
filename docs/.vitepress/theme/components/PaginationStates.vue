<script setup>
import { ref } from 'vue'
const page = ref(3)
const totalPages = 12
</script>

<template>
  <div class="pg-wrap">
    <!-- Default -->
    <h4 class="section-title">기본 Pagination</h4>
    <div class="pg-demo">
      <div class="pg-bar">
        <button class="pg-btn" :disabled="page <= 1" @click="page--">
          <SvgIcon name="chevron-left" :size="14" />
        </button>
        <button
          v-for="p in [1,2,3,4,5]" :key="p"
          :class="['pg-num', { active: page === p }]"
          @click="page = p"
        >{{ p }}</button>
        <span class="pg-ellipsis">...</span>
        <button :class="['pg-num', { active: page === totalPages }]" @click="page = totalPages">{{ totalPages }}</button>
        <button class="pg-btn" :disabled="page >= totalPages" @click="page++">
          <SvgIcon name="chevron-right" :size="14" />
        </button>
      </div>
      <div class="pg-info">{{ page }} / {{ totalPages }} 페이지 · 총 118건</div>
    </div>

    <!-- Compact -->
    <h4 class="section-title">간소화 Pagination</h4>
    <div class="pg-demo">
      <div class="pg-bar compact">
        <button class="pg-btn" :disabled="page <= 1" @click="page--">
          <SvgIcon name="chevron-left" :size="14" />
        </button>
        <span class="pg-current">{{ page }} / {{ totalPages }}</span>
        <button class="pg-btn" :disabled="page >= totalPages" @click="page++">
          <SvgIcon name="chevron-right" :size="14" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pg-wrap { margin: 20px 0 28px; }
.section-title { font-size: 14px; font-weight: 600; color: var(--vp-c-text-1); margin: 20px 0 12px; }
.section-title:first-child { margin-top: 0; }

.pg-demo {
  padding: 16px; border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg);
}

.pg-bar { display: flex; align-items: center; gap: 4px; }
.pg-btn {
  width: 32px; height: 32px; border-radius: 6px; border: 1px solid var(--vp-c-divider);
  display: flex; align-items: center; justify-content: center;
  background: var(--vp-c-bg); cursor: pointer; color: var(--vp-c-text-2);
}
.pg-btn:hover { background: var(--vp-c-bg-soft); }
.pg-btn:disabled { opacity: 0.3; cursor: not-allowed; }

.pg-num {
  width: 32px; height: 32px; border-radius: 6px; border: none;
  display: flex; align-items: center; justify-content: center;
  background: transparent; cursor: pointer; font-size: 13px; font-weight: 500;
  color: var(--vp-c-text-2);
}
.pg-num:hover { background: var(--vp-c-bg-soft); }
.pg-num.active { background: #3B82F6; color: #fff; }

.pg-ellipsis { font-size: 13px; color: var(--vp-c-text-3); padding: 0 4px; }
.pg-current { font-size: 13px; font-weight: 500; color: var(--vp-c-text-1); padding: 0 8px; font-family: var(--vp-font-family-mono); }
.pg-info { font-size: 11px; color: var(--vp-c-text-3); margin-top: 8px; }

.pg-bar.compact { gap: 8px; }
</style>
