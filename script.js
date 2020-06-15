console.log('Add validation!');
let form = document.querySelector("#parking-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();


  //div.classList.add("anotherclass");
  validName();
  validCar();
  validStartDateField();
  validDays();
  //the rest of your code goes in her.
})

function validName() {
  let name = document.getElementById("name");
  let nameField = document.querySelector("#name-field")
  console.log("validName")
  if (name.value === "") {
    nameField.classList.add("input-invalid")
  }
  else {
    nameField.classList.add("input-valid")
  }
}

function validCar() {
  console.log("validCar")
  let carYear = document.getElementById("car-year");
  let carMake = document.getElementById("car-make");
  let carModel = document.getElementById("car-model");
  let carField = document.querySelector("#car-field")
  if (carYear.value === "" || carMake.value === "" || carModel.value === "") {
    carField.classList.add("input-invalid")
  }
  else {
    carField.classList.add("input-valid")
  }

  function validStartDateField() {
    console.log("validStartDateField")
    let startDateField = document.getElementById("start-date-field");
    let dateField = document.querySelector("#start-date-field")
    if (startDateField.value === "") {
      startDateField.classList.add("input-invalid")
    }
    else {
      startDateField.classList.add("input-valid")
    }
  }

 function validDays() {
  let days = document.getElementById("days");
  let nameField = document.querySelector("#days-field")
  console.log("validDays")
  if (days.value === "") {
    daysField.classList.add("input-invalid")
  }
  else {
    daysField.classList.add("input-valid")
  }
} 
  //repeat process for remaining fields declare/query//



};