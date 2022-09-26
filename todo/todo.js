/**
 * form에서 submit이벤트를 발생시키면 입력한 데이터를 LS(로컬스토리지)로 옮긴 후 그 값을 화면에 보여지게 하는코드이다.
 * 새로고침시 LS 초기화를 방지하기 위하여 이벤트리스너 외부에 변수를 선언하여 LS에 저장되어있는 값을 옮겨놓았다.
 * 옯겨진 배열에 입력한 값을 추가를 하여 리스트를 유지시켰다.
 */
var arr = new Array;
document.querySelector('form').addEventListener('submit', function (e) {

    var content = document.querySelectorAll('.input')[0].value  //사용자가 입력한 값
    localStorage.setItem('list', JSON.stringify(content)) //list라는 키로 LS(로컬스토리지)에 저장

    arr.push(JSON.parse(localStorage.getItem('list'))) //LS에 있는 list를 arr에 추가
    localStorage.setItem('listR', JSON.stringify(arr)) //추가된 arr를 다시 LS에 listR이라는 키로 저장

    리스트(JSON.parse(localStorage.getItem('list'))) //리스트 블럭을 생성

    e.preventDefault() //submit시 새로고침되는것을 방지
    document.querySelectorAll('.input')[0].value = ('') //값 작성후 입력창 초기화
})

var 스토리지 = JSON.parse(localStorage.getItem('listR'))
//로컬스토리지의 배열 갯수만큼 리스트 생성. - ★새로고침시에도 리스트가 삭제되지 않고 그대로 보이게 함
스토리지.forEach((a) => {
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
 * 'List'를 선택하면 [checkA]의 상태에 따라 아래의 리스트 전체가 선택되고 해제되는 코드이다.
 * (추후) 개별 체크박스[checkL] 중 하나라도 체크 해제가되면 [checkA]해제되는 기능.
 */
document.querySelectorAll('.checkA')[0].addEventListener('click', function (e) {
    var checkA = document.querySelector('.checkA')
    var checkL = document.querySelectorAll('.check')

    if (checkA.checked == false) {
        for (let i = 0; i < checkL.length; i++) {
            checkL[i].checked = false;
        }
    }
    else {
        for (let i = 0; i < checkL.length; i++) {
            checkL[i].checked = true;
        }
    }
})

/**
 * 개별버튼 클릭시 삭제
 */
document.querySelector('.addList').addEventListener('click', function (e) {
    // e.target.parentElement.remove();
    console.log(e.target.parentElement)
    // 다른방식 : 버튼 누르면 e.target의 value와 불러온 LS의 value를 비교하여 같은걸 빼고 다시 저장.
    // (=e.target의 value와 불러온 LS에서 e.target value를 뺀다)
})
