"use strict"

let btns = document.querySelectorAll('.panel__btn');


for (const btn of btns) {
  btn.addEventListener('click', () => {
    btn.classList.toggle("selected");
  })
}

// let selectedBtn = document.querySelector('.panel__btn, .selected');
// selectedBtn.classList.remove("selected");
// let bool = btn.getAttribute("aria-selected");

// Burger - start
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.secondMenu');

menuIcon.addEventListener('click', ()=>{
  menuIcon.classList.toggle('active');
  menu.classList.toggle('hide');
});
// Burger - end

// Перестановка в хедере - начало
let firstMenu = document.querySelector('.headerCont__nav');
let burger = document.querySelector('.contain');

window.onresize = ()=> {
  if (window.innerWidth <= 620) {
    firstMenu.classList.add("hide");
    burger.classList.remove("hide");
  } else {
    firstMenu.classList.remove("hide");
    burger.classList.add("hide");
  }
}

if (window.innerWidth <= 620) {
  firstMenu.classList.add("hide");
  burger.classList.remove("hide");
} else {
  firstMenu.classList.remove("hide");
  burger.classList.add("hide");
}

// Перестановка в хедере - конец