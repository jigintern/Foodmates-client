<template>
  <div>
    <v-card class="post">
      <header class="header" color="#FFD54F">
        <span class="dish_name">{{ post.dish_name }}</span>
        <v-spacer/>
        <div class="case">
          <small class="restaurant_name">{{ post.restaurant_name }}</small>
          <small class="restaurant_place">{{ post.restaurant_place }}</small>
        </div>
      </header>
      <div class="status">
        <v-avatar>
          <img :src="post.user_icon_address">
        </v-avatar>
        <div class="case">
          <div class="case">
            <small class="posttime">{{ post.posttime }}</small>
            <span class="user_name">{{ post.user_name }}</span>
          </div>
          <p class="content">
            {{ post.content }}
          </p>
        </div>
      </div>
      <div class="button-case">
          <v-icon class="button">mdi-bookmark</v-icon>
          <v-icon class="button">mdi-forum</v-icon>
          <v-icon class="button">mdi-more_vert</v-icon>
      </div>
    </v-card>
  </div>
</template>

<script>
  export default {
    props: ['post'],
  }
</script>
<style lang="stylus" scoped>
.post
  margin 12pt
  width 240pt
  font-size 10pt

  .header
    display flex
    align-items center
    padding 2pt 8pt
    height 28pt
    background-color #F5DD64
    color #fff

    .foodname
      flex 1 0
      padding-left 4.8pt
      font-size 12pt
      border-left solid 2pt #fff

    .case
      display flex
      flex-direction column

      .restrant-name
        font-size 8pt

      .restrant-address
        font-size 6.4pt

  .status
    display flex
    margin 8pt 12pt

    .postauthor-icon
      margin-right 12pt

    .case
      flex 1 1

      .case
        display flex
        flex-direction column
        justify-content center
        height 32pt

        .posttime
          font-size 6.4pt

        .postauthor
          font-size 12pt

      .postbody
        margin-top 8pt
        margin-bottom 4pt
        padding-right 8pt
        text-align justify

  .button-case
    display flex
    justify-content flex-end
    padding 12pt 8pt

    .button
      margin 0 8pt
</style>
