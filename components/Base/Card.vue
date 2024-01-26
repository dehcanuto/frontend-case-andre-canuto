<script setup lang="ts">
defineProps({
  title: String,
  button: String,
  icon: String,
  buttonTitle: String,
  headerBorder: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
    <div class="card">
        <div :class="`header ${headerBorder && 'header-w-border'}`">
            <div class="infos">
                <BaseIcon v-if="icon" :icon="icon" />
                <h3>{{ title }}</h3>
            </div>
            <BaseButton v-if="buttonTitle">{{ buttonTitle }}</BaseButton>
        </div>
        <slot />
    </div>
</template>