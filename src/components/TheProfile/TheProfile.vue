<template>
<div class="wrapper d-flex flex-wrap justify-center white">
  <v-avatar size="128">
    <v-img :src="`https://t2.intern.jigd.info/${viewingUser.icon_address}`" />
  </v-avatar>
  <div class="profile-text d-flex flex-column ml-8" style="flex:0 1 640px;">
    <div class="d-flex align-center pb-4">
      <div class="d-flex flex-column">
        <span style="height:1.28em;font-size:32px;">{{ viewingUser.name }}</span>
        <span class="ml-1 grey--text text--darken-2" style="font-size:8px;">@ {{ viewingUser.login_name }}</span>
      </div>
      <div v-if="viewingUser.id != authUser.id">
        <follow-button :user="viewingUser" />
      </div>
    </div>
    <p class="" style="font-size:12px;">{{ viewingUser.biography }}</p>
    <div class="d-flex align-center" style="font-size:8px;">
      <v-icon class="figure mr-2" small>mdi-cake</v-icon><span class="mr-8">{{ viewingUser.birth }}</span>
      <v-icon class="figure mr-2" small>mdi-city</v-icon><span class="mr-8">{{ viewingUser.country + ' ' + viewingUser.prefecture }}</span>
    </div>
  </div>
</div>
</template>

<script>
import FollowButton from '../FollowButton/FollowButton'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      authUser: 'authUser',
      viewingUser: 'viewingUser'
    })
  },

  components: {
    FollowButton
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  padding: 4px 4% 4px calc(4% + 48px)

@media (max-width: 360px)
  .wrapper
    padding: 4px 4%

@media (min-width: 1700px)
  .wrapper
    padding: 4px calc(50% - 800px) 4px calc(50% - 752px)

.profile-text
  flex: 0 1
</style>
