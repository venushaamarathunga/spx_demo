let nameStrap = document.getElementById("name-strap");
let nameText = document.getElementById("name-text");
let animation;

const applyStyles = (styles) => {
  Object.assign(nameStrap.style, styles);
};

function changeBtnClick() {
  nameText.innerHTML = "Amarathunga";
  if (animation) animation.pause();
}

function playBtnClick() {
  document.getElementById("temp-id").classList.remove("temp-class");

  nameText.innerHTML = "Venusha";

  applyStyles({
    visibility: "visible",
    backgroundColor: "#982208",
    color: "white",
    position: "relative",
  });

  if (animation) animation.pause();
  animation = anime({
    targets: "#name-strap",
    easing: "easeInOutQuint",
    width: ["0", "250"],
    duration: 2000,
  });
}

function stopBtnClick() {
  if (animation) animation.pause();

  animation = anime({
    targets: "#name-strap",
    easing: "easeInOutQuint",
    width: ["250", "0"],
    translateX: [0, 250],
    duration: 2000,
    complete: function () {
      applyStyles({
        visibility: "hidden",
        transform: "translateX(0)",
      });
    },
  });
}
