<template>
  <div>
    <v-container>
      <v-layout wrap>
        <v-flex xs6 md3 v-for="(p, index) in posts" :key="`${index}`">
          <v-card color="#aaaaaa" height=280 class="ma-2 pa-2">
            <v-img :src="`/img/test${index}.jpg`" />
            <h1>{{ p.title }}</h1>
            <p>{{ p.content }}</p>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [
        {
          title: "タイトル1",
          content: "文章1"
        },
        {
          title: "タイトル2",
          content: "文章2"
        },
        {
          title: "タイトル3",
          content: "文章3"
        },
        {
          title: "タイトル3",
          content: "文章3"
        },
        {
          title: "タイトル3",
          content: "文章3"
        },
        {
          title: "タイトル3",
          content: "文章3"
        },
        {
          title: "タイトル3",
          content: "文章3"
        }
      ]
    }
  }
}
</script>
