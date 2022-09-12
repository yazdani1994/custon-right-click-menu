const contexMenu = document.querySelector(".conteiner");
const shareMenu = document.querySelector(".share-menu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // کلیک راست پیشفرض غیرفعال

  let x = e.offsetX;
  let y = e.offsetY;

  let winWidth = window.innerWidth; // عرض صفحه موجود را نشان می دهد
  let winHeight = window.innerHeight; // طول صفحه موجود را نشان می دهد

  let contMenuWidth = contexMenu.offsetWidth; //  show width context menu
  let contMenuHeight = contexMenu.offsetWidth; //  show height context menu

  x = x > winWidth - contMenuWidth ? winWidth - contMenuWidth : x;
  y = y > winHeight - contMenuHeight ? winHeight - contMenuHeight : y;

  if (x > winWidth - contMenuWidth - shareMenu.offsetWidth) {
    shareMenu.style.left = "-160px";
  } else {
    shareMenu.style.left = "260px";
  }

  contexMenu.style.left = `${x}px`;
  contexMenu.style.top = `${y}px`;

  contexMenu.style.visibility = "visible";
});

document.addEventListener("click", () => {
  contexMenu.style.visibility = "hidden";
});
