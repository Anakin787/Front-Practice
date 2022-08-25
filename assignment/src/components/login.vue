<template>
  <div class="bg" v-if="loginTran==1">
    <div class="white-bg">
      <img src="./Enlogo.jpg" />
      <form v-on:submit="submitForm">
        <div class="my-3">
          <span style="margin-right: 20px">ID</span>
          <input
            id="id"
            placeholder="Username"
            type="text"
            class="form-id"
          />
        </div>
        <div class="my-3">
          <span style="margin-right: 12px">PW</span>
          <input
            id="pw"
            placeholder="＊＊＊＊"
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
  props: {
    loginTran:Number
  },
};
</script>

<style>
</style>