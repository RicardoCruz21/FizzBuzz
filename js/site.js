//Get the FizzBuzz numbers
function getNumbers(){
    let fizzNumber = document.getElementById("fizzNumber").value;
    let buzzNumber = document.getElementById("buzzNumber").value;

    //Validate numbers to integers
    let validNumbers = false;
    validNumbers = validateNumbers(fizzNumber,buzzNumber);

    if (validNumbers) {

        //Call generateFizzBuzzNumbers function
        let fizzBuzzNumbers = generateFizzBuzzNumbers(fizzNumber,buzzNumber);

        //Call displayNumbers function
        displayNumbers(fizzBuzzNumbers);

    }
}

//Validate the numbers entered by the user
function validateNumbers(value1, value2){

    let number1 = parseInt(value1);
    let number2 = parseInt(value2);

    if (Number.isInteger(number1) && Number.isInteger(number2)) {
        return true;
    } else {
        alert("Please enter integers.");
    }
}
//Generate Fizz Buzz Numbers
function generateFizzBuzzNumbers(number1, number2){

    let fizz = number1;
    let buzz = number2;

    let fizzBuzzNumbers = [];

    for (let index = 1; index <= 100; index++) {
        
        if (index % fizz == 0 && index % buzz == 0) {

            fizzBuzzNumbers.push("FizzBuzz");

        } else if (index % fizz == 0) {

            fizzBuzzNumbers.push("Fizz");
            
        } else if (index % buzz == 0) {

            fizzBuzzNumbers.push("Buzz");

        } else {

            fizzBuzzNumbers.push(index);

        }
        
    }

    return fizzBuzzNumbers;
}

//Display the numbers
function displayNumbers(numbers){

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let number = numbers[index];

        templateRows += `<tr><td>${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;



}