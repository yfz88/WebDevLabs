function greetingFunc(){
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    if (h >= 5 && h < 12){
        E.innerHTML = "Good morning, I am Felicia";
    } else if (h >= 12 && h < 18){
        E.innerHTML = "Good afternoon, I am Felicia";
    } else if (h >= 18 && h < 20){
        E.innerHTML = "Good evening, I am Felicia";
    } else if (h >= 20 && h < 24 || h < 5){
        E.innerHTML = "Good night, I am Felicia";
    }
}
//greetingFunc();
var L = window.location.href;
console.log(L);
if (L.includes("index.html")){
    greetingFunc();
}
function addYear(){
    var d = new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML += y;
}
// function showList(){
//     document.getElementById("FavList").style.display = "block";
//     document.getElementById("SeeMoreBTN").style.display = "none";
// }
$("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
});
$("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
});
function validate(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var comment = document.getElementById("comment");
    var msg = document.getElementById("ValidateMsg");
    if (!name.checkValidity() || !email.checkValidity() || !comment.checkValidity()){
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
}
let map;
async function initMap(){
    const position = {lat: 40.43942368067543, lng:-79.94801539692004}
    const{Map} = await google.maps.importLibrary("maps");
    const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"),{
        zoom: 12,
        center: position,
        mapId: "DEMO_MAP_ID",
    });
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Phipps"
    })
}
if (L.includes("fun.html")){
    initMap();
}
function activeNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav"){
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}