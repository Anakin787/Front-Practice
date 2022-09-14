/**
 * 구매버튼 누르면 상품명Local Storage저장
 * (1)형제관계찾기(요소) - siblings()
 * (2)데이터 있을때 없을때 나눠서 - Array형태로
 */

products.forEach((a, i) => {
    $('.row').append(`<div class="col-sm-4">
<img src="https://via.placeholder.com/600" class="w-100">
<h5 class="title">${products[i].title}</h5>
<p>가격 : ${products[i].price}</p>
<button class="buy">구매</button>
</div>`)

})

// array/object를 JSON으로 바꿀땐 JSON.stringify()
// JSON을 array/object으로 바꿀땐 JSON.parse()

$('.buy').click(function (e) {

    //★★★내가 클릭한거 ==> e.target()
    var t = $(e.target).siblings('h5').text()

    //여러가지 표기형식으로 테스트해보기.(변수에 담아 쓰든 바로 집어넣든.) - 다양하게 집어넣어보기!
    //내가 쓰는 변수의 상태가 어떻게 나오는지확인.(null인지 값이 있는지) - console사용하여 확인하는 습관! - 조건식에 활용여부 체크.
    if ((localStorage.items == null)) {
        var arr = new Array();
        arr.push(t);
        localStorage.setItem('items', JSON.stringify(arr))
    }
    else {
        var tmp = JSON.parse(localStorage.getItem('items'));
        tmp.push(t);
        localStorage.setItem('items', JSON.stringify(tmp))
    }
})