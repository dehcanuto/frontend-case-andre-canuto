<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'in-progress'
  }
})

function textTag (code: string) {
  switch (code) {
    case 'in-progress':
      return 'Em andamento';   
      break;
      case 'done':
        return 'Concluído';
      break;
    default:
      break;
  }
}
</script>

<template>
  <div class="tag-progress">
    <BaseIcon :icon="type" />
    <span>{{ textTag( type ) }}</span>
  </div>
</template>