let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", myFunction);

function myFunction() {
  // Rendering out input text value
  let name = document.getElementById("text").value;
  document.getElementById("text-input").innerHTML = "Your Name: " + name;

  // Rendering out selected value from the drop-down menu
  let set = document.getElementById("set").value;
  document.getElementById("set-input").innerHTML = "Your Set: " + set;

  // Rendering out selected value from the radio buttons
  let campuses = document.getElementsByName("campus");
  let selectedCampus;
  for (const campus of campuses) {
    if (campus.checked) {
      selectedCampus = campus.value;
      break;
    }
  }
  document.getElementById("campus-input").innerHTML =
    "Your Campus: " + selectedCampus;

  // Rendering out selected values from the check boxes
  // 1. Push checked values to the array
  let vehicles = document.getElementsByName("vehicle");
  let selectedVehicles = [];
  for (const vehicle of vehicles) {
    if (vehicle.checked) {
      selectedVehicles.push(vehicle.value);
    }
    continue;
  }

  // 2. Render out the values in the array as a list
  let listItems = "";
  for (const selectedVehicle of selectedVehicles) {
    listItems += "<li>" + selectedVehicle + "</li>";
  }

  document.getElementById("vehicle-input").innerHTML = "Your Vehicle: ";
  document.getElementById("vehicle-input-list").innerHTML = listItems;
}
