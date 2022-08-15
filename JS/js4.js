//좋은관습 : 자주쓰는 셀렉터 변수에 넣어쓰기(성능적으로 좋음)
var 버튼 = $('.tab-button');
var 탭 = $('.tab-content');
var class_cnt=document.getElementsByClassName('tab-button').length;//(=$(.tab-button).length)
//★★★반복문 안의 변수는 ★let으로 바꾸면 잘된다.★★★
for (let i = 0; i < class_cnt; i++) {
    버튼.eq(i).on('click', function () {
        버튼.removeClass('orange');
        버튼.eq(i).addClass('orange');
        탭.removeClass('show');
        탭.eq(i).addClass('show');
    });
}