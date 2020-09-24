let links = document.querySelectorAll(".link");
let pages = document.querySelectorAll(".page-container")

links.forEach((link) => {
  link.addEventListener("click", () => {
    let address = link.href.split("#")[1]

    pages.forEach(page => {

      console.log(page.id);

      if (page.id == address) {
        page.classList.add("visible");
      } else {
        page.classList.remove("visible");
      }
    })
  });
});