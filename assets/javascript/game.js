//list all characters with var
var characters = {
    //character
    barf: {
        //hp, attack, base attack, counterattack, id to list in row
        hp: 100,
        attack: 16,
        baseattack: 16,
        counterattack: 10,
        name: "Barf",
        id: 1
    },
    lone: {
        //hp, attack, base attack, counterattack, id to list in row
        hp: 120,
        attack: 7,
        baseattack: 7,
        counterattack: 18,
        name: "Lone Starr",
        id: 2
    },
    skoob: {
        //hp, attack, base attack, counterattack, id to list in row
        hp: 80,
        attack: 8,
        baseattack: 8,
        counterattack: 8,
        name: "President Skoob",
        id: 3
    },
    helmet: {
        //hp, attack, base attack, counterattack, id to list in rows
        hp: 150,
        attack: 12,
        baseattack: 12,
        counterattack: 20,
        name: "Dark Helmet",
        id: 4
    },
    yogurt: {
        //hp, attack, base attack, counterattack, id to list in rows
        hp: 170,
        attack: 14,
        baseattack: 14,
        counterattack: 15,
        name: "Yogurt",
        id: 5        
    },
    matrix: {
         //hp, attack, base attack, counterattack, id to list in rows
         hp: 90,
         attack: 9,
         baseattack: 4,
         counterattack: 10,
         name: "Yogurt",
         id: 5        
    }

};
//restart the game with a reset button. Found a window reload feature
$("#restart").on("click", function(){
    window.location.reload();
});

console.log(Object.keys(characters)[0])
console.log(Object.keys(characters)[1])
currentattack = 0;


//Character Selection
$(".characterSelection").on("click", ".imagebox", function ()
{
    var htmlid = $(this).attr("id");
    console.log(htmlid);
    //use GetJSONString (function at line 177) to pull html id and insert into the var
    var characterobj = GetJSONString(htmlid);
    //Use this attri to pull the  data object for character info in Characters var and load onto HTML id.
    $(this).attr("data-obj", characterobj)
    //Move the selected character to the your character div on the html
    $(this).clone().addClass("selected").appendTo($(".yourcharacter"));
    //remove the caracters function from this row and add to next row
    $(this).remove();
    //add the move enemies function here...
    MoveEnemies();

});

//Clone all remaining Characters and move them to enemies div
function MoveEnemies(selected)
{
    //Use clone, addClss, and appenedTO... 
    //had to use .children to pull the correct html selection
    $(".characterSelection").children().clone().addClass("badguy").appendTo($(".enemies"));
    $(".characterSelection").children().remove();
}

//On click to Select Enemy to Attack
$(".enemies").on("click", ".imagebox", function ()
{
    //console.log($(".defender").children())
    if ($(".defender").children().length <= 0)
    {
        var htmlid = $(this).attr("id");
        var characterobj = GetJSONString(htmlid);
        $(this).attr("data-obj", characterobj)
        $(this).clone().addClass("defence").appendTo($(".defender"));
        $(this).remove();
        $("#pAttacker").text("")
    }
});

//Attack button to trigger calls to math for hp and attack
$(".arena").on("click", "#attack-btn", function ()
{
    //Get attacjer obj stored in element
    var dataobj = $(".selected").attr("data-obj");
    //Make array callable with JSON.parse to make it easier to call in this function.
    var attackerObj = JSON.parse(dataobj);

    if ($(".defender").children().length > 0)
    {
        //Get defender Obj store in element
        var dataobj2 = $(".defence").attr("data-obj");
        var defenderObj = JSON.parse(dataobj2);
        console.log(attackerObj.attack)

        if (attackerObj.hp > 0 && defenderObj.hp > 0)
        {
            //Calculate defendr hp - attacker attack
            defenderObj.hp -= attackerObj.attack;
            //check to ensure my math is working properly.
            console.log("attackbefore if hp: " + attackerObj.hp)
            console.log("defence before if hp:" + defenderObj.hp)
            if (defenderObj.hp <= 0)
            {
                console.log("attackin if hp: " + attackerObj.hp)
                console.log("defence in if hp:" + defenderObj.hp)
                console.log("IN IF < 0")
                ScreenUpdate(attackerObj, defenderObj);

            }
            else
            {
                console.log("attack in elseif hp: " + attackerObj.hp)
                console.log("defence in elsehp:" + defenderObj.hp)
                //Calculate attacker hp -  defender counter attack 
                attackerObj.hp -= defenderObj.counterattack;
                ScreenUpdate(attackerObj, defenderObj);

            }

            //attacker attack increases by attack power
            attackerObj.attack += attackerObj.baseattack;
            //Convert a JavaScript object into a string with JSON.stringify
            var jsonstring = JSON.stringify(attackerObj);
            //call the jsonsting and get the value of the first attribute element. 
            $(".selected").attr("data-obj", jsonstring)

            jsonstring = JSON.stringify(defenderObj);
            $(".defence").attr("data-obj", jsonstring)

        }
    }
    else if ($(".enemies").children().length <= 0 && $(".defender").children().length <= 0)
    {
        //Do nothing to retain you won
    }
    else
    {
        //if you select the attack button without an enemy to fight.
        $("#pAttacker").text("No enemy here.")
        $("#pDefender").text("");
    }

});
//create a jsonstringify to create a sting from my javascript object (characters) listed at top 
function GetJSONString(htmlid)
{
    for (var i = 0; i < Object.keys(characters).length; i++)
    {
        //list the character and assign a key to the id to ender
        var key = (Object.keys(characters)[i]);
        idkey = characters[key].id;

        if (idkey == htmlid)
        {
            var jsonstring = JSON.stringify(characters[key]);
            return jsonstring;
        }
    }
}

//this function should update the screen to the html
function ScreenUpdate(attackerObj, defenderObj)
{
    console.log("attack hp: " + attackerObj.hp)
    console.log("defence hp:" + defenderObj.hp)
    if (attackerObj.hp > 0 && defenderObj.hp > 0)
    {
        //Display the Attack and defender attack info to pAttack
        $("#pAttacker").text("You attacked " + defenderObj.name + " for " + attackerObj.attack + " damage");
        //display the defender info to pDefender on html
        $("#pDefender").text(defenderObj.name + "Attacked you back for " + defenderObj.counterattack + " damage");

        //Update Hit points
        $(".selected #hp").text(attackerObj.hp)
        $(".defence #hp").text(defenderObj.hp)
    }
    else if (attackerObj.hp <= 0 && defenderObj.hp > 0)
    {

        $(".selected #hp").text(attackerObj.hp)
        $(".defence #hp").text(defenderObj.hp)
        $("#pAttacker").text("You've Been Defeated....GAME OVER")
        $("#pDefender").text("");
        $(":reset").css("background-color", "red");
        $(".reset").append(button);
        //Create or show button to restart
    }
    else if (attackerObj.hp > 0 && defenderObj.hp <= 0)
    {
        console.log("did it remove")
        $(".defence").remove();

        if ($(".enemies").children().length > 0)
        {
            $("#pDefender").empty();
            $("#pAttacker").text("You have defeated " + defenderObj.name + ", You can choose to fight another enemy");

        }
        else
        {
            $("#pAttacker").text("YOU WON!!!!GAME OVER!!!")
            $("#pDefender").text("");
            
        }
    }
}

