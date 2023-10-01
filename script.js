const toggler = document.getElementById("menu-toggler");
const sidebar = document.getElementById("sidebar");

toggler.addEventListener("click", function () {
   sidebar.classList.toggle("mini");
   toggler.classList.toggle("open");
});
