<script setup lang="ts">
defineProps({
  percentage: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="line-progress">
    <div class="line-progress-container">
      <div class="line-progress-container-bar">
        <span class="line-progress-container-bar-fill" :style="`--percentage: ${percentage}%`" />
      </div>
    </div>
    <h3 class="line-progress-percentage">
      {{ percentage }}%
    </h3>
  </div>
</template>