function toggleMenu() {
    const menu = document.querySelector(".menu-links"); /*targetting element in html. this is js function*/
    const icon = document.querySelector(".hamburger-icon"); /*targetting element in html. this is js function*/
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }