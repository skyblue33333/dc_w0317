const indicator =
  document.querySelector(".indicator");
const progressTaget =
  document.querySelector("main");

const progressBar = () => {
  const progressTagetBCR =
    progressTaget.getBoundingClientRect();
  const progress =
    1 -
    progressTagetBCR.bottom /
      progressTagetBCR.height;
  // console.log(progress);
  if (progress >= 0 && progress <= 1) {
    indicator.style.cssText =
      "transform: scaleX(" + progress + ")";
  } else if (progress < 0) {
    indicator.style.cssText =
      "transform: scaleX(0)";
  }
};

// // 이벤트 리스너 추가하는 법1
// document.onscoll = () => {
//   progressBar();
// };
// 괄호 안에 실행할 함수 구문을 작성 하거나 함수를 갖다 둔다.
// 이벤트 리스너 추가하는 법2
document.addEventListener("scroll", progressBar);
