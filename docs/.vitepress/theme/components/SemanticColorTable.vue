<script setup>
import { ref } from 'vue'

const props = defineProps({
  tokens: {
    type: Array,
    required: true
    // [{ token, lightHex, darkHex, usage }]
  },
  title: String,
  mode: {
    type: String,
    default: 'both' // 'light' | 'dark' | 'both'
  }
})

const copiedValue = ref(null)

async function copy(val) {
  try {
    await navigator.clipboard.writeText(val)
  } catch {
    const el = document.createElement('textarea')
    el.value = val
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }
  copiedValue.value = val
  setTimeout(() => { copiedValue.value = null }, 1200)
}
</script>

<template>
  <div class="semantic-table-wrap">
    <h4 v-if="title" class="st-title">{{ title }}</h4>
    <div class="semantic-table">
      <div class="st-header">
        <span class="st-col token-col">Token</span>
        <span v-if="mode !== 'dark'" class="st-col color-col">Light</span>
        <span v-if="mode !== 'light'" class="st-col color-col">Dark</span>
        <span class="st-col usage-col">용도</span>
      </div>
      <div
        v-for="t in tokens"
        :key="t.token"
        class="st-row"
      >
        <span class="st-col token-col">
          <code class="token-name">{{ t.token }}</code>
        </span>
        <span v-if="mode !== 'dark'" class="st-col color-col" @click="copy(t.lightHex)" :title="`Copy ${t.lightHex}`">
          <span class="color-chip light-chip" :style="{ background: t.lightHex }">
            <span v-if="copiedValue === t.lightHex" class="chip-copied">Copied!</span>
          </span>
          <code class="hex-label">{{ t.lightHex }}</code>
        </span>
        <span v-if="mode !== 'light'" class="st-col color-col" @click="copy(t.darkHex)" :title="`Copy ${t.darkHex}`">
          <span class="color-chip dark-chip" :style="{ background: t.darkHex }">
            <span v-if="copiedValue === t.darkHex" class="chip-copied">Copied!</span>
          </span>
          <code class="hex-label">{{ t.darkHex }}</code>
        </span>
        <span class="st-col usage-col">{{ t.usage }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.semantic-table-wrap {
  margin: 20px 0 32px;
}

.st-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
}

.semantic-table {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  overflow: hidden;
}

.st-header {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

.st-row {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  transition: background 0.1s;
}

.st-row:last-child {
  border-bottom: none;
}

.st-row:hover {
  background: var(--vp-c-bg-soft);
}

.st-col {
  display: flex;
  align-items: center;
  gap: 8px;
}

.token-col {
  flex: 2;
  min-width: 0;
}

.color-col {
  flex: 1.5;
  cursor: pointer;
  border-radius: 6px;
  padding: 4px;
  transition: background 0.1s;
}

.color-col:hover {
  background: var(--vp-c-bg-alt);
}

.usage-col {
  flex: 1.5;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.token-name {
  font-size: 11px;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-alt);
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.color-chip {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,0.1);
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark .light-chip {
  border-color: rgba(255,255,255,0.1);
}

.dark-chip {
  border-color: rgba(255,255,255,0.15);
}

.chip-copied {
  position: absolute;
  background: rgba(0,0,0,0.75);
  color: #fff;
  font-size: 9px;
  padding: 2px 5px;
  border-radius: 4px;
  white-space: nowrap;
}

.hex-label {
  font-size: 11px;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
}
</style>
