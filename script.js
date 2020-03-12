class HeaderSlider {
  constructor(i, element, table) {
    this.element = document.querySelector(element);
    this.table = table;
    this.i = i;
  }

  changeTextHeader() {
    this.element.innerHTML = this.table[this.i];
    this.i++;
    if (this.i === this.table.length) {
      this.i = 0;
    }
  }
}

const kwadrat = new HeaderSlider(1, ".headerText p", [
  "Zarządzanie to dla nas przyjemność",
  "staniemy przed każdym wyzwaniem",
  "twój zaufany partner",
  "bezpieczeństwo i zaufanie"
]);

(function slider() {
  setTimeout(function() {
    kwadrat.changeTextHeader();
    slider();
  }, 7000);
})();
