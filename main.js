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
// create grid class
grid.id = "grid";
// append grid to document
document.body.appendChild(grid);
// css for grid
grid.style.display = "grid";
grid.style.gridTemplateColumns = "auto auto auto auto auto";

/////////////////////////////
// add cells to grid container
/////////////////////////////
// resource used: https://code-boxx.com/create-grid-javascript/#sec-grid

// create container
let container = document.querySelector("#grid");

/////////////////////
// $100 cells
//////////////////////

function create100() {
  for (let i = 1; i <= 5; i++) {
    let cell100 = document.createElement("div");
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
      cell300.innerHTML = "$300";
      container.appendChild(cell300);
    }
  }

  create300()

  //////////////////
// $400 cells
//////////////////

function create400() {
    for (let i = 1; i <= 5; i++) {
      let cell400 = document.createElement("div");
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
      cell500.innerHTML = "$500";
      container.appendChild(cell500);
    }
  }

  create500();

/////////////////////////////////////
// place where user sees question prompt
//////////////////////////////////////




/////////////////////////////////
// place where user submits answer
///////////////////////////////////