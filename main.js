/////////////////////////////

// 1. set up html and css to look like wireframe
// 2. When user clicks dollar box, question from json file is generated.
// 3. user inputs answers - if answer is correct, score is updated.
// 4. host to github pages

///////////////////////////////
let data = [];
let groupedData = [];
let q100 = [];
let q200 = [];
let q300 = [];
let q400 = [];
let q500 = [];
let answer = "";

// Discuss
// 1. toLowerCase(). Got it to work without it.
// 2. other bugs.

// info relating to jeopardy.json file

let readJeopardyData = async () => {
  let rawJeopardyData = await fetch("jeopardy.json");
  data = await rawJeopardyData.json();
  // console.log(data);

  groupedData = _.groupBy(data, "value");
  // console.log(groupedData);

  q100 = groupedData.$100;
  q200 = groupedData.$200;
  q300 = groupedData.$300;
  q400 = groupedData.$400;
  q500 = groupedData.$500;
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
scoreLabel.id = "scoreLabel";
scoreLabel.style.color = "#00008b";
scoreLabel.style.fontSize = "35px";
// scoreLabel.style.textShadow = "1px 1px black";
document.body.appendChild(scoreLabel);
// score label css
scoreLabel.style.textAlign = "center";
// score count
let score = document.createElement("p");
let scoreCount = 0;
score.innerText = scoreCount;
score.style.fontSize = "35px";
score.style.margin = "15px";
score.style.color = "black";
// put score count under score label
scoreLabel.appendChild(score);

////////////////////
//CREATE GRID
////////////////////

// grid variables
let isClicked = false;

let random1 = Math.ceil(Math.random() * 2009);
let random2 = Math.ceil(Math.random() * 6890);
let random3 = Math.ceil(Math.random() * 1947);
let random4 = Math.ceil(Math.random() * 9610);
let random5 = Math.ceil(Math.random() * 1996);

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

let c100 = false;
let c200 = false;
let c300 = false;
let c400 = false;
let c500 = false;

function create100() {
  for (let i = 1; i <= 5; i++) {
    let cell100 = document.createElement("div");
    // set same class for all cells
    cell100.className = `cell`;
    cell100.innerHTML = "$100";
    container.appendChild(cell100);

    cell100.addEventListener("click", function (event) {
      event.preventDefault();
      console.log(`click`);
      isClicked = true;
      c100 = true;
      // changes css of clicked cell
      if ((isClicked = true)) {
        cell100.style.backgroundColor = "black";
      }

      console.log(q100[random1]);
      // This populates the random question and makes it visible to the user
      question.innerHTML = q100[random1].question;
      answer = q100[random1].answer;
      console.log(` $100 answer: ${answer}`);
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
      c200 = true;
      // changes css of clicked cell
      if ((isClicked = true)) {
        cell200.style.backgroundColor = "black";
      }

      question.innerHTML = q200[random2].question;
      answer = q200[random2].answer;
      console.log(` $200 answer: ${answer}`);
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
      c300 = true;
      // changes css of clicked cell
      if ((isClicked = true)) {
        cell300.style.backgroundColor = "black";
      }
      question.innerHTML = q300[random3].question;
      answer = q300[random3].answer;
      console.log(` $300 answer: ${answer}`);
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
      c400 = true;
      // changes css of clicked cell
      if ((isClicked = true)) {
        cell400.style.backgroundColor = "black";
      }
      question.innerHTML = q400[random4].question;
      answer = q400[random4].answer;
      console.log(` $400 answer: ${answer}`);
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
      c500 = true;
      // changes css of clicked cell
      if ((isClicked = true)) {
        cell500.style.backgroundColor = "black";
      }
      question.innerHTML = q500[random5].question;
      answer = q500[random5].answer;
      console.log(` $500 answer: ${answer}`);
    });
  }
}

create500();

/////////////////////////////////////
// place where user sees question prompt
//////////////////////////////////////

//create parent section
let section = document.createElement("section");
section.id = "section";
document.body.appendChild(section);

let section1 = document.createElement("section");
section1.id = "section1";
section.appendChild(section1);

// dancing man gif
let dancing = document.createElement("img");
dancing.id = "gif";
dancing.src =
  "https://muz.usovairina.ru/wp-content/uploads/2020/05/transparent-dance-gif-5.gif";
section1.appendChild(dancing);

// create child section
let section2 = document.createElement("section");
section2.id = "section2";
section.appendChild(section2);

let question = document.createElement("p");
question.innerText = `WELCOME TO JEOPARDY! \n CLICK A CATEGORY TO GET STARTED!`;
question.style.fontSize = "26px";
question.style.fontWeight = "bold";
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
input.style.color = "white";
input.style.fontSize = "25px";
input.type = "text";
input.id = "input";
input.style.width = "300px";
input.style.height = "50px";
input.style.backgroundColor = "#333333";
div.appendChild(input);

let button = document.createElement("button");
button.innerText = "SUBMIT";
button.style.height = "55px";
button.id = "button";
button.style.backgroundColor = "#fe3e3d";
div.appendChild(button);
// css for form
div.style.textAlign = "center";

/////////////////////////////
// Answer submit / game logic
////////////////////////////

let guess = input.value;
// lets people answer correcly even if not capitalized
let answer1 = answer.toLowerCase();

button.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  if (input.value === answer) {
    question.innerText = `You guessed right!`;
    // adding score logic
    if (c100 === true) {
      scoreCount += 100;
      score.innerText = scoreCount;
      input.value = "";
      c100 = false;
    } else if (c200 === true) {
      scoreCount += 200;
      score.innerText = scoreCount;
      input.value = "";
      c200 = false;
    } else if (c300 === true) {
      scoreCount += 300;
      score.innerText = scoreCount;
      input.value = "";
      c300 = false;
    } else if (c400 === true) {
      scoreCount += 400;
      score.innerText = scoreCount;
      input.value = "";
      c400 = false;
    } else if (c500 === true) {
      scoreCount += 500;
      score.innerText = scoreCount;
      input.value = "";
      c500 = false;
    }
  } else if (guess !== answer) {
    question.innerText = `Sorry, maybe next time!`;
    input.value = "";
  }
});
