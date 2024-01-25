<script setup lang="ts">
defineProps({
  title: String,
  button: String,
  icon: String,
  buttonTitle: String
})
</script>

<template>
    <div class="card">
        <div class="header">
            <div>
                <JurIcon v-if="icon" :icon="icon" />
                <h3>{{ title }}</h3>
            </div>
            <Button>{{ buttonTitle }}</Button>
        </div>
        <slot />
    </div>
</template>