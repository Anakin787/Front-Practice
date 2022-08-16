
for (i = 0; i < 3; i++) {
    titlePrice(i)
}

function titlePrice(a) {
    document.querySelectorAll('h5')[a].innerHTML = products[a].title
    document.querySelectorAll('p')[a].innerHTML = '가격 : '+products[a].price
}
//문자중간에 변수집어넣기 '백틱'
var b= 'b';
console.log(`a${b}a`)