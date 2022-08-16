<template>
  <div class="menu">
    <!-- 왼쪽변수는 array내의 데이터. 오른쪽변수는 1씩증가하는 정수. -->
    <a v-for="(a, i) in 메뉴들" :key="i">{{ a }}</a>
  </div>

  <!-- html속성도 데이터바인딩 가능. 형식=> :속성="데이터이름") -->
  <div v-for="b in products" :key="b">
    <h4>{{ b }}</h4>
    <p>60만원</p>
  </div>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // 자주 바뀔거같은것만 데이터바인딩 한다. 실시간렌더링 위해.
      메뉴들: ["Home", "Show", "About"],
      products: ["역삼동원룸", "천호동원룸", "상일동원룸"],
      스타일: "color:red",
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
