const container = document.querySelector(".container");
const container_width = container.getBoundingClientRect().width;

function createGrid(number) {
  removeAllChildNodes(container);
  const pixel_width = container_width / number;
  container.style.gridTemplateColumns = `repeat(${number}, ${pixel_width}px)`;
  for (let i = 0; i < number * number; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    container.appendChild(pixel);
    pixel.addEventListener("pointerenter", () => pixel.classList.add("drawn"));
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function handleReset() {
  size = window.prompt("Ola Que Tal !", 16);
  if (size > 128) {
    alert("Too Big !");
    return;
  }
  createGrid(size);
}

createGrid(16);
