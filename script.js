const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button"); //me pregunto para que la clase al boton

console.log("probando comun");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      console.log(string);
      display.innerText = string.slice(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "null";
      setTimeout(() => (display.innerText = ""), 1000);
    } else{
        display.innerText+=item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

// let isDark = true; esto esta de mas no es necesario
themeToggleBtn.onclick=()=>{
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
}
