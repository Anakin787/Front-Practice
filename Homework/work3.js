var 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기(a){
    출석부.forEach((b,i)=>{
        if(a==b){
            console.log(a);
        } 
    })

}

이름찾기('wldns')

// var num=[1,2,3,4,5,6,7,8,9]

// for(i=1;i<=num.length;i++){
//     for(j=1;j<=num.length;j++){
//         console.log(i*j)
//     }
// }

/**
 * 앞의 과목별 시험점수를 입력 후 평균을낸것과 뒤의 시험평균점수를 비교.
 * @param {array} array 배열넣으쇼
 * @param {number} num 값을넣으쇼
 */

function avg(array,num){
    var aver=0
    array.forEach((a)=>{
        aver+=a;
    })
    aver=aver/array.length
    var minus=aver-num
    if(minus<0){
        console.log(`${-minus}점 올랐네`)
    }
    else{
        console.log(`${minus}점 떨어졌네`)
    }
}
avg([20,30,40,100],40)