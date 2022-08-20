<template>
  <div class="bg" id="e">
    <div class="white-bg">
      <img src="./">
      <h4>엔큐리티플랫폼</h4>
      <form action="success.html">
        <div class="my-3">
          <input id="id" type="text" class="form-id" />
        </div>
        <div class="my-3">
          <input id="pw" type="password" class="form-pw" />
        </div>
        <router-link to="/admin">로그인</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import App from './App.vue'
import {router} from './index'

export default {
  name: "App",
  data() {
    return {};
  },
};
new Vue({
  router,
  render:h => h(App),
}).$mount('#app')
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.bg {
  margin: auto;
  width: 30%;
  height: 100%;
  background: skyblue;
  padding: 30px;
}

.white-bg {
  background: white;
  border-radius: 5px;
  padding: 30px;
}
</style>
