<script setup lang="ts">
const active = ref<boolean>(false);

const hours = ref<number>(0);
const minutes = ref<number>(0);
const seconds = ref<number>(0);

function clearTime() {
    pauseTime()
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
}

function pauseTime() {
    active.value = false;
}

function startTime() {
    active.value = true;

    const timer = setInterval(() => {
        !active.value && clearInterval(timer);

        if (seconds.value === 59) {
            if (minutes.value === 59) {
                hours.value += 1;
                minutes.value = 0;
                seconds.value = 0;
                return;
            }
            minutes.value += 1;
            seconds.value = 0;
            return;
        }
        seconds.value += 1;
    }, 1000);
}
</script>

<template>
    <div class="time-tracker">
        <div class="header">
            <div class="title">
                <JurIcon icon="monday-logo" />
                <h3>Track App</h3>
            </div>
            <BaseButton icon="arrow" type="outline" />
        </div>
        <div class="content">
            <h4 v-if="active">Em andamento</h4>
            <h4 v-else>Aguardando</h4>
            <div class="clock">
                <span>{{ hours }}</span>
                <span>:{{ minutes }}</span>
                <span class="seconds">:{{ seconds }}</span>
            </div>
            <div>
                <BaseButton icon="play" type="primary-outline" @click="() => startTime()">
                    Iniciar
                </BaseButton>
                <div class="actions">
                    <BaseButton icon="play" type="primary-outline" @click="() => pauseTime()">
                        Pausar
                    </BaseButton>
                    <BaseButton icon="play" type="primary-outline" @click="() => clearTime()">
                        Parar
                    </BaseButton>
                </div>
            </div>
        </div>
    </div>
</template>