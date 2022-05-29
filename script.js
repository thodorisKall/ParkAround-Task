let weather = {
  apiKey: "cdae50bde18e7f347886422012156661",
  fetchWeather: function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        field.text +
        "&units=metric&appid=cdae50bde18e7f347886422012156661"
    )
      .then((response) => response.json())
      .then((data) => {
        var nameValue = data["name"];
        var tempValue = data["temp"];
        var skyValue = data["description"];

        temperature.innerHTML = tempValue;
        city.innerHTML = nameValue;
        description.innerHTML = nameValue;
      })

      .catch((err) => alert("Wrong city name!"));
  },
};
