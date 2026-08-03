function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

}


// Opening envelope

function openEnvelope() {

    document.querySelector(".envelope").classList.add("open");

    setTimeout(() => {
        showPage("letterPage");
    }, 1500);

}


// Show movies

function showMovies() {

    showPage("moviePage");

}


// Movie details

const movies = {

    spiderman: {

        title: "Spider-Man: Brand New Day",
        cinema: "Numetro Arcades",
        date: "05 August 2026",
        time: "19:30",
        pickup: "18:45 - 18:50"

    },


    odyssey: {

        title: "The Odyssey",
        cinema: "Numetro Arcades",
        date: "05 August 2026",
        time: "19:15",
        pickup: "18:30 - 18:40"

    }

};


function chooseMovie(movie) {


    let selected = movies[movie];


    document.getElementById("movieTitle").innerHTML = selected.title;

    document.getElementById("cinema").innerHTML = selected.cinema;

    document.getElementById("date").innerHTML = selected.date;

    document.getElementById("time").innerHTML = selected.time;

    document.getElementById("pickup").innerHTML = selected.pickup;


    showPage("ticketPage");


}


// Final question

function finalQuestion(){

    showPage("finalPage");

}


// Yes button

function yesAnswer(){

    showPage("successPage");

    createHearts();

}



// Floating hearts

function createHearts(){

    for(let i = 0; i < 20; i++){

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.className = "heart";

        heart.style.left = Math.random()*100 + "%";

        heart.style.fontSize = 
        (Math.random()*20 + 15) + "px";

        document.body.appendChild(heart);


        setTimeout(()=>{

            heart.remove();

        },6000);

    }

}


// Automatically move from loading screen

setTimeout(()=>{

    showPage("envelopePage");

},2500);
