window.addEventListener("load", SidenVises);

function SidenVises() {
    console.log("siden vises");

    //RYD OP; header, nav, projekter, om_mig, grundlæggende 1,2,3,4
    document.querySelector("header").classList.add("hide");
    document.querySelector("nav").classList.add("hide");
    document.querySelector("#projekter").classList.add("hide");
    document.querySelector("#om_mig").classList.add("hide");
    document.querySelector("#grundlæggende_webdesign").classList.add("hide");
    document.querySelector("#grundlæggende_indhold").classList.add("hide");
    document.querySelector("#grundlæggende_animation").classList.add("hide");
    document.querySelector("#grundlæggende_UX").classList.add("hide");


    //NYT
    document.querySelector("#forside").classList.remove("hide");
    document.querySelector("#forside").addEventListener("click", SkjulForside);

    //registrer klik på menu-knap
    document.querySelector("#burgermenu").addEventListener("click", toggleMenu);
}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult =
        document.querySelector("#menu").classList.contains("hidden");


    if (erSkjult == true) {
        document.querySelector("#burgermenu").textContent = "☰";
        //hvis menuen er skjult = ændre menuknapt til tre streger


    } else {
        //hvis menuen er vist = ændre menuknapt til X
        document.querySelector("#burgermenu").textContent = "☓";


    }

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
    document.querySelector("#grundlæggende_webdesign").classList.add("hide");
    document.querySelector("#grundlæggende_indhold").classList.add("hide");
    document.querySelector("#grundlæggende_animation").classList.add("hide");
    document.querySelector("#grundlæggende_UX").classList.add("hide");

    // NYT
    document.querySelector("#projekter").classList.add("fade_in");
    document.querySelector("#projekter").addEventListener("animationend", VisProjekter);

    document.querySelector("header").classList.remove("hide");

    document.querySelector("nav").classList.remove("hide");

    document.querySelector("#projekter").classList.remove("hide");

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
    document.querySelector(".tema_tekst1").addEventListener("click", GrundlæggendeWebdesignVises);
    document.querySelector(".tema_tekst2").addEventListener("click", GrundlæggendeIndholdVises);
    document.querySelector(".tema_tekst3").addEventListener("click", GrundlæggendeAnimationVises);
    document.querySelector(".tema_tekst4").addEventListener("click", GrundlæggendeUXVises);


}

function GrundlæggendeWebdesignVises() {
    console.log("GrundlæggendeWebdesignVises");

    //RYD OP
    document.querySelector("#projekter").classList.add("hide");

    document.querySelector("#projekter").classList.remove("fade_out");
    document.querySelector(".tema_tekst1").removeEventListener("click", GrundlæggendeWebdesignVises);

    //NYT
    document.querySelector("#grundlæggende_webdesign").classList.remove("hide");

}

function GrundlæggendeIndholdVises() {
    console.log("GrundlæggendeIndholdVises");

    //RYD OP
    document.querySelector("#projekter").classList.add("hide");

    document.querySelector("#projekter").classList.remove("fade_out");
    document.querySelector(".tema_tekst2").removeEventListener("click", GrundlæggendeIndholdVises);

    //NYT
    document.querySelector("#grundlæggende_indhold").classList.remove("hide");

}

function GrundlæggendeAnimationVises() {
    console.log("GrundlæggendeAnimationVises");

    //RYD OP
    document.querySelector("#projekter").classList.add("hide");

    document.querySelector("#projekter").classList.remove("fade_out");
    document.querySelector(".tema_tekst3").removeEventListener("click", GrundlæggendeAnimationVises);

    //NYT
    document.querySelector("#grundlæggende_animation").classList.remove("hide");
}

function GrundlæggendeUXVises() {
    console.log("GrundlæggendeAnimationVises");

    //RYD OP
    document.querySelector("#projekter").classList.add("hide");

    document.querySelector("#projekter").classList.remove("fade_out");
    document.querySelector(".tema_tekst4").removeEventListener("click", GrundlæggendeAnimationVises);

    //NYT
    document.querySelector("#grundlæggende_UX").classList.remove("hide");
}


function OmMigVises() {
    console.log("OmMigVises");

    //RYD OP
    document.querySelector("#grundlæggende_webdesign").classList.add("hide");
    document.querySelector("#grundlæggende_indhold").classList.add("hide");
    document.querySelector("#grundlæggende_animation").classList.add("hide");
    document.querySelector("#grundlæggende_UX").classList.add("hide");
    document.querySelector("#projekter").classList.add("hide");

    document.querySelector("#projekter").classList.remove("fade_out");
    document.querySelector("#projekter").removeEventListener("animationend", OmMigVises);

    //NYT
    document.querySelector("#om_mig").classList.remove("hide");

    document.querySelector("#om_mig").classList.add("fade_in");
    document.querySelector("#om_mig").addEventListener("animationend", VisOmMig);

}

function VisOmMig() {
    console.log("VisOmMig");

    //RYD OP
    document.querySelector("#om_mig").classList.remove("fade_in");
    document.querySelector("#om_mig").removeEventListener("animationend", VisOmMig);

    //NYT


}
