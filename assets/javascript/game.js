$(document).ready(function() {
// List players with global var
var players = [
barf ={
    name: "Barf",
    healthPoints: 120,
    initialAttackPower: 8,
    attackPower: 8,
    counterAttackPower: 2,
    isPlayerOne: false,
    isPlayerTwo: false,
},
lone = {
    name: "Lone Starr",
    healthPoints: 100,
    initialAttackPower: 9,
    attackPower: 9,
    counterAttackPower: 2,
    isPlayerOne: false,
    isPlayerTwo: false,
},
helmet = {
    name: "Dark Helmet",
    healthPoints: 150,
    initialAttackPower: 2,
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
},
matrix = {
name: "Dot Matrix",
healthPoints: 90,
initialAttackPower: 10,
attackPower: 10,
counterAttackPower: 4,
isPlayerOne: false,
isPlayerTwo: false,
},
skroob = {
    name: "President Skroop",
    healthPoints: 80,
    initialAttackPower: 7,
    attackPower: 7,
    counterAttackPower: 15,
    isPlayerOne: false,
    isPlayerTwo: false,
},
yogurt = {
    name: "Yogurt",
    healthPoints: 150,
    initialAttackPower: 5,
    attackPower: 5,
    counterAttackPower: 18,
    isPlayerOne: false,
    isPlayerTwo: false,
}
]
var player;
var opponent;
playerOneSelected = false;
playerTwoSelected = false;
gameStart= false;
var enemiesRemaining = players.length -1;
//enter var sounds with = new Audio ("url")

playerSelect();
startBattle();

function playerSelect() {
    //list out each player and the setup the functions that need to run
    $("#barf").on('click', function(){
        if(playerOneSelected === false){
                console.log("bark is first player");
            //Play a button.play();
            //move player to fight area
            $("#barf").appendTo("#player-fight-area");
            //list player name 
            $("#player-name").text(barf.name);
            //List player hp
            $("#player-hp").text("Schwartz level");
            //List player heath points
            $("#player-total-hp").text(barf.healthPoints);
            playerOneSelected = true;
            barf.isPlayerOne = true;
            player = barf;
            //$("#barf").addClass('flipped');
            //enter sound.play
            setTimeout(enemySelect, 1000 * 2);
                    console.log("player one is " + playerOneSelected);
        }

    });
    $("#lone").on('click', function(){
        if(playerOneSelected === false) {
                console.log("Lone Starr is first player");
            //button.play();
            //move player to fight area
            $("#lone").appendTo("#player-fight-area");
            //list player name 
            $("#player-name").text(lone.name);
            //List player hp
            $("#player-hp").text("Schwartz Level");
            //List player heath points
            $("player-total-hp").text(lone.healthPoints);
            playerOneSelected = true;
            lone.isPlayerOne = true;
            player = lone;
            //$("#lone").addClass('flipped');
            //enter sound.play
            setTimeout(enemySelect, 1000 * 2);
                console.log("Player one is " + playerOneSelected);            
        } 
    });
     $("#helmet").on('click', function(){
         if(playerOneSelected === false) {
                console.log("Dark Helmet is first player");
            //button.play()
            //move player to fight area
            $("#helmet").appendTo("#player-fight-area");
            $("#player-name").text(helmet.name);
            $("#player-hp").text("Schwartz Level");
            $("#player-total-hp").text(helmet.healthPoints);
            playerOneSelected = true;
            helmet.isPlayerOne = true;
            player = helmet;
            $("#helmet").addClass('flipped');
            //enter sound.play()
            //setTimeout(enemySelect, 1000 * 2);
                    console.log("Player one is " + playerOneSelected);
         }
    });
    $("#matrix").on('click', function(){
        if(playerOneSelected === false) {
               console.log("Dot Matrix is first player");
           //button.play()
           //move player to fight area
           $("#matrix").appendTo("#player-fight-area");
           $("#player-name").text(matrix.name);
           $("#player-hp").text("Force Level");
           $("#player-total-hp").text(matrix.healthPoints);
           playerOneSelected = true;
           helmet.isPlayerOne = true;
           player = matrix;
           //$("#matrix").addClass('flipped');
           //enter sound.play()
           setTimeout(enemySelect, 1000 * 2);
                   console.log("Player one is " + playerOneSelected);
        }
   });
   $("#skroob").on('click', function(){
    if(playerOneSelected === false) {
           console.log("President Skroop is first player");
       //button.play()
       //move player to fight area
       $("#skroob").appendTo("#player-fight-area");
       $("#player-name").text(skroob.name);
       $("#player-hp").text("Schwartz Level");
       $("#player-total-hp").text(skroob.healthPoints);
       playerOneSelected = true;
       helmet.isPlayerOne = true;
       player = skroob;
       $("#skroob").addClass('flipped');
       //enter sound.play()
    //    setTimeout(enemySelect, 1000 * 2);
               console.log("Player one is " + playerOneSelected);
    }
});
$("#yogurt").on('click', function(){
    if(playerOneSelected === false) {
           console.log("Yogurt is first player");
       //button.play()
       //move player to fight area
       $("#yogurt").appendTo("#player-fight-area");
       $("#player-name").text(yogurt.name);
       $("#player-hp").text("Force Level");
       $("#player-total-hp").text(yogurt.healthPoints);
       playerOneSelected = true;
       helmet.isPlayerOne = true;
       player = helmet;
       $("#yogurt").addClass('flipped');
       //enter sound.play()
       setTimeout(enemySelect, 1000 * 2);
               console.log("Player one is " + playerOneSelected);
    }
});

}


// Select enemy

function enemySelect() {
    //text to select enemy
    $("#select-text").text("Select your Opponent");
    //List out all of the characters again
    $("#barf").on('click', function(){
        if (playerTwoSelected === false && barf.isPlayerOne === false){
            console.log("Barf is second Player")
        //buttonSelect.play();
        $("#barf").appendTo("#opponent-fight-area");
        $("#opponent-name").text(barf.name);
        $("#opponent-hp").text("Schwartz Level");
        $("#opponent-total-hp").text(barf.healthPoints);
        playerTwoSelected = true;
        isPlayerTwo = true;
        gameStart = true;
        opponent = barf;
        $("#selected-text").text("");
        palpatineKill.play();
            console.log("Gamestart is " + gameStart);
            console.log("Player Two is " + playerTwoSelected);
    }
});
$("#lone").on('click', function(){
    if (playerTwoSelected === false && lone.isPlayerOne === false){
        console.log("Lone Starr is second Player")
    //buttonSelect.play();
    $("#lone").appendTo("#opponent-fight-area");
    $("#opponent-name").text(lone.name);
    $("#opponent-hp").text("Schwartz Level");
    $("#opponent-total-hp").text(lone.healthPoints);
    playerTwoSelected = true;
    isPlayerTwo = true;
    gameStart = true;
    opponent = lone;
    $("#selected-text").text("");
    //palpatineKill.play();
        console.log("Gamestart is " + gameStart);
        console.log("Player Two is " + playerTwoSelected);
}
});
$("#helmet").on('click', function(){
    if (playerTwoSelected === false && helmet.isPlayerOne === false){
        console.log("Dark Helmet is second Player")
    //buttonSelect.play();
    $("#helmet").appendTo("#opponent-fight-area");
    $("#opponent-name").text(helmet.name);
    $("#opponent-hp").text("Schwartz Level");
    $("#opponent-total-hp").text(helmet.healthPoints);
    playerTwoSelected = true;
    isPlayerTwo = true;
    gameStart = true;
    opponent = lone;
    $("#selected-text").text("");
    //palpatineKill.play();
        console.log("Gamestart is " + gameStart);
        console.log("Player Two is " + playerTwoSelected);
}
});
$("#matrix").on('click', function(){
    if (playerTwoSelected === false && matrix.isPlayerOne === false){
        console.log("Dot Matrix is second Player")
    //buttonSelect.play();
    $("#matrix").appendTo("#opponent-fight-area");
    $("#opponent-name").text(matrix.name);
    $("#opponent-hp").text("Force Level");
    $("#opponent-total-hp").text(matrix.healthPoints);
    playerTwoSelected = true;
    isPlayerTwo = true;
    gameStart = true;
    opponent = lone;
    $("#selected-text").text("");
    //palpatineKill.play();
        console.log("Gamestart is " + gameStart);
        console.log("Player Two is " + playerTwoSelected);
}
});
$("#skroob").on('click', function(){
    if (playerTwoSelected === false && skroob.isPlayerOne === false){
        console.log("President Skroob is second Player")
    //buttonSelect.play();
    $("#skroob").appendTo("#opponent-fight-area");
    $("#opponent-name").text(skroob.name);
    $("#opponent-hp").text("Schwartz Level");
    $("#opponent-total-hp").text(skroob.healthPoints);
    playerTwoSelected = true;
    isPlayerTwo = true;
    gameStart = true;
    opponent = lone;
    $("#selected-text").text("");
    //palpatineKill.play();
        console.log("Gamestart is " + gameStart);
        console.log("Player Two is " + playerTwoSelected);
}
});
$("#yogurt").on('click', function(){
    if (playerTwoSelected === false && yogurt.isPlayerOne === false){
        console.log("Yogurt is second Player")
   //buttonSelect.play();
    $("#yogurt").appendTo("#opponent-fight-area");
    $("#opponent-name").text(yogurt.name);
    $("#opponent-hp").text("Force Level");
    $("#opponent-total-hp").text(yogurt.healthPoints);
    playerTwoSelected = true;
    isPlayerTwo = true;
    gameStart = true;
    opponent = lone;
    $("#selected-text").text("");
    //palpatineKill.play();
        console.log("Gamestart is " + gameStart);
        console.log("Player Two is " + playerTwoSelected);
}
});
}

//check the progress of the game and if no enemies remain = game win else, go to next enemy.

function checkProgress() {
    if (enemiesRemaining === 0) {
        gameWin();
    } else {
        gameStart = false;
        if (enemiesRemaining === 2) {
            //play sound
        } else if (enemiesRemaining === 1){
                //play sound
        }
        $("#opponent-fight-area").empty();
        $("#opponent-name").text("");
        $("#opponent-total-hp").text("");
        setTimeout(function(){playerTwoSelected = false}, 1000 * 2.8);
        setTimeout(function(){
            $("#select-text").text("Select you Opponent")
        }, 1000 * 2.8);
        console.log("Player two selected is " + playerTwoSelected);
    }
}

//attack function 
function attack() {
        opponent.healthPoints = opponent.healthPoints - player.attackPower;
        $("#opponent-total-hp").text(opponent.healthPoints);
}
//counter Attack funtion
function counterAttack() {
        player.healthPoints = player.healthPoints - opponent.counterAttackPower;
        $("#player-total-hp").text(player.healthPoints);
            console.log("Player HP is " + player.healthPoints);
            console.log("Opponent counter attack power is " + opponent.counterAttackPower);
            if(player.healthPoints <= 0){
                gameLose();
            }
}

//increase attack power as fighting progesses
function increaseAttackPower() {
    player.attackPower = player.attackPower + player.initialAttackPower;
    console.log("Player attack power is " + player.attackPower);
}

//Reset the game, start game over again
function gameReset() {
    [
        barf ={
            name: "Barf",
            healthPoints: 120,
            initialAttackPower: 8,
            attackPower: 8,
            counterAttackPower: 2,
            isPlayerOne: false,
            isPlayerTwo: false,
        },
        lone = {
            name: "Lone Starr",
            healthPoints: 100,
            initialAttackPower: 9,
            attackPower: 9,
            counterAttackPower: 2,
            isPlayerOne: false,
            isPlayerTwo: false,
        },
        helmet = {
            name: "Dark Helmet",
            healthPoints: 150,
            initialAttackPower: 2,
            attackPower: 2,
            counterAttackPower: 20,
            isPlayerOne: false,
            isPlayerTwo: false,
        },
        matrix = {
        name: "Dot Matrix",
        healthPoints: 90,
        initialAttackPower: 10,
        attackPower: 10,
        counterAttackPower: 4,
        isPlayerOne: false,
        isPlayerTwo: false,
        },
        skroob = {
            name: "President Skroop",
            healthPoints: 80,
            initialAttackPower: 7,
            attackPower: 7,
            counterAttackPower: 15,
            isPlayerOne: false,
            isPlayerTwo: false,
        },
        yogurt = {
            name: "Yogurt",
            healthPoints: 150,
            initialAttackPower: 5,
            attackPower: 5,
            counterAttackPower: 18,
            isPlayerOne: false,
            isPlayerTwo: false,
        }
        ]
        playerOneSelected = false;
        playerTwoSelected = false;
        enemiesRemaining = players.length - 1;
        $("#select-text").text("Select you Character");
        $("#game-end-container").html("");
        $("#game-end-text-container").html("");
        $("#opponent-name").text("");
        $("#opponent-hp").text("");
        $("#opponent-total-hp").text("");
        $("opponent-fight-area").html("");
        $("#player-name").text("");
        $("#player-hp").text("");  
        $("#player-total-hp").text("");
        $("#player-fight-area").html("");
        $(".character-selection-section").html("");
        $("<img class= 'character' id'barf' src= 'assets/images/Barf.jpg'").appendTo(".character-selection-section");     
        $("<img class= 'character' id'lone' src= 'lassets/images/LoneStarr.jpg'").appendTo(".character-selection-section");
        $("<img class= 'character' id'helmet' src= 'assets/images/helmet.png'").appendTo(".character-selection-section"); 
        $("<img class= 'character' id'matrix' src= 'list url'").appendTo(".character-selection-section"); 
        $("<img class= 'character' id'skroob' src= 'assets/images/Skroob.jpg'").appendTo(".character-selection-section"); 
        $("<img class= 'character' id'yogurt' src= 'list url'").appendTo(".character-selection-section");  
        console.log("Game has been reset, enjoy!");
        playerSelect();        
}

//list out function for winning
function gameWin() {
    //maulTheme.pause();
		$("#opponent-total-hp").text(0);
		console.log("you win")	
		gameStart = false;
		//palpatinePowerful.play();
		setTimeout(function(){$("#game-end-container").html("<img id='palpatine' src='assets/images/palpatine.jpg'/>")}, 1000*3);
		$("#game-end-text-container").html("Welcome to the Dark Side of the Force");
		$("#game-end-text-container").css({"color":"red", "font-size":"30px","font-family":"Trade Winds", 
			"position":"absolute", "left":"50%", "margin-right":"-50%", "transform":"translate(-50%)", 
			"text-shadow": "2px 2px 2px rgba(255,255,255,.6)"});
		setTimeout(gameReset, 1000 * 8);

}

function gameLose() {
    $("#player-total-hp").text(0);
		gameStart = false;
		console.log("you lose");
		//palpatineDestroyed.play();
		setTimeout(function(){$("#game-end-container").html("<img id='palpatine' src='assets/images/palpatine_lightning.gif'/>")}, 1000*3);
		$("#game-end-text-container").html("Game Over");
		$("#game-end-text-container").css({"color":"red", "font-size":"30px","font-family":"Trade Winds", 
			"position":"absolute", "left":"50%", "margin-right":"-50%", "transform":"translate(-50%)", 
			"text-shadow": "2px 2px 2px rgba(255,255,255,.6)"});
		setTimeout(gameReset, 1000 * 8);	
}

//code for the attack sequence, will trigger on attack button.

function startBattle() {
    $("#attack-button").on("click", function() {
        console.log("button pressed");
        if (gameStart === true) {
            attack();
            increaseAttackPower();
            if (opponent.healthPoints <= 0) {
                enemiesRemaining--;
                console.log("Enemies remaining is " + enemiesRemaining);
                checkProgress();
            } else {
                counterAttack();
                //lightsaberClash.play();
            }
        }
    });
}
});
