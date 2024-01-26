<script setup lang="ts">
const running = ref<boolean>(false);

const fullTime = ref<number>(0);
const hours = ref<number>(0);
const minutes = ref<number>(0);
const seconds = ref<number>(0);

let timer: ReturnType<typeof setInterval> | null = null;

function formatTime(updateTime: any) {
    seconds.value = updateTime % 60;
    minutes.value = Math.floor(updateTime / 60) % 60;
    hours.value = Math.floor(updateTime / 3600);
}

function pad (number: number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

function startTime() {
    if (!running.value) {
        running.value = true;
        timer = setInterval(() => {
            formatTime(fullTime.value++);
        }, 1000);
    }
}

function pauseTime() {
      running.value = false;
      if (timer) clearInterval(timer);
}

function resetTime() {
      running.value = false;
      fullTime.value = 0;
      if (timer) clearInterval(timer);
}
</script>

<template>
    <div class="time-tracker">
        <div class="header">
            <div class="title">
                <BaseIcon icon="monday-logo" />
                <h3>Track App</h3>
            </div>
            <BaseButton icon="arrow" type="outline" />
        </div>
        <div class="content">
            <h4 class="session-title">
                <template v-if="running">
                    Em andamento
                </template>
                <template v-else>
                    Aguardando
                </template>
            </h4>
            <div class="clock">
                <span>{{ pad( hours ) }}</span>
                <span>:{{ pad( minutes ) }}</span>
                <span class="seconds">:{{ pad( seconds ) }}</span>
            </div>
            <div class="actions">
                <BaseButton v-if="!running" icon="play" type="primary-outline" @click="() => startTime()">
                    Iniciar
                </BaseButton>
                <template v-else>
                    <BaseButton className="pause" icon="pause" type="primary-outline" @click="() => pauseTime()">
                        Pausar
                    </BaseButton>
                    <BaseButton className="stop" icon="stop" type="primary-outline" @click="() => resetTime()">
                        Parar
                    </BaseButton>
                </template>
            </div>
        </div>
    </div>
</template>