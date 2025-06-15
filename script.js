const form = document.querySelector(".fale-conosco");
const mask = document.querySelector(".mascara-form");

function cliqueNoForm() {
  form.style.left = " 40%";
  form.style.transform = "translateX(-20%)";
  mask.style.visibility = "visible";
}

function esconderForm() {
  form.style.left = "-290px";
  form.style.transform = "translateX(0)";
  mask.style.visibility = "hidden";

}
