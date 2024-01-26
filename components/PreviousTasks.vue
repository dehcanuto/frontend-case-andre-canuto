<script setup lang="ts">
const { data } = await useFetch('/api/tasks')

</script>

<template>
  <div class="previous-tasks">
    <h4 class="session-title">Tarefas Anteriores</h4>
    <ul class="list-items">
      <li class="item" v-for="(item, index) in data" :key="index">
        <UserThumb
          image="/jurisoft-icon.svg"
          :name="item.name"
          :description="item.time"
        />
        <BaseButton icon="options" type="outline" />
      </li>
    </ul>
  </div>
</template>