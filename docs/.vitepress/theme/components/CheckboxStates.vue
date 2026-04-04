<script setup>
import { ref } from 'vue'
const checks = ref({ a: false, b: true, c: false })
const group = ref(['혈액검사'])
const allChecked = ref(false)
</script>

<template>
  <div class="cb-wrap">
    <!-- States -->
    <h4 class="section-title">States</h4>
    <div class="cb-row">
      <label class="cb-item">
        <input type="checkbox" class="cb-input" :checked="false" disabled />
        <span class="cb-label">Unchecked</span>
      </label>
      <label class="cb-item">
        <input type="checkbox" class="cb-input" :checked="true" disabled />
        <span class="cb-label">Checked</span>
      </label>
      <label class="cb-item indeterminate-wrap">
        <input type="checkbox" class="cb-input cb-indeterminate" ref="indet" disabled />
        <span class="cb-label">Indeterminate</span>
      </label>
      <label class="cb-item cb-disabled-item">
        <input type="checkbox" class="cb-input" disabled />
        <span class="cb-label">Disabled</span>
      </label>
      <label class="cb-item cb-disabled-item">
        <input type="checkbox" class="cb-input" :checked="true" disabled />
        <span class="cb-label">Disabled + Checked</span>
      </label>
      <label class="cb-item cb-error-item">
        <input type="checkbox" class="cb-input cb-error" />
        <span class="cb-label">Error</span>
      </label>
    </div>

    <!-- Interactive Group -->
    <h4 class="section-title">그룹 선택 (인터랙티브)</h4>
    <div class="cb-group-demo">
      <label class="cb-item">
        <input type="checkbox" class="cb-input" v-model="checks.a" />
        <span class="cb-label">동의서 확인</span>
      </label>
      <label class="cb-item">
        <input type="checkbox" class="cb-input" v-model="checks.b" />
        <span class="cb-label">개인정보 수집 동의</span>
      </label>
      <label class="cb-item">
        <input type="checkbox" class="cb-input" v-model="checks.c" />
        <span class="cb-label">마케팅 수신 동의 (선택)</span>
      </label>
    </div>

    <!-- EMR Usage -->
    <h4 class="section-title">EMR 활용 예시</h4>
    <div class="cb-emr-demo">
      <div class="cb-emr-title">검사 항목 선택</div>
      <div class="cb-emr-grid">
        <label class="cb-item" v-for="item in ['혈액검사 (CBC)', '간기능 (LFT)', '혈당 (Glucose)', '지질검사 (Lipid)', '소변검사 (UA)', '심전도 (ECG)']" :key="item">
          <input type="checkbox" class="cb-input" :value="item" v-model="group" />
          <span class="cb-label">{{ item }}</span>
        </label>
      </div>
      <div class="cb-emr-count">{{ group.length }}개 선택됨</div>
    </div>
  </div>
</template>

<style scoped>
.cb-wrap { margin: 20px 0 28px; }
.section-title { font-size: 14px; font-weight: 600; color: var(--vp-c-text-1); margin: 20px 0 12px; }
.section-title:first-child { margin-top: 0; }

.cb-row, .cb-group-demo {
  display: flex; flex-wrap: wrap; gap: 16px; padding: 16px;
  border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg);
}

.cb-item {
  display: flex; align-items: center; gap: 8px; cursor: pointer;
  font-size: 13px; color: var(--vp-c-text-1);
}

.cb-input {
  width: 18px; height: 18px; accent-color: #3B82F6; cursor: pointer;
  border-radius: 4px;
}

.cb-label { user-select: none; }

.cb-disabled-item { opacity: 0.5; cursor: not-allowed; }
.cb-disabled-item .cb-input { cursor: not-allowed; }
.cb-error-item .cb-input { outline: 2px solid #EF4444; outline-offset: 1px; }

/* EMR demo */
.cb-emr-demo {
  padding: 16px; border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg);
}
.cb-emr-title { font-size: 13px; font-weight: 600; color: var(--vp-c-text-1); margin-bottom: 10px; }
.cb-emr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.cb-emr-count { margin-top: 10px; font-size: 11px; color: #3B82F6; font-weight: 600; }
</style>
