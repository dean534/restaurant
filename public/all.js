const menuBtn = document.getElementById("header_btn");
const headNav = document.getElementById("header_navbar");
const productMenu = document.getElementsByClassName('product_menu_item')
menuBtn.addEventListener("click", toggleMenu);

for(let item of productMenu){
    item.addEventListener("click",selectMenu)
}

function toggleMenu () {
headNav.classList.toggle("header_navbar--active")
}

function selectMenu (e) {
    for(let item of productMenu){
        item.classList.remove("product_menu_item--active")
    }
    e.target.classList.add('product_menu_item--active');

}