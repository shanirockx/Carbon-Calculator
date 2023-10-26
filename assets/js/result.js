var rating;
const urlParams = new URLSearchParams(window.location.search);
const totalMilesRes = parseFloat(urlParams.get("totalMiles")).toFixed(3);
const totalEmissionRes = (parseFloat(urlParams.get("totalEmission")) * 1000).toFixed(3);
const totalPerMilesRes = (totalEmissionRes / totalMilesRes).toFixed(3);
document.getElementById("totalMilesRes").innerHTML = totalMilesRes;
document.getElementById("totalEmissionRes").innerHTML = totalEmissionRes + "g";
document.getElementById("totalPerMilesRes").innerHTML = totalPerMilesRes + "g";

if (totalPerMilesRes >= 0 && totalPerMilesRes < 80.467) {
  rating = "<span class='text-primary'>Low Carbon Footprint</span>";
  document.getElementById("advice").innerHTML =
    "🌱 Eco Warrior: 0 - 80.467 gCO2/mile <br> Way to go! You're treading lightly on Mother Earth!";
} else if (totalPerMilesRes > 80.467 && totalPerMilesRes < 241.401) {
  rating = "<span class='text-warning'>Moderate Carbon Footprint</span>";
  document.getElementById("advice").innerHTML =
    "🌳 Conscious Traveler: 80.467 - 241.401 gCO2/mile <br> Nice effort! A few tweaks and you could reduce even further.";
} else if (totalPerMilesRes > 241.401) {
  rating =
    "<span class='text-danger'>High or Very High Carbon Footprint</span>";
  document.getElementById("advice").innerHTML =
    "🚗 Carbon Cruiser: 241.401 - 402.335 gCO2/mile <br> Red Alert! Let's brainstorm ways to bring those numbers down, champ!";
}

document.getElementById("rating").innerHTML = rating;
