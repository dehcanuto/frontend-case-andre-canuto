<script setup lang="ts">
import JurIcon from '../components/JurIcon.vue';

</script>

<template>
  <div class="main-header">
    <UserThumb
      image="/users/user-girl-1.jpeg"
      name="Sophia Williams"
      description="Bem-vinda de volta 👋🏻"
    />
    <div class="actions">
      <Button type="outline" icon="search" />
      <Button type="outline" icon="notification" />
      <Button icon="calendar">
        Calendário
      </Button>
      <Button type="primary" icon="plus">
        Nova Solicitação
      </Button>
    </div>
  </div>
</template>