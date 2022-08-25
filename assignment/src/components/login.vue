<template>
  <div class="bg" id="e">
    <div class="white-bg">
      <img src="./Enlogo.jpg" />
      <h4 style="margin-bottom: 40px">엔큐리티/엔큐리티플랫폼</h4>
      <form v-on:submit="submitForm">
        <div class="my-3">
          <span style="margin-right: 20px">ID</span>
          <input
            id="id"
            placeholder="aaa@bbb.com"
            type="text"
            class="form-id"
          />
        </div>
        <div class="my-3">
          <span style="margin-right: 12px">PW</span>
          <input
            id="pw"
            placeholder="비밀번호"
            type="password"
            class="form-pw"
          />
        </div>
        <button type="submit" class="btn btn-outline-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import url from "./admin.vue";
export default {
  name: "login",
  data() {
    return {
      url: url,
    };
  },
  props: {},
};
</script>

<style>
</style>