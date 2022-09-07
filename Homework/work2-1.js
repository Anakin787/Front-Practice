/**
 * 사용자 입력을 받아서 filter적용
 */
$('form').on('submit', function (e) {
    var value = document.getElementById('num').value
    console.log(value)

    $('.row').html('')
    inp = products.filter(v => v.price <= value)
    inp.forEach((a) => {
        $('.row').append(`<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${a.title}</h5>
    <p>가격 : ${a.price}</p>
  </div>`)
    })
    e.preventDefault(); //form을 submit하면 새로고침을하는데 이걸 방지.
})

/**
 * 다나가순 정렬
 */
// $('.btn').eq(0).on('click', function () {
//     products.sort(function (a, b) {
//         if (a.title < b.title) return 1;
//         if (a.title > b.title) return -1;
//         if (a.title === b.title) return 0;
//     })
//     $('.row').html('')
//     products.forEach((a) => {
//         $('.row').eq(0).append(`<div class="col-sm-4">
//     <img src="https://via.placeholder.com/600" class="w-100">
//     <h5>${a.title}</h5>
//     <p>가격 : ${a.price}</p>
//   </div>`)
//     })
//     i = 0
// })


var i = 0
$('.btn').eq(1).on('click', function () {
    if (i == 0) {
        $.get('https://codingapple1.github.io/js/more1.json')
            .done(function (data) {
                newdata = data.filter(a => a.price <= 60000)
                newdata.forEach((b) => {
                    $('.row').eq(0).append(`<div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100">
                <h5>${b.title}</h5>
                <p>가격 : ${b.price}</p>
              </div>`)
                })
            })
        i++
    }
    else if (i == 1) {
        $.get('https://codingapple1.github.io/js/more2.json')
            .done(function (data) {
                newdata = data.filter(a => a.price <= 60000)
                newdata.forEach((b) => {
                    $('.row').eq(0).append(`<div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100">
                <h5>${b.title}</h5>
                <p>가격 : ${b.price}</p>
              </div>`)
                })
            })
    }
})