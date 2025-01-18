let burger_button_open = document.getElementById('info__burg-button');
let burger_button_close = document.getElementById('info__close-burg-button');
let menu = document.getElementById('info__burg-links')


burger_button_close.addEventListener('click', returner);
burger_button_open.addEventListener('click', burgermenu);

function burgermenu(){
    console.log('biba');
    burger_button_close.classList.remove('hidden')
    burger_button_open.classList.add('hidden')
    menu.classList.remove('hidden')
}
function returner(){
    burger_button_close.classList.add('hidden')
    burger_button_open.classList.remove('hidden')
    menu.classList.add('hidden')
}