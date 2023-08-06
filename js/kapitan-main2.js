$(function(){
    $('body').on('ready', '#test',function(){
        alert('haiqal');
    })
});



var startDiv        = document.getElementsByClassName("start");
var mainDiv         = document.getElementsByClassName("main-div");
var startOverlayDiv = document.getElementsByClassName("start-overlay");
var tutorialDiv     = document.getElementsByClassName("tutorial-overlay");
var rsvpBtn         = document.getElementById("rsvp");
var contactBtn      = document.getElementById("contact");
var locationBtn     = document.getElementById("location");
var bookBtn         = document.getElementById("book");
var calendarBtn     = document.getElementById("calendar");
var moneygiftBtn    = document.getElementById("moneygift");
var closeBtn        = document.getElementById("close-btn");
var rsvpModal       = document.getElementById("rsvpModal");
var rsvpModal2      = document.getElementById("rsvpModal2");
var contactModal    = document.getElementById("contactModal");
var locationModal   = document.getElementById("locationModal");
var calendarModal   = document.getElementById("calendarModal");
var moneygiftModal  = document.getElementById("moneygiftModal");
var featureMain     = document.getElementsByClassName("feature-main");
var overlay         = document.getElementsByClassName("overlay");

const btn   = [locationBtn];
const modal = [
    locationModal
];

document.getElementById("rsvp").onclick      = modalBtn;
document.getElementById("contact").onclick   = modalBtn;
document.getElementById("location").onclick  = modalBtn;
document.getElementById("calendar").onclick  = modalBtn;
document.getElementById("moneygift").onclick = modalBtn;

if (document.getElementById("start-btn")) {
    document.getElementById("start-btn").onclick = startBtn;
    function startBtn(e) {
        startOverlayDiv[0].classList.add("animated");
        startOverlayDiv[0].classList.add("slideOutUp");

        setTimeout(() => {
            startDiv[0].remove();
            mainDiv[0].classList.remove("hidden");
        }, 750);

        if (localStorage.getItem("firstTime") != 1) {
            setTimeout(() => {
                tutorialDiv[0].classList.remove("hidden");
                tutorialDiv[0].classList.add("animated");
                tutorialDiv[0].classList.add("fadeIn");
            }, 2500);
            localStorage.setItem("firstTime", 1);
        }
    }
} else {
    setTimeout(() => {
        tutorialDiv[0].classList.remove("hidden");
        tutorialDiv[0].classList.add("animated");
        tutorialDiv[0].classList.add("fadeIn");
    }, 1500);
}

function modalBtn(e) {
    var id = this.id;
   
    // overlay[0].classList.add("active");
    // overlay[0].classList.remove("preload");

    btn.forEach(function (e) {
        if (e != null) {
            if (e.id == id) {
                if (e.classList.contains("active-link")) {
                    // overlay[0].classList.remove("active");
                    e.classList.remove("active-link");
                } else {
                    // overlay[0].classList.add("active");
                    e.classList.add("active-link");
                }
            } else {
                e.classList.remove("active-link");
            }
            // show_rsvp_btn();
        }
    });

    modal.forEach(function (e) {
        if (e.id.includes(id)) {
            if (e.classList.contains("active")) e.classList.remove("active");
            else {
                e.classList.add("active");
            }
        } else {
            e.classList.remove("active");
        }
    });
}