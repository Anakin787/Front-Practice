<template>
  <div>
      <post :피드="data" />
      <!-- <post :피드="data" />
      <post :피드="data" /> -->
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  components: {
    Post: Post
  },
  data() {
    return {
    }
  },
  props: {
    data: Array,
  }
}
</script>

<style>

</style>