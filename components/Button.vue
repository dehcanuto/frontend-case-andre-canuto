<script setup lang="ts">
const props = defineProps({
  type: String,
  class: String,
  icon: String
})
</script>

<template>
  <button
    type="button"
    :class="`btn btn-${props.type}`" 
    @click="() => $emit('click')">
    <JurIcon v-if="icon" :icon="icon" />
    <slot></slot>
  </button>
</template>