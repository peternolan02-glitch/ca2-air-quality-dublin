/* Peter Nolan - CO2 commute calculator, DOM-based with validation */
// Detailed description of steps taken
// 1 declare a function named calculateEmissions that will be called when the user clicks the "Calculate" button
// 2.declare variables to get the distance input, transport select, result display, and error display elements from the DOM
// 3.parse the distance input value  (turn string into float)
// 4.parse the selected transport's emission factor value (turn string into float)
// 5.clear any previous error messages and result messages (alter textContent of error and result elements to empty string = "")
// 6.validate the distance input to ensure it is a number greater than 0, if not display an error message and exit the function early (isnan means "is not a number" necessary to check if the user has entered a valid number, and distance <= 0 checks if the number is greater than 0)
// 7.calculate emissions for one-way trip and round trip, rounding to 2 decimal places (called by resultEl.textContent = `One-way: ${emissionsPerTrip} kg CO2 | Round trip: ${emissionsRoundTrip} kg CO2 per day`)
// 8.display the calculated emissions in the result element (calls calculation functions of emissionsPerTrip and emissionsRoundTrip and displays them in the result element)

//possible structure change moving the validaiton happens before you touch the elements output ot DOM output to avoid uncessary manipulation (if invalid)
function calculateEmissions() { // Function to calculate CO2 emissions based on user input 
  const distanceInput = document.getElementById("distance"); // Get the distance input element
  const transportSelect = document.getElementById("transport"); // Get the transport select element
  const resultEl = document.getElementById("result");// Get the result display element
  const errorEl = document.getElementById("error"); // Get the error display element

  const distance = parseFloat(distanceInput.value);// Parse the distance input value as a float (turns the string entered by the user into a number)
  const emissionFactor = parseFloat(transportSelect.value); // Parse the selected transport's emission factor as a float (same as above)

  errorEl.textContent = ""; // Clear any previous error messages (clears any previous messages can be moved to the top of the function if desired)
  resultEl.textContent = ""; // Clear any previous result messages (same as above but for result msg)

  if (isNaN(distance) || distance <= 0) { // Validate the distance input (checks if not a number or if greater than 0)
    errorEl.textContent = "Please enter a valid distance greater than 0."; // if statement true then calls the error message to be displayed in the error element
    return; // Exit the function early if the distance is invalid
  } // just closes funciton or statement

  const emissionsPerTrip = (distance * emissionFactor).toFixed(2); // Calculate emissions for one-way trip and round to 2 decimal places (.tofixed(2) is doing the rounding)
  const emissionsRoundTrip = (distance * emissionFactor * 2).toFixed(2); // Calculate emissions for round trip and round to 2 decimal places (both are calculaitons that are being called in the resultEl.textContent below)

  resultEl.textContent =  // Display the calculated emissions in the result element resultEl.textContent = is a new string that is being created and displayed in the result element
    `One-way: ${emissionsPerTrip} kg CO2 | Round trip: ${emissionsRoundTrip} kg CO2 per day`; // Display the calculated emissions in the result element //%{} are template literals which allow insetion into a string
}
