<script setup>
import { ref } from 'vue'

const val1 = ref(1)
const val2 = ref(0)
const val3 = ref(999)
const val4 = ref(3)

function clamp(v, min, max) { return Math.min(Math.max(v, min), max) }
</script>

<template>
  <div class="ns-wrap">
    <!-- Sizes -->
    <h4 class="section-title">Sizes</h4>
    <div class="ns-row">
      <div class="ns-col" v-for="size in ['small','medium','large']" :key="size">
        <div class="ns-label">{{ size }}</div>
        <div :class="['stepper', `stepper-${size}`]">
          <button class="stepper-btn" @click="val1 = clamp(val1 - 1, 0, 999)">
            <SvgIcon name="minus" :size="size === 'small' ? 12 : size === 'medium' ? 14 : 16" />
          </button>
          <span class="stepper-value">{{ val1 }}</span>
          <button class="stepper-btn" @click="val1 = clamp(val1 + 1, 0, 999)">
            <SvgIcon name="plus" :size="size === 'small' ? 12 : size === 'medium' ? 14 : 16" />
          </button>
        </div>
      </div>
    </div>

    <!-- States -->
    <h4 class="section-title">States</h4>
    <div class="ns-row">
      <div class="ns-col">
        <div class="ns-label">Default</div>
        <div class="stepper stepper-medium">
          <button class="stepper-btn" @click="val4 = clamp(val4 - 1, 0, 999)">
            <SvgIcon name="minus" :size="14" />
          </button>
          <span class="stepper-value">{{ val4 }}</span>
          <button class="stepper-btn" @click="val4 = clamp(val4 + 1, 0, 999)">
            <SvgIcon name="plus" :size="14" />
          </button>
        </div>
        <div class="ns-desc">클릭하여 값 변경</div>
      </div>
      <div class="ns-col">
        <div class="ns-label dim-label">Min 도달</div>
        <div class="stepper stepper-medium">
          <button class="stepper-btn disabled-btn" disabled>
            <SvgIcon name="minus" :size="14" />
          </button>
          <span class="stepper-value">{{ val2 }}</span>
          <button class="stepper-btn" @click="val2 = clamp(val2 + 1, 0, 999)">
            <SvgIcon name="plus" :size="14" />
          </button>
        </div>
        <div class="ns-desc">최솟값(0)에서 - 버튼 비활성</div>
      </div>
      <div class="ns-col">
        <div class="ns-label dim-label">Max 도달</div>
        <div class="stepper stepper-medium">
          <button class="stepper-btn" @click="val3 = clamp(val3 - 1, 0, 999)">
            <SvgIcon name="minus" :size="14" />
          </button>
          <span class="stepper-value">{{ val3 }}</span>
          <button class="stepper-btn disabled-btn" disabled>
            <SvgIcon name="plus" :size="14" />
          </button>
        </div>
        <div class="ns-desc">최댓값(999)에서 + 버튼 비활성</div>
      </div>
      <div class="ns-col">
        <div class="ns-label dim-label">Disabled</div>
        <div class="stepper stepper-medium stepper-disabled">
          <button class="stepper-btn disabled-btn" disabled>
            <SvgIcon name="minus" :size="14" />
          </button>
          <span class="stepper-value">5</span>
          <button class="stepper-btn disabled-btn" disabled>
            <SvgIcon name="plus" :size="14" />
          </button>
        </div>
        <div class="ns-desc">전체 비활성</div>
      </div>
    </div>

    <!-- EMR Usage -->
    <h4 class="section-title">EMR 활용 예시</h4>
    <div class="ns-emr-row">
      <div class="ns-emr-item">
        <span class="ns-emr-label">용량</span>
        <div class="stepper stepper-small">
          <button class="stepper-btn"><SvgIcon name="minus" :size="12" /></button>
          <span class="stepper-value">1T</span>
          <button class="stepper-btn"><SvgIcon name="plus" :size="12" /></button>
        </div>
      </div>
      <div class="ns-emr-item">
        <span class="ns-emr-label">횟수</span>
        <div class="stepper stepper-small">
          <button class="stepper-btn"><SvgIcon name="minus" :size="12" /></button>
          <span class="stepper-value">3회</span>
          <button class="stepper-btn"><SvgIcon name="plus" :size="12" /></button>
        </div>
      </div>
      <div class="ns-emr-item">
        <span class="ns-emr-label">일수</span>
        <div class="stepper stepper-small">
          <button class="stepper-btn"><SvgIcon name="minus" :size="12" /></button>
          <span class="stepper-value">3일</span>
          <button class="stepper-btn"><SvgIcon name="plus" :size="12" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ns-wrap { margin: 20px 0 28px; }
.section-title { font-size: 14px; font-weight: 600; color: var(--vp-c-text-1); margin: 20px 0 12px; }
.section-title:first-child { margin-top: 0; }

.ns-row {
  display: flex; gap: 16px; flex-wrap: wrap; padding: 16px;
  border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg);
}
.ns-col { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.ns-label { font-size: 10px; font-weight: 600; text-transform: uppercase; color: var(--vp-c-text-3); }
.dim-label { color: var(--vp-c-text-3); }
.ns-desc { font-size: 10px; color: var(--vp-c-text-3); text-align: center; }

/* Stepper base */
.stepper {
  display: inline-flex; align-items: center; gap: 0;
  border: 1px solid var(--vp-c-divider); border-radius: var(--radius-md, 8px); overflow: hidden;
  background: var(--vp-c-bg);
}
.stepper-btn {
  display: flex; align-items: center; justify-content: center;
  border: none; background: var(--vp-c-bg-soft); cursor: pointer;
  color: var(--vp-c-text-2); transition: background 0.1s;
}
.stepper-btn:hover { background: var(--vp-c-bg-alt); }
.stepper-btn:active { background: var(--vp-c-divider); }
.stepper-btn.disabled-btn { opacity: 0.3; cursor: not-allowed; }
.stepper-btn.disabled-btn:hover { background: var(--vp-c-bg-soft); }

.stepper-value {
  font-family: var(--vp-font-family-mono); font-weight: 600;
  text-align: center; color: var(--vp-c-text-1);
  background: var(--vp-c-bg); min-width: 40px;
}

.stepper-disabled { opacity: 0.5; }

/* Sizes */
.stepper-small .stepper-btn { width: 28px; height: 28px; }
.stepper-small .stepper-value { font-size: 12px; height: 28px; line-height: 28px; min-width: 36px; }

.stepper-medium .stepper-btn { width: 36px; height: 36px; }
.stepper-medium .stepper-value { font-size: 14px; height: 36px; line-height: 36px; min-width: 44px; }

.stepper-large .stepper-btn { width: 44px; height: 44px; }
.stepper-large .stepper-value { font-size: 16px; height: 44px; line-height: 44px; min-width: 52px; }

/* EMR row */
.ns-emr-row {
  display: flex; gap: 16px; padding: 16px;
  border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg);
}
.ns-emr-item { display: flex; align-items: center; gap: 8px; }
.ns-emr-label { font-size: 12px; font-weight: 500; color: var(--vp-c-text-2); min-width: 30px; }
</style>
