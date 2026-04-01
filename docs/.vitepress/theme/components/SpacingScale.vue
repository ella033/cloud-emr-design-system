<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: { type: Array, required: true }
  // [{ token, value, usage }]
})

const copied = ref(null)

async function copy(val) {
  try { await navigator.clipboard.writeText(val) } catch {}
  copied.value = val
  setTimeout(() => { copied.value = null }, 1200)
}
</script>

<template>
  <div class="spacing-scale">
    <div
      v-for="s in items"
      :key="s.token"
      class="spacing-row"
      @click="copy(s.value)"
      :title="`Copy ${s.value}`"
    >
      <div class="spacing-bar-wrap">
        <div class="spacing-bar" :style="{ width: s.value === '0px' ? '2px' : s.value }"></div>
      </div>
      <div class="spacing-info">
        <code class="spacing-token">{{ s.token }}</code>
        <span class="spacing-value">{{ s.value }}</span>
        <span v-if="copied === s.value" class="spacing-copied">Copied!</span>
      </div>
      <span class="spacing-usage">{{ s.usage }}</span>
    </div>
  </div>
</template>

<style scoped>
.spacing-scale {
  margin: 16px 0 28px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  overflow: hidden;
}

.spacing-row {
  display: grid;
  grid-template-columns: 140px 1fr 1.2fr;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  cursor: pointer;
  transition: background 0.1s;
  gap: 12px;
}

.spacing-row:last-child { border-bottom: none; }
.spacing-row:hover { background: var(--vp-c-bg-soft); }

.spacing-bar-wrap {
  height: 24px;
  display: flex;
  align-items: center;
}

.spacing-bar {
  height: 100%;
  background: linear-gradient(135deg, #3B82F6, #2563EB);
  border-radius: 4px;
  min-width: 2px;
  transition: width 0.3s ease;
}

.spacing-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.spacing-token {
  font-size: 12px;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-alt);
  padding: 2px 6px;
  border-radius: 4px;
}

.spacing-value {
  font-size: 12px;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
}

.spacing-copied {
  font-size: 10px;
  color: #22C55E;
  font-weight: 600;
}

.spacing-usage {
  font-size: 12px;
  color: var(--vp-c-text-3);
}
</style>
