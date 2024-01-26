<script setup lang="ts">
const emit = defineEmits(['click']);

defineProps({
  type: String,
  className: String,
  icon: String
})
</script>

<template>
  <button
    type="button"
    :class="`btn btn-${type} ${className}`" 
    @click="() => emit('click')">
    <JurIcon v-if="icon" :icon="icon" />
    <slot />
  </button>
</template>