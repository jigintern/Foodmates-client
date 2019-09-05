<template>
  <div class="wrapper d-flex mt-2">
    <RecommendedUser
      class="mr-3 ml-1 mt-4 mb-2"
      v-for="user in recommendedUsers"
      :recommendedUser="user"
      :key="`recomended-user-${user.id}`"
    />
  </div>
</template>

<style lang="stylus" scoped>
.wrapper
  margin: 4px 4% 4px calc(4% + 48px)
  overflow: scroll hidden

@media (max-width: 360px)
  .wrapper
    margin: 4px 4%

@media (min-width: 1700px)
  .wrapper
    margin: 4px calc(50% - 800px) 4px calc(50% - 752px)
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
