let opponent = {
population_influence: 100,
anti_nukes: 1,
nukes: 0,
depots: 0,
money: 75000,
income: 0
};

let money = 75000;
let population_influence = 100;
let anti_nuke = 1;
let nukes = 0;
let depots = 0;
let status = "not at war";
let statusNumber = 0;
let warDeclaredOnPlayer = 0;
let showStoreNum = 0;
let round = 0;
let warWinner = 0;
let gameOver = 0;


let moneyStat = document.querySelector("#money");
let populationStat = document.querySelector("#influence");
let antiNukeStat = document.querySelector("#antiNukes");
let nukeStat = document.querySelector("#nukes");
let warStatus = document.querySelector("#status");
let store = document.querySelector("#store");
let incomeStat = document.querySelector("#income");
let background = document.querySelector("img");
let playerNukeNum = document.querySelector("#playerNukeNum");
let playerAntiNukeNum = document.querySelector("#playerAntiNukeNum");
let opponentAntiNukeNum = document.querySelector("#opponentAntiNukeNum");
let opponentNukeNum = document.querySelector("#opponentNukeNum");
let warScreen = document.querySelector("#warScreen");
let warWinnerName = document.querySelector("#warWinnerName");
let dismissButton = document.querySelector("#dismissWar")
let statScreen = document.querySelector("#statScreen");
let options = document.querySelector("#options");
let uav_message = document.querySelector("#uav_message");

function purchase_Depot() {
if (money >= 15000) {
money = money - 15000;
depots = depots + 1;
}
}

function purchase_Nuke() {
    if (money >= 30000) {
money = money - 30000;
nukes = nukes + 1;
}
}

function purchase_AntiNuke() { 
    if (money >= 20000) {
money = money - 20000;
anti_nuke = anti_nuke + 1;
}
}

function purchaseUAV() {
    if (money >= 90000) {
        money = money - 90000;
        uav_message.innerHTML = "Enemy nukes: " + opponent.nukes + " Enemy anti-nukes: " + opponent.anti_nukes;
        uav_message.style = style="color: green; background-color: grey; font-size: 50px; left: 500px; top: 150px; position: absolute;"
       
       
    }
}


let wait3 = setInterval(function(){
if (showStoreNum > 1 || statusNumber === 1){
showStoreNum = 0;
}

if (population_influence < 0) {
   population_influence = 0;
}
if (opponent.population_influence < 0) {
   opponent.population_influence = 0;
}
}, 100)


let wait1 = setInterval(function(){
moneyStat.innerHTML = "money: $" + money;
populationStat.innerHTML = "population influence: " + population_influence;
antiNukeStat.innerHTML = "Anti-Nukes: " + anti_nuke;
nukeStat.innerHTML = "Nukes: " + nukes;
income = depots * 1500;
opponent.income = opponent.depots * 1500;
incomeStat.innerHTML = "Income: $ " + income;


if (statusNumber === 0) {
warStatus.innerHTML = "Status: Not at war"; warScreen.style = "position: absolute; top:  500px; left: 100px; z-index: 3; background-color: darkred; height: 800px; width: 800px; border: solid 5px; filter: opacity(0%)"
}

if (population_influence < 0){
population_influence = 0;}
if (opponent.population_influence < 0){
opponent.population_influence = 0;}



},500);

function showStore() {
showStoreNum++
if (showStoreNum === 1) {
 store.style="background-color: darkblue; border: solid 10px; position: absolute; top: 600px; filter: opacity(100%); z-index: 5;"
}
if (showStoreNum === 2) {
 store.style="background-color: darkblue; border: solid 10px; position: absolute; top: 600px; filter: opacity(0%);"
}
if (statusNumber === 1) {
 store.style="background-color: darkblue; border: solid 10px; position: absolute; top: 600px; filter: opacity(0%);"
}
}

function declareWar() {
if (nukes > 0){
statusNumber = 1;

    if (statusNumber === 1) {
warStatus.innerHTML = "Status: At war!";
background.src="explosion.jpg"
warScreen.style = "position: absolute; top:  500px; left: 100px; z-index: 3; background-color: darkred; height: 800px; width: 800px; border: solid 5px; filter: opacity(100%)"
battle();}}
    
}

function nextRound(){
    uav_message.innerHTML = "";
    money = money + income;
    opponent.money = opponent.money + opponent.income;
    round = round + 1;
    
    if (statusNumber === 1) {
warStatus.innerHTML = "Status: At war!";
background.src="explosion.jpg"
warScreen.style = "position: absolute; top:  500px; left: 100px; z-index: 3; background-color: darkred; height: 800px; width: 800px; border: solid 5px; filter: opacity(100%)"
battle();}
   
let AI_Dec = Math.floor(Math.random(2) * 4);
if (AI_Dec === 0) {
    AI_Dec = 2;
}

if (opponent.depots < 30) {
AI_Dec = 1}
   
    if (opponent.money >= 15000 && statusNumber === 0) {
    
  
   if (AI_Dec === 1) {
    if (opponent.money >= 15000){
        opponent.money = opponent.money - 15000;
        opponent.depots = opponent.depots + 1; }
        if (opponent.money >= 15000){
        opponent.money = opponent.money - 15000;
        opponent.depots = opponent.depots + 1; }
        if (opponent.money >= 15000){
        opponent.money = opponent.money - 15000;
        opponent.depots = opponent.depots + 1; }
        if (opponent.money >= 15000){
        opponent.money = opponent.money - 15000;
        opponent.depots = opponent.depots + 1; }
        if (opponent.money >= 15000){
        opponent.money = opponent.money - 15000;
        opponent.depots = opponent.depots + 1; }
        if (opponent.money >= 15000){
        opponent.money = opponent.money - 15000;
        opponent.depots = opponent.depots + 1; }
        if (opponent.money >= 15000){
        opponent.money = opponent.money - 15000;
        opponent.depots = opponent.depots + 1; }
        if (opponent.money >= 15000){
        opponent.money = opponent.money - 15000;
        opponent.depots = opponent.depots + 1; }}
        
        if(AI_Dec === 2) {
    if (opponent.money >= 30000){
        opponent.money = opponent.money - 30000;
        opponent.nukes = opponent.nukes + 1;  }
        if (opponent.money >= 30000){
        opponent.money = opponent.money - 30000;
        opponent.nukes = opponent.nukes + 1;  }
       if (opponent.money >= 30000){
        opponent.money = opponent.money - 30000;
        opponent.nukes = opponent.nukes + 1;  }}
       if(AI_Dec === 3){
        if (opponent.money >= 20000){
        opponent.money = opponent.money - 20000;
        opponent.anti_nukes = opponent.anti_nukes + 1; }
  if (opponent.money >= 20000){
        opponent.money = opponent.money - 20000;
        opponent.anti_nukes = opponent.anti_nukes + 1; }
        if (opponent.money >= 20000){
        opponent.money = opponent.money - 20000;
        opponent.anti_nukes = opponent.anti_nukes + 1; }
  if (opponent.money >= 20000){
        opponent.money = opponent.money - 20000;
        opponent.anti_nukes = opponent.anti_nukes + 1; }}
  }
        
        console.log("AI dec: " + AI_Dec);
    console.log("opponent depots: " + opponent.depots);
    console.log("opponent cash: " + opponent.money);
     console.log("opponent nukes: " + opponent.nukes);
     console.log("opponent Anti nukes: " + opponent.anti_nukes);
     console.log("round: "+ round);
     console.log("opp income: " + opponent.income);
     
     if (round >= 30 && statusNumber === 0 && opponent.population_influence === 100){
     statusNumber = 1;}
     
     if (opponent.population_influence === 50){
           if (opponent.nukes > 50){
            statusNumber = 1;}}
            
            }
     
     function battle() {
     playerNukeNum.innerHTML = "Nukes Launched: " + nukes;
playerAntiNukeNum.innerHTML = "Anti-Nukes Launched: " + anti_nuke;
opponentAntiNukeNum.innerHTML = "Anti-Nukes Launched: " + opponent.anti_nukes;
opponentNukeNum.innerHTML = "Nukes Launched: " + opponent.nukes;
     store.style="background-color: darkblue; border: solid 10px; position: absolute; top: 600px; filter: opacity(0%); font-size: 35px;";
    dismissWar.style="position: absolute; left: 425px; top: 1300px; filter: opacity(100%); z-index: 6; font-size: 35px;";
    options.style="position: absolute; background-color: gray; height: 200px; width: 475px; top: 1500px; left: 200px; border: solid 5px; filter: opacity(0%); font-size: 35px;";
    uav_message.innerHTML = ""; 

     if (anti_nuke > 0 && opponent.nukes > 0) {
     opponent.nukes = opponent.nukes - anti_nuke;
     }
     if (opponent.anti_nukes > 0 && nukes > 0) {
     nukes = nukes - opponent.anti_nukes;
     }
     
     if (nukes < 0) {
nukes = 0;
}
if (opponent.nukes < 0) {
opponent.nukes = 0;
}
     
     
     
     if (nukes > opponent.nukes) {
         warWinner = 1;
     }
      if (nukes < opponent.nukes) {
         warWinner = 2;
     }
      if (nukes === opponent.nukes) {
         warWinner = 3;
     }
     
     
     
     if (warWinner === 1){
     warWinnerName.innerHTML = "You won this war!"; opponent.population_influence = opponent.population_influence - 50; }
     if (warWinner === 2){
     warWinnerName.innerHTML = "Opponent won this war..."; population_influence = population_influence - 50;}
     if (warWinner === 3){
     warWinnerName.innerHTML = "No one won this war..."; }
         
   }
   
function dismiss() {
    statusNumber = 0
    nukes = 0
    anti_nuke = 0
    opponent.nukes = 0
    opponent.anti_nukes = 0
 dismissButton.style="position: absolute; left: 500px; top: 1200px; filter: opacity(0%); z-index: 6;"
 options.style="position: relative; background-color: gray; height: 240px; width: 475px; top: 1500px; left: 200px; border: solid 5px; margin: auto;"
    
    if (population_influence === 0){
    gameOver = 1;
gameLoss();}
if (opponent.population_influence === 0){ gameOver = 1; 
gameWin();}
if (statusNumber === 0 && gameOver === 0) {
   background.src = "hill.jpg";
}
}


function gameWin() {
gameOver = 1;
    background.src = "Win.png";
    store.style="position: absolute; filter: opacity(0%);";
    warScreen.style="position: absolute; filter: opacity(0%);";
    statScreen.style="position: absolute; filter: opacity(0%);";
    dismissButton.style="position: absolute; filter: opacity(0%);";
    options.style="position: absolute; filter: opacity(0%);";
     
}

function gameLoss() {
gameOver = 1;
    background.src = "Lose.png";
    store.style="position: absolute; filter: opacity(0%);";
    warScreen.style="position: absolute; filter: opacity(0%);";
    statScreen.style="position: absolute; filter: opacity(0%);";
    dismissButton.style="position: absolute; filter: opacity(0%);";
    options.style="position: absolute; filter: opacity(0%);"
}


