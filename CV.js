const rocket = document.getElementById("fusée");
const rocketlaunchbtn = document.getElementById("rocketlaunchbtn");
const liste_titre_categ = document.querySelectorAll("#btn_choices a");
const liste_categ = document.querySelectorAll(".categ");
const photo = document.getElementById("photo_div");
const container = document.getElementById("container");
const croix = document.getElementById("cross");
const list_icon = document.getElementById("list_icon_btn");
const backgnd_photo = document.getElementById("fond");
const lien_portefolio = document.getElementById("lien_portefolio");
const txt_presentation = document.querySelectorAll("#présentation p");
const croix_pr_cacher = document.querySelectorAll(".fleche_pr_cacher");
const h1 = document.querySelector("#présentation h1");
const sur_mon_cv = document.querySelector("#présentation h3");



(function apparition_text(){

    window.addEventListener("mouseover", function(){
        h1.style.animation = "letter 1s ease-in-out forwards";


        setTimeout(function(){
            for(texte of txt_presentation){
                texte.style.animation = "opa 7s ease forwards";
            };
            h1.style.background = "transparent";
        }, 500);

        sur_mon_cv.style.transform = "translateY(0%)";

    });

})();


(function rocket_btn(){

    rocketlaunchbtn.addEventListener("click", function(e){
        rocket.style.visibility = "visible";
        rocketlaunchbtn.innerHTML = "<i class='fas fa-exclamation-triangle'></i> DÉCOLLAGE <i class='fas fa-exclamation-triangle'></i>";
        e.target.style.transformOrigin = "center";
        e.target.style.color = "white";
        e.target.style.backgroundImage = "-webkit-linear-gradient(right, #b92b27, #1565c0)";

        setTimeout(function(){
            e.target.style.transform = "translateX(90%) rotate(90deg)";
        }, 1250)

        setTimeout(function(){
            e.target.style.top = "150%";
        }, 3000)

        rocket.style.top = "-50%";
    });

})();


(function sale(){

    liste_titre_categ[0].addEventListener("click", function(e){

        for(var categ of liste_categ){
            categ.style.transform = "translateX(125%)";
        };

        liste_categ[0].style.transform = "translateX(0)";
    });

    liste_titre_categ[1].addEventListener("click", function(e){

        for(var categ of liste_categ){
            categ.style.transform = "translateX(125%)";
        };

        liste_categ[1].style.transform = "translateX(0)";
    });

    liste_titre_categ[2].addEventListener("click", function(e){

        for(var categ of liste_categ){
            categ.style.transform = "translateX(125%)";
        };

        liste_categ[2].style.transform = "translateX(0)";
    });

    liste_titre_categ[3].addEventListener("click", function(e){

        for(var categ of liste_categ){
            categ.style.transform = "translateX(125%)";
        };

        liste_categ[3].style.transform = "translateX(0)";
    });
})();


(function changer_photo(){

    var liste_photo = [
    "url('test.png')",
    "url('test2.png')",
    "url('test3.png')"
    ];

    croix.addEventListener("click", function(){
        photo.style.backgroundImage = liste_photo[0];
        backgnd_photo.style.backgroundColor = "rgb(157,41,42)"
    });

    for(var titre of liste_titre_categ){
        titre.addEventListener("click", function(){
            photo.style.backgroundImage = liste_photo[1];
            backgnd_photo.style.backgroundColor = "rgb(141,94,114)"
        });
    };

    photo.addEventListener("click", function(){
        photo.style.backgroundImage = liste_photo[2];
        backgnd_photo.style.backgroundColor = "rgb(116,173,130)"
    });
})();

(function afficher_sidebar_ou_pas(){

    rocketlaunchbtn.addEventListener("click", function(){
        container.style.transform = "translateX(-180px) scale(0.9)";
    });

    croix.addEventListener("click", function(){
        container.style.transform = "translateX(0) scale(1)";
        list_icon.style.display = "block";
    });

    list_icon.addEventListener("click", function(){
        container.style.transform = "translateX(-180px) scale(0.9)";
    });

    for(var cross of croix_pr_cacher){
        cross.addEventListener("click", function(e){
            e.currentTarget.parentElement.style.transform = "translateX(125%)";
        });
    };
})();



(function lien_non_existant(){
    lien_linkedin.addEventListener("click", function(e){
        alert("Malheureusement, mon profil LinkedIn n'existe pas encore... Mais ça ne saurait tarder !")
    });

    lien_portefolio.addEventListener("click", function(e){
        alert("Malheureusement, mon porte-folio n'existe pas encore... Contacte-moi si c'est urgent !")
    });
})();

