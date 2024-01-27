<script setup lang="ts">
import type { TableHeaders } from './Base/Table.vue';

const headers: TableHeaders[] = [
    {label: 'Professor', orientation: 'left'},
    {label: 'Nome do curso', orientation: 'left'},
    {label: 'Progresso', orientation: 'center'},
    {label: 'Status', orientation: 'left'}
];

const items = [
    {
        id: 1,
        user: {
            name: 'Nuray Aksoy',
            thumbnail: '/users/user-girl-2.jpeg',
            role: 'Gerente de produto'
        },
        course: {
            name: 'Time Management',
            duration: 'Ago 21 - Set 04'
        },
        progress: 30,
        status: 'in-progress'
    },
    {
        id: 2,
        user: {
            name: 'Arthur Taylor',
            thumbnail: '/users/user-girl-2.jpeg',
            role: 'CEO'
        },
        course: {
            name: 'Time Management',
            duration: 'Ago 21 - Set 04'
        },
        progress: 70,
        status: 'in-progress'
    },
    {
        id: 3,
        user: {
            name: 'Lena Müller',
            thumbnail: '/users/user-girl-2.jpeg',
            role: 'Gerente de marketing'
        },
        course: {
            name: 'Time Management',
            duration: 'Ago 21 - Set 04'
        },
        progress: 100,
        status: 'done'
    },
    {
        id: 4,
        user: {
            name: 'Wei Chen',
            thumbnail: '/users/user-girl-2.jpeg',
            role: 'Gerente de operações'
        },
        course: {
            name: 'Time Management',
            duration: 'Ago 21 - Set 04'
        },
        progress: 100,
        status: 'done'
    }
]

</script>
<template>
    <div class="">
        <BaseTable :headers="headers" :items="items"/>
    </div>
</template>