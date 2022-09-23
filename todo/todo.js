/**
 * form에서 submit이벤트를 발생시키면 입력한 데이터를 content에담고, 로컬스토리지로 옮긴다.
 * submit할 때 마다 리스트HTML템플릿을 로컬스토리지에 저장한 데이터를 넣어서 함께 추가한다.
 * 검색창 초기화를 위해 input태그에 공백을 넣었다.
 */
document.querySelector('form').addEventListener('submit', function (e) {
    var content = document.querySelectorAll('.input')[0].value

    localStorage.setItem('list', JSON.stringify(content))

    document.querySelector('.addList').insertAdjacentHTML("beforeend", `<div class="list">
<input class="check" type="checkbox">
<p class="content" style="display: inline-block;">${JSON.parse(localStorage.getItem('list'))}</p>
<button class="img"><i class="fa-solid fa-trash"></i></button>
</div>`)

    e.preventDefault()
    document.querySelectorAll('.input')[0].value = ('')
})

/**
 * List를 체크하면 아래의 리스트 전체가 선택되고 해제되는 코드이다.
 */
var c = 0
document.querySelectorAll('.checkA')[0].addEventListener('click', function () {
    var checkA = document.querySelectorAll('.checkA') //추후에 이것의 상태를 조건으로 만들자
    var checkL = document.querySelectorAll('.check')

    if (c%2==0) {
        for (let i = 0; i < checkL.length; i++) {
            checkL[i].checked = true;
            c++;
        }
    }
    else {
        for (let i = 0; i < checkL.length; i++) {
            checkL[i].checked = false;
            c++;
        }
    }
})