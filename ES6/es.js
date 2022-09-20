//this예제1
var 사람 = {
    name: '손흥민',
    sayHi: function () {
        return console.log(`안녕 나는 ${this.name}`)
    }
}
사람.sayHi();
//this예제2
var 자료 = {
    data: [1, 2, 3, 4, 5],
    전부더하기: function () {
        var b = 0
        this.data.forEach(a => b += a);
        return b
    }
}
console.log(자료.전부더하기())

//this예제3
document.getElementById('버튼').addEventListener('click', function () {
    setTimeout(() => {
        console.log(this.innerHTML)
    }, 1000);
});

//spread oprator예제
var arr = ['hello', 'world']
console.log(...arr)
console.log('hello', 'world')

var cha = 'hello'
console.log(...cha)
console.log('h', 'e', 'l', 'l', 'o')

//array합치기
var a = [1, 2, 3]
var b = [4, 5]

var c = [...a, ...b]

//spread operator로 함수 파라미터넣기
function pl(a, b, c) {
    console.log(a + b + c)
}
var num = [10, 20, 30]

pl(num[0], num[1], num[2]) //하드코딩
pl.apply(undefined, num) //옛방식
pl(...num) //현방식

//apply & call
var person = {
    인사: function () {
        console.log(this.name + '안녕')
    }
}
person.인사() //undefined안녕
var person2 = {
    name: '손흥민'
}

person.인사.apply(person2, [1, 2]) //person2에 person의 변수를 넣고 Array형태로 파라미터를 전달한다.
person.인사.call(person2, 1, 2)  //person2에 person의 변수를 넣고 개별로 파라미터를 전달한다.