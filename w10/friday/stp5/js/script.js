let elem = document.getElementById("boxA");
console.log(elem);
elem.onclick = () => {
  // elem.style.backgroundColor = "green"
  elem.classList.toggle("box--clicked");
};
