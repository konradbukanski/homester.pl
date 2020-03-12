let Xmas = new Date();
let actualYear = Xmas.getFullYear(); // zwraca 95

document.querySelector(".arrow").addEventListener("click", () => {
  scrollTo(0, document.querySelector(".about").offsetTop);
});
document.querySelector(".elements1").addEventListener("click", () => {
  scrollTo(0, document.querySelector(".about").offsetTop);
});
document.querySelector(".elements2").addEventListener("click", () => {
  scrollTo(
    0,
    document.querySelector(".oferts").offsetTop +
      document.querySelector(".ofert_menagment").offsetTop
  );
});
document.querySelector(".elements3").addEventListener("click", () => {
  scrollTo(
    0,
    document.querySelector(".oferts").offsetTop +
      document.querySelector(".ofert_administracion").offsetTop
  );
});
document.querySelector(".elements4").addEventListener("click", () => {
  scrollTo(
    0,
    document.querySelector(".oferts").offsetTop +
      document.querySelector(".ofert_consultancy").offsetTop
  );
});
document.querySelector(".elements5").addEventListener("click", () => {
  scrollTo(0, document.querySelector(".contacts").offsetTop);
});
document.querySelector(".elements6").addEventListener("click", () => {
  scrollTo(0, document.querySelector(".about").offsetTop);
  document
    .querySelector(".mobile_menu")
    .classList.remove("mobile_menu--active");
  document.querySelector(".hamburger").style.display = "block";
});
document.querySelector(".elements7").addEventListener("click", () => {
  scrollTo(
    0,
    document.querySelector(".oferts").offsetTop +
      document.querySelector(".ofert_menagment").offsetTop
  );
  document
    .querySelector(".mobile_menu")
    .classList.remove("mobile_menu--active");
  document.querySelector(".hamburger").style.display = "block";
});
document.querySelector(".elements8").addEventListener("click", () => {
  scrollTo(
    0,
    document.querySelector(".oferts").offsetTop +
      document.querySelector(".ofert_administracion").offsetTop
  );
  document
    .querySelector(".mobile_menu")
    .classList.remove("mobile_menu--active");
  document.querySelector(".hamburger").style.display = "block";
});
document.querySelector(".elements9").addEventListener("click", () => {
  scrollTo(
    0,
    document.querySelector(".oferts").offsetTop +
      document.querySelector(".ofert_consultancy").offsetTop
  );
  document
    .querySelector(".mobile_menu")
    .classList.remove("mobile_menu--active");
  document.querySelector(".hamburger").style.display = "block";
});
document.querySelector(".elements10").addEventListener("click", () => {
  scrollTo(0, document.querySelector(".contacts").offsetTop);
  document
    .querySelector(".mobile_menu")
    .classList.remove("mobile_menu--active");
  document.querySelector(".hamburger").style.display = "block";
});
document.querySelector(".upArrow ").addEventListener("click", () => {
  window.scrollTo(0, 0);
});
let counter = true;
let year = 0;
// let meter = 0;
let percent = 0;

const years = () => {
  document.querySelector(".year").innerHTML = year;
  year++;
  const t = setTimeout(years, 100);
  if (year > actualYear - 2001) {
    clearTimeout(t);
  }
};
const percents = () => {
  document.querySelector(".percent").innerHTML = percent;
  percent++;
  const p = setTimeout(percents, 20);
  if (percent > 100) {
    clearTimeout(p);
  }
};
// const meters = () => {
//   document.querySelector(".meter").innerHTML = meter;
//   meter++;
//   const m = setTimeout(meters, 90);
//   if (meter > 20) {
//     clearTimeout(m);
//   }
// };


document.addEventListener("scroll", () => {
  if (scrollY > document.querySelector(".header").offsetTop + 150) {
    document.querySelector(".upArrow").classList.add("upArrow__active");
  } else {
    document.querySelector(".upArrow").classList.remove("upArrow__active");
  }
  if (
    scrollY > document.querySelector(".statistics").offsetTop / 2 &&
    counter
  ) {
    counter = false;
    years();
    meters();
    percents();
  }
});

// document.querySelector(".menagment__btn").addEventListener("click", () => {
//   document.querySelector(".menagment").classList.add("menagment__active");
// });
// document.querySelector(".menagment .fa-times").addEventListener("click", () => {
//   document.querySelector(".menagment").classList.remove("menagment__active");
// });

// document.querySelector(".administracion__btn").addEventListener("click", () => {
//   document.querySelector(".administracion").classList.add("menagment__active");
// });
// document
//   .querySelector(".administracion .fa-times")
//   .addEventListener("click", () => {
//     document
//       .querySelector(".administracion")
//       .classList.remove("menagment__active");
//   });

// document.querySelector(".consultancy__btn").addEventListener("click", () => {
//   document.querySelector(".consultancy").classList.add("menagment__active");
// });
// document
//   .querySelector(".consultancy .fa-times")
//   .addEventListener("click", () => {
//     document
//       .querySelector(".consultancy")
//       .classList.remove("menagment__active");
//   });

document.querySelector(".hamburger").addEventListener("click", () => {
  console.log("click");
  document.querySelector(".mobile_menu").classList.add("mobile_menu--active");
  document.querySelector(".hamburger").style.display = "none";
});
document
  .querySelector(".mobile_menu .fa-times")
  .addEventListener("click", () => {
    document
      .querySelector(".mobile_menu")
      .classList.remove("mobile_menu--active");
    document.querySelector(".hamburger").style.display = "block";
  });

// document.querySelector(".elements5").addEventListener("click", () => {
//   scrollTo(0, document.querySelector(".about").offsetTop);
//   document
//     .querySelector(".mobile_menu")
//     .classList.remove("mobile_menu--active");
//   document.querySelector(".hamburger").style.display = "block";
// });
// document.querySelector(".elements6").addEventListener("click", () => {
//   scrollTo(0, document.querySelector(".oferts").offsetTop);
//   document
//     .querySelector(".mobile_menu")
//     .classList.remove("mobile_menu--active");
//   document.querySelector(".hamburger").style.display = "block";
// });
// document.querySelector(".elements7").addEventListener("click", () => {
//   scrollTo(0, document.querySelector(".clients").offsetTop);
//   document
//     .querySelector(".mobile_menu")
//     .classList.remove("mobile_menu--active");
//   document.querySelector(".hamburger").style.display = "block";
// });
// document.querySelector(".elements8").addEventListener("click", () => {
//   scrollTo(0, document.querySelector(".contacts").offsetTop);
//   document
//     .querySelector(".mobile_menu")
//     .classList.remove("mobile_menu--active");
//   document.querySelector(".hamburger").style.display = "block";
// });
