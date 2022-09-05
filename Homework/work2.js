
for (i = 0; i < 3; i++) {
    titlePrice(i)
}

function titlePrice(a) {
    document.querySelectorAll('h5')[a].innerHTML = products[a].title
    document.querySelectorAll('p')[a].innerHTML = '가격 : ' + products[a].price
}
//문자중간에 변수집어넣기 '백틱'
var b = 'b';
console.log(`a${b}a`)

$.get('https://codingapple1.github.io/price.json') //JSON을 자동으로 object로바꿔줌
    .done(function (data) { //성공시
        console.log(data)
    })
    .fail(function () { //실패시
        console.log('실패함')
    })

fetch('https://codingapple1.github.io/price.json')
    .then(res => res.json) //JSON을 object로바꿔줌
    .then(function (data) { //성공시
        console.log(data)
    })
    .catch(function () { //실패시
        console.log('실패함')
    })