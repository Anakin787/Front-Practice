
for (i = 0; i < 3; i++) {
    titlePrice(i)
}

function titlePrice(a) {
    document.querySelectorAll('h5')[a].innerHTML = products[a].title
    document.querySelectorAll('p')[a].innerHTML = products[a].price
}