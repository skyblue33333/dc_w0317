// console.log(document.getElementById("box2"));
let box = document.getElementById("box2");
console.log(box);
box.onclick = () => {
  box.classList.toggle("boxSelected");
};
