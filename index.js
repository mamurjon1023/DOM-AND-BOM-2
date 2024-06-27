let ism = prompt("Ismingizni kiriting");

let body = document.querySelector("body");
let h1 = document.createElement("h1");

h1.textContent = ism;

body.appendChild(h1);

body.style = "background-color: blue";
h1.style = "color: white; text-align: center";
