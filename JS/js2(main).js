// js2.html
// list 열고 닫기
// querySelector(CSS문법사용)- 맨 위에 나오는 한개만 찾아줌 / querySelectorAll 동인한 모든요소 다 찾아줌. 인덱싱사용!!
$('.navbar-toggler').on('click', function () {
    $('.list-group').toggleClass('show');
});

//모달창 열어주기
$('.open').on('click', function () {                      //★jQuery로 애니메이션 만드는것 보다 CSS로 만들기(성능문제)
    $('.black-bg').addClass('show-modal');
});

//검은배경클릭시 닫기 (이벤트버블링)
//이벤트버블링은 항상일어나고 관련함수 사용하여 제어한다.
$('.black-bg').on('click', function (e) {
    // jQuery비교는 ★$(aaa).is($('.bbb'))
    if (e.target==document.querySelector('.black-bg')) {
        $('.black-bg').removeClass('show-modal')
    }
})

//input태그의 이벤트 - input : 내용변경마다 발생 , change : 내용변경후 focus가 바뀌면 발생.
document.getElementById('id').addEventListener('input', function () {
    console.log('hi');
})

//다크모드
var dl = 1;
$('.badge').on('click', function () {
    $('.d').toggleClass('dark');
    if (dl % 2 == 1) {
        document.getElementById('DL').innerHTML = 'Light'
        dl++
    }
    else {
        document.getElementById('DL').innerHTML = 'Dark'
        dl++
    }
})

//input값 검증 & 정규표현식
$('#send').on('click', function (e) {                      //{#send,click} or {form,summit} ★form전송시 'summit'이벤트도 발생하기때문
    var id = document.getElementById('id').value;
    var pw = document.getElementById('pw').value;
    if (document.getElementById('id').value == '') {     //querySelector사용시 .value는 안되더라. ★중요★
        e.preventDefault();                             //★폼 전송 방지. (e)는 이벤트객체
        alert('아이디를 입력하세요');                    //소괄호 뒤에 ;붙이는 습관
    }
    if (/\S+@\S+\.\S+/.test(id) == false) {              //정규표현식
        e.preventDefault();
        alert('이메일 형식아님');
    }
    if (document.getElementById('pw').value == '') {
        e.preventDefault();//★실행코드 위에 작성
        alert('비번 입력하셈');
    }
    if (/[A-Z]/.test(pw) == false) {
        e.preventDefault();
        alert('대문자 최소한개 포함해야함');
    }
    if (document.getElementById('pw').value.length < 6) {
        e.preventDefault();
        alert('6자리 이상 입력하셈');
    }
});

//carousel 만들기
var 지금사진 = 1; //변수활용 해보자.
$('.slide-0').on('click', function (e) {
    // var 변수가 안에있으면 클릭시마다 초기화됌.
    if (지금사진 == 3) {
        $('.slide-container').css('transform', 'translateX(-100vw)');
        지금사진--;
    } else if (지금사진 == 2) {
        $('.slide-container').css('transform', 'translateX(0vw)');
        지금사진--;
    } else {
        e.preventDefault();
        alert('첫 장입니다.');
    }
})
$('.slide-1').on('click', function () {
    $('.slide-container').css('transform', 'translateX(0vw)');
})
$('.slide-2').on('click', function () {
    지금사진 = 2
    $('.slide-container').css('transform', 'translateX(-100vw)');
})
$('.slide-3').on('click', function () {
    지금사진 = 3;
    $('.slide-container').css('transform', 'translateX(-200vw)');
})
$('.slide-e').on('click', function (e) {
    if (지금사진 == 3) {
        e.preventDefault();
        alert('마지막 입니다.');
    } else {
        $('.slide-container').css('transform', 'translateX(-' + 지금사진 + '00vw)'); //변수활용 & 확장성 고려.
        지금사진++;
    }

})

//함수의  return , 소숫점처리 , 숫자변환  ★'문자'+'숫자'=>'문자숫자'로 이어서 나오기때문에 유의
function 함수(a) {
    var num = (a * 0.1).toFixed(2); // 소숫점처리 함수 But,문자로 처리가 된다.
    return parseFloat(num); //parseFloat나 parseInt로 문자를 숫자로 변환해준다.
}

//scroll활용
$('.lorem').on('scroll', function () {
    var 스크롤양 = document.querySelector('.lorem').scrollTop;
    var 실제크기 = document.querySelector('.lorem').clientHeight;
    var 전체크기 = document.querySelector('.lorem').scrollHeight;
    console.log(스크롤양, 실제크기, 전체크기)
    if (스크롤양 + 실제크기 > 전체크기 - 10) {
        alert('다 읽으셨습니다.');
    }
})

//scroll활용2
$(window).on('scroll', function () { //doucument.Selectquery('.~').addEventListener('scroll',function(){})
    if (window.scrollY > 100) { // (=doucument.Selectquery('.~').scrollTop)
        $('.navbar-brand').css('font-size', '20px')
    }
    else {
        $('.navbar-brand').css('font-size', '30px')
    }
})

//scroll진척도 확인
$(window).on('scroll', function () {
    var 전체크기 = document.querySelector('html').scrollHeight;
    var 스크롤양 = window.scrollY;
    var 실제크기 = document.querySelector('html').clientHeight;

    var n = (스크롤양 / (전체크기 - 실제크기)) * 100;
    // console.log(n)
    $('.scr-line').css('width', n + '%');
})


//var : 재선언,재할당가능. 범위 : '함수안에서'만들면 그 '함수안에서만', 밖에서만들면 밖에서 다가능.
//let : 재선언(같은이름의 변수생성)불가, 재할당가능. 범위 : 해당{}.
//const : 재선언,재할당불가(변하면 안되는 값). 범위 : 해당{}.

//예제
// 합격판독기
function abc(a, b) {
    if ((a < 0 || b < 0) || (a > 100 || b > 100)) {
        alert('장난 ㄴㄴ')
    }
    else {
        if (a + b >= 120 && a >= 40 && b >= 40) {
            console.log('합격입니다.')
        }
        else {
            console.log('불합격입니다.')
        }
    }
}
abc(10, 60)

// 3,6,9
function 삼육구(n) {
    if (n % 10 == 3 || n % 10 == 6 || n % 10 == 9) {
        console.log('박수')
    }
    else {
        console.log('통과')
    }
}
삼육구(103)

//분,초를 입력하여 ms로 출력하기
function ms(a, b) {
    var m = a * 60000;
    var s = b * 1000;
    return m + s + 'ms';
}
console.log(ms(2, 10))
//10%할인+첫구매시1.5달러 할인
function buy(a, b) {
    var total = a * 0.9.toFixed(2);
    if (b) {
        total -= (1.5);
    }
    return parseFloat(total)
}
console.log(buy(70, false))