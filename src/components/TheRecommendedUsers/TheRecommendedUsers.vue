<template>
  <div class="d-flex pa-4">
    <RecommendedUser
      class="ma-2"
      v-for="(user, index) in recommended_users"
      :recommended_user="user"
      :key="`recomended-user-${index}`"
    />
  </div>
</template>

<script>
import RecommendedUser from './RecommendedUser/RecommendedUser'

export default {
  components: {
    RecommendedUser
  },
  data () {
    return {
      recommended_users: [
        {
          'icon_src': '',
          'username': 'はたはた',
          'match_times': 3
        },
        {
          'icon_src': '',
          'username': 'watano',
          'match_times': 2
        }
      ]
    }
  }
}
</script>
