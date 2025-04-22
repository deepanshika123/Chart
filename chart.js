

// const ctx = document.getElementById('myChart');

// let myChart;
// let jsonData;

// fetch('data1.json') 
//   .then(response => response.json())
//   .then(data => {
//     jsonData = data;
//     createChart(data, 'bar');
//   });

// function setChartType(chartType) {
//   if (myChart) myChart.destroy();
//   createChart(jsonData, chartType);
// }

// function createChart(data, type) {
//   myChart = new Chart(ctx, {
//     type: type,
//     data: {
//       labels: data.map(row => row.month),
//       datasets: [
//         {
//           label: 'Tomato Price (₹/kg)',
//           data: data.map(row => row.Tomato),
//           backgroundColor: '#ff2626',
//           borderColor: '#ff4c4c',
//           borderWidth: 1
//         },
//         {
//           label: 'Wheat Price (₹/quintal)',
//           data: data.map(row => row.Wheat),
//           backgroundColor: '#05998c',
//           borderColor: ' #037c6e',
//           borderWidth: 1
//         }
//       ]
//     },
//     options: {
//       responsive: true,
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
// }




const ctx = document.getElementById('myChart');
let myChart;
let jsonData;
let chartType = 'bar'; 

fetch('data1.json')
  .then(response => response.json())
  .then(data => {
    jsonData = data;
    createChart('Tomato', chartType); 
  });

function setChartType(type) {
  chartType = type;
  updateChart();
}

function updateChart() {
  const selectedItem = document.getElementById("itemSelect").value;
  if (myChart) myChart.destroy();
  createChart(selectedItem, chartType);
}

function createChart(item, type) {
  myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: jsonData.map(row => row.month),
      datasets: [{
        label: `${item} Price`,
        data: jsonData.map(row => row[item]),
        backgroundColor: '#037c6e',
        borderColor: '#05998c',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

