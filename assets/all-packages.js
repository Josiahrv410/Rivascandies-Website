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
  triggerElement: "#package-filter",
  triggerHook: 1,
  reverse: true,
  offset: document.querySelector("#package-filter").offsetHeight + 100,
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

// PROJECT FILTER SECTION BELOW

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("btn active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
