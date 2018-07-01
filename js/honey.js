$("#beargen2").on("click", function(){
    var descNum = Math.floor(Math.random() * 6);  
    var speciesNum = Math.floor(Math.random() * 6);
    var roleNum = Math.floor(Math.random() * 6);    
    var hatNum = Math.floor(Math.random() * 8);
   
    var arrayDescTitle = ['The Rookie', 'The Washed-Up', 'The Retiree', 'The Unstable', 'The Slick', 'The Incompetent']
    var descTitle = arrayDescTitle[descNum]; 
    
    document.getElementById("bear-desc-title").innerHTML = descTitle;
    
    var arraySpeciesTitle = ['Grizzly Bear', 'Polar Bear', 'Giant Panda', 'Black Bear', 'Sun Bear', 'Honey Badger']
    var speciesTitle = arraySpeciesTitle[speciesNum];

    document.getElementById("bear-species-title").innerHTML = speciesTitle;

    var arrayRoleTitle = ['The Muscle', 'The Brains', 'The Driver', 'The Hacker', 'The Thief', 'The Face']
    var roleTitle = arrayRoleTitle[roleNum];

    document.getElementById("bear-role-title").innerHTML = roleTitle;
    
    document.getElementById("bear-deck").style.display = "flex";

});