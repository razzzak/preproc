let button = document.getElementById("burger");
let navigation = document.getElementById("menu");
let shadow = document.getElementById("header-shadow");
button.addEventListener("click", function () {
  navigation.classList.toggle("header__nav-display-block");
  shadow.classList.toggle("header__nav-display-block");
});

let filter = document.getElementById("filter");
let list = document.getElementById("list");
filter.addEventListener("click", function () {
  list.classList.toggle("filter-display-block");
});

let filterMobile = document.getElementById("filter-mobile");
let listMobile = document.getElementById("list");
filterMobile.addEventListener("click", function () {
  listMobile.classList.toggle("filter-display-block");
});
