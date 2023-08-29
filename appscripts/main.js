//SECTION: SINGAPORE'S FOUR SWITCHES

//Popup for Natural Gas
//When the first switch ("switch1") is clicked on, the function popupNaturalGas will run
document.getElementById("switch1").addEventListener("click", popupNaturalGas);
//popupNaturalGas runs, showing a text box with information on Singapore's usage of Natural Gas 
//the hidden text in the html with the id "popup-naturalgas" is selected, and popup.classList.toggle("show") will reveal it 
function popupNaturalGas() {
  var popup = document.getElementById("popup-naturalgas");
  popup.classList.toggle("show");
};

//Popup for Solar Panel
//When the second switch ("switch2") is clicked on, the function popupSolarPanel will run
document.getElementById("switch2").addEventListener("click", popupSolarPanel);
//popupSolarPanel runs, showing a text box with information on Singapore's usage of solar panels
//the hidden text in the html with the id "popup-solarpanel" is selected, and popup.classList.toggle("show") will reveal it 
function popupSolarPanel() {
  var popup = document.getElementById("popup-solarpanel");
  popup.classList.toggle("show");
};

//Popup for Regional Power Grids
//When the third switch ("switch3") is clicked on, the function popupRegionalPowerGrids will run
document.getElementById("switch3").addEventListener("click", popupRegionalPowerGrids);
//popupRegionalPowerGrids runs, showing a text box with information on Singapore's reliance on Regional Power Grids
//the hidden text in the html with the id "popup-regionalpowergrids" is selected, and popup.classList.toggle("show") will reveal it
function popupRegionalPowerGrids() {
  var popup = document.getElementById("popup-regionalpowergrids");
  popup.classList.toggle("show");
};

//Popup for Low Carbon Alternatives
//When the fourth and last switch ("switch4") is clicked on, the function popupCarbonAlternatives will run
document.getElementById("switch4").addEventListener("click", popupLowCarbonAlternatives);
//popupLowCarbonAlternatives runs, showing a text box with information on Singapore's usage of Low Carbon Alternatives
//the hidden text in the html with the id "popup-lowcarbonalternatives" is selected, and popup.classList.toggle("show") will reveal it
function popupLowCarbonAlternatives() {
  var popup = document.getElementById("popup-lowcarbonalternatives");
  popup.classList.toggle("show");
};





//SECTION: Singapore's energy consumption from various energy sources over the years

//Line charts showing energy consumption trends in Singapore
//Viewers can choose which type of consumption they want to take a look at, by clicking on the tabs

//These are the datasets which will be used for the respective bar charts in this section
const labelYear = ['1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020', '2021']
const geoBiomass = ['0', '0', '0', '0', '0', '0.085', '0.245', '0.245', '0.47765875', '0.5871582', '0.8122861', '0.6848291', '0.75924546']
const solarPower = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0.008555556', '0.13123667', '0.7750392', '1.0382836']
const gas = ['0', '0', '0', '0', '0', '0', '14.25', '16.57425', '61.858868', '83.36057', '115.78651', '125.983604', '133.51857']
const coal = ['0.04652', '0.03489', '0.014833333', '0.034634165', '0.13194223', '0.24944028', '0.13316362', '0', '0.097691946', '0.09071389', '4.726432', '5.036953', '9.046126']
const oil = [ '47.841488', '87.17049', '85.97112', '111.53652', '141.7617', '272.58282', '373.77563', '425.6581', '485.75537', '712.5422', '808.52826', '821.4176', '814.17004']


//1. Line chart for Geo Biomass
//declare data object for Geo Biomass
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
//declare new line chart for Geo Biomass 
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


//2. Line chart for Solar power 
//declare data object for Solar Panels
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
//declare new line chart for Solar Panels
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

//3. Line chart for Gas
//declare data object for Gas
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
//declare new line chart for Gas
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

//4. line chart for Coal 
//declare data object for Coal
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
//declare new line chart for Coal
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

//5. Line chart for Oil
//declare data object for Oil
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
//declare new line chart for Oil
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

//Select the tab with the id "defaultOpen", and .click() ensures that this tab will always be the first tab that viewers see 
document.getElementById("defaultOpen").click();

//This function will run the moment any tab button is clicked 
function openCity(evt, cityName) {
  //declare variables i, tabcontent and tablinks
  var i, tabcontent, tablinks;

  //var tabcontent grabs the html divs with the id "tabcontent"
  tabcontent = document.getElementsByClassName("tabcontent");
  //for loop 
  //goes through values of i, starting from i=0 until it is equal to or more than the number of tabs (i.e. 5)
  for (i = 0; i < tabcontent.length; i++) {
    //loop through all tabcontent divs and hide them by setting their display style property to "none"
    //only the active tab content is visible at any given time; the rest will be hidden
    tabcontent[i].style.display = "none";
  }

  //var tablinks grabs the html divs with the id "tablinks"
  tablinks = document.getElementsByClassName("tablinks");
  // for loop 
  //goes through values of i, starting from i=0 until it is equal to or more than the number of tablinks (i.e. 5)
  for (i = 0; i < tablinks.length; i++) {
    // loop through all tablinks buttons and remove the "active" class from their className property
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  //
  document.getElementById(cityName).style.display = "block";
  //"Active" class is added to the clicked tab button using += operator
  //the active tab is then the only tab that will be displayed
  evt.currentTarget.className += "active";
}





//SECTION: So, what is SG's progress thus far?

//Bar chart and Pie chart for distribution of solar panels across Singapore
//Declare data object for distribution of Solar Panels Installations across Singapore
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

//Interactive segment!
//If Pie button is clicked, function changeToPie is triggered. Bar chart changes to pie chart.
const pie = document.getElementById("pie").addEventListener("click", changeToPie);
//If Bar button is clicked, function changeToBar is triggered. Pie chart changes to bar chart.
const bar = document.getElementById("bar").addEventListener("click", changeToBar);

//declare function changeToBar
//chart type changes from 'pie' to 'bar'
function changeToBar() {
  const updatetype = 'bar'; 
  pieChart.config.type = updatetype;
  pieChart.update();
  console.log(pieChart.config.type);
}

//declare function changeToPie
//chart type changes from 'bar' to 'pie'
function changeToPie() {
  const scales = {
    //this ensures that when bar chart changes back to pie chart, the x and y axis at the back of the initial bar chart will disappear as well 
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

//Declare pie chart for distribution of Solar Panels Installations across Singapore
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
//align text below pie chart to the center
document.getElementById("viewdata").style.textAlign = "center";


//Bar chart of the number of installations of solar panels in Singapore over the years
//Declare data object 
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
//Declare new bar chart 
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
        fontFamily: "Copperplate, fantasy",
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

//Bar chart of the solar panel capacity in MWp
//Declare data object
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
//Declare new bar chart
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





//SECTION: Singapore's drive towards electric vehicles 

//Bar chart of number of charging points for electric vehicles in Singapore versus the 2030 target
//Declare data object
const electricVehicles = {
  labels: ['2022', '2030'],
  datasets: [
    {
      label: 'Number of Electic vehicle charging points',
      data: [3600, 60000],
      backgroundColor: "rgb(131, 126, 60)",
      borderWidth: 2,
      borderColor: "rgb(0, 0, 0)",
    },  
]};
//Declare new bar chart
const electricVehicle = new Chart("electricVehicle", 
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
          fontColor: 'rgb(54, 112, 85)'
         }
      },
      scales: {
         xAxes: [{
            stacked: false,
            ticks: {
              fontColor: 'rgb(54, 112, 85)'
            } 
         }],
         yAxes: [{
            stacked: false,
            ticks: {
              fontColor: 'rgb(54, 112, 85)'
            } 
         }]
      },
      
  }
}); 

//Line chart showing multiple datasets of electric vehicle population, based on vehicle type
//Declare data object
const electricVehiclesNumber = {
  labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  datasets: [
    {
      label: 'Number of Electic Cars',
      data: [3, 0, 1, 1, 12, 314, 560, 1120, 1217, 2947, 6531],
      backgroundColor: "rgba(144, 50, 79, 0.3)",
      borderWidth: 2,
      borderColor: "rgb(144, 50, 79)",
    },
    {
      label: 'Number of Electic Taxis',
      data: [0, 0, 0, 0, 0, 0, 102, 133, 32, 304, 402],
      backgroundColor: "rgba(54, 112, 85, 0.3)",
      borderWidth: 2,
      borderColor: "rgb(54, 112, 85)",
    },
    {
      label: 'Number of Electic Motorcycles',
      data: [8, 6, 4, 2, 2, 2, 2, 2, 1, 5, 115],
      backgroundColor: "rgba(2, 108, 128, 0.3)",
      borderWidth: 2,
      borderColor: "rgb(2, 108, 128)",
    },
    {
      label: 'Number of Electic Buses',
      data: [0, 0, 0, 0, 1, 2, 4, 10, 50, 75, 151],
      backgroundColor: "rgba(239,117,70, 0.3)",
      borderWidth: 2,
      borderColor: "rgb(239,117,70)",
    },
]
};
//Decalre new line chart
const lineElectric = new Chart("linechartElectric", {
  type: 'line',
  data: electricVehiclesNumber,
  options: {
    responsive: true,
    title: {
      display: true, 
      text: ["Electric Vehicle Population"],
      fontFamily: "Copperplate, Papyrus, fantasy",
      fontSize: 24, 
      fontColor: 'rgb(219, 136, 70)',
    }, 
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number of Electric Vehicles over the Years'
      }
    }
  },
});



//SECTION: Test your knowledge!
//This section is a quiz section, with multiple choice questions

//1. Select divs in the html document with the respective ids
var quizContainer = document.getElementById("quiz-container");
var questionContainer = document.getElementById("question"); 
var optionsContainer = document.getElementById("options"); 
var submitButton = document.getElementById("submit")

//2. Create array of questions 
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

//5. Function showQuestion runs
function showQuestion(index) {
  //update text content of a questionContainer 
  //'questions' is an array of question objects and 'index' is the index of the current question
  questionContainer.textContent = questions[index].question; 
  //Clear the previous answer options from the optionsContainer element
  //Set its innerHTML property to an empty string
  optionsContainer.innerHTML = ""; 

  //for loop 
  //iterate through the array of answer options for the current question
  for (var i = 0; i < questions[index].options.length; i++) {
    //for each option, create a radio button and next to it set the value to the current option from the array
    var option = document.createElement("input"); 
    option.type = 'radio';
    option.name = 'answer'; 
    option.value = questions[index].options[i];

    //create new label element
    //this label displays the current option from the array
    var label = document.createElement('label'); 
    label.textContent = questions[index].options[i]; 

    //append radio input and the label to the options container element
    optionsContainer.appendChild(option);
    optionsContainer.appendChild(label);
    //add a line break between each radio option 
    optionsContainer.innerHTML += "<br/>";
  };

};

//3. Declare variable currentQuestionNumber such that it is 0 
var currentQuestionNumber = 0; 

//4. Call function showQuestion() with currentQuestionNumber (which is 0) as its argument
showQuestion(currentQuestionNumber);

//6. When 'submit' button is clicked, the below function runs
submitButton.addEventListener("click", function() {

  var selectedOption = document.querySelector('input[name="answer"]:checked')
  //if else if loop 
  if (selectedOption) {
    //declare variable answer to be the value of the selected option
    var answer = selectedOption.value; 

    //if answer is correct, i.e. value of selected option = the value of the answer for that question in the array,
    //then console log the correct answer, and alert the viewer that they have chosen the right answer 
    if (answer === questions[currentQuestionNumber].answer) {
      window.alert("Congrats! That's the right answer!");
      console.log("correct ans chosen is " + selectedOption);

      //next, the current question number variable adds 1 (so 0 becomes 1 now, for instance)
      currentQuestionNumber++; 
      //if the current question number is less than the total number of questions (i.e. the number of objects in the array which is 4),
      //then show the next question 
      if (currentQuestionNumber < questions.length) {
        showQuestion(currentQuestionNumber);
      } else { 
        //or elser if the current question number is equal or more than the total number of questions
        //then alert user that they have completed the quiz, and after they click 'ok', change the text content of the container to "Quiz Completed!"
        window.alert("Yay, you have completed the quiz!");
        quizContainer.textContent = "Quiz completed!"

      };
    }

    //if answer is wrong (i.e. value of selected option =/= the value of the answer for that question in the array)
  else if (answer !== questions[currentQuestionNumber].answer) {
    //alert user that they have chosen the wrong option
    window.alert("Sorry, that's incorrect, do try again!");
    console.log("wrong ans chosen is " + selectedOption);
    //without adding 1 to the current question number, show the original question so that viewer can attempt it again until they get it correct
    showQuestion(currentQuestionNumber);
  }}

  //if no option was selected
  else { 
    window.alert("Please choose an option");
  };

});

//Edit fonts, color and text alignment of the questions
document.getElementById("quiz-container").style.fontFamily = "Lucida Sans Typewriter", "Lucida Console", "Bitstream Vera Sans Mono";
document.getElementById("quiz-container").style.color = "black";
document.getElementById("quiz-container").style.textAlign = "center";
