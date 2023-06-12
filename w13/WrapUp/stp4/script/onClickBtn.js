const btns =
  document.querySelectorAll("aside>ol>a");
console.log(btns);
let lastBtns;

const whenIClickTheBtn = (e) => {
  console.log("target", e.target);
  console.log("currTarget", e.currentTarget);
  const toggleTarget =
    e.currentTarget.querySelector("li");
  console.log("toggleTarget", toggleTarget);
  toggleTarget.classList.add("pressed");
  //   초보의 if 구문
  //   if (lastBtns !== undefined) {
  //     lastBtns.classList.remove("pressed");}

  // 옵셔널 체이닝으로 해결
  lastBtns?.classList.remove("pressed");
  lastBtns = toggleTarget;
};

btns.forEach((eachBtn) => {
  eachBtn.addEventListener(
    "click",
    whenIClickTheBtn
  );
});
