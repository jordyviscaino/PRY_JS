//cargando el archivo header

fetch('header.html')
.then(res=>res.text())
.then(data=>document.getElementById('header').innerHTML = data)


fetch('footer.html')
.then(res=>res.text())
.then(data=>document.getElementById('footer').innerHTML = data)

function cargarPaginas(url_paginas){
    fetch(`paginas/${url_paginas}.html`)
    .then(res=>res.text())
    .then(data=>document.getElementById('main').innerHTML=data)
}

window.onload=()=>cargarPaginas('index')
