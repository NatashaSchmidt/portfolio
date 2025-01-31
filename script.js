window.addEventListener("load", SidenVises);

function SidenVises() {
    console.log("siden vises");

    //RYD OP; header, nav, projekter, om_mig, grundlæggende 1,2,3,4
    document.querySelector("header").classList.add("hide");
    document.querySelector("nav").classList.add("hide");
    document.querySelector("#projekter").classList.add("hide");
    document.querySelector("#om_mig").classList.add("hide");
    document.querySelector("#grundlaeggende_webdesign").classList.add("hide");
    document.querySelector("#grundlaeggende_indhold").classList.add("hide");
    document.querySelector("#grundlaeggende_animation").classList.add("hide");
    document.querySelector("#grundlaeggende_UX").classList.add("hide");


    //NYT
    document.querySelector("#forside").classList.remove("hide");
    document.querySelector("#forside").addEventListener("click", SkjulForside);

    //registrer klik på menu-knap
    document.querySelector("#burgermenu").addEventListener("click", toggleMenu);
}


window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    console.log("scrollFunction");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector("#myBtn").classList.remove("none");
        document.querySelector("#myBtn").classList.add("block");
    } else {
        document.querySelector("#myBtn").classList.add("none");
    }
}

function topFunction() {
    console.log("topFunction");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function SkjulForside() {
    console.log("SkjulForside");

    //NYT
    document.querySelector("#forside").classList.add("fade_out");
    document.querySelector("#forside").addEventListener("animationend", ProjekterVises);
}


function ProjekterVises() {
    console.log("ProjekterVises");

    // RYD OP
    document.querySelector("#forside").classList.add("hide");
    document.querySelector("#forside").removeEventListener("click", SkjulForside);

    document.querySelector("#forside").classList.remove("fade_out");
    document.querySelector("#forside").removeEventListener("animationend", VisProjekter);

    document.querySelector("#om_mig").classList.add("hide");
    document.querySelector("#grundlaeggende_webdesign").classList.add("hide");
    document.querySelector("#grundlaeggende_indhold").classList.add("hide");
    document.querySelector("#grundlaeggende_animation").classList.add("hide");
    document.querySelector("#grundlaeggende_UX").classList.add("hide");

    // NYT
    document.querySelector("#projekter").classList.add("fade_in");
    document.querySelector("#projekter").addEventListener("animationend", VisProjekter);

    document.querySelector("header").classList.remove("hide");

    document.querySelector("nav").classList.remove("hide");

    document.querySelector("#projekter").classList.remove("hide");

    toggleMenu();

}


function VisProjekter() {
    console.log("VisProjekter");

    //RYD OP
    document.querySelector("#projekter").classList.remove("fade_in");
    document.querySelector("nav").removeEventListener("animationend", VisProjekter);

    //NYT
    document.querySelector(".forside_knap").addEventListener("click", SidenVises);
    document.querySelector(".projekter_knap").addEventListener("click", ProjekterVises);
    document.querySelector(".om_mig_knap").addEventListener("click", OmMigVises);
    document.querySelector(".tema_tekst1").addEventListener("click", GrundlaeggendeWebdesignVises);
    document.querySelector(".tema_tekst2").addEventListener("click", GrundlaeggendeIndholdVises);
    document.querySelector(".tema_tekst3").addEventListener("click", GrundlaeggendeAnimationVises);
    document.querySelector(".tema_tekst4").addEventListener("click", GrundlaeggendeUXVises);


}

function GrundlaeggendeWebdesignVises() {
    console.log("GrundlaeggendeWebdesignVises");

    //RYD OP
    document.querySelector("#projekter").classList.add("hide");

    document.querySelector("#projekter").classList.remove("fade_out");
    document.querySelector(".tema_tekst1").removeEventListener("click", GrundlaeggendeWebdesignVises);

    //NYT
    document.querySelector("#grundlaeggende_webdesign").classList.remove("hide");
    topFunction();
}

function GrundlaeggendeIndholdVises() {
    console.log("GrundlaeggendeIndholdVises");

    //RYD OP
    document.querySelector("#projekter").classList.add("hide");

    document.querySelector("#projekter").classList.remove("fade_out");
    document.querySelector(".tema_tekst2").removeEventListener("click", GrundlaeggendeIndholdVises);

    //NYT
    document.querySelector("#grundlaeggende_indhold").classList.remove("hide");
    topFunction();
}

function GrundlaeggendeAnimationVises() {
    console.log("GrundlaeggendeAnimationVises");

    //RYD OP
    document.querySelector("#projekter").classList.add("hide");

    document.querySelector("#projekter").classList.remove("fade_out");
    document.querySelector(".tema_tekst3").removeEventListener("click", GrundlaeggendeAnimationVises);

    //NYT
    document.querySelector("#grundlaeggende_animation").classList.remove("hide");
    topFunction();
}

function GrundlaeggendeUXVises() {
    console.log("GrundlaeggendeAnimationVises");

    //RYD OP
    document.querySelector("#projekter").classList.add("hide");

    document.querySelector("#projekter").classList.remove("fade_out");
    document.querySelector(".tema_tekst4").removeEventListener("click", GrundlaeggendeAnimationVises);

    //NYT
    document.querySelector("#grundlaeggende_UX").classList.remove("hide");
    topFunction();
}


function OmMigVises() {
    console.log("OmMigVises");

    //RYD OP
    document.querySelector("#grundlaeggende_webdesign").classList.add("hide");
    document.querySelector("#grundlaeggende_indhold").classList.add("hide");
    document.querySelector("#grundlaeggende_animation").classList.add("hide");
    document.querySelector("#grundlaeggende_UX").classList.add("hide");
    document.querySelector("#projekter").classList.add("hide");

    document.querySelector("#projekter").classList.remove("fade_out");
    document.querySelector("#projekter").removeEventListener("animationend", OmMigVises);

    //NYT
    document.querySelector("#om_mig").classList.remove("hide");

    document.querySelector("#om_mig").classList.add("fade_in");
    document.querySelector("#om_mig").addEventListener("animationend", VisOmMig);

    toggleMenu();
    topFunction();

}

function VisOmMig() {
    console.log("VisOmMig");

    //RYD OP
    document.querySelector("#om_mig").classList.remove("fade_in");
    document.querySelector("#om_mig").removeEventListener("animationend", VisOmMig);


}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");


    let erSkjult =
        document.querySelector("#menu").classList.contains("hidden");


    if (erSkjult == true) {
        document.querySelector("#burgermenu").textContent = "☰";
        //hvis menuen er skjult = ændre menuknap til tre streger

        document.querySelector(".forside_knap1").removeEventListener("click", SidenVises);
        document.querySelector(".projekter_knap1").removeEventListener("click", ProjekterVises);
        document.querySelector(".om_mig_knap1").removeEventListener("click", OmMigVises);

    } else {
        //hvis menuen er vist = ændre menuknap til X
        document.querySelector("#burgermenu").textContent = "☓";

        document.querySelector(".forside_knap1").addEventListener("click", SidenVises);
        document.querySelector(".projekter_knap1").addEventListener("click", ProjekterVises);
        document.querySelector(".om_mig_knap1").addEventListener("click", OmMigVises);

    }


}
