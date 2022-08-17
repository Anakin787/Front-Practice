<template>
  <div class="black-bg" v-if="모달창상태==true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지내용임</p>
      <button @click="모달창상태=false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <!-- 왼쪽변수는 array내의 데이터. 오른쪽변수는 1씩증가하는 정수. -->
    <a v-for="(a, i) in 메뉴들" :key="i">{{ a }}</a>
  </div>

  <!-- html속성도 데이터바인딩 가능. 형식=> :속성="데이터이름") -->
  <!-- <div v-for="(b,i) in products" :key="i">
    <h4>{{ b }}</h4>
    <p>60만원</p>
    <button @click="click(i)">허위매물신고</button> <span>신고수 : {{신고수[i]}}</span>
  </div> -->

  <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h4 @click="모달창상태=true">{{ products[0] }}</h4>
    <p>50만원</p>
    <button @click="click">허위매물신고</button> <span>신고수 : {{신고수}}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h4>{{ products[1] }}</h4>
    <p>50만원</p>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h4>{{ products[2] }}</h4>
    <p>50만원</p>
  </div>
</template>

<script>
//동적인  UI만드는 법
//1. UI의 현재 상태를 데이터로 저장해둠
//2. 데이터에 따라 UI가 어떻게보일지 작성
//결국 UI는 '데이터 조작'을해서 바꾼다!
export default {
  name: "App",

  // 변수저장부
  data() {
    return {
      // 자주 바뀔거같은것만 데이터바인딩 한다. 실시간렌더링 위해.
      모달창상태:false,
      메뉴들: ["Home", "Show", "About"],
      products: ["역삼동원룸", "천호동원룸", "상일동원룸"],
      스타일: "color:red",
      신고수:[0,0,0]
    };
  },

  // 함수선언부
  //꼭 'this.데이터이름' 으로 사용해야한다.
  methods:{
     click(a){
      this.신고수[a]++;
     }
  },

  components: {},
}
</script>

<style>
body{
  margin: 0;
}
div{
  box-sizing: border-box;
}
.black-bg{
  width: 100%;height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg{
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
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
.room-img{
  width: 100%;
  margin-top: 40px;
}

</style>
