<script setup lang="ts">
const { data } = await useFetch('/api/menu')

</script>

<template> 
  <aside>
    <div class="sidebar">
      <div class="main">
        <div class="top-sidebar">
          <UserThumb
            image="/jurisoft-icon.svg"
            fontLabel="bold"
            name="Jurisoft"
            description="Marketing Jurídico"
          />
          <div class="action">
            <button type="button">
              <BaseIcon icon="arrow" />
            </button>
          </div>
        </div>
        <div class="menu divider-top">
          <div>
            <h2>Main</h2>
            <ul>
              <li v-for="(item, index) in data">
                <NuxtLink :key="index" :to="item.to" class="menu-item">
                  <div class="label">
                    <BaseIcon :icon="item.icon" class="icon" />
                    {{ item.label }}
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h2>FAV</h2>
          </div>
        </div>
      </div>
      <div class="top-sidebar divider-top">
        <UserThumb
          image="/users/user-girl-1.jpeg"
          fontLabel="bold"
          name="Sophia Williams"
          description="sophia@jurisoft.com"
        />
        <div class="action">
          <button type="button">
            <BaseIcon icon="arrow" />
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>