let links = document.querySelectorAll(".link");
let pages = document.querySelectorAll(".page-container");

links.forEach((link) => {
  link.addEventListener("click", () => {
    let address = link.href.split("#")[1];

    address = address.split("%")[0];

    console.log(address);

    pages.forEach((page) => {
      console.log(page.id);

      if (page.id == address) {
        page.classList.add("visible");
      } else {
        page.classList.remove("visible");
      }
    });
  });
});

window.addEventListener("load", () => {
  console.log(window.location.href);

  if (window.location.href.split("#")[0].indexOf("index.html") > -1) {
    let address = window.location.href.split("#")[1];

    pages.forEach((page) => {
      console.log(page.id);

      if (page.id == address) {
        page.classList.add("visible");
      } else {
        page.classList.remove("visible");
      }
    });
  }
});
