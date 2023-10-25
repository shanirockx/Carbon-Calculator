var form = document.getElementById("calForm");
var index = 1;
var totalMiles = 0;
var totalEmission = 0;
function calculationForm(event) {
  event.preventDefault();
  var transport = document.getElementById("transport");
  var miles = document.getElementById("miles");
  var transportValue = transport.value;
  var transportOption = transport.options[transport.selectedIndex].text;
  var milesValue = parseFloat(miles.value);
  var result;

  if (transportValue == 0 || !milesValue) {
    alert("Please enter miles and transportation type");
    return;
  }

  switch (transportValue) {
    case "car-gasoline":
      result = 0.4 * milesValue;
      break;

    case "car-diesel":
      result = 0.41 * milesValue;
      break;

    case "bus":
      result = 0.19 * milesValue;
      break;

    case "subway":
      result = 0.09 * milesValue;
      break;

    case "walk":
      result = 0 * milesValue;
      break;

    case "bike":
      result = 0 * milesValue;
      break;

    case "motorbike":
      result = 0.21 * milesValue;
      break;

    default:
      break;
  }

  var html =
    "<tr><td>" +
    index +
    "</td><td>" +
    transportOption +
    "</td><td>" +
    milesValue +
    "</td><td>" +
    (result * 1000).toFixed(3) +
    "</td></tr>";

  if (index == 1) {
    document.getElementById("displayResult").innerHTML = html;
  } else {
    document.getElementById("displayResult").innerHTML += html;
  }

  totalMiles += milesValue;
  totalEmission += result;

  var totalSum =
    "<tr><td>Sum</td><td colspan='2'>Total Miles = <span class='text-primary'>" +
    totalMiles.toFixed(3) +
    "</span></td><td>Total CO<sub>2</sub> Emissions = <span class='text-primary'>" +
    (totalEmission * 1000).toFixed(3) +
    "g</span></td></tr>";
  document.getElementById("totalResult").innerHTML = totalSum;

  index++;
}
form.addEventListener("submit", calculationForm);

const submitRes = document.getElementById("submitReuslt");
function submitResult() {
  if (index == 1) {
    alert("Please add the miles and transportation type before submit");
    return;
  }

  const url = "result.html";
  location.href = `${url}?totalMiles=${totalMiles}&totalEmission=${totalEmission}`;
}
submitRes.addEventListener("click", submitResult);
