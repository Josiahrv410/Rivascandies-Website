let homeController = new ScrollMagic.Controller();

const headerTL = gsap.timeline();

headerTL.fromTo(
  "header .logo ",
  {
    scale: 1,
  },
  {
    scale: 0.8,
    duration: 0.4,
  },
  ">-0.4"
);

let headerScene = new ScrollMagic.Scene({
  triggerElement: "#best-sellers",
  triggerHook: 1,
  reverse: true,
  offset: document.querySelector("#best-sellers").offsetHeight + 100,
})

  .setTween(headerTL)
  // .addIndicators()
  .addTo(homeController);

const mobileMenuTL = gsap.timeline({
  paused: true,
});

mobileMenuTL
  .fromTo(
    "#mobile-menu",
    {
      x: "-100%",
    },
    {
      x: 0,
      duration: 1,
    }
  )
  .fromTo(
    "#mobile-menu .menu .link ",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
    },
    ">-0.4"
  );

const openMobileMenu = document.querySelector(".open-mobile-menu");
openMobileMenu.addEventListener("click", () => {
  mobileMenuTL.play();
});

const closeMobileMenu = document.querySelector(".close-mobile-menu");
closeMobileMenu.addEventListener("click", () => {
  mobileMenuTL.reverse();
});

const mobileModeOn = () => {
  if (window.innerWidth <= 991) {
    document.querySelector("header .menu").classList.add("mobile-mode");
  } else {
    document.querySelector("header .menu").classList.remove("mobile-mode");
  }
};
mobileModeOn();
window.addEventListener("resize", function (event) {
  mobileModeOn();
});
