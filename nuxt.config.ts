import { AtomicPreset } from "./primevue_preset"

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      theme: {
        preset: AtomicPreset,
      },
    }
  }
})
