// an area chart or line chart showing energy consumption trends in Singapore
//viewers can choose which type of consumption they want to take a look at, or all in general 
const labelYear = ['1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020', '2021']
const geoBiomass = ['0', '0', '0', '0', '0', '0.085', '0.245', '0.245', '0.47765875', '0.5871582', '0.8122861', '0.6848291', '0.75924546']
const solarPower = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0.008555556', '0.13123667', '0.7750392', '1.0382836']

//line chart for geoBiomass
const energyGeoBiomass = {
  labels: labelYear,
  datasets: [
    {
      label: 'Geo Biomass',
      data: geoBiomass,
    }
  ]
}

new Chart('energyGB',
  {
      type: "line",
      data: energyGeoBiomass,
      options: { 
          maintainAspectRatio: true,
          legend: {
              display: false
          },
          fill: true,
          title: {
              display: true,
              text: ['Energy consumption from Geo Biomass'],
              fontFamily: "TrebuchetMS",
              fontSize: 24, 
              fontColor: 'rgb(252, 250, 173)',
          },
          scales: { 
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    beginAtZero: true
                },
              },
            ],
            xAxes: [{
              ticks: {
                  fontColor: "white",
                  beginAtZero: false
              },
            }],
          },
        }
      }
  );

//line chart for Solar power 
const energySolarPower = {
  labels: labelYear,
  datasets: [
    {
      label: 'Solar Power',
      data: solarPower,
    }
  ]
}
new Chart('energySolar',
  {
      type: "line",
      data: energySolarPower,
      options: { 
          maintainAspectRatio: true,
          legend: {
              display: false
          },
          fill: true,
          title: {
              display: true,
              text: ['Energy consumption from Solar Power'],
              fontFamily: "TrebuchetMS",
              fontSize: 24, 
              fontColor: 'rgb(252, 250, 173)',
          },
          scales: { 
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    beginAtZero: true
                },
              },
            ],
            xAxes: [{
              ticks: {
                  fontColor: "white",
                  beginAtZero: false
              },
            }],
          },
        }
      }
  );

//line chart for Gas
//line chart for Coal 
//line chart for Oil
//line chart with all the energy sources 


document.getElementById("defaultOpen").click();

//this function was from W3schools, is it ok to use it?
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//pie chart of distribution of Solar Panels Installations across Singapore
const data = {
  labels: ['North', 'North East', 'East', 'Central', 'West'],
  datasets: [{
    label: 'solar panel distribution',
    data: [838, 1555, 798, 1040, 1225],
    backgroundColor: [
      'rgb(181, 211, 89)',
      'rgb(83, 166, 94)',
      'rgb(78, 107, 53)',
      'rgb(238, 243, 39)',
      'rgb(252, 250, 173)'
    ],
    hoverOffset: 4,
    borderWidth: 2,
    borderColor: "black"
  }]
};

new Chart("solar-panels-distribution",
  {
    type: 'pie',
    data: data,
    options: {
      maintainAspectRatio: true, 
      plugins: {
        legend: {
          display: true,
          labels: {
              color: "white"
          },
        },
      },
      title: {
        display: true, 
        text: ["Distribution of Solar Panels Installed in Singapore", "(As of March 2022)"],
        fontFamily: "TrebuchetMS",
        fontSize: 24, 
        fontColor: 'rgb(252, 250, 173)',
      }, 
    }
  }
)

//interactive map with the number of installations of solar panels across the five regions in Singapore 
//add graphics 

//Bar chart of the number of installations of solar panels 
const dataSolarNumber = {
  labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', 'Q1 2022'],
  datasets: [{
    label: 'Number of Solar Panels Installed',
    data: [30, 59, 106, 169, 294, 387, 634, 940, 1827, 2127, 2720, 3846, 4447, 5189, 5455],
    borderWidth: 2,
    hoverBackgroundColor: "rgba(232,105,90,0.8)",
    fill: false,
    backgroundColor: "rgb(252, 250, 173)",
    borderColor: "rgb(0, 0, 0)"
  }]
};

new Chart("solarPanelNumber",
  {
    type: 'bar', 
    data: dataSolarNumber,
    options: {
      maintainAspectRatio: true, 
      legend: {
        display: false, 
        fontColor:'rgb(255,255,255)',
      },
      
      title: {
        display: true, 
        text: ["Total Number of Solar Panels Installed in SG"],
        fontFamily: "TrebuchetMS",
        fontSize: 24, 
        fontColor: 'rgb(252, 250, 173)',
      }, 

      scales: { 
        yAxes: [{
            ticks: {
                fontColor: "white",
                beginAtZero: true
            },
          },
        ],
        xAxes: [{
          ticks: {
              fontColor: "white",
              beginAtZero: false
          },
        }],
      },
    },
  },
)

//bar chart of the solar panel capacity in MWp
const dataMwp = {
  labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', 'Q1 2022'],
  datasets: [{
    label: 'Solar Panel Capacity in Mwp',
    data: [ 0.4, 1.9, 3.8, 5.9, 10.1, 15.2, 32.4, 58.9, 125.0, 150.1, 209.1, 353.3, 431.8, 632.4, 670.0],
    borderWidth: 2,
    hoverBackgroundColor: "rgba(232,105,90,0.8)",
    fill: false,
    backgroundColor: "rgb(252, 250, 173)",
    borderColor: "rgb(0, 0, 0)"
  }]
};

new Chart("solarPanelMwp",
  {
    type: 'bar', 
    data: dataMwp,
    options: {
      maintainAspectRatio: true, 
      legend: {
        display: false, 
        fontColor:'rgb(255,255,255)',
      },
      
      title: {
        display: true, 
        text: ["Total Capacity of Installed Solar Panels Over the Years"],
        fontFamily: "TrebuchetMS",
        fontSize: 24, 
        fontColor: 'rgb(252, 250, 173)',
      }, 

      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },

      scales: { 
        yAxes: [{
            ticks: {
                fontColor: "white",
                beginAtZero: true
            },
          },
        ],
        xAxes: [{
          ticks: {
              fontColor: "white",
              beginAtZero: false
          },
        }],
      },
    },
  },
);

//stacked bar chart of number of charging points for electric vehicles in Singapore
const electricVehicles = {
  labels: ['2022'],
  datasets: [
    {
      label: 'Number of Electic vehicle charging points',
      data: [3000],
      backgroundColor: "rgb(78, 107, 53)",
      borderWidth: 2,
      borderColor: "rgb(0, 0, 0)",
    },
    {
      label: 'Targeted number of electic vehicle charging points',
      data: [60000],
      backgroundColor: "rgb(252, 250, 173)",
      borderWidth: 2,
      borderColor: "rgb(0, 0, 0)",
    }
    
]
};

new Chart("electricVehicle", 
{
  type: 'bar',
  data: electricVehicles,
  options: {
    plugins: {
      title: {
        display: true,
        text: '3000 public electric vehicle charging points'
      },
    },
    responsive: true,
      legend: {
         display: false,
        position: 'right', // place legend on the right side of chart
         labels: {
          fontColor: "white"
         }
      },
      scales: {
         xAxes: [{
            stacked: false,
            ticks: {
              fontColor: "white"
            } // this should be set to make the bars stacked
         }],
         yAxes: [{
            stacked: false,
            ticks: {
              fontColor: "white"
            } // this also..
         }]
      },
      
  }
}); 


