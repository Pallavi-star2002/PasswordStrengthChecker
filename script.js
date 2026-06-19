let password = document.getElementById("password");
let power = document.getElementById("power-point");
let strengthText = document.getElementById("strength-text");

password.oninput = function () {

    let point = 0;
    let value = password.value;

    let widthPower = [
        "1%",
        "25%",
        "50%",
        "75%",
        "100%"
    ];

    let colorPower = [
        "#ef4444",
        "#f97316",
        "#eab308",
        "#84cc16",
        "#22c55e"
    ];

    let strengthLabel = [
        "Very Weak",
        "Weak",
        "Medium",
        "Strong",
        "Secure"
    ];

    if (value.length >= 6) {

        let arrayTest = [
            /[0-9]/,
            /[a-z]/,
            /[A-Z]/,
            /[^0-9a-zA-Z]/
        ];

        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point++;
            }
        });
    }

    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];

    strengthText.innerHTML = strengthLabel[point];
    strengthText.style.color = colorPower[point];
};