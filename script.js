const container = document.querySelector(".container");
let pixels = [];
for (let i = 0; i < 4096; i++) {
  let pixel = document.createElement("div");
  pixels.push(pixel);
  pixel.classList.add("pixel");
  container.appendChild(pixel);
}

pixels.forEach((pixel) => {
  pixel.addEventListener("pointerenter", () => pixel.classList.add("drawn"));
});

console.log("styjghj");
