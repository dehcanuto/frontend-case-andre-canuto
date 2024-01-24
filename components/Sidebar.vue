<script setup lang="ts">
import JurIcon from '../components/JurIcon.vue';

const { data } = await useFetch('/api/menu')

</script>

<template> 
  <aside>
    <div class="sidebar">
      <div class="main">
        <div class="top-sidebar">
          <div class="flex">
            <img src="/assets/images/jurisoft-icon.svg" alt="Jurisoft Lofo" />
            <div class="info">
              <h1>Jurisoft</h1>
              <p>Marketing Jurídico</p>
            </div>
          </div>
          <div class="action">
            <button type="button">
              <JurIcon icon="arrow" />
            </button>
          </div>
        </div>
        <div class="menu">
          <h2>Main</h2>
          <ul>
            <li v-for="(item, index) in data">
              <NuxtLink :key="index" :to="item.to" class="menu-item">
                <div class="label">
                  <JurIcon :icon="item.icon" class="icon" />
                  {{ item.label }}
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="top-sidebar">
        <div class="flex">
          <img src="/assets/images/jurisoft-icon.svg" alt="Jurisoft Lofo" />
          <div class="info">
            <h1>Sophia Williams</h1>
            <p>sophia@jurisoft.com</p>
          </div>
        </div>
        <div class="action">
          <button type="button">
            <JurIcon icon="arrow" />
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>