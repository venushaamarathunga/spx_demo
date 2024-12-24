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
  nameStrap.style.position = "relative";

  animation = anime({
    targets: "#name-strap",
    easing: "easeInOutQuint",
    // translateX: ["0%", "40%"],
    width: ["0%", "40%"],
    duration: 2000,
  });
}

function stopBtnClick() {
  if (animation) animation.pause(); // Pause any ongoing animation

  animation = anime({
    targets: "#name-strap",
    easing: "easeInOutQuint",
    width: ["40%", "0%"], // Shrink width
    translateX: ["-40%", "-10%"], // Shift position to create a left-to-right effect
    duration: 3000,
    complete: function () {
      nameStrap.style.visibility = "hidden";
      nameStrap.style.left = "-20px";
      nameStrap.style.transform = "translateX(0)"; // Reset translateX after animation
    },
  });
}
