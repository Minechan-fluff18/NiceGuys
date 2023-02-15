let menuElem = document.getElementById('menu');
let titleElem = menuElem.querySelector('.drop-down-link');

titleElem.onclick = function() {
menuElem.classList.toggle('open');
};