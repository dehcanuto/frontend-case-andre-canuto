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
            <div class="infos">
                <BaseIcon v-if="icon" :icon="icon" />
                <h3>{{ title }}</h3>
            </div>
            <BaseButton v-if="buttonTitle">{{ buttonTitle }}</BaseButton>
        </div>
        <slot />
    </div>
</template>