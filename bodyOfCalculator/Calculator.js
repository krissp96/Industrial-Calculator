function cubicMeters() {
  const lenghtCMInput = document.getElementById("cubicMLenght").value;
  const widthCMInput = document.getElementById("cubicMWidth").value;
  const heightCMInput = document.getElementById("cubicMHeight").value;
  const resultOutputElement = document.getElementById("cubic-meter-resut");
  const resultCMParagraph = document.createElement("p");

  // const sandWeightPerTonne = 1.5;

  const result = () => lenghtCMInput * widthCMInput * heightCMInput;
  resultCMParagraph.innerText = result();
  while (resultOutputElement.firstChild) {
    resultOutputElement.removeChild(resultOutputElement.lastChild);
  }
  if (lenghtCMInput >= 0 && widthCMInput >= 0 && heightCMInput >= 0) {
    resultOutputElement.appendChild(resultCMParagraph);
  }
  // resultOutputElement.appendChild(resultCMParagraph);
  ///comment the loop if no reset needed
}

function squareMeters() {
  const lenghtInput = document.getElementById("sqLenght").value;
  const widthInput = document.getElementById("sqWidth").value;
  const resultOutputElement = document.getElementById("square-meter-result");
  const resultParagraph = document.createElement("p");
  const result = () => lenghtInput * widthInput;
  resultParagraph.innerText = result();

  while (resultOutputElement.firstChild) {
    resultOutputElement.removeChild(resultOutputElement.lastChild);
  }
  if (lenghtInput >= 0 && widthInput >= 0) {
    resultOutputElement.appendChild(resultParagraph);
  } else {
  }
}

function wageCalculation() {
  const hoursInput = document.getElementById("hours").value;
  const pricePerHour = 350;
  const wageOutputElement = document.getElementById("hours-worked");
  const wageParagaraph = document.createElement("p");

  const wage = () => hoursInput * pricePerHour;
  wageParagaraph.innerText = wage();

  while (wageOutputElement.firstChild) {
    wageOutputElement.removeChild(wageOutputElement.lastChild);
  }
  wageOutputElement.appendChild(wageParagaraph);
}

// If needed for equipment calculation!
// function equipment(input) {
//   let pricePerDay = Number(input[0]);
//   let days = Number(input[1]);
//   let equipmentPrice = days * pricePerDay;
//   console.log(`${equipmentPrice} kr`);
// }

// equipment(["2000", "3"]);
