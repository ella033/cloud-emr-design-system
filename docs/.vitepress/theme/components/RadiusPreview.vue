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
  <div class="radius-preview">
    <div
      v-for="r in items"
      :key="r.token"
      class="radius-item"
      @click="copy(r.value)"
      :title="`Copy ${r.value}`"
    >
      <div class="radius-box" :style="{ borderRadius: r.value }">
        <span v-if="copied === r.value" class="radius-copied">Copied!</span>
      </div>
      <div class="radius-info">
        <code class="radius-token">{{ r.token }}</code>
        <span class="radius-value">{{ r.value }}</span>
      </div>
      <span class="radius-usage">{{ r.usage }}</span>
    </div>
  </div>
</template>

<style scoped>
.radius-preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
  margin: 16px 0 28px;
}

.radius-item {
  cursor: pointer;
  text-align: center;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  transition: transform 0.15s, box-shadow 0.15s;
  background: var(--vp-c-bg);
}

.radius-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.radius-box {
  width: 72px;
  height: 72px;
  margin: 0 auto 10px;
  background: linear-gradient(135deg, #3B82F6, #60A5FA);
  display: flex;
  align-items: center;
  justify-content: center;
}

.radius-copied {
  font-size: 11px;
  color: #fff;
  font-weight: 600;
  background: rgba(0,0,0,0.4);
  padding: 2px 8px;
  border-radius: 4px;
}

.radius-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 4px;
}

.radius-token {
  font-size: 11px;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-1);
}

.radius-value {
  font-size: 11px;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
}

.radius-usage {
  font-size: 11px;
  color: var(--vp-c-text-3);
}
</style>
