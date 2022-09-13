products.forEach((a,i) => {

    $('.row').append(`<div class="col-sm-4">
<img src="https://via.placeholder.com/600" class="w-100">
<h5 class="title">${products[i].title}</h5>
<p>가격 : ${products[i].price}</p>
<button class="buy">구매</button>
</div>`)
})

$('.buy').on('click',function(){
    var title=$('.buy').siblings('.title')
    if ((typeof arr == "undefined")){
        var arr=[];
        arr.push(title);
        JSON.stringify(arr);
        localStorage.setItem('items',arr)
    }
    else{
        var tmp=localStorage.getItem('arr')
        JSON.parse(tmp);
        tmp.push(title);
        localStorage.setItem('items',tmp)
    }
})
// array/object를 JSON으로 바꿀땐 JSON.stringify()
// JSON을 array/object으로 바꿀땐 JSON.parse()

//예시 코드
// var arr=[1,2,3];
// var newarr=JSON.stringify(arr);
// localStorage.setItem('num',newarr)
// var 꺼낸거 =localStorage.getItem("num")
// console.log(JSON.parse(꺼낸거)[0])