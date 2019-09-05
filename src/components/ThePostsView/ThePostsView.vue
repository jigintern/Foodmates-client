<template>
  <div>
    <post-card v-for="(post,index) in posts" :key="`post-${index}`" class="item"
        :post="post"/>
  </div>
</template>

<script>
import PostCard from './PostCard/PostCard'

export default {
  props: [
    'posts'
  ],
  components: {
    PostCard
  },
  created () {
    this.load()
  },
  mounted () {
    window.addEventListener('resize', this.load)
  },
  updated () {
    this.load()
  },
  methods: {
    min (h0, h1, h2) {
      if(h0 <= h1 && h0 <= h2)
        return 0
      if(h1 <= h2)
        return 1
      return 2
    },
    load () {
      let WIDTH = window.innerWidth
      let el = document.getElementsByClassName('item')
      let heights = [120, 120, 120]
      if(WIDTH < 800){
        for(var i=0; i<el.length; i++){
          el[i].style.width = '100%'
          el[i].style.position = 'absolute'
          el[i].style.top = heights[0] + 'px'
          el[i].style.left = 0 + 'px'
          heights[0] += el[i].clientHeight + 32
        }
      }else{
        for(var i=0; i<Math.ceil(el.length/3); i++)
        for(var j=0; j<3 && 3*i+j<el.length; j++){
          let col = this.min(heights[0], heights[1], heights[2])
          el[3*i+j].style.width = '30%'
          el[3*i+j].style.position = 'absolute'
          el[3*i+j].style.top = heights[col] + 'px'
          el[3*i+j].style.left = 'calc( 33% *' + j + ')'
          heights[col] += el[3*i+j].clientHeight + 32
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
