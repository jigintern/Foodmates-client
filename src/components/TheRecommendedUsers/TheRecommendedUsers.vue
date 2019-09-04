<template>
  <div class="wrapper d-flex">
    <RecommendedUser
      class="ma-2"
      v-for="(user, index) in recommendedUsers"
      :key="`recomended-user-${index}`"
      :recommendedUser="user"
    />
  </div>
</template>

<style lang="stylus" scoped>
.wrapper
  margin-left: 80px
  padding: 4px 4%

@media (max-width: 360px)
  .wrapper
    margin: 0

@media (min-width: 1700px)
  .wrapper
    padding: 4px calc(50% - 800px)
</style>

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
