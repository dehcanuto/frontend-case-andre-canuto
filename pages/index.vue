<template>
  <div class="main-content">
    <BaseCard
      title="Rastreador de tempo"
      icon="timer-rush"
      button-title="Histórico">
      <TimeTracker />
      <PreviousTasks />
    </BaseCard>
    <div class="col">
      <BaseCard
        title="Horas diárias de trabalho"
        icon="timer"
        button-title="Detalhes">
        <DailyWorks />
      </BaseCard>
      <BaseCard
        title="Cursos - Progresso"
        icon="courses"
        button-title="Ver todos">
        <p>Teste</p>
      </BaseCard>
    </div>
    <BaseCard
      title="Destaque colaboradores"
      icon="bests"
      button-title="Enviar">
      <p>Teste</p>
    </BaseCard>
    <div class="col-span-2">
      <BaseCard
        title="Cursos"
        icon="courses"
        button-title="Ver todos">
        <p>Teste</p>
      </BaseCard>
    </div>
      <BaseCard
        title="Feedback diário"
        icon="feedback">
        <p>Teste</p>
      </BaseCard>
  </div>
</template>