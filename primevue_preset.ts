import { definePreset } from '@primevue/themes'
import Lara from '@primevue/themes/lara'

export const AtomicPreset = definePreset(Lara, {
  components: {
    card: {
      colorScheme: {
        dark: {
          root: {
            background: '#13131399',
          },
        },
      },
    },
    dialog: {
      colorScheme: {
        dark: {
          root: {
            background: '#13131399',
          },
        },
      },
    },
  },
})
