var options = {
  chart: {
    height: 280,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  series: [
    {
      name: "sales",
      data: [0, 10, 20, 20, 30, 20],
    },
  ],
  xaxis: {
    categories: ["08:00", "09:00", "12:00", "15:00", "18:00", "21:00"],
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "10px",
    },
  },
};

var chart = new ApexCharts(
  document.querySelector("#content-line-chart"),
  options
);

chart.render();

var options2 = {
  series: [
    {
      name: "Covid",
      data: [28, 29, 33, 36],
    },
    {
      name: "BPJS",
      data: [12, 11, 14, 18],
    },
    {
      name: "Asuransi Lain",
      data: [14, 22, 33, 22],
    },
    {
      name: "Umum",
      data: [22, 20, 19, 33],
    },
  ],
  chart: {
    height: 300,
    type: "line",
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#EB4755", "#FF722C", "#0060A3", "#2DBE78"],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: "smooth",
  },

  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  markers: {
    size: 1,
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "10px",
    },
  },
  xaxis: {
    categories: ["a1", "a2", "a3", "a4"],
  },

  legend: {
    position: "bottom",
    horizontalAlign: "center",
    itemMargin: {
      horizontal: 30,
    },
  },
};

var chart2 = new ApexCharts(
  document.querySelector("#content-multiline-chart"),
  options2
);
chart2.render();

var options3 = {
  series: [
    {
      name: "",
      data: [5200, 2900, 2200 , 1900, 1200],
    },
  ],
  chart: {
    type: "bar",
    height: 480,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors:["#0060A3"],
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Hipertensi", "Diabetes", "Gangguan Kecemasan", "A04.9", "A05.9"],
  },
  yaxis: {
    title: {},
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return + val + " Diagnosis";
      },
    },
  },
};

var chart3 = new ApexCharts(document.querySelector("#diagram-chart"), options3);

chart3.render();
