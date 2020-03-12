const menagment = document.querySelectorAll(".ofert_menagment span");
const administracion = document.querySelectorAll(".ofert_administracion span");
const consultancy = document.querySelectorAll(".ofert_consultancy span");
const clean = document.querySelectorAll(".ofert_clean span");
const garden = document.querySelectorAll(".ofert_garden span");
const technic = document.querySelectorAll(".ofert_technic span");



document.addEventListener("scroll", () => {
  if (
    scrollY >
    document.querySelector(".oferts").offsetTop +
      document.querySelector(".ofert_administracion").offsetTop / 3
  ) {
    administracion.forEach(e => {
      e.classList.add("active_option");
    });
  }
  if (
    scrollY >
    document.querySelector(".oferts").offsetTop +
      document.querySelector(".ofert_administracion").offsetTop +
      document.querySelector(".ofert_menagment").offsetTop / 3
  ) {
    menagment.forEach(e => {
      e.classList.add("active_option");
    });
  }
  if (
    scrollY >
    document.querySelector(".oferts").offsetTop +
      document.querySelector(".ofert_administracion").offsetTop +
      document.querySelector(".ofert_menagment").offsetTop +
      document.querySelector(".ofert_clean").offsetTop / 3
  ) {
    clean.forEach(e => {
      e.classList.add("active_option");
    });
  }
  if (
    scrollY >
    document.querySelector(".oferts").offsetTop +
      document.querySelector(".ofert_administracion").offsetTop +
      document.querySelector(".ofert_menagment").offsetTop +
      document.querySelector(".ofert_clean").offsetTop / 2
  ) {
    garden.forEach(e => {
      e.classList.add("active_option");
    });
  }
  if (
    scrollY >
    document.querySelector(".oferts").offsetTop +
      document.querySelector(".ofert_administracion").offsetTop +
      document.querySelector(".ofert_menagment").offsetTop +
      document.querySelector(".ofert_clean").offsetTop
  ) {
    technic.forEach(e => {
      e.classList.add("active_option");
    });
  }
  if (
    scrollY >
    document.querySelector(".oferts").offsetTop +
      document.querySelector(".ofert_menagment").offsetTop +
      document.querySelector(".ofert_administracion").offsetTop + 
      document.querySelector(".ofert_clean").offsetTop + 200
  ) {
    consultancy.forEach(e => {
      e.classList.add("active_option");
    });
}

});
document.querySelector(".hamburger").addEventListener("click", () => {
  console.log("click");
  document.querySelector(".mobile_menu").classList.add("mobile_menu--active");
  document.querySelector(".hamburger").style.display = "none";
});
