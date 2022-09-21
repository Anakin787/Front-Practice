// //JS를 순차적으로 실행 시키기 위해서 콜백함수를 사용한다.(콜백함수는 함수안의 함수를 의미한다.)

첫째함수(둘째함수)
//콜백함수는 함수 디자인 패턴일 뿐

첫째함수(function () {
   둘째함수(function () {
      셋째함수(function () {
         어쩌구;
      });
   });
})

//순차적으로 실행하려고 콜백함수를 여러개 사용하면 코드가 옆으로 길어지는 단점이 있습니다.


//=>이 문제를 개선해 주는것이 ES6문법의 Promise입니다.ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
첫째함수().then(function () {
   담에실행할거
}).then(function () {
   담에실행할거
});

//장점1. 옆으로 길어지지 않고 then이라는 키워드를 통해 직관성이 높아집니다.
//장점2. 성공/실패의 경우에 맞춰 각각 다른코드 실행 가능.

var 프로미스 = new Promise(function (resolve, reject) {
   var 어려운연산 = 1 + 1;
   resolve();
   // reject();
}); //성공|실패 판정기계

프로미스.then(function () {
   //프로미스 성공시 실행할 코드
}).catch(function () {
   //실패시 실행 코드
}).finally(function () {
   //성공이든 실패든 실행시 코드
})

//Promise오해 : 비동기적처리가 가능하게 바꿔주는 문법이아니다.(상관이 없다) -- 그냥 콜백함수 디자인의 대체품일 뿐이다.

//Promise가 적용된 곳들 - jQuery.ajax() & fetch()

fetch().then().catch()

//Promise예제

var iload = new Promise(function (resolve, reject) {
   $('#test').on('load', function () {
      resolve()
   })
   $('#test').on('error', function () {
      reject()
   })
})
iload.then(function () {
   console.log('성공')
}).catch(function () {
   console.log('실패')
})

//Promis예제2
var T = runajax('https://codingapple1.github.io/hello.txt')

//then을 하나 더 쓰고싶으면 new Promise()를 return해주면 된다.
T.then(function (text) {
   console.log(text)
   return runajax('https://codingapple1.github.io/hello2.txt')
}).then(function (text) {
   console.log(text)
})

function runajax(URL) {
   return new Promise(function (resolve) {
      $.get(URL).done(function (text) {
         resolve(text)
      })
   })
}
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

async function 더하기() { //Promise 디자인 없이 생성 - 파라미터가 없기때문에 성공의경우만 가능.
   var 프로미스 = new Promise(function (resolve, reject) {
      var 힘든연산 = 1 + 1;
      resolve(100);
      // reject(100)

   })
   try {
      var 결과 = await 프로미스;  //then()을 쉽게 대체하는 문법. 그 이상 그 이하도 아님. - 프로미스 실패시 에러나고 멈춤.
      console.log(결과);
   }catch{
      console.log('실패')
   }
   //방지하려면 try{ 이걸해보고 에러나면 }catch{ 이걸해봐라 } 사용

   //return을 해주면 수행결과값을 전달해줌
}
더하기()

//실습예제

async function 버튼누르면() {
   var 프로미스 = new Promise(function (resolve, reject) {
      $('#버튼').on('click', function () {
         resolve('성공')
      })
   })

   var r=await 프로미스;
   console.log(r)
}

버튼누르면()