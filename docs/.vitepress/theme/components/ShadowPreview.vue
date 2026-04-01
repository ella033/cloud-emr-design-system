<script setup>
const props = defineProps({
  items: { type: Array, required: true }
  // [{ token, value, usage }]
})
</script>

<template>
  <div class="shadow-preview">
    <div
      v-for="s in items"
      :key="s.token"
      class="shadow-item"
    >
      <div class="shadow-box" :style="{ boxShadow: s.value }"></div>
      <div class="shadow-info">
        <code class="shadow-token">{{ s.token }}</code>
        <span class="shadow-usage">{{ s.usage }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shadow-preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
  margin: 16px 0 28px;
}

.shadow-item {
  text-align: center;
  padding: 16px;
}

.shadow-box {
  width: 100%;
  height: 80px;
  background: var(--vp-c-bg);
  border-radius: 12px;
  margin-bottom: 12px;
  border: 1px solid var(--vp-c-divider);
}

.shadow-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.shadow-token {
  font-size: 12px;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-1);
}

.shadow-usage {
  font-size: 11px;
  color: var(--vp-c-text-3);
}
</style>
