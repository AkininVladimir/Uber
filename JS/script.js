window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    menu_lite = document.querySelector('.menu_lite');

    menu_lite.addEventListener('click', () => {
        menu_lite.classList.toggle('menu_lite_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu_lite.classList.toggle('menu_lite_active');
            menu.classList.toggle('menu_active');
        })
    })
})