/**
 * 학생인적사항/인사
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


//상품정보/부가세
function pro(이름,가격){
    this.name=이름
    this.price=가격;
    this.tax=function(){
        console.log(this.price*0.1)
    }
}

var 상품1=new pro('shirts',50000)
var 상품2=new pro('pants',60000)