import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default createVuetify({
  blueprint: md3,
  defaults: {
    // global: {
    VTextField: {
      density: 'comfortable',
    },
    VSelect: {
      density: 'comfortable',
    },
    VAutocomplete: {
      density: 'comfortable',
    },
    // },
  },
})
