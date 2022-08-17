//좋은관습 : 자주쓰는 셀렉터 변수에 넣어쓰기(성능적으로 좋음)
var 버튼 = $('.tab-button');
var 탭 = $('.tab-content');
var class_cnt = document.getElementsByClassName('tab-button').length;//(=$(.tab-button).length)
//★★★반복문 안의 변수는 ★let으로 바꾸면 잘된다.★★★
// for (let i = 0; i < class_cnt; i++) {
//     버튼.eq(i).on('click', function () {
//         tab(i)
//     });
// }


//dataset입력 : data-자료이름="값"
//dataset출력 : 셀렉터.dataset.자료이름
$('.list').click(function (e) {
    //e.target(내가 누른것)
    //e.currentTarget(이벤트리스너 달린곳)(=this)
    //e.stopPropagation(상위요소로 이벤트 버블링 막아줌)
    tab(e.target.dataset.id);
})
//이벤트리스너는 적을수록 좋다. 1개만 써도 개발가능할수도.
//함수로 축약시 변수있으면 파라미터로 바꿔보자
function tab(a) {
    버튼.removeClass('orange');
    버튼.eq(a).addClass('orange');
    탭.removeClass('show-tab');
    탭.eq(a).addClass('show-tab');
}

var car = ['소나타', 50000, 'white']; //array자료형
var car2 = { name: '소나타', price: [50000, 40000, 30000] }; //object자료형
$('span').eq(0).html(car[0]);
document.querySelectorAll('span')[1].innerHTML = (car2['price'])[1];
console.log(car2.price[1])


var pants = [28, 30, 32, 34];
var shirts = [95, 100, 105];
$('.form-select').eq(0).on('input', function (e) {
    //JS에는 value, JQuery에는 val().
    var value = e.currentTarget.value
    if (value == "셔츠") {
        $('.form-select').eq(1).removeClass('hide');
        $('.form-select').eq(1).html('');
        shirts.forEach((a) => {
            $(".form-select").eq(1).append(`<option>${a}</option>`)
        })
    }
    //function 내부의this, =>(arrowFunction) 외부의this
    //반복문의 용도2 array,object내용 다 꺼낼 때.
    else if (value == "바지") {
        $('.form-select').eq(1).removeClass('hide');
        $('.form-select').eq(1).html('');
        pants.forEach((b, i) => {
            $('.form-select').eq(1).append(`<option>${b}</option>`)
        })
    }
    else {
        $('.form-select').eq(1).addClass('hide');
    }
})
//html삽입 방법(JS/jQuery)
// var text = '<p>안녕</p>';
// document.querySelector('#test').insertAdjacentHTML('beforeend', text);//안쪽밑에 '추가'
// $('#test').append(text);
