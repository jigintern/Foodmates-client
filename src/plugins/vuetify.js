import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  iconfont: 'mdi',
  theme: {
    themes: {
      light: {
        primary: colors.orange.lighten3,
        accent: colors.amber.accent2,
        secondary: colors.blueGrey.darken4,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  }
})
