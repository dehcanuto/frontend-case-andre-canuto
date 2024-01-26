<script setup lang="ts">
defineProps({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fontLabel: {
      type: String,
      default: 'normal'
    }
})
</script>
<template>
  <div class="user-info">
    <NuxtImg :src="image" :alt="name" loading="lazy" />
    <div class="info">
      <h3 :class="`font-${fontLabel}`">{{ name }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>