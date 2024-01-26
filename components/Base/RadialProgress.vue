<script setup lang="ts">
defineProps({
  percentage: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div>
    <div class="radial-progress" :style="`--percentage: ${percentage}%`">
      <div class="radial-progress-percentage">
        {{ percentage }}%
      </div>
    </div>
  </div>
</template>