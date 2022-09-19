// var 사람 = {
//     name: '손흥민',
//     sayHi: function () {
//         return console.log(`안녕 나는 ${this.name}`)
//     }
// }
// 사람.sayHi();

var 자료 = {
    data: [1, 2, 3, 4, 5],
    전부더하기: function() {
        var b=0
        this.data.forEach((a,i) => {
            b+=a
        });
        return b
    }
}
console.log(자료.전부더하기())