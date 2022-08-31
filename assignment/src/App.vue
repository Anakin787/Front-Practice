<template>
<!-- 엔큐리티 과제 v1.0
과제 진척상황
1.Vuetify를 사용해야하지만 능숙히 사용가능한 부트스트랩을 이용하여 디자인.
2.로그인버튼을 눌러야 admin,stat페이지로 이동해야하지만 관련지식(기술)부족으로 스스로 학습한 부분만이라도 이용하여 개별페이지 작성(컴포넌트를 사용하여 확인할수있게끔 작성).
3.로그인페이지,관리자페이지(ag-grid학습후 적용)
4.No-Base에서 2달간 학습한 내용(HTML,CSS,JS,Vue기초)
4-1.Vue는 데이터바인딩 조건문 컴포넌트 router 동적UI JSON파일import등 페이지작성에필요한 기초적인정도는 학습함.-->
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a style="font-size: 1.5rem; color: blue" class="navbar-brand">Ncurity</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- navbar를 이용해서도 클릭시 해당페이지가 뜨도록 설계함. -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/login">Login</router-link><br
            /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/admin">Admin</router-link><br
            /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/stat">Stat</router-link><br
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

<!-- 버튼을 누르면 해당페이지(컴포넌트)가 아래에 뜨도록 설계함. -->
  <div>
    <p style="font-size: 1.2rem; margin-top: 30px">버튼을 눌러주세요▼</p>
    <router-link style="padding: 5px" to="/login">
      <button @click="openTran" type="submit" class="btn btn-success">
        Login
      </button>
    </router-link>

    <router-link style="padding: 5px" to="/admin">
      <button type="submit" class="btn btn-success">
        Admin
      </button>
    </router-link>

    <router-link style="padding: 5px" to="/stat">
      <button type="submit" class="btn btn-success">
        Stat
      </button>
    </router-link>
  </div>

  <transition name="login">
    <router-view :loginTran="loginTran"></router-view>
  </transition>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default {
  name: "App",
  data() {
    return {
      loginTran: 0,
    };
  },
  methods: {
    openTran() {
      this.loginTran = 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.navbar {
  border-bottom: 1px solid black;
}
.navbar-nav {
  font-size: 1.5rem;
}
a:link,
router-link:link {
  color: black;
  text-decoration: none;
}
a:visited {
  color: black;
  text-decoration: none;
}
a:hover {
  color: white;
  text-decoration: none;
}
.btn {
  width: 100px;
  height: 50px;
  font-size: 1.5rem;
}
.login-link {
  font-size: 2rem;
  margin-top: 100px;
}
.bg {
  margin: auto;
  margin-top: 200px;
  width: 20%;
  height: 60%;
  background: skyblue;
  padding: 20px;
}
.white-bg {
  background: white;
  border-radius: 5px;
  padding: 30px;
}
.login-enter-from {
  opacity: 0;
}
.login-enter-active {
  transition: all 1s;
}
.login-enter-to {
  opacity: 1;
}
.login-leave-from {
  opacity: 1;
}
.login-leave-active {
  transition: all 1s;
}
.login-leave-to {
  opacity: 0;
}
</style>
