<template>
<div class="black-bg" v-if="모달창상태==true">
  <div class="white-bg">
    <img :src="원룸들[클릭번호].image"><br>
    <h4>{{원룸들[클릭번호].title}}</h4>
    <p>{{원룸들[클릭번호].content}}</p>
    <button @click="모달창상태=false">닫기</button>
    <Dis/>
  </div>
</div>

<div class="menu" >
  <!-- 왼쪽변수는 array내의 데이터. 오른쪽변수는 1씩증가하는 정수. -->
  <a v-for="(a,i) in 메뉴들" :key="i">{{a}}</a>
</div>
<Dis/>

<!-- HTML태그안의 속성 데이터바인딩은 :속성="데이터이름") -->
<!-- HTML태그안의 내용 데이터바인딩은 {{데이터이름}} -->
<div v-for="(b,i) in 원룸들" :key="i">
  <img class="room-img" :src="b.image">
  <h4 @click="모달창상태=true;클릭번호=i">{{b.title}}</h4>
  <p>{{b.price}}</p>
  <button @click="click(i)">허위매물신고</button><span>클릭수 : {{신고수[i]}}</span>
</div>

</template>

<script>
//컴포넌트 쓰는법
//1.vue파일 inport해오고
//2.components:{}에등록하고 쓴다.

//동적인  UI만드는 법
//1. UI의 현재 상태를 데이터로 저장해둠(데이터만들기)
//2. 데이터에 따라 UI가 어떻게보일지 작성
//결국 UI는 '데이터 조작'을해서 바꾼다!
import data from "./data";
import Discount from "./Dcount.vue"
export default {
  name: "App",

  // 변수저장부
  data() {
    return {
      // 자주 바뀔거같은것만 데이터바인딩 한다. 실시간렌더링 위해.
      클릭번호:0,
      모달창상태: false,
      메뉴들: ["Home", "Show", "About"],
      원룸들: data,
      스타일: "color:red",
      신고수: [0, 0, 0],
    };
  },

  // 함수선언부
  //꼭 'this.데이터이름' 으로 사용해야한다.
  methods: {
    click(a) {
      this.신고수[a]++;
    },
  },

  components: {
    Dis:Discount,
  },
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
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
.room-img {
  width: 100%;
  margin-top: 40px;
}
.discount{
  background: gray;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
