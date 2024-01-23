![Jurisoft](.github/jurisoft-logo.svg =250x52)

![Version](https://img.shields.io/badge/1.0.0-beta?label=version)
![Jurisoft](https://img.shields.io/badge/powered_by-Jurisoft-ff4a00)
![NuxtJS version](https://img.shields.io/badge/NuxtJS-3.9.3-00dc82?style=flat-square&logo=nuxt.js&logoColor=white)

# André Canuto - Jurisoft Challenge

Este desafio é projetado para avaliar suas habilidades na criação de interfaces de usuário responsivas e modulares. Você desenvolverá uma tela similar à fornecida. Abaixo, explicamos tudo o que você precisa saber para prosseguir. Não se preocupe se parecer desafiador à primeira vista! Não esperamos que todos completem todas as tarefas. Este teste é aplicado a candidatos de todos os níveis de experiência, então faça o melhor que puder sem pressão.

## 🚀 Instalação

1. Instale as dependências do projeto.

```bash
yarn install
```

1. Inicie o projeto em um servidor de desenvolvimento `http://localhost:3000`.

```bash
yarn dev
```

## Requisitos do Desafio

### Estrutura do Layout
- Desenvolva uma tela responsiva que se adapte a diversos tamanhos de dispositivos. ( Opcional )
- A tela deve incluir as seguintes seções:
  - Barra lateral de navegação.
  - Área de cabeçalho com informações do usuário.
  - Controle de rastreamento de tempo.
  - Quadro de horas de trabalho diário.
  - Seção de progresso no curso.
  - Destaque do funcionário.
  - Feedback diário.

### Componentes Modulares
- Utilize Nuxt 3 para construir componentes reutilizáveis e modulares.
- Cada seção da tela deve ser um componente isolado.

### Estilização com SCSS
- Utilize SCSS para criar estilos escaláveis e de fácil manutenção.
- Aplique variáveis SCSS, mixins e aninhamento quando apropriado.
- Garanta que a estilização seja consistente e alinhada com a imagem fornecida.

### Interatividade
- Adicione funcionalidades interativas como iniciar e pausar o rastreador de tempo e navegar pelas abas da barra lateral.
- Implemente a lógica para simular o preenchimento do progresso dos cursos e atualizações de feedback diário.

### Dados Mockados
- Utilize dados fictícios para preencher as seções da tela.
- Os dados devem ser carregados dinamicamente nos componentes.

### Responsividade ( Opcional )
- A interface deve ser completamente responsiva e funcionar em desktops e dispositivos móveis.
- Teste e ajuste os layouts para garantir a usabilidade em vários tamanhos de tela.