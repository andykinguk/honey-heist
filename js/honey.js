
$("#beargen2").on("click", function(){
    var descNum = Math.floor(Math.random() * 6);  
    var speciesNum = Math.floor(Math.random() * 6);
    var roleNum = Math.floor(Math.random() * 6);    
    var hatNum = Math.floor(Math.random() * 8);
   
    var arrayDescTitle = ['The Rookie', 'The Washed-Up', 'The Retiree', 'The Unstable', 'The Slick', 'The Incompetent']
    var arrayDescText = ['The Rookie', 'The Washed-Up', 'The Retiree', 'The Unstable', 'The Slick', 'The Incompetent']
    var descTitle = arrayDescTitle[descNum]; 
    var descText = arrayDescText[descNum];
    document.getElementById("bear-desc-title").innerHTML = descTitle;
    document.getElementById("bear-desc-text").innerHTML = descText;

    var arraySpeciesTitle = ['Grizzly Bear', 'Polar Bear', 'Giant Panda', 'Black Bear', 'Sun Bear', 'Honey Badger']
    var speciesTitle = arraySpeciesTitle[speciesNum];

    document.getElementById("bear-species-title").innerHTML = speciesTitle;

    var arrayRoleTitle = ['The Muscle', 'The Brains', 'The Driver', 'The Hacker', 'The Thief', 'The Face']
    var roleTitle = arrayRoleTitle[roleNum];

    document.getElementById("bear-role-title").innerHTML = roleTitle;
    
    var arrayHatTitle = ['A Trilby', 'A Top Hat', 'A Bowler', 'A Flat-Cap', 'A Cowboy Hat', 'A Fez', 'A Crown', 'Two Hats!']
    var hatTitle = arrayHatTitle[hatNum];
    
    if (hatNum == 8) {
        var hatOneNum = Math.floor(Math.random() * 7);
        var hatTwoNum = Math.floor(Math.random() * 7);

        var hatOneTitle = arrayHatTitle[hatOneNum];
        var hatTwoTitle = arrayHatTitle[hatTwoNum];        
    }

    document.getElementById("bear-hat-title").innerHTML = hatTitle;

    document.getElementById("bear-collection").style.display = "block";

});


$("#statsSlider").slider();
$("#statsSlider").on("slide", function(slideEvt) {
    $("#statssliderBearVal").text(slideEvt.value);
    var crimStat = 6 - slideEvt.value;
    $("#statssliderCrimVal").text(crimStat);

});