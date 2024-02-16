const search = document.querySelector(".search-box"),
  sidebar = document.querySelector(".sidebar"),
  toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
var options = {
  series: [
    {
      name: "Facebook",
      data: [50, 120, 80, 250, 600, 500, 1000],
    },
    {
      name: "Twitter",
      data: [300, 700, 630, 820, 1050, 1000, 920],
    },
    {
      name: "Youtube",
      data: [100, 550, 300, 500, 450, 600, 550],
    },
    {
      name: "Instagram",
      data: [700, 570, 620, 840, 920, 760, 820],
    },
  ],
  chart: {
    height: 350,
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
  colors: ["#2266d6", "#249dee", "#f00", "#a62495"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Track Followers",
    align: "left",
  },
  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5,
    },
  },
  markers: {
    size: 1,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    title: {
      text: "Month",
    },
  },
  yaxis: {
    title: {
      text: "Followers",
    },
    min: 100,
    max: 1200,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetY: -25,
    offsetX: -5,
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
document.addEventListener("click", function (event) {
  const ellipsisIcon = event.target.closest(".detail");
  const optionsElement = event.target.closest(".options");

  if (ellipsisIcon) {
    const optionsElement = ellipsisIcon.nextElementSibling;
    optionsElement.classList.toggle("show");

    document.querySelectorAll(".options").forEach(function (otherOptions) {
      if (otherOptions !== optionsElement) {
        otherOptions.classList.remove("show");
      }
    });
  } else if (!optionsElement) {
    document.querySelectorAll(".options").forEach(function (otherOptions) {
      otherOptions.classList.remove("show");
    });
  }
});
