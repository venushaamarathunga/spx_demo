let nameStrap = document.getElementById("name-strap");
let nameText = document.getElementById("name-text");
let animation;

function changeBtnClick() {
  nameText.innerHTML = "Amarathunga";
  animation.pause();
}

function playBtnClick() {
  nameText.innerHTML = "Venusha";
  nameStrap.style.visibility = "visible";
  nameStrap.style.backgroundColor = "#982208";
  nameStrap.style.color = "white";

  animation = anime({
    targets: "#name-strap",
    easing: "easeInOutQuint",
    translateX: [-400, 0],
    width: [0, 400],
    duration: 2000,
  });
}

function stopBtnClick() {
  animation = anime({
    targets: "#name-strap",
    easing: "easeOutCirc",
    width: [0, 400],
    translateX: -[-400, 0],
    duration: 2000,
    complete: function () {
      nameStrap.style.visibility = "hidden";
    },
  });
}
