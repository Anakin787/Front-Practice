<template>
  <div>
    {{$route.params.id}}
    <div class="container mt-4">
      <h4>{{블로그글[$route.params.id].title}}</h4>
      <p>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: {
    블로그글: Array,
  },
}
</script>

<style>

</style>