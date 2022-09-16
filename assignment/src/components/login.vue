<template>
  <div class="bg" v-if="loginTran == 1">
    <div class="white-bg">
      <img src="./Enlogo.jpg" class="w80"/>
      <form v-on:submit="submitForm">
        <div class="my-3">
          <span style="margin-right: 20px">ID</span>
          <input id="id" placeholder="Username" type="text" class="form-id w80" />
        </div>
        <div class="my-3">
          <span style="margin-right: 12px">PW</span>
          <input
            id="pw"
            placeholder="****"
            type="password"
            class="form-pw w80"
          />
        </div>
        <button style="width:50%" type="submit" class="btn btn-outline-primary">Login</button>
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
    loginTran: Number,
  },
};
</script>

<style>
.w80{
  width: 80%;
}
</style>