<script setup lang="ts">
import { defineProps } from 'vue';

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
    }
})
</script>
<template>
  <div class="flex">
    <NuxtImg :src="image" :alt="name" loading="lazy" />
    <div class="info">
      <h1>{{ name }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
</template>