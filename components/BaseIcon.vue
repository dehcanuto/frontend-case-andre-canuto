<script setup lang="ts">
import * as _icon from '../assets/images/icons';

 const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    class: String,
    alt: String,
})

const Icon = computed(() => selectedIcon());
const iconList = new Map<string, any>([
    ['arrow', _icon.Arrow],
    ['dashboard', _icon.Dashboard],
    ['calendario', _icon.Calendario],
    ['descanso', _icon.Descanso],
    ['projetos', _icon.Projetos],
    ['times', _icon.Times],
    ['integracoes', _icon.Integracoes],
    ['beneficios', _icon.Beneficios],
    ['documentos', _icon.Documentos],
    ['calendar', _icon.Calendar],
    ['notification', _icon.Notification],
    ['plus', _icon.Plus],
    ['search', _icon.Search],
    ['timer-rush', _icon.TimerRush],
    ['timer', _icon.Timer],
    ['courses', _icon.Courses],
    ['bests', _icon.Bests],
    ['feedback', _icon.Feedback],
    ['play', _icon.Play],
    ['pause', _icon.Pause],
    ['stop', _icon.Stop],
    ['monday-logo', _icon.MondayLogo],
    ['options', _icon.Options]
]);

function selectedIcon() {
    return iconList.get(props.icon);
}
</script>

<template>
    <Icon :class="class" :alt="alt" />
</template>