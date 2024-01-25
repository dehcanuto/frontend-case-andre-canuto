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
    "@nuxt/image"
  ],
  css: ['~/assets/scss/main.scss'],
  image: {
    dir: 'assets/images'
  },
  devtools: { enabled: true }
})