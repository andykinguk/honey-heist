$("#beargen2").on("click", function(){
    var descNum = Math.floor(Math.random() * 6);  
    var speciesNum = Math.floor(Math.random() * 6);
    var roleNum = Math.floor(Math.random() * 6);    
   
    switch(descNum) {
        case 0:
            document.getElementById("bear-desc-title").innerHTML = "The Rookie";
            document.getElementById("bear-desc-text").innerHTML = "";
            document.getElementById("bear-desc-img").innerHTML = "The Rookie";
            break;
        case 1:
            document.getElementById("bear-desc-title").innerHTML = "The Washed-Up";
            break;
        case 2:
            document.getElementById("bear-desc-title").innerHTML = "The Retiree";
            break;
        case 3:
            document.getElementById("bear-desc-title").innerHTML = "The Unstable";
            break;
        case 4:
            document.getElementById("bear-desc-title").innerHTML = "The Slick";
            break;
        case 5:
            document.getElementById("bear-desc-title").innerHTML = "The Incompetent";
            break;
    }

    switch(speciesNum) {
        case 0:
            document.getElementById("bear-species-title").innerHTML = "Grizzly Bear";
            document.getElementById("bear-species-text").innerHTML = "";
            document.getElementById("bear-species-img").innerHTML = "The Rookie";
            break;
        case 1:
            document.getElementById("bear-species-title").innerHTML = "Polar Bear";
            document.getElementById("bear-species-text").innerHTML = "";
            document.getElementById("bear-species-img").innerHTML = "The Rookie";
            break;
        case 2:
            document.getElementById("bear-species-title").innerHTML = "Giant Panda";
            document.getElementById("bear-species-text").innerHTML = "";
            document.getElementById("bear-species-img").innerHTML = "The Rookie";
            break;
        case 3:
            document.getElementById("bear-species-title").innerHTML = "Black Bear";
            document.getElementById("bear-species-text").innerHTML = "";
            document.getElementById("bear-species-img").innerHTML = "The Rookie";
            break;
        case 4:
            document.getElementById("bear-species-title").innerHTML = "Sun Bear";
            document.getElementById("bear-species-text").innerHTML = "";
            document.getElementById("bear-species-img").innerHTML = "The Rookie";
            break;
        case 5:
            document.getElementById("bear-species-title").innerHTML = "Honey Badger";
            document.getElementById("bear-species-text").innerHTML = "";
            document.getElementById("bear-species-img").innerHTML = "The Rookie";
            break;
    }

    switch(roleNum) {
        case 0:
            document.getElementById("bear-role-title").innerHTML = "The Muscle";
            document.getElementById("bear-role-text").innerHTML = "";
            document.getElementById("bear-role-img").innerHTML = "The Rookie";
            break;
        case 1:
            document.getElementById("bear-role-title").innerHTML = "The Brains";
            document.getElementById("bear-role-text").innerHTML = "";
            document.getElementById("bear-role-img").innerHTML = "The Rookie";
            break;
        case 2:
            document.getElementById("bear-role-title").innerHTML = "The Driver";
            document.getElementById("bear-role-text").innerHTML = "";
            document.getElementById("bear-role-img").innerHTML = "The Rookie";
            break;
        case 3:
            document.getElementById("bear-role-title").innerHTML = "The Hacker";
            document.getElementById("bear-role-text").innerHTML = "";
            document.getElementById("bear-role-img").innerHTML = "The Rookie";
            break;
        case 4:
            document.getElementById("bear-role-title").innerHTML = "The Thief";
            document.getElementById("bear-role-text").innerHTML = "";
            document.getElementById("bear-role-img").innerHTML = "The Rookie";
            break;
        case 5:
            document.getElementById("bear-role-title").innerHTML = "The Face";
            document.getElementById("bear-role-text").innerHTML = "";
            document.getElementById("bear-role-img").innerHTML = "The Rookie";
            break;
    }

    document.getElementById("bear-deck").style.display = "flex";

});