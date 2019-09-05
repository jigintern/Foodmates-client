<template>
  <div class="wrapper">
    <post-card v-for="(post,index) in posts" :key="`post-${index}`" class="item"
        :post="post"/>
  </div>
</template>


<style lang="stylus" scoped>
.wrapper
  position: relative
  margin: 4px 4% 4px calc(4% + 48px)

@media (max-width: 360px)
  .wrapper
    margin: 4px 12px

@media (min-width: 1700px)
  .wrapper
    margin: 4px calc(50% - 800px) 4px calc(50% - 752px)
</style>

<script>
import PostCard from './PostCard/PostCard'

export default {
  props: [
    'posts'
  ],
  components: {
    PostCard
  },
  mounted () {
    window.addEventListener('resize', this.positioning)
    window.addEventListener('load', this.positioning)
  },
  updated () {
    this.positioning()
  },
  methods: {
    min (h0, h1, h2) {
      if(h0 <= h1 && h0 <= h2)
        return 0
      if(h1 <= h2)
        return 1
      return 2
    },
    positioning () {
      const WIDTH = window.innerWidth
      let el = document.getElementsByClassName('item')
      let heights = [16, 16, 16]
      if(WIDTH < 800){
        for(var i=0; i<el.length; i++){
          el[i].style.width = '100%'
          el[i].style.position = 'absolute'
          el[i].style.top = heights[0] + 'px'
          el[i].style.left = '0'
          heights[0] += el[i].clientHeight + 16
        }
      }else{
        for(var i=0; i<Math.ceil(el.length/3); i++)
        for(var j=0; j<3 && 3*i+j<el.length; j++){
          let col = this.min(heights[0], heights[1], heights[2])
          el[3*i+j].style.width = 'calc((100% - 32px) / 3)'
          el[3*i+j].style.position = 'absolute'
          el[3*i+j].style.top = heights[col] + 'px'
          el[3*i+j].style.left = 'calc( ((100% - 32px) / 3) * ' +  col +  ' + 16px * ' + col + ' )'
          heights[col] += el[3*i+j].clientHeight + 16
        }
      }
    }
  }
}
</script>
