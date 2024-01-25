<script setup lang="ts">
defineProps({
  type: String,
  class: String,
  icon: String
})
</script>

<template>
  <button
    type="button"
    :class="`btn btn-${type}`" 
    @click="() => $emit('click')">
    <JurIcon v-if="icon" :icon="icon" />
    <slot />
  </button>
</template>