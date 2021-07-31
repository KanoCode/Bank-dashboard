const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  function updateSpan() {
    const c = +counter.innerHTML; //count up to c
    const target = +counter.getAttribute("data-target");

    const increment = target / 100;
    if (c < target) {
      counter.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updateSpan, 50);
    }
  }
  updateSpan();
});
