// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// click
document.querySelector("#humberger-menu").onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// FaQ
var acc = document.getElementsByClassName("accordion");
var i;

for(i = 0;i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("aktif");
    this.parentElement.classList.toggle("aktif");

    var panel = this.nextElementSibling;
    if(panel.style.display == "block") {
      panel.style.display = "none";
    }
    else {
      panel.style.display = "block";
    }
  });
}