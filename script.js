//  Call Element

let weight = document.getElementById("weight")
let height = document.getElementById("height")
let btnSubmit = document.getElementById("btnSubmit")
let deskripsi = document.getElementById("deskripsi")

// Manipulating / Events
// BMI = Berat Badan/(Tinggi Badan/100)^2

height.addEventListener("input", () => {
    if (height.value === "" && weight.value === "") {
        btnSubmit.disabled = true
    } else {
        btnSubmit.disabled = false
    }
})

function formula() {
    let weightNumber = parseFloat(weight.value)
    let heightNumber = parseFloat(height.value)
    let bmi = parseFloat(weightNumber / Math.pow(heightNumber / 100, 2))
    deskripsi.innerText = bmi.toFixed(1)
    return bmi.toFixed(1)
}

function categories(bmi) {
    if (bmi <= 18.5) {
        return "Underweight"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight"
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight"
    } else if (bmi >= 30) {
        return "Obesity"
    } else {
        return "-"
    }
}

function calculate() {
    deskripsi.style.paddingTop = "30px"
    deskripsi.innerText = "Your BMI is " + formula() + " which means You are " + categories(formula())
}