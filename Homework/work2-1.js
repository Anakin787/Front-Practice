products.forEach((a) => {
    $('.row').eq(0).append(`<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${a.title}</h5>
    <p>가격 : ${a.price}</p>
  </div>`)
})

var i=0
$('.btn').on('click',function(){
    if(i==0){
        $.get('https://codingapple1.github.io/js/more1.json')
        .done(function(data){
            data.forEach((b) => {
                $('.row').eq(0).append(`<div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100">
                <h5>${b.title}</h5>
                <p>가격 : ${b.price}</p>
              </div>`)
            })
        })
        i++
    }
    else if(i==1){
        $.get('https://codingapple1.github.io/js/more2.json')
        .done(function(data){
            data.forEach((b) => {
                $('.row').eq(0).append(`<div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100">
                <h5>${b.title}</h5>
                <p>가격 : ${b.price}</p>
              </div>`)
            })
        })
    }
})