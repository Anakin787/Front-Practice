<template>
  <transition name="fade">
    <m
      @close="모달창상태 = false"
      :원룸들="원룸들"
      :클릭번호="클릭번호"
      :모달창상태="모달창상태"
    />
  </transition>

  <div class="menu">
    <a v-for="(a, i) in 메뉴들" :key="i">{{ a }}</a>
  </div>

  <Discount v-if="showDiscount == true"  />
  <button @click="pricesort">가격순정렬</button>
  <button @click="alphasort">가나다순정렬</button>
  <button @click="under50">필터순정렬</button>
  <button @click="sortback">되돌리기</button>

  <!-- <div v-for="(b,i) in 원룸들" :key="i">
  <img class="room-img" :src="b.image">
  <h4 @click="모달창상태=true;클릭번호=i">{{b.title}}</h4>
  <p>{{b.price}}</p>
  <button @click="click(i)">허위매물신고</button><span>클릭수 : {{신고수[i]}}</span>
</div> -->

  <card
    @openModal="
      모달창상태 = true;
      클릭번호 = $event;
    "
    :원룸="원룸들[i]"
    v-for="(b, i) in 원룸들"
    :key="i"
  />
</template>

<script>
import data from "./data";
import m from "./m.vue";
import card from "./card.vue";
import Discount from "./discount.vue";

export default {
  name: "App",

  // 변수저장부
  data() {
    return {
      showDiscount: true,
      원룸들오리지널: [...data], //사본만드는 [...array]자료형
      클릭번호: 0,
      모달창상태: false,
      메뉴들: ["Home", "Show", "About"],
      원룸들: data, //data를 '원룸들'이란 이름으로 저장
      스타일: "color:red",
      신고수: [0, 0, 0],
    };
  },
  //this붙여아한다.
  methods: {
    click(a) {
      this.신고수[a]++;
    },
    pricesort() {
      //sort()는 원본을 변형.
      this.원룸들.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    alphasort() {
      this.원룸들.sort(function (a, b) {
        return a.title.localeCompare(b.title); //localeCompare : 문자열비교
      });
    },
    under50() {
      this.원룸들 = [...this.원룸들오리지널].filter((a) => {
        return a.price < "500000";
      });
    },
    sortback() {
      this.원룸들 = [...this.원룸들오리지널]; //array에 등호는 두 array를 공유한다는뜻. 같이수정됌.
    },
  },
  components: {
    m: m,
    card: card,
    Discount,
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
.discount {
  background: gray;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0px);
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
