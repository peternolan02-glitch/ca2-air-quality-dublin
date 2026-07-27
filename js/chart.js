const xValues = ["19 Jul", "20 Jul", "21 Jul", "22 Jul", "23 Jul", "24 Jul", "25 Jul", "26 Jul"];

const no2Values  = [0, 8.7, 1.2, 0, 8.6, 6.6, 0, 0];   // negatives clipped to 0
const so2Values  = [1.0, 1.1, 1.1, 1.0, 1.3, 1.3, 1.4, 1.1];
const pm10Values = [9.5, 9.1, 10.5, 10.7, 13.3, 11.5, 12.8, 4.2];
const pm25Values = [5.6, 4.5, 5.5, 5.8, 8.1, 4.8, 4.9, 1.7];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        label: "NO2 (µg/m³)",
        backgroundColor: "red",
        data: no2Values
      },
      {
        label: "SO2 (µg/m³)",
        backgroundColor: "green",
        data: so2Values
      },
      {
        label: "PM10 (µg/m³)",
        backgroundColor: "blue",
        data: pm10Values
      },
      {
        label: "PM2.5 (µg/m³)",
        backgroundColor: "orange",
        data: pm25Values
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Daily Average Air Quality Readings – 19–26 Jul 2026"
    },
    scales: {
      yAxes: [{
        ticks: { beginAtZero: true },
        scaleLabel: { display: true, labelString: "Concentration (µg/m³)" }
      }]
    }
  }
});