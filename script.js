let toggle_btn = document.querySelector(".toggel_btn");
let navbar = document.querySelector(".side_nav");
toggle_btn.addEventListener("click", () => {
  navbar.classList.add("active");
});
let close = document.querySelector(".times");
close.addEventListener('click', () => {
  navbar.classList.remove("active");
})
