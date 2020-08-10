const dropdownItem = Array.from(
  document.querySelector(".services_dropdown").children
);

const services = Array.from(
  document.querySelector(".service-description").children
);

dropdownItem.forEach((item) => {
  item.addEventListener("mouseover", () => {
    services.forEach((service) => {
      service.style.display = "none";
      const id = item.id;
      if (service.classList.contains(id)) {
        service.style.display = "flex";
        service.style.position = "absolute";
      }
    });
  });
});

const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".header__list");

burger.addEventListener("click", () => {
  if (burgerMenu.style.display !== "block") {
    burgerMenu.style.display = "block";
    closeBurger();
  } else {
    burgerMenu.style.display = "none";
    openBurger();
  }
});

const closeBurger = () => {
  burger.classList += " burger_closed";
};

const openBurger = () => {
  burger.classList.remove("burger_closed");
};
