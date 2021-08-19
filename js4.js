function leapyear() {
    let year;
    year = document.getElementById("input1").value;
    let y = parseInt(year);
    let mod1 = y % 4;
    let mod2 = y % 100;
    let mod3 = y % 400;
    if (mod1 == 0 && mod2 != 0) {
        document.getElementById("kq").innerText = "Result: Năm nhuận";
    } else if (mod2 == 0 && mod3 == 0) {
        document.getElementById("kq").innerText = "Result: Năm nhuận";
    } else {
        document.getElementById("kq").innerText = "Result: Không phải là năm nhuận"
    }
}


function checkecmajs() {
    let inputa;
    inputa = document.getElementById("input2").value;
    if (inputa == "ECMAScript") {
        document.getElementById("kq").innerText = "Right!"
    } else {
        document.getElementById("kq").innerText = "Didn't know? ECMAScript!"
    }
}