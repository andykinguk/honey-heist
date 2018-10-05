
$("#beargen2").on("click", function(){
    var descNum = Math.floor(Math.random() * 6);  
    var speciesNum = Math.floor(Math.random() * 6);
    var roleNum = Math.floor(Math.random() * 6);    
    var hatNum = Math.floor(Math.random() * 8);
   
    var arrayDescTitle = ['The Rookie', 'The Washed-Up', 'The Retiree', 'The Unstable', 'The Slick', 'The Incompetent']
    var arrayDescText = ['The Rookie', 'The Washed-Up', 'The Retiree', 'The Unstable', 'The Slick', 'The Incompetent']
    var arrayDescImg = ['The Rookie', 'The Washed-Up', 'The Retiree', 'The Unstable', 'The Slick', 'The Incompetent']
    var descTitle = arrayDescTitle[descNum]; 
    var descText = arrayDescText[descNum];
    document.getElementById("bear-desc-title").innerHTML = descTitle;
    document.getElementById("bear-desc-text").innerHTML = descText;

    var arraySpeciesTitle = ['Grizzly Bear', 'Polar Bear', 'Giant Panda', 'Black Bear', 'Sun Bear', 'Honey Badger']
    var arraySpeciesText = ['Grizzly Bear', 'Polar Bear', 'Giant Panda', 'Black Bear', 'Sun Bear', 'Honey Badger']
    var arraySpeciesImg = ['grizzly-bear', 'polar-bear', 'panda-bear2', 'black-bear', 'sun-bear', 'honey-badger']
    var speciesTitle = arraySpeciesTitle[speciesNum];
    var speciesText = arraySpeciesText[speciesNum];
    var speciesImg = 'img/' + arraySpeciesImg[speciesNum] + '.jpg';
    document.getElementById("bear-species-title").innerHTML = speciesTitle;
    document.getElementById("bear-species-text").innerHTML = speciesText;
    document.getElementById("bear-species-img").src = speciesImg;


    var arrayRoleTitle = ['The Muscle', 'The Brains', 'The Driver', 'The Hacker', 'The Thief', 'The Face']
    var roleTitle = arrayRoleTitle[roleNum];

    document.getElementById("bear-role-title").innerHTML = roleTitle;
    
    var arrayHatTitle = ['A Trilby', 'A Top Hat', 'A Bowler', 'A Flat-Cap', 'A Cowboy Hat', 'A Fez', 'A Crown', 'Two Hats!']
    var arrayHatText = ['A Trilby', 'A Top Hat', 'A Bowler', 'A Flat-Cap', 'A Cowboy Hat', 'A Fez', 'A Crown', 'Two Hats!']
    var arrayHatImg = ['A Trilby', 'A Top Hat', 'A Bowler', 'A Flat-Cap', 'A Cowboy Hat', 'A Fez', 'A Crown', 'Two Hats!']
    var hatTitle = arrayHatTitle[hatNum];
    var hatText = arrayHatText[hatNum];
    var hatImg = arrayHatImg[hatNum];

    if (hatNum == 7) {
        var hatOneNum = Math.floor(Math.random() * 7);
        var hatTwoNum = Math.floor(Math.random() * 7);

        var hatOneTitle = arrayHatTitle[hatOneNum];
        var hatTwoTitle = arrayHatTitle[hatTwoNum];
        
        hatText = '\"Give me six hours to chop down a tree and I will send my first four collecting my hats\" - Abraham Lincoln, immediately before picking up his ' + hatOneTitle + ' and ' + hatTwoTitle + '.'
    }

    document.getElementById("bear-hat-title").innerHTML = hatTitle;
    document.getElementById("bear-hat-text").innerHTML = hatText;
    document.getElementById("bear-hat-img").src = hatTitle;


    document.getElementById("bear-collection").style.display = "block";

});


$("#statsSlider").slider();
$("#statsSlider").on("slide", function(slideEvt) {
    $("#statssliderBearVal").text(slideEvt.value);
    var crimStat = 6 - slideEvt.value;
    $("#statssliderCrimVal").text(crimStat);

});