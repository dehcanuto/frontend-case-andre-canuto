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
      <Button type="outline">
        <JurIcon icon="search" />
      </Button>
      <Button type="outline">
        <JurIcon icon="notification" />
      </Button>
      <Button>
        <JurIcon icon="calendar" />
        Calendário
      </Button>
      <Button type="primary">
        <JurIcon icon="plus" />
        Nova Solicitação
      </Button>
    </div>
  </div>
</template>