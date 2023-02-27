let parent = document.querySelector('#nav__list');
let elem = document.querySelector('#nav__item');
let link = document.querySelector('#nav__link');
let btn = document.querySelector('.btn');
let form = document.querySelector('.form');


parent.addEventListener('click', function (event) {
    let currentElement = event.target;
    for (el of elem) {
        el.classList.remove('active');
        currentElement.classList.add('active');
    }
})

btn.addEventListener('click', function (evt) {
    form.style.display = 'block';
    currentElement.classList.add('active');
})