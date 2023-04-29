function cubicMeters() {
  const lenghtCMInput = document.getElementById("cubicMLenght").value;
  const widthCMInput = document.getElementById("cubicMWidth").value;
  const heightCMInput = document.getElementById("cubicMHeight").value;
  const resultOutputElement = document.getElementById("cubic-meter-resut");
  const resultCMParagraph = document.createElement("p");
  
  // const sandWeightPerTonne = 1.5;
  
  const result = () => lenghtCMInput * widthCMInput * heightCMInput;
  resultCMParagraph.innerText = result();
  resultOutputElement.appendChild(resultCMParagraph);
}

// let width = Number(input[1]);
// let height = Number(input[2]);

// let result = height * width * lenght;
// console.log(`${result} cubic meters`);
// let lenght = Number(input[0]);
// cubicMeters(["4", "10", "0.454"]);

function squareMeters() {
  const lenghtInput = document.getElementById("sqLenght").value;
  const widthInput = document.getElementById("sqWidth").value;
  const resultOutputElement = document.getElementById("square-meter-result");
  const resultParagraph = document.createElement("p");

  const result = () => lenghtInput * widthInput;
  resultParagraph.innerText = result();

  // Ucomment the following line if we need to rewrite the result in the same place instead of adding new result on the bottom of it
  // while (resultOutputElement.firstChild) {
  //   resultOutputElement.removeChild(resultOutputElement.lastChild);
  // }

  resultOutputElement.appendChild(resultParagraph);
}



function wageCalculation() {
  const hoursInput = document.getElementById("hours").value;
  const pricePerHour = 350;
  const wageOutputElement = document.getElementById("hours-worked");
  const wageParagaraph = document.createElement("p");

  const wage = () => hoursInput * pricePerHour;
  wageParagaraph.innerText = wage();

  wageOutputElement.appendChild(wageParagaraph);
  // let hourlyWage = Number(input[0]);
  // let hours = Number(input[1]);
  // let wageTotal = hourlyWage * hours;
  // console.log(`${wageTotal} kr`);
}
// wage(["350", "80"]);


// If needed for equipment calculation!
// function equipment(input) {
//   let pricePerDay = Number(input[0]);
//   let days = Number(input[1]);
//   let equipmentPrice = days * pricePerDay;
//   console.log(`${equipmentPrice} kr`);
// }

// equipment(["2000", "3"]);