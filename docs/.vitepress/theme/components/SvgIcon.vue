<script setup>
const props = defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 16 },
})
</script>

<template>
  <img
    :src="`/icons/${name}.svg`"
    :width="size"
    :height="size"
    :alt="name"
    class="svg-icon"
  />
</template>

<style scoped>
.svg-icon {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}
.dark .svg-icon { filter: invert(1); }
</style>
