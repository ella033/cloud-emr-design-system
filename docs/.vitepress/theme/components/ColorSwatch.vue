<script setup>
import { ref } from 'vue'

const props = defineProps({
  colors: {
    type: Array,
    required: true
    // [{ token, hex, name }]
  },
  title: String
})

const copiedToken = ref(null)

async function copyColor(hex) {
  try {
    await navigator.clipboard.writeText(hex)
    copiedToken.value = hex
    setTimeout(() => { copiedToken.value = null }, 1500)
  } catch {
    // fallback
    const el = document.createElement('textarea')
    el.value = hex
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    copiedToken.value = hex
    setTimeout(() => { copiedToken.value = null }, 1500)
  }
}
</script>

<template>
  <div class="color-swatch-group">
    <h4 v-if="title" class="swatch-title">{{ title }}</h4>
    <div class="swatch-grid">
      <div
        v-for="c in colors"
        :key="c.hex"
        class="swatch-item"
        @click="copyColor(c.hex)"
        :title="`Click to copy ${c.hex}`"
      >
        <div
          class="swatch-color"
          :style="{ background: c.hex }"
        >
          <transition name="fade">
            <span v-if="copiedToken === c.hex" class="copied-badge">Copied!</span>
          </transition>
        </div>
        <div class="swatch-info">
          <span class="swatch-token">{{ c.token }}</span>
          <span class="swatch-hex">{{ c.hex }}</span>
        </div>
        <div v-if="c.name" class="swatch-name">{{ c.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-swatch-group {
  margin: 16px 0 28px;
}

.swatch-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
}

.swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
}

.swatch-item {
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
  transition: transform 0.15s, box-shadow 0.15s;
  background: var(--vp-c-bg);
}

.swatch-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.swatch-item:active {
  transform: scale(0.97);
}

.swatch-color {
  height: 64px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--vp-c-divider);
}

.copied-badge {
  background: rgba(0,0,0,0.7);
  color: #fff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.swatch-info {
  padding: 8px 10px 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.swatch-token {
  font-size: 11px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.swatch-hex {
  font-size: 11px;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
}

.swatch-name {
  padding: 0 10px 8px;
  font-size: 11px;
  color: var(--vp-c-text-3);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
