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