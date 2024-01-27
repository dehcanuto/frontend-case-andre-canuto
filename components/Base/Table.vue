<script setup lang="ts">
export interface TableHeaders {
    label: string,
    orientation: 'left' | 'right' | 'center'
}

defineProps({
    headers: {
        type: Array as PropType<TableHeaders[]>,
        required: true
    },
    items: Object
});
</script>

<template>
    <table class="base-table">
        <thead>
            <tr>
                <th
                    v-for="(item, index) in headers" :key="index"
                    :class="`text-${item.orientation}`">
                    {{ item.label }}
                </th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index">
                <th :class="`text-${headers[0].orientation}`">
                    <UserThumb
                        :name="item.user.name"
                        :description="item.user.role"
                        :image="item.user.thumbnail"
                    />
                </th>
              <td :class="`text-${headers[1].orientation}`">
                <h3>{{ item.course.name }}</h3>
                <p>{{ item.course.duration }}</p>
              </td>
              <td :class="`text-${headers[2].orientation}`">
                <BaseLineProgress :percentage="item.progress" />
              </td>
              <td :class="`text-${headers[3].orientation}`">
                <BaseTagProgress :type="item.status" />
              </td>
           </tr>
        </tbody>
     </table>
</template>