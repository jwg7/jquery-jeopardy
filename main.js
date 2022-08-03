/////////////////////////////

// 1. set up html and css to look like wireframe
// 2. When user clicks dollar box, question from json file is generated.
// 3. user inputs answers - if answer is correct, score is updated.
// 4. host to github pages

///////////////////////////////
let data = [];
let groupedData = [];

// Questions
// 1. Random question is * by 1000 now. Need to tie it to the array length.
// 2.

// info relating to jeopardy.json file

let readJeopardyData = async () => {
  let rawJeopardyData = await fetch("jeopardy.json");
  data = await rawJeopardyData.json();
  // console.log(data);

  groupedData = _.groupBy(data, "value");
  console.log(groupedData);
};

readJeopardyData();

///////////////////////////////////

// create title
let title = document.createElement("img");
title.src = "images/jeopardybanner.png";
document.body.appendChild(title);
title.style.display = "block";
title.style.marginLeft = "auto";
title.style.marginRight = "auto";
////////////////////////////////////

// create score label
let scoreLabel = document.createElement("h3");
scoreLabel.innerText = "YOUR SCORE:";
scoreLabel.style.color = '#fe3e3d';
scoreLabel.style.fontSize = '35px';
scoreLabel.style.textShadow = '2px 1px black';
document.body.appendChild(scoreLabel);
// score label css
scoreLabel.style.textAlign = "center";
// score count
let score = document.createElement("p");
let scoreCount = 0;
score.innerText = scoreCount;
score.style.fontSize = '35px'
score.style.margin = '15px'
score.style.color = 'black';
// put score count under score label
scoreLabel.appendChild(score);

////////////////////
//CREATE GRID
////////////////////

// grid variables
let isClicked = false;

let randomQuestion = Math.ceil(Math.random() * 1000);

let grid = document.createElement("div");
// create grid id
grid.id = "grid";
// append grid to document
document.body.appendChild(grid);
// css for grid
grid.style.display = "grid";
grid.style.gridTemplateColumns = "auto auto auto auto auto";
/////////////////////////////
// add cells to grid container
/////////////////////////////

// create container
let container = document.querySelector("#grid");

/////////////////////
// $100 cells
//////////////////////

function create100() {
  for (let i = 1; i <= 5; i++) {
    let cell100 = document.createElement("div");
    // set same class for all cells
    cell100.className = "cell";
    cell100.innerHTML = "$100";
    container.appendChild(cell100);

    cell100.addEventListener("click", function (event) {
      event.preventDefault();
      console.log(`click`);
      isClicked = true;
      console.log(groupedData.$100[randomQuestion]);
      question.innerHTML = groupedData.$100[randomQuestion].question;
    });
  }
}

create100();

//////////////////
// $200 cells
//////////////////

function create200() {
  for (let i = 1; i <= 5; i++) {
    let cell200 = document.createElement("div");
    // set same class for all cells
    cell200.className = "cell";
    cell200.innerHTML = "$200";
    container.appendChild(cell200);

    cell200.addEventListener("click", function () {
      console.log(`click`);
      isClicked = true;
      question.innerHTML = groupedData.$200[randomQuestion].question;
    });
  }
}

create200();

//////////////////
// $300 cells
//////////////////

function create300() {
  for (let i = 1; i <= 5; i++) {
    let cell300 = document.createElement("div");
    // set same class for all cells
    cell300.className = "cell";
    cell300.innerHTML = "$300";
    container.appendChild(cell300);

    cell300.addEventListener("click", function () {
      console.log(`click`);
      isClicked = true;
      question.innerHTML = groupedData.$300[randomQuestion].question;
    });
  }
}
create300();

//////////////////
// $400 cells
//////////////////

function create400() {
  for (let i = 1; i <= 5; i++) {
    let cell400 = document.createElement("div");
    // set same class for all cells
    cell400.className = "cell";
    cell400.innerHTML = "$400";
    container.appendChild(cell400);

    cell400.addEventListener("click", function () {
      console.log(`click`);
      isClicked = true;
      question.innerHTML = groupedData.$400[randomQuestion].question;
    });
  }
}

create400();

//////////////////
// $500 cells
//////////////////

function create500() {
  for (let i = 1; i <= 5; i++) {
    let cell500 = document.createElement("div");
    // set same class for all cells
    cell500.className = "cell";
    cell500.innerHTML = "$500";
    container.appendChild(cell500);

    cell500.addEventListener("click", function () {
      console.log(`click`);
      isClicked = true;
      question.innerHTML = groupedData.$500[randomQuestion].question;
    });
  }
}

create500();

/////////////////////////////////////
// place where user sees question prompt
//////////////////////////////////////

//create parent section
let section = document.createElement("section");
section.id = 'section'
document.body.appendChild(section);

let section1 = document.createElement("section");
section1.id = 'section1'
section.appendChild(section1);

// dancing man gif
let dancing = document.createElement('img');
dancing.id = 'gif'
dancing.src = "https://muz.usovairina.ru/wp-content/uploads/2020/05/transparent-dance-gif-5.gif"
section1.appendChild(dancing)

// create child section
let section2 = document.createElement("section");
section2.id = 'section2'
section.appendChild(section2);


let question = document.createElement("p");
question.innerText = `WELCOME TO JEOPARDY! \n CLICK A CATEGORY TO GET STARTED!`;
question.style.fontSize = "26px";
question.style.fontWeight = 'bold'
question.style.textAlign = "center";
section2.appendChild(question);

/////////////////////////////////
// place where user submits answer
///////////////////////////////////

// create form. need input. need submit button.
let div = document.createElement("div");
div.id = "div";
section2.appendChild(div);
let input = document.createElement("input");
input.placeholder = "Enter your answer";
input.style.color = 'white'
input.style.fontSize = '25px'
input.type = "text";
input.id = "input";
input.style.width = "400px";
input.style.height = "50px";
input.style.backgroundColor = '#333333'
div.appendChild(input);

let button = document.createElement("button");
button.innerText = "SUBMIT";
button.style.height = '55px';
button.id = "button";
button.style.backgroundColor = '#fe3e3d'
div.appendChild(button);
// css for form
div.style.textAlign = "center";

//game logic

let guess = input.innerText;
// This is the answer
console.log(`Answer: ${groupedData.$100[randomQuestion].answer}`);

button.addEventListener("click", function () {
  console.log("click");
  if (guess === groupedData.$100[randomQuestion].answer) {
    question.innerText = `THAT'S RIGHT!`;
  } else {
    question.innerText = `You suck`;
  }
});
