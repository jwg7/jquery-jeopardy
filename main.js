/////////////////////////////

// 1. set up html and css to look like wireframe
// 2. When user clicks dollar box, question from json file is generated.
// 3. user inputs answers - if answer is correct, score is updated.
// 4. host to github pages

///////////////////////////////

// info relating to jeopardy.json file

let readJeopardyData = async () => {
  let rawJeopardyData = await fetch("jeopardy.json");
  let data = await rawJeopardyData.json();
  // console.log(data);

  let groupedData = _.groupBy(data, "value");
  console.log(groupedData.$200);
};

readJeopardyData();

///////////////////////////////////

// create title
let title = document.createElement("h1");
title.innerText = "JEOPARDY!";
document.body.appendChild(title);
// css for title
title.style.textAlign = "center";

////////////////////////////////////

// create score label
let scoreLabel = document.createElement("h3");
scoreLabel.innerText = "YOUR SCORE:";
document.body.appendChild(scoreLabel);
// score label css
scoreLabel.style.textAlign = "center";
// score count
let score = document.createElement("p");
score.innerText = "0";
// put score count under score label
scoreLabel.appendChild(score);

//////////////////////////////////////

//create grid
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
    cell100.className = 'cell'
    cell100.innerHTML = "$100";
    container.appendChild(cell100);
    
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
    cell200.className = 'cell'
    cell200.innerHTML = "$200";
    container.appendChild(cell200);
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
    cell300.className = 'cell'
    cell300.innerHTML = "$300";
    container.appendChild(cell300);
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
    cell400.className = 'cell'
    cell400.innerHTML = "$400";
    container.appendChild(cell400);
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
    cell500.className = 'cell'
    cell500.innerHTML = "$500";
    container.appendChild(cell500);
  }
}

create500();

/////////////////////////////////////
// place where user sees question prompt
//////////////////////////////////////
let section = document.createElement('section');
let question = document.createElement('p')
question.innerText = 'SELECT A BOX TO START'
question.style.fontSize = '20px'
question.style.textAlign = 'center'
document.body.appendChild(section)
section.appendChild(question)

////////////////////////////////
// create HTML break. 
// Need spacing between grid, question, and answer
/////////////////////////////////////
// let br = document.createElement('br')
// document.body.appendChild(br)


/////////////////////////////////
// place where user submits answer
///////////////////////////////////

// create form. need input. need submit button.
let form = document.createElement('form')
form.id = 'form'
document.body.appendChild(form)
let input = document.createElement('input')
input.placeholder = 'Enter your answer'
input.type = 'text'
input.id = 'input'
input.style.width = '250px'
input.style.height = '40px'
form.appendChild(input)
let button = document.createElement('button')
button.type = 'submit'
button.innerText = "SUBMIT"
button.style.height = '46px'
button.id = 'submit'
form.appendChild(button)
// css for form
form.style.textAlign = 'center'




