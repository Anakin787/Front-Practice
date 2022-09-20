/**
 * 학생인적사항/인삿말출력
 * @param {string} 이름 
 * @param {number} 나이 
 */
function 기계(이름,나이){ //기계==constructor
    this.name=이름;
    this.age=나이;
    this.sayHi=function(){
        console.log('안녕하세요'+this.name+'입니다.')
    }
}

var 학생1=new 기계('지운',25); //새로 생성되는 object(instance)
var 학생2=new 기계('주용',26);


/**
 * 상품정보/부가세출력
 * @param {string} 이름 
 * @param {number} 가격 
 */
function pro(이름,가격){
    this.name=이름
    this.price=가격;
    this.tax=function(){
        console.log(this.price*0.1)
    }
}

var 상품1=new pro('shirts',50000)
var 상품2=new pro('pants',60000)

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡDestructor ==> ★★★Array또는 Object의 일부값만 사용하거나 함수의 파라미터로 쓰고싶을 때 사용한다.

//등호로 기본값 지정 가능 /변수 선언만 하면 undefined가 된다.
var [a,b,c=10]=[1,2,3]; 

var obj={name:'kim',age:15}; // =(var [name,age]=['kim',30])

//변수와 키값을 똑같이 만들어야함. / '★변수'에 등호로 기본값 지정 가능 /'★변수의콜론'은 이름 바꿔줌
var { name ,age:나이=20}={name,나이} 

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
var n='kim'
var age=30;

var obj={n:n,age:age}
var obj={n,age} //오브젝트 ★key값과 ★변수명이 같으면 축약해서 사용가능

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ함수 파라미터에 응용
function 함수({n,age}){
    console.log(n)
    console.log(age)
}

함수({n:'ju',age:25})

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ예제
