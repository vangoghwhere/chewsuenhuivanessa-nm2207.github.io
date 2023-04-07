//SECTION!! Singapore's Four Switches

//Popup for Natural Gas
document.getElementById("switch1").addEventListener("click", popupNaturalGas);
function popupNaturalGas() {
  var popup = document.getElementById("popup-naturalgas");
  popup.classList.toggle("show");
};

//Popup for Solar Panel
document.getElementById("switch2").addEventListener("click", popupSolarPanel);
function popupSolarPanel() {
  var popup = document.getElementById("popup-solarpanel");
  popup.classList.toggle("show");
};

//Popup for Regional Power Grids
document.getElementById("switch3").addEventListener("click", popupRegionalPowerGrids);
function popupRegionalPowerGrids() {
  var popup = document.getElementById("popup-regionalpowergrids");
  popup.classList.toggle("show");
};

//Popup for Low Carbon Alternatives
document.getElementById("switch4").addEventListener("click", popupLowCarbonAlternatives);
function popupLowCarbonAlternatives() {
  var popup = document.getElementById("popup-lowcarbonalternatives");
  popup.classList.toggle("show");
};

//SECTION!! Energy consumption from various energy sources over the years

// an area chart or line chart showing energy consumption trends in Singapore
//viewers can choose which type of consumption they want to take a look at, or all in general 
const labelYear = ['1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020', '2021']
const geoBiomass = ['0', '0', '0', '0', '0', '0.085', '0.245', '0.245', '0.47765875', '0.5871582', '0.8122861', '0.6848291', '0.75924546']
const solarPower = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0.008555556', '0.13123667', '0.7750392', '1.0382836']
const gas = ['0', '0', '0', '0', '0', '0', '14.25', '16.57425', '61.858868', '83.36057', '115.78651', '125.983604', '133.51857']
const coal = ['0.04652', '0.03489', '0.014833333', '0.034634165', '0.13194223', '0.24944028', '0.13316362', '0', '0.097691946', '0.09071389', '4.726432', '5.036953', '9.046126']
const oil = [ '47.841488', '87.17049', '85.97112', '111.53652', '141.7617', '272.58282', '373.77563', '425.6581', '485.75537', '712.5422', '808.52826', '821.4176', '814.17004']

//line chart with all the energy sources 


//line chart for geoBiomass
const energyGeoBiomass = {
  labels: labelYear,
  datasets: [
    {
      label: 'Geo Biomass',
      data: geoBiomass,
      backgroundColor: 'rgba(2, 108, 128, 0.5)',
      borderWidth: 1,
      borderColor: 'black',
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
              fontFamily: "Copperplate, Papyrus, fantasy",
              fontSize: 24, 
              fontColor: 'rgb(2, 108, 128)',
          },
          scales: { 
            yAxes: [{
                ticks: {
                    fontColor:'rgb(2, 108, 128)',
                    beginAtZero: true,
                    fontFamily: "Copperplate, Papyrus, fantasy"
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Unit of measurement: TWh',
                  fontSize: 20,
                  fontFamily: "Copperplate, Papyrus, fantasy"
                }
              },
            ],
            xAxes: [{
              ticks: {
                  fontColor: 'rgb(2, 108, 128)',
                  beginAtZero: false,
                  fontFamily: "Copperplate, Papyrus, fantasy"
              },
              scaleLabel: {
                display: true,
                labelString: 'Years',
                fontSize: 20,
                fontFamily: "Copperplate, Papyrus, fantasy"
              }
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
      backgroundColor: 'rgba(202, 60, 74, 0.5)',
      borderWidth: 1,
      borderColor: 'black'
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
              fontFamily: "Copperplate, Papyrus, fantasy",
              fontSize: 24, 
              fontColor: 'rgb(202,60,74)',
          },
          scales: { 
            yAxes: [{
                ticks: {
                    fontColor: 'rgb(202,60,74)',
                    beginAtZero: true,
                    fontFamily: "Copperplate, Papyrus, fantasy"
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Unit of measurement: TWh',
                  fontSize: 20,
                  fontFamily: "Copperplate, Papyrus, fantasy"
                }
              },
            ],
            xAxes: [{
              ticks: {
                  fontColor: 'rgb(202,60,74)',
                  beginAtZero: false,
                  fontFamily: "Copperplate, Papyrus, fantasy"
              },
              scaleLabel: {
                display: true,
                labelString: 'Years',
                fontSize: 20,
                fontFamily: "Copperplate, Papyrus, fantasy"
              }
            }],
          },
        }
      }
  );

//line chart for Gas
const energyGas = {
  labels: labelYear,
  datasets: [
    {
      label: 'Gas',
      data: gas,
      backgroundColor: 'rgba(239,117,70, 0.5)',
      borderWidth: 1,
      borderColor: 'black'
    }
  ]
}

new Chart('energyGas',
  {
      type: "line",
      data: energyGas,
      options: { 
          maintainAspectRatio: true,
          legend: {
              display: false
          },
          fill: true,
          title: {
              display: true,
              text: ['Energy consumption from Gas'],
              fontFamily: "Copperplate, Papyrus, fantasy",
              fontSize: 24, 
              fontColor: 'rgb(239,117,70)',
          },
          scales: { 
            yAxes: [{
                ticks: {
                    fontColor: 'rgb(239,117,70)',
                    beginAtZero: true,
                    fontFamily: "Copperplate, Papyrus, fantasy"
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Unit of measurement: TWh',
                  fontSize: 20,
                  fontFamily: "Copperplate, Papyrus, fantasy"
                }
              },
            ],
            xAxes: [{
              ticks: {
                  fontColor: 'rgb(239,117,70)',
                  beginAtZero: false,
                  fontFamily: "Copperplate, Papyrus, fantasy"
              },
              scaleLabel: {
                display: true,
                labelString: 'Years',
                fontSize: 20,
                fontFamily: "Copperplate, Papyrus, fantasy"
              }
            }],
          },
        }
      }
  );

//line chart for Coal 

const energyCoal = {
  labels: labelYear,
  datasets: [
    {
      label: 'Coal',
      data: coal,
      backgroundColor: 'rgba(54, 112, 85, 0.5)',
      borderWidth: 1,
      borderColor: 'black'
    }
  ]
}

new Chart('energyCoal',
  {
      type: "line",
      data: energyCoal,
      options: { 
          maintainAspectRatio: true,
          legend: {
              display: false
          },
          fill: true,
          title: {
              display: true,
              text: ['Energy consumption from Coal'],
              fontFamily: "Copperplate, Papyrus, fantasy",
              fontSize: 24, 
              fontColor: 'rgb(54, 112, 85)',
          },
          scales: { 
            yAxes: [{
                ticks: {
                    fontColor: 'rgb(54, 112, 85)',
                    beginAtZero: true,
                    fontFamily: "Copperplate, Papyrus, fantasy"
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Unit of measurement: TWh',
                  fontSize: 20,
                  fontFamily: "Copperplate, Papyrus, fantasy"
                }
              },
            ],
            xAxes: [{
              ticks: {
                  fontColor: 'rgb(54, 112, 85)',
                  beginAtZero: false,
                  fontFamily: "Copperplate, Papyrus, fantasy"
              },
              scaleLabel: {
                display: true,
                labelString: 'Years',
                fontSize: 20,
                fontFamily: "Copperplate, Papyrus, fantasy"
              }
            }],
          },
        }
      }
  );

//line chart for Oil

const energyOil = {
  labels: labelYear,
  datasets: [
    {
      label: 'Oil',
      data: oil,
      backgroundColor: 'rgba(144, 50, 79, 0.5)',
      borderWidth: 1,
      borderColor: 'black'
    }
  ]
}

new Chart('energyOil',
  {
      type: "line",
      data: energyOil,
      options: { 
          maintainAspectRatio: true,
          legend: {
              display: false
          },
          fill: {
            display: true,
            color: 'rgb(144, 50, 79)',
          },
          title: {
              display: true,
              text: ['Energy consumption from Oil'],
              fontFamily: "Copperplate, Papyrus, fantasy",
              fontSize: 24, 
              fontColor: 'rgb(144, 50, 79)',
          },
          scales: { 
            yAxes: [{
                ticks: {
                    fontColor: 'rgb(144, 50, 79)',
                    beginAtZero: true,
                    fontFamily: "Copperplate, Papyrus, fantasy"
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Unit of measurement: TWh',
                  fontSize: 20,
                  fontFamily: "Copperplate, Papyrus, fantasy"
                }
              },
            ],
            xAxes: [{
              ticks: {
                  fontColor: 'rgb(144, 50, 79)',
                  beginAtZero: false,
                  fontFamily: "Copperplate, Papyrus, fantasy"
              },
              scaleLabel: {
                display: true,
                labelString: 'Years',
                fontSize: 20,
                fontFamily: "Copperplate, Papyrus, fantasy"
              }
            }],
          },
        }
      }
  );


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


//SECTION!! So, what is SG's progress thus far?

//data object of Solar Panels Installations across Singapore
const data = {
  labels: ['North', 'North East', 'East', 'Central', 'West'],
  datasets: [{
    label: 'solar panel distribution',
    data: [838, 1555, 798, 1040, 1225],
    backgroundColor: [
      'rgb(202,60,74)',
      'rgb(239,117,70)',
      'rgb(242,198,101)',
      'rgb(153,190,183)',
      'rgb(144, 50, 79)'
    ],
    hoverOffset: 4,
    borderWidth: 2,
    borderColor: "black"
  }]
};

//1. if pie button is clicked, function changeToPie is triggered. Bar chart changes to pie chart
const pie = document.getElementById("pie").addEventListener("click", changeToPie);
//1. if bar button is clicked, function changeToBar is triggered. Pie chart changes to bar chart
const bar = document.getElementById("bar").addEventListener("click", changeToBar);

function changeToBar() {
  const updatetype = 'bar'; 
  pieChart.config.type = updatetype;
  pieChart.update();
  console.log(pieChart.config.type);
}

function changeToPie() {
  const scales = {
    x: {
      display: false,
      grid: {
        display: false,
      }
    },
    y: {
      display: false,
      grid: {
        display: false,
      }
    }
  }
  const updateType = 'pie'; 
  pieChart.config.type = updateType;
  pieChart.config.options.scales = scales;
  pieChart.update();
  console.log(pieChart.config.type);
}

const pieChart = new Chart("solar-panels-distribution-pie",
    {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: true, 
        plugins: {
          legend: {
            display: true,
          },
        },
        title: {
          display: true, 
          text: ["Distribution of Solar Panels Installed in Singapore", "(As of March 2022)"],
          fontFamily: "Copperplate, Papyrus, fantasy",
          fontSize: 24, 
          fontColor: 'rgb(2, 108, 128)',
        }, 
      }
    }
  )



// //2. showDoughnut function runs, doughnut chart is created
// const showDoughnut = function() {
  
//   // if (canvas.id.match("solar-panels-distribution-pie")) {
//   //   canvas.id("solar-panels-distribution-donut")
//   // }

//   new Chart("solar-panels-distribution-donut",
//   {
//     type: 'doughnut',
//     data: data,
//     options: {
//       maintainAspectRatio: true, 
//       plugins: {
//         legend: {
//           display: true,
//           labels: {
//               color: "white"
//           },
//         },
//       },
//       title: {
//         display: true, 
//         text: ["Distribution of Solar Panels Installed in Singapore", "(As of March 2022)"],
//         fontFamily: "Copperplate, Papyrus, fantasy",
//         fontSize: 24, 
//         fontColor: 'rgb(2, 108, 128)',
//       }, 
//     }
//   }
//   )

//   chart.update();
// }


//interactive map with the number of installations of solar panels across the five regions in Singapore 

//Bar chart of the number of installations of solar panels 
const dataSolarNumber = {
  labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', 'Q1 2022'],
  datasets: [{
    label: 'Number of Solar Panels Installed',
    data: [30, 59, 106, 169, 294, 387, 634, 940, 1827, 2127, 2720, 3846, 4447, 5189, 5455],
    borderWidth: 2,
    hoverBackgroundColor: "rgba(232,105,90,0.8)",
    fill: false,
    backgroundColor: "rgb(141, 180, 173)",
    borderColor: "black"
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
        fontFamily: "Copperplate, Papyrus, fantasy",
        fontSize: 24, 
        fontColor: 'rgb(2, 108, 128)',
      }, 

      scales: { 
        yAxes: [{
            ticks: {
                fontColor: 'rgb(2, 108, 128)',
                beginAtZero: true
            },
          },
        ],
        xAxes: [{
          ticks: {
              fontColor: 'rgb(2, 108, 128)',
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
    backgroundColor: "rgb(236, 174, 125)",
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
        fontFamily: "Copperplate, Papyrus, fantasy",
        fontSize: 24, 
        fontColor: 'rgb(219, 136, 70)',
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
                fontColor: "rgb(219, 136, 70)",
                beginAtZero: true
            },
          },
        ],
        xAxes: [{
          ticks: {
              fontColor: "rgb(219, 136, 70)",
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
      backgroundColor: "rgb(131, 126, 60)",
      borderWidth: 2,
      borderColor: "rgb(0, 0, 0)",
    },
    {
      label: 'Targeted number of electic vehicle charging points',
      data: [60000],
      backgroundColor: "rgb(153,190,183)",
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

//addEventListener and getElementById here for the quiz section 
// let submit = document.getElementById("submit");
// let answer = submit.addEventListener("click", checkAnswerOne)
// let answerOne = document.querySelector("input").value

// function checkAnswerOne() {
//   if (answerOne === "3000") {
//       window.alert("Congrats! That's the right answer!");
//       console.log("ans chosen is 3000");
//     }
//   else {
//     window.alert("Sorry, that's incorrect, do try again!");
//     console.log("wrong ans was chosen");
//   }
// };

//add if else loop here
  //add window.alert("Congrats! That's the right answer!") if user chooses correct option
  //add window.alert("Sorry, that's incorrect, do try again!") if user chooses wrong answer

var quizContainer = document.getElementById("quiz-container");
var questionContainer = document.getElementById("question"); 
var optionsContainer = document.getElementById("options"); 
var submitButton = document.getElementById("submit")

var questions = [ 
  {
    question: "How many EV charging stations have been installed in Singapore thus far?",
    options: ["2000", "3000", "4000", "5000"],
    answer: "3000"
  }, 

  {
    question: "Do green energy, clean energy and renewable energy mean the same thing?",
    options: ["Yes", "No"],
    answer: "No"
  },

  {
    question: "What is the main source of renewable energy that Singapore taps on?",
    options: ["Wind energy", "Hydro energy", "Geothermal energy", "Solar energy"],
    answer: "Solar energy"
  },

  {
    question: "Currently, what is Singapore's biggest source of energy?",
    options: ["Natural gas", "Solar energy", "Regional power grids", "Low-carbon alternatives"],
    answer: "Natural gas"
  }
]; 

function showQuestion(index) {
  questionContainer.textContent = questions[index].question; 
  optionsContainer.innerHTML = ""; 
  for (var i = 0; i < questions[index].options.length; i++) {
    var option = document.createElement("input"); 
    option.type = 'radio';
    option.name = 'answer'; 
    option.value = questions[index].options[i];

    var label = document.createElement('label'); 
    label.textContent = questions[index].options[i]; 

    optionsContainer.appendChild(option);
    optionsContainer.appendChild(label);
    optionsContainer.innerHTML += "<br/>";
  }
}

var currentQuestionNumber = 0; 

showQuestion(currentQuestionNumber);

submitButton.addEventListener("click", function() {

  var selectedOption = document.querySelector('input[name="answer"]:checked')
  if (selectedOption) {
    var answer = selectedOption.value; 
    //if answer is correct
    if (answer === questions[currentQuestionNumber].answer) {
      window.alert("Congrats! That's the right answer!");
      console.log("correct ans chosen is " + selectedOption);

      currentQuestionNumber++; 
      if (currentQuestionNumber < questions.length) {
        showQuestion(currentQuestionNumber);
      } else { 
        window.alert("Yay, you have completed the quiz!");
        quizContainer.textContent = "Quiz completed!"

      }
    }
    //if answer is wrong
  else if (answer !== questions[currentQuestionNumber].answer) {
    window.alert("Sorry, that's incorrect, do try again!");
    console.log("wrong ans chosen is " + selectedOption);
    showQuestion(currentQuestionNumber);
  }}

  //if no option was selected
else { 
  window.alert("Please choose an option");
};

});

document.getElementById("quiz-container").style.fontFamily = "Lucida Sans Typewriter", "Lucida Console", "Bitstream Vera Sans Mono";
document.getElementById("quiz-container").style.color = "black";
document.getElementById("quiz-container").style.textAlign = "center";
document.getElementById("viewdata").style.textAlign = "center";