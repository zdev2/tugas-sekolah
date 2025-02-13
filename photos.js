document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("box-container");
  const container2 = document.getElementById("box-container-gallery");
  const numberOfItems = 50;

  if (container) {
    for (let i = 1; i <= numberOfItems; i++) {
      const box = document.createElement("div");
      box.classList.add("box");

      const img = document.createElement("img");
      img.classList.add("imgs");
      img.src = `https://picsum.photos/300/200?random=${i}`;
      img.alt = "Random Image";

      const middle = document.createElement("div");
      middle.classList.add("middle");

      const text = document.createElement("div");
      text.classList.add("text");
      text.textContent = `Image ${i}`;

      middle.appendChild(text);
      box.appendChild(img);
      box.appendChild(middle);
      container.appendChild(box);
    }
  } else if (container2) {
    for (let i = 1; i <= numberOfItems; i++) {
      const box = document.createElement("div");
      box.classList.add("box");

      const img = document.createElement("img");
      img.classList.add("imgs");
      img.src = `https://picsum.photos/600/400?random=${i}`;
      img.alt = "Random Image";

      const middle = document.createElement("div");
      middle.classList.add("middle");

      const text = document.createElement("div");
      text.classList.add("text");
      text.textContent = `Image ${i}`;

      middle.appendChild(text);
      box.appendChild(img);
      box.appendChild(middle);
      container2.appendChild(box);
    }
  }
});
