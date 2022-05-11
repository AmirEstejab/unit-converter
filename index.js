let input = document.getElementById("input");
input.setAttribute('value', input.value); // had to artifically set value of html input elemnt to input.value for it to update in live time

let lengthEl = document.getElementById("length-el"); // This is the DOM length paragraph element
let volumeEl = document.getElementById("volume-el"); // This is the DOM volume paragraph element
let massEl = document.getElementById("mass-el"); // This is the DOM mass paragraph element

input.addEventListener("change", result);
input.addEventListener("keyup", result);

function result () { 
    // length conversions
    let feet = (input.value * 3.28084).toFixed(3); // conversion of input.value to feet (if input.value was in meters)
    let meters = (input.value * 0.3048).toFixed(3); // conversion of input.value to meters (if input.value was in feet)
    
    lengthEl.textContent = input.value + " meters = " + feet + " feet | " + input.value + " feet = " + meters + " meters";

    // volume coversions
    let gallons = (input.value * 0.264172).toFixed(3); // same premise as length conversion
    let liters = (input.value * 3.78541).toFixed(3);

    volumeEl.textContent = input.value + " liters = " + gallons + " gallons | " + input.value + " gallons = " + liters + " liters";

    // mass conversions
    let pounds = (input.value * 2.20462).toFixed(3); // same premise as length conversion
    let kilos = (input.value * 0.453592).toFixed(3);

    massEl.textContent = input.value + " kilos = " + pounds + " pounds | " + input.value + " pounds = " + kilos + " kilos";
}


