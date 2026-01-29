let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

/* Button clicks */
buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let value = btn.innerText;

        if (value === "←") {
            display.value = display.value.slice(0, -1);
        } 
        else if (value === "C") {
            display.value = "";
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

/* Keyboard input */
document.addEventListener("keydown", function (e) {
    let key = e.key;

    if (!isNaN(key) || key === ".") {
        display.value += key;
    }

    if ("+-*/%^".includes(key)) {
        display.value += key;
    }

    if (key === "Enter") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    if (key === "Escape") {
        display.value = "";
    }
});
