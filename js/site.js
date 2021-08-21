//Get the FizzBuzz numbers
function getNumbers(){
    let fizzNumber = document.getElementById("fizzNumber").value;
    let buzzNumber = document.getElementById("buzzNumber").value;

    //Parse for integers
    fizzNumber = parseInt(fizzNumber);
    buzzNumber = parseInt(buzzNumber);

    if (Number.isInteger(fizzNumber) && Number.isInteger(buzzNumber)) {
        
        //Call FizzBuzz function
        let fizzBuzzNumbers = fizzBuzz(fizzNumber,buzzNumber);

        //Call displayNumbers function
        displayNumbers(fizzBuzzNumbers);
    } else {
        alert("Please enter integers.");
    }

}

//Generate Fizz Buzz Numbers
function fizzBuzz(fizzValue, buzzValue){

    let fizzBuzzNumbers = [];

    //Loop through 1 through 100
    for (let i = 1; i <= 100; i++) {
        
        if (i % fizzValue == 0 && i % buzzValue == 0) {

            fizzBuzzNumbers.push("FizzBuzz");

        } else if (i % fizzValue == 0) {

            fizzBuzzNumbers.push("Fizz");
            
        } else if (i % buzzValue == 0) {

            fizzBuzzNumbers.push("Buzz");

        } else {

            fizzBuzzNumbers.push(i);

        }
        
    }

    return fizzBuzzNumbers;
}

//Display the numbers
function displayNumbers(numbers){

    /*
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let number = numbers[index];

        templateRows += `<tr><td>${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
    */

    //Get the table body element from the page
    let tableBody = document.getElementById("results");

    //Get the template row
    let templateRow = document.getElementById("fizzBuzzTemplate");

    //Clear the table
    tableBody.innerHTML = "";

    for (let index = 0; index < numbers.length; index += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].classList.add(numbers[index]);
        rowCols[0].textContent = numbers[index];
        
        rowCols[1].classList.add(numbers[index + 1]);
        rowCols[1].textContent = numbers[index+1];
        
        rowCols[2].classList.add(numbers[index + 2]);
        rowCols[2].textContent = numbers[index+2];
        
        rowCols[3].classList.add(numbers[index + 3]);
        rowCols[3].textContent = numbers[index+3];
        
        rowCols[4].classList.add(numbers[index + 4]);
        rowCols[4].textContent = numbers[index+4];

        tableBody.appendChild(tableRow);
        
    }

}