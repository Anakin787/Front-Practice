<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Encurity</a>
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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/login">Login</router-link><br
            /></a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#"
                  ><router-link to="/admin">관리자페이지</router-link></a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#"
                  ><router-link to="/stat">통계페이지</router-link></a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
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
.navbar-brand {
  margin-bottom: 10px;
}
a:link:visited:hover {
  color: black;
  text-decoration: none;
}
a:visited {
  color: black;
  text-decoration: none;
}
a:hover {
  color: gray;
  text-decoration: underline;
}
.bg {
  margin: auto;
  margin-top: 300px;
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
</style>
