function Convert() {
    // Get the input value and selected conversion type
    var temperatureValue = parseFloat(document.querySelector(".temp").value);
    var selectedValue = document.getElementById("type").value;

    // Convert temperature based on the selected type
    var convertedTemperature;
    if (selectedValue === "Celcius") {
        convertedTemperature = (temperatureValue * 9/5) + 32;
    } else if (selectedValue === "Fahrenheit") {
        convertedTemperature = (temperatureValue - 32) * 5/9;
    } 
    
    // Set the result in the textarea
    document.querySelector(".showResult").value = convertedTemperature.toFixed(2);
}