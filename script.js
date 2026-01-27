let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let value = btn.innerText.replace("✕", "");

        if (value === "C") {
            display.value = "";
        } 
        else if (value.includes("←")) {
            display.value = display.value.slice(0, -1);
        } 
        else if (value === "=") {
            try {
                display.value = eval(
                    display.value
                        .replace("×", "*")
                        .replace("÷", "/")
                        .replace("^", "**")
                );
            } catch {
                display.value = "Error";
            }
        } 
        else {
            display.value += value;
        }
    });
});
