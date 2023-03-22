let num = document.querySelector(".add-basket__add-text");

let numText = Number(num.value);
document.querySelector(".add-basket__add-right").onclick = function() {
    num.value = ++numText;
}
document.querySelector(".add-basket__add-left").onclick = function() {
  if (numText > 1) {
    num.value = --numText;
  } 
} 


let swiper = new Swiper(".mySwiper", {
 
  spaceBetween: 44,
  mousewheel: true,
  keyboard: true,
 

  loop: true,
  
});

