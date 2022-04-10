let values = document.getElementById("values");
let button = document.querySelectorAll("button");
let srcvalues = "";

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (e) => {
    let numberEntered = e.target.innerHTML;

    if (numberEntered === "C") {
      values.value = "";
    } else if (numberEntered === "=") {
      values.value = eval(srcvalues);
    } else {
      srcvalues += numberEntered;
      values.value = srcvalues;
    }
  });
}
