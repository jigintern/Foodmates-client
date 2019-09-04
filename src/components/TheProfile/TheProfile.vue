<template>
<div class="d-flex flex-wrap justify-center px-4 py-8 white">
  <div style="background-color:#F5DD64;width:128px;height:128px;border-radius:64px"></div>
  <div class="d-flex flex-column ml-8" style="flex:0 1 640px;">
    <div class="d-flex align-center pb-4">
      <div class="d-flex flex-column">
        <span style="height:1.28em;font-size:32px;">{{ viewingUser.user_name }}</span>
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

<style lang="stylus">
.push_button {
  background-color: white;
}

.push_button.active {
  background-color: red;
}

.profile
  display flex
  justify-content center
  padding 24pt 0
  height 200pt
  background-color #fff
  font-size 10pt

  .case
    margin-left 64pt
    width 480pt

    .profile-name
      font-size 32pt
      height 1.2em
      font-weight 400

      .button
        margin-left 24pt
        font-size 10pt

    .profile-friendship
      font-size 6.4pt

    .profile-comment
      margin-top 12pt
      margin-bottom 24pt

    .case
      display flex
      margin 0

      .detail
        margin-right 24pt

        .figure
          font-size 8pt
          margin-right 4pt

</style>
