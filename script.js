const container = document.querySelector(".container");
let pixels = [];
for (let i = 0; i < 256; i++) {
  let pixel = document.createElement("div");
  pixels.push(pixel);
  pixel.classList.add("pixel");
  container.appendChild(pixel);
}

pixels.forEach((pixel) => {
  pixel.addEventListener("mouseover", () => pixel.classList.add("drawn"));
});

console.log("styjghj");
