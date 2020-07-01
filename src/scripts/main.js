'use strict';

const compareIcon = document.querySelectorAll(".product__compare");
const productColor = document.querySelectorAll(".product__color");
const selectItem = document.querySelectorAll(".select__item");
const quantityButtonAdd = document.querySelectorAll(".quantity__button--add");
const quantityButtonRemove = document.querySelectorAll(".quantity__button--remove");
const productVolume = document.querySelectorAll(".product__volume");

compareIcon.forEach(item => {
  item.addEventListener("click", (e) => {
    e.target.classList.toggle("product__compare--active");
  });
});

productColor.forEach(item => {
  item.addEventListener("click", (e) => {
    e.currentTarget.firstElementChild.classList.toggle("select__list--active");
  });
});

selectItem.forEach(item => {
  item.addEventListener("click", (e) => {
    if (e.target.tagName === 'LABEL') {
      const colorField = e.currentTarget.parentElement.nextElementSibling;

      colorField.innerHTML = item.querySelector(".select__label").innerHTML;
      e.target.closest('.select__list').classList.remove("select__list--active");
    }
  });
});

quantityButtonAdd.forEach(item => {
  item.addEventListener("click", (e) => {
    let quantity = +e.target.previousElementSibling.innerHTML;
    if (quantity > 9) return;
    quantity++;
    e.target.previousElementSibling.innerHTML = quantity;
  });
});

quantityButtonRemove.forEach(item => {
  item.addEventListener("click", (e) => {
    let quantity = +e.target.nextElementSibling.innerHTML;
    if (quantity < 2) return;
    quantity--;
    e.target.nextElementSibling.innerHTML = quantity;
  });
});

productVolume.forEach(item => {
  item.addEventListener("click", (e) => {
    if (e.target.tagName === 'LABEL') {
      [...e.currentTarget.children].forEach(item => {
        item.classList.remove('volume__item--active');
      });
      e.target.parentElement.classList.add('volume__item--active');
    }
  });
});
