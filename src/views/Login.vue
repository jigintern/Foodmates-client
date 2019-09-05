<template>
  <div class="d-flex justify-center">
    <v-card class="mt-4 px-12 py-8" style="flex:0 1 640px;">
      <v-form @submit.prevent="onSubmit" class="d-flex flex-column align-center">
        <v-text-field
          v-model="loginName"
          label="ログイン名(ID)"
          @keyup.enter="onSubmit"
          style="width:100%;"
        />
        <v-text-field
          v-model="password"
          label="パスワード"
          :append-icon="password_show ? 'visibility' : 'visibility_off'"
          :type="password_show ? 'text' : 'password'"
          @click:append="password_show = !password_show"
          @keyup.enter="onSubmit"
          style="width:100%;"
        />
        <v-btn @click="onSubmit" color="primary" class="mt-8 mb-4">
          log in
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      loginName: '',
      password: '',
      password_show: false,
      error: null
    }
  },

  computed: {
    ...mapGetters({
      authUser: 'authUser'
    })
  },

  created () {
    if (this.$store.getters.authUser) this.$router.push('/')
  },

  methods: {
    async onSubmit () {
      try {
        const self = this
        await this.$store.dispatch(
          'login',
          {
            'login_name': this.loginName,
            'password': this.password
          }
        ).then(() => {
          if(self.authUser) self.$router.push('/')
        })
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>
