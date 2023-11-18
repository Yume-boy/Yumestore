function showSearchBar () {
    let search = document.getElementById('search');
let searchForm = document.getElementsByClassName('search-form')


search.addEventListener('click', ()=>{
    searchForm.classList.toggle('active')
})
}

showSearchBar()


let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

 