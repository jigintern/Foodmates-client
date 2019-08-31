<template>
  <div class="login-form">
    <v-form @submit.prevent="onSubmit">
      <v-layout justify-center>
        <v-flex xs6>
          <h1>Login</h1>
          <v-text-field v-model="id" label="ID" @keyup.enter="onSubmit" />
          <v-text-field
            v-model="password"
            label="Password"
            :append-icon="password_show ? 'visibility' : 'visibility_off'"
            :type="password_show ? 'text' : 'password'"
            @click:append="password_show = !password_show"
            @keyup.enter="onSubmit"
          />
          <v-btn @click="onSubmit">
            Submit
          </v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </div>
</template>

<script>
export default {
  middleware: [
    'unauthenticated'
  ],

  props: [],

  data () {
    return {
      id: '',
      password: '',
      password_show: false,
      error: null
    }
  },

  methods: {
    async onSubmit () {
      try {
        await this.$store.dispatch(
          'login',
          {
            'id': this.id,
            'password': this.password
          }
        )
        this.id = ''
        this.password = ''
        this.error = null
        this.$router.push('/posts')
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>
