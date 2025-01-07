window.onload = function () {
  // "use strict";
  const siteserctions = document.querySelectorAll(".site-section");
  const header = document.querySelector("header");

  const menulinks = document.querySelectorAll(".menu ul li a");
  const checkbars = document.querySelector("#bars");

  menulinks.forEach((link) => {
    link.onclick = (e) => {
      e.preventDefault();
      var targetId = link.getAttribute("href");
      const elementPosition = document
        .querySelector(targetId)
        .getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 69; /// header height (70)

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });

      // Scroll smoothly to the target section
      //document.querySelector(targetId).scrollIntoView({ behavior: 'smooth',});
    };
  });

  function handleheader() {
    if (window.innerWidth <= 768 && checkbars.checked) {
      header.classList.add("showbg");
    } else {
      /// header height (70)
      window.scrollY >= 100
      ? header.classList.add("showbg")
      : header.classList.remove("showbg");
    }
  }
  handleheader();
  checkbars.onchange = () => {
    handleheader();
  };
  window.onresize = () => {
    handleheader();
  };
  window.onscroll = () => {
    let top = window.scrollY;
    /// header height (70)
    handleheader();

    siteserctions.forEach((sec) => {
      let offset = sec.offsetTop - 70; /// header height (70)
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        menulinks.forEach((link) => {
          link.classList.remove("active");
        });
        document
          .querySelector(`.menu ul li a[href*=${id}]`)
          ?.classList.add("active");
      }
    });
  };
};
