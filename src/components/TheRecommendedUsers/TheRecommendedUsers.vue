<template>
  <div class="d-flex pa-4">
    <RecommendedUser
      class="ma-2"
      v-for="user in recommendedUsers"
      :recommendedUser="user"
      :key="`recomended-user-${user.id}`"
    />
  </div>
</template>

<script>
import RecommendedUser from './RecommendedUser/RecommendedUser'

export default {
  props: ['recommendedUsers'],

  components: {
    RecommendedUser
  },

  data () {
    return {
    }
  }
}
</script>
