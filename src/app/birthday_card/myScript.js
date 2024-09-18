import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

function sprayConfetti() {
  jsConfetti.addConfetti()
}

console.log("script found");
document.addEventListener("DOMContentLoaded", function() {
  sprayConfetti();
});
