// Burger
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");
  const body = document.body;

  const animationDuration = 300; 

  const openMenu = () => {
    const scrollY = window.scrollY;
    body.dataset.scrollY = scrollY;
    burger.classList.add("active");
    menu.classList.add("active");
    overlay.classList.add("active");
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
  };

  const closeMenu = (targetId = null) => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");

    setTimeout(() => {
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.overflow = "";
      window.scrollTo(0, parseInt(body.dataset.scrollY || "0"));

      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }, animationDuration);
  };

  burger.addEventListener("click", () => {
    if (burger.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener("click", () => {
    closeMenu();
  });

  menu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      const targetId = event.target.getAttribute("href").slice(1);
      closeMenu(targetId);
    }
  });
});

// Slider Categories
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".categories__swiper", {
    slidesPerView: "auto",
    spaceBetween: 16, 
    navigation: {
      nextEl: '.categories__button-next',
      prevEl: '.categories__button-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 32, 
      }
    }
  });
});

// Smooth Scroll
document.addEventListener("DOMContentLoaded", () => {
 
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); 

      const targetId = this.getAttribute("href").slice(1); 
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start", 
        });
      }
    });
  });
});

// Modal Authorization
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const loginForm = document.getElementById("formLogin");
  const registerForm = document.getElementById("formRegister");
  const openLoginBtn = document.getElementById("openModalLogin");
  const openRegisterBtn = document.getElementById("openModalRegister");
  const openAuthorizationBtn = document.getElementById("openModalAuthorization");
  const closeModalBtn = document.getElementById("closeModal");
  const goToRegister = document.getElementById("goToRegister");
  const goToLogin = document.getElementById("goToLogin");
  const body = document.body;

  const openLoginModal = () => {
    modal.classList.add("active");
    body.classList.add("modal-open");
    loginForm.style.display = "flex";
    registerForm.style.display = "none";
  };

  openLoginBtn.addEventListener("click", openLoginModal);
  openAuthorizationBtn.addEventListener("click", openLoginModal);

  openRegisterBtn.addEventListener("click", () => {
    modal.classList.add("active");
    body.classList.add("modal-open");
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
  });

  const closeModal = () => {
    modal.classList.remove("active");
    body.classList.remove("modal-open");
  };

  closeModalBtn.addEventListener("click", closeModal);

  goToRegister.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
  });

  goToLogin.addEventListener("click", () => {
    loginForm.style.display = "flex";
    registerForm.style.display = "none";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});
