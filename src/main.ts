import "./style.css";

const counters = document.querySelectorAll<HTMLElement>(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const targetAttr = counter.getAttribute("data-target");
    const target = targetAttr ? +targetAttr : 0;
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = `${target}`;
    }
  };

  updateCounter();
});
