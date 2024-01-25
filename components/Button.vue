<script setup lang="ts">
const props = defineProps({
  type: String,
  class: String,
})
</script>

<template>
  <button
    type="button"
    :class="`btn btn-${props.type}`" 
    @click="() => $emit('click')">
    <slot></slot>
  </button>
</template>