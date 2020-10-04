var slideIndex = 1;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("package-container");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var reviewSlideIndex = 1;
reviewShowSlides();

// Next/previous controls
function reviewPlusSlides(n) {
  showSlides((reviewSlideIndex += n));
}

// Thumbnail image controls
function reviewCurrentSlide(n) {
  reviewShowSlides((reviewSlideIndex = n));
}

function reviewShowSlides() {
  var i;
  var slides = document.getElementsByClassName("review-container");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  reviewSlideIndex++;
  if (reviewSlideIndex > slides.length) {
    reviewSlideIndex = 1;
  }
  slides[reviewSlideIndex - 1].style.display = "block";
  setTimeout(reviewShowSlides, 10000); // Change image every 20 seconds
}

let jumboTl = gsap.timeline();

jumboTl
  .fromTo(
    "header .logo",
    {
      x: -100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    }
  )
  .fromTo(
    "header .menu",
    {
      x: 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
    ">-1.3"
  );

const twoCollectionsTL = gsap.timeline();

twoCollectionsTL
  .fromTo(
    "#twoCollections .col-md-6 .left-c-img",
    {
      x: window.innerWidth * -0.5,
    },
    {
      x: window.innerWidth * 0,
      duration: 2,
    }
  )
  .fromTo(
    "#twoCollections .col-md-6 .right-c-img",
    {
      x: "100%",
    },
    {
      x: 0,
      duration: 2,
    },
    ">-2"
  )
  .fromTo(
    "#twoCollections .left-c .collection-title",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.5,
    },
    ">-1"
  )
  .fromTo(
    "#twoCollections .right-container .collection-title",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.5,
    },
    ">-.5"
  );

let homeController = new ScrollMagic.Controller();

let twoCScene = new ScrollMagic.Scene({
  triggerElement: "#twoCollections",
  triggerHook: 1,
  reverse: false,
  offset: 100,
  duration: 0,
})

  .setTween(twoCollectionsTL)
  // .addIndicators()
  .addTo(homeController);

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
  triggerElement: "#package-deals",
  triggerHook: 1,
  reverse: true,
  offset: document.querySelector("#package-deals").offsetHeight + 100,
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
