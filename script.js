// Typing effect for h1
const title = document.querySelector("h1");
const text = "Sourav's Info";
let index = 0;

function type() {
  if (index < text.length) {
    title.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100); // Speed of typing
  }
}

title.innerHTML = ""; // Clear original text
type();