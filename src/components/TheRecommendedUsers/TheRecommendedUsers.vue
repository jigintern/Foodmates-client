<template>
  <div class="d-flex pa-4">
    <RecommendedUser
      class="ma-2"
      v-for="(user, index) in recommendedUsersID"
      :recommendedUser="user"
      :key="`recomended-user-${index}`"
    />
  </div>
</template>

<script>
import RecommendedUser from './RecommendedUser/RecommendedUser'

export default {
  props: ['recommendedUsersID'],

  components: {
    RecommendedUser
  },

  data () {
    return {
    }
  }
}
</script>
