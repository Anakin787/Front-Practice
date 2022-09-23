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