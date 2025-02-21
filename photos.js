import { fetchImageDetails } from "./modules/fetchImageDetails.js";

document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("box-container");
  const container2 = document.getElementById("box-container-gallery");
  const text_container = document.getElementById("box-text-container");
  const numberOfItems = 20;
  const numberOfItems2 = 50;

  if (container) {
    for (let i = 1; i <= numberOfItems; i++) {
      const box = document.createElement("a");
      box.href = `https://zdev2.github.io/tugas-sekolah/picture-details.html?id=${i}`;
      box.classList.add("box");

      const img = document.createElement("img");
      img.classList.add("imgs");
      img.src = `https://picsum.photos/id/${i + 10}/300/200`;
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
    for (let i = 1; i <= numberOfItems2; i++) {
      const box = document.createElement("a");
      box.href = `https://zdev2.github.io/tugas-sekolah/picture-details.html?id=${i}`;
      box.classList.add("box");

      const img = document.createElement("img");
      img.classList.add("imgs");
      img.src = `https://picsum.photos/id/${i + 10}/300/200`;
      img.alt = "Random Image";

      const middle = document.createElement("div");
      middle.classList.add("middle");

      const text = document.createElement("div");
      text.classList.add("text");
      text.textContent = `Image ${i}`;

      const box2 = document.createElement("a");
      box.classList.add("box");

      const imageId = i + 10;

      if (imageId && box2) {
        const data = await fetchImageDetails(imageId);
        if (data) {

          const text_container = document.createElement("div");
          text_container.classList.add("text-container");

          const title = document.createElement("h2");
          title.textContent = `Image by ${data.author}`;

          const dimensions = document.createElement("p");
          dimensions.textContent = `Size: ${data.width} x ${data.height}`;

          const sourceLink = document.createElement("a");
          sourceLink.href = data.url;
          sourceLink.textContent = "View Original Source";
          sourceLink.target = "_blank";

          text_container.appendChild(title);
          text_container.appendChild(dimensions);
          text_container.appendChild(sourceLink);
          box2.appendChild(text_container);
        } else {
          box2.textContent = "Failed to load image details.";
        }
      }

      middle.appendChild(text);
      box.appendChild(img);
      box.appendChild(middle);
      container2.appendChild(box);
      container2.appendChild(box2);
    }
  } else if (text_container) {
    const params = new URLSearchParams(window.location.search);
    const imageId = parseInt(params.get("id"), 10) + 10;
    const textContainer = document.getElementById("box-text-container");

    if (imageId && textContainer) {
      const data = await fetchImageDetails(imageId);
      if (data) {
        const img = document.createElement("img");
        img.src = `https://picsum.photos/id/${imageId}/300/200`;
        img.alt = `Image by ${data.author}`;
        img.style.maxWidth = "100%";

        const text_container = document.createElement("div");
        text_container.classList.add("text-container");

        const title = document.createElement("h2");
        title.textContent = `Image by ${data.author}`;

        const dimensions = document.createElement("p");
        dimensions.textContent = `Size: ${data.width} x ${data.height}`;

        const sourceLink = document.createElement("a");
        sourceLink.href = data.url;
        sourceLink.textContent = "View Original Source";
        sourceLink.target = "_blank";

        textContainer.appendChild(img);
        text_container.appendChild(title);
        text_container.appendChild(dimensions);
        text_container.appendChild(sourceLink);
        textContainer.appendChild(text_container);
      } else {
        textContainer.textContent = "Failed to load image details.";
      }
    }
  }
});
//
