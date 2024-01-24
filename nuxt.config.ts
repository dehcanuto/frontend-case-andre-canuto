// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          preload: true,
          Inter: '200..700',
        }
    }],
  ],
  css: ['~/assets/scss/main.scss'],
  devtools: { enabled: true }
})
