const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "Please enter a valid height";
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please enter a valid weight";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(1);
        if (bmi < 18.6) {
            result.innerHTML = `<span>Your BMI is ${bmi} and you are Under Weight.</span>`
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `<span>Your BMI is ${bmi} and you have Normal Weight.</span>`
        } else if (bmi > 24.9) {
            result.innerHTML = `<span>Your BMI is ${bmi} and you are Over Weight.</span>`
        }
    }
});