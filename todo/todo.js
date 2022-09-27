/**
 * form에서 submit이벤트를 발생시키면 입력한 데이터를 LS(로컬스토리지)로 옮긴 후 그 값을 화면에 보여지게 하는코드이다.
 * 새로고침시 LS 초기화를 방지하기 위하여 이벤트리스너 외부에 변수를 선언하여 LS에 저장되어있는 값을 옮겨놓았다.
 * 옯겨진 배열에 입력한 값을 추가를 하여 리스트를 유지시켰다.
 */
var arr = new Array;
document.querySelector('form').addEventListener('submit', function (e) {

    var content = document.querySelectorAll('.input')[0].value  //사용자가 입력한 값
    localStorage.setItem('list', JSON.stringify(content)) //list라는 키로 LS(로컬스토리지)에 저장 - LS는 문자로만 입력된다.
    리스트(JSON.parse(localStorage.getItem('list'))) //리스트 블럭을 생성(실시간 추가)

    arr.push(JSON.parse(localStorage.getItem('list'))) //LS에 있는 list를 arr에 추가
    localStorage.setItem('listR', JSON.stringify(arr)) //추가된 arr를 다시 LS에 listR이라는 키로 저장

    e.preventDefault() //submit시 새로고침되는것을 방지
    document.querySelectorAll('.input')[0].value = ('') //값 작성후 입력창 초기화
})

var 스토리지 = JSON.parse(localStorage.getItem('listR'))
스토리지.forEach((a) => { //리스트 블럭생성 - ★새로고침시에도 리스트가 삭제되지 않고 그대로 보이게 함
    리스트(a)
})
arr.push(...스토리지) //새로고침시 LS에 있는것을 spread Operator로 괄호를 푼 후 arr에 저장 - LS에 있는것은 리스트형태라 괄호를 풀어줘야 됌

function 리스트(e) {
    return document.querySelector('.addList').insertAdjacentHTML("beforeend", `<div class="list">
    <input class="check" type="checkbox">
    <p class="content" style="display: inline-block;">${e}</p>
    <button class="delimg">X</button>
    </div>`)
}
/**
 * 'List'를 선택하면 [checkA]의 상태에 따라 아래의 리스트 전체가 선택되고 해제되는 코드 & 전체 체크시 임시 완료처리(가로줄)
 * (추후) 개별 체크박스[checkL] 중 하나라도 체크 해제가되면 [checkA]해제되는 기능
 */
document.querySelectorAll('.checkA')[0].addEventListener('click', function (e) {
    var checkA = document.querySelector('.checkA')
    var checkL = document.querySelectorAll('.check')

    if (checkA.checked == false) {
        for (let i = 0; i < checkL.length; i++) {
            checkL[i].checked = false;
            if (checkL[i].checked == false) {
                document.querySelectorAll('.content')[i].style.textDecoration = "none"
            }
        }
    }
    else {
        for (let i = 0; i < checkL.length; i++) {
            checkL[i].checked = true;
            if (checkL[i].checked == true) {
                document.querySelectorAll('.content')[i].style.textDecoration = "line-through"
            }
        }
    }
})

//Clear All 버튼 클릭시 전체삭제
document.querySelector('.delall').addEventListener('click', function (e) {
    var temp = JSON.parse(localStorage.getItem('listR'));
    temp = [];
    localStorage.setItem('listR', JSON.stringify(temp));
})

// 체크한 리스트의 임시 완료처리(가로줄)
var checkL = document.querySelectorAll('.check')
var cont=document.querySelectorAll('.content')
for (let i = 0; i < checkL.length; i++) {
    checkL[i].addEventListener('click', function () {
        if (checkL[i].checked == false) {
            cont[i].style.textDecoration = 'none'
        }
        else {
            cont[i].style.textDecoration="line-through"
        }
    })
}