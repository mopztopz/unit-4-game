var crystal1 = "assets/images/red.jpg";
var crystal2 = "assets/images/green.jpg";
var crystal3 = "assets/images/orange.jpg";
var crystal4 = "assets/images/purp.jpg";

//Crystals is composite variable which stores the Crystal 1 - 4 variables as an array
var crystals = [crystal1, crystal2, crystal3, crystal4];

//CrystalId is another variable which hold 4 strings named as "Crystal1 - 4"
var crystalIds = ["crystal1", "crystal2", "crystal3", "crystal4"];

var crystalValues1;
var crystalValues2;
var crystalValues3;
var crystalValues4;

var crystalValues = 0;
var win = 0;
var loss = 0;

randScore = Math.floor(Math.random() * (121 - 19)) + 19;
console.log(randScore);

// MAJOR TASK #1: DYNAMICALLY CREATE CRYSTAL IMAGES as buttons
// =================================================================================

// 1. Create a for-loop to iterate through the letters array.
for (var i = 0; i < crystals.length; i++) {
  // Inside the loop...

  // 2. Create image tags
  var crystalBtn = $("<img>");

  // 3. adding attributes to the crystal images
  crystalBtn.attr("src", crystals[i]);
  crystalBtn.attr("id", crystalIds[i]);
  crystalBtn.attr("style", "width:120px; height:120px");

  // 4. Finally, append each crystal images
  $("#crystals").append(crystalBtn);
}
function compChoice() {
  randScore = Math.floor(Math.random() * (121 - 19)) + 19;
  $("#randScore").text(randScore);
}
function crystalRandom() {
  var uniquearr = [];

  while (uniquearr.length < 4) {
    var randomNumber = Math.floor(Math.random() * (13 - 1)) + 1;
    //checks that the number first randomly given to the crystal doesn't repeat to the second one.
    if (uniquearr.indexOf(randomNumber) > -1) continue;
    uniquearr[uniquearr.length] = randomNumber;
  }
  crystalValues1 = uniquearr[0];
  crystalValues2 = uniquearr[1];
  crystalValues3 = uniquearr[2];
  crystalValues4 = uniquearr[3];
}
crystalRandom();

$("#randScore").text(randScore);

$("#crystal1").on("click", function() {
  crystalValues += crystalValues1;
  $("#totalScore").text(crystalValues);
  checkResult();
});

$("#crystal2").on("click", function() {
  crystalValues += crystalValues2;
  $("#totalScore").text(crystalValues);
  checkResult();
});

$("#crystal3").on("click", function() {
  crystalValues += crystalValues3;
  $("#totalScore").text(crystalValues);
  checkResult();
});

$("#crystal4").on("click", function() {
  crystalValues += crystalValues4;
  $("#totalScore").text(crystalValues);
  checkResult();
});

function checkResult() {
  if (crystalValues === randScore) {
    win++;
    $("#win").text(win);
    compChoice();
    crystalRandom();
    crystalValues = 0;
    $("#totalScore").text(crystalValues);
  } else if (crystalValues > randScore) {
    loss++;
    $("#loss").text(loss);
    compChoice();
    crystalRandom();
    crystalValues = 0;
    $("#totalScore").text(crystalValues);
  }
}
