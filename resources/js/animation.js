function preloader() {
  let main = document.querySelector("main");

  let footer = document.querySelector("footer");

  setTimeout(function () {
    main.style.display = "flex";

    footer.style.display = "flex";
  }, 500);

  setTimeout(function () {
    document.querySelector("#preloader").classList.add("loaded");
  }, 1000);
}





const cursorBall = document.querySelector("#cursor");

const positionElement = (e) => {
  cursorBall.style.display = "block";

  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorBall.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5
    }px, 0)`;
};

window.addEventListener("mousemove", positionElement);

window.addEventListener("click", function(){
  cursorBall.style.border = "2px solid rgba(227, 61, 61, 0.56)";

  setTimeout(function() {

    cursorBall.style.border = "2px solid rgba(219, 219, 219, 0.56)";

  }, 200);

});







