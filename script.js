// JavaScript source code
//=================================================================   
//========== PAGE LAYOUT WITH JAVASCRIPT, AND JAVASCRIPT ==========
//================================================================= 
var section = document.getElementsByTagName("section");
for (var num = 0; num < section.length; num++) {
    section[num].style.display = "none";
}
function change() {
    document.body.style.margin = 0;
    document.body.style.fontFamily = "Varela Round, sans-serif";
    document.getElementById("ftButton").style.display = "none";
    for (var num = 0; num < section.length; num++) {
        /* Creating the parallax effect */
        section[num].style.display = "block";
        section[num].style.width = "100%";
        section[num].style.height = "100vh";
        section[num].style.boxSizing = "border-box";
        section[num].style.background = "url('images/img" + num + ".jpeg') fixed center center / cover";
        section[num].style.position = "relative";

        /* Add style to the content div inside all sections (text) */
        //section[num].firstElementChild.style.width = "inherit";
        section[num].firstElementChild.style.position = "absolute";
        section[num].firstElementChild.style.bottom = "0";
        section[num].firstElementChild.style.color = "#f1f1f1";
        section[num].firstElementChild.style.background = "rgba(0, 0, 0, 0.5)";
        section[num].firstElementChild.style.padding = "20px";
        section[num].firstElementChild.style.fontSize = "1.5em";
        section[num].firstElementChild.style.maxHeight = "100vh";
        
        var newItem = document.createElement("H1");       // Create a H1 node
        var textnode = document.createTextNode(num+1);  // Create a text node
        newItem.appendChild(textnode);                    // Append the text to the section
        section[num].firstElementChild.insertBefore(newItem, section[num].firstElementChild.childNodes[0]);  // Insert h1 before the first child of the section
    }
}

//=================================================================  
//========================== ANIMATIONS ===========================
//=================================================================

var d = document.getElementById("dancing"); //store the button in a vabiable
d.innerText = "dance Fred!"; // set the button text
var fred = section[1].querySelector("img");
fred.style.display = "none";
fred.style.margin = "0";
fred.style.padding = "0";
fred.style.animation = "setup 2s ease-out, dance 2s 2s ease-out infinite";

function dance() {
    fred.style.display = "inline-block";
    if (d.innerText == "dance Fred!") {
        fred.style.animationPlayState = "running";
        d.innerText = "stop Fred";
    }
    else {
        d.innerText = "dance Fred!";
        fred.style.animationPlayState = "paused";
    }
}

//=================================================================  
//========================== TRANSFORMS ===========================
//=================================================================

var f = document.getElementsByClassName("flip-card-inner");
var fb = document.getElementsByClassName("flip-card-back");
var leo = document.getElementsByClassName("leonidas-container");
function flipping() {
    setTimeout(myTimeout1, 500)
    setTimeout(myTimeout2, 1000)
    setTimeout(myTimeout3, 1500)
    setTimeout(myTimeout4, 2500)
    setTimeout(myTimeout5, 5000)
}
function myTimeout1() {
    f[0].style.transform = "rotateY(180deg)";
    fb[0].firstElementChild.style.animation = "scaling .4s linear .2s backwards";
}
function myTimeout2() {
    f[1].style.transform = "rotateY(180deg)";
    fb[1].firstElementChild.style.animation = "scaling .4s linear .2s backwards";
}
function myTimeout3() {
    f[2].style.transform = "rotateY(180deg)";
    fb[2].firstElementChild.style.animation = "scaling .4s linear .2s backwards";
}
function myTimeout4() {
    leo[0].style.display = "block";
    leo[0].style.animation = "roar .1s linear both infinite";
}
function myTimeout5() {
    leo[0].style.display = "none";
    for (var i = 0; i < fb.length; i++) {
        f[i].style.transform = "rotateY(0deg)";
    }
}

//=================================================================  
//==================== DOM MANIPULATION ======================
//================================================================= 

var parent = document.getElementById("dom");

function create(text, element, id) {
    var para = document.createElement(element);
    para.id = id;
    var node = document.createTextNode(text);
    para.appendChild(node);
    parent.appendChild(para);
}

function createEmoticon(path, id, alt) {
    var x = document.createElement("IMG");
    x.id = id;
    x.style.position = "relative";
    x.style.left = "25vw";
    x.setAttribute("src", "images/" + path + ".PNG");
    x.setAttribute("width", "100");
    x.setAttribute("height", "100");
    x.setAttribute("alt", alt);
    parent.appendChild(x);
}

function replace(newElId, oldElId) {
    var para = document.getElementById(newElId);
    var child = document.getElementById(oldElId);
    child.parentNode.replaceChild(para, child);
}

create("Press the button to create an element", "h3", "");
create("Click", "button", "start");

var startButton = document.getElementById("start");
startButton.onclick = function () {
setTimeout(function () { create(".", "span", "") }, 500)
    setTimeout(function () { create(".", "span", "") }, 1000)
    setTimeout(function () { create(".", "span", "") }, 1500)
    
    var spans = document.getElementsByTagName("span");
    setTimeout(function () { for(var a = 0; a < spans.length; a++){spans[a].style.display = "none" }}, 2000)
    setTimeout(function () { createEmoticon("fastidiado", "img1", "A not so happy emiticon") }, 2000)
    setTimeout(function () { create("Why this face, show us some smile!", "p", "p1") }, 4000)
    setTimeout(function () { createEmoticon("better", "img2", "A little more happy emoticon") }, 6000)
    setTimeout(function () { replace("img2", "img1") }, 6000)
    setTimeout(function() { create("This is better, but...come on! smile!!", "p", "p2") }, 8000)
    setTimeout(function () { replace("p2", "p1") }, 8000)
    setTimeout(function () { createEmoticon("best", "img3", "A very happy emoticon") }, 10000)
    setTimeout(function () { replace("img3", "img2") }, 10000)
    setTimeout(function() { create("Yeah!! That's what I'm talking about!", "h4", "p3") }, 11000)
    setTimeout(function () { replace("p3", "p2") }, 11000) 
}

//=================================================================   
//=============== HTML 5 CANVAS, AUDIO AND VIDEO ==================
//=================================================================

/*CREATING THE CANVAS*/

var fifth = section[4];


var padre = fifth;
function createCanvas(){
    var x = document.createElement("CANVAS");
    x.id = "galope";
    x.style.position = "absolute";
    x.style.left = "3vw";
    x.style.bottom = "30vw";
    x.width = "300";
    x.height = "300";
    x.style.border = "solid 2px";
    fifth.appendChild(x);

/*CREATING THE MOVIE*/

    var canvas = document.getElementById("galope");
    var context = canvas.getContext("2d");
    var img = document.createElement("img");
    img.src = "images/horseMovieNewSize.jpg";
    img.onload = draw;

    var screen = new Path2D();
    screen.rect(0,0, 300, 300);
    context.clip(screen);

    var row = 0, col = 0;
    function draw(){
        col = col+1;
        if(col > 3){ col = 0; row += 1;}
        if(col == 3 && row == 2){ col = 0; row = 0;}

        context.drawImage(img, 0-290*col, 0-320*row)
        setTimeout(function() { draw() }, 40)
    };
}

/*CREATING THE VIDEO TAG*/

function createVideo(){
    var v = document.createElement("VIDEO");
    v.id = "video";
    v.zIndex = 1;
    v.style.position = "absolute";
    v.style.left = "36vw";
    v.style.bottom = "30vw";
        if (v.canPlayType("video/mp4")) {
            v.setAttribute("src","images/nippon_girl.mp4");
        } else {
            v.setAttribute("src","");
        }
        v.setAttribute("width", "300");
        v.setAttribute("height", "300");
        v.setAttribute("controls", "controls");
        v.autoplay = true;
    fifth.appendChild(v);
}

/*CREATING THE AUDIO TAG*/

function createAudio(){
    var v = document.createElement("AUDIO");
    v.id = "audio";
    v.style.position = "absolute";
    v.style.left = "68vw";
    v.style.bottom = "30vw";
        if (v.canPlayType("audio/mpeg")) {
            v.setAttribute("src","images/Rurouni Kenshin OST 3 - 12-Hiten Mitsurugi Ryuu - Amakakeru Ryuu no Hirameki.mp3");
        } else {
            v.setAttribute("src","");
        }
        v.setAttribute("width", "300");
        v.setAttribute("height", "auto");
        v.setAttribute("controls", "controls");
    fifth.appendChild(v);
}

//=================================================================   
//========================= JASON & AJAX ==========================
//=================================================================
var jasonSection = document.getElementById("weatherContainer");
jasonSection.style.fontSize = ".9em";
jasonSection.style.textAlign = "center";
jasonSection.style.backgroundColor = "rgba(0, 0, 0, 0.2)";

//FORECAST REXBURG IDAHO//
var request = new XMLHttpRequest();
request.open('GET', '//api.wunderground.com/api/2bd1927be404d108/forecast/q/ID/Rexburg.json', true);
request.send();

request.onload = function () {
    var RexburgWeather = JSON.parse(request.responseText);
    console.log(RexburgWeather);

    document.getElementById("textForecast").innerHTML = RexburgWeather.forecast.txt_forecast.forecastday[0].fcttext;
}

//CONDITIONS REXBURG IDAHO//

var weatherObj = new XMLHttpRequest();
weatherObj.open('GET', '//api.wunderground.com/api/2bd1927be404d108/conditions/q/ID/Rexburg.json', true);

weatherObj.send();
weatherObj.onload = function () {
var weatherInfo = JSON.parse(weatherObj.responseText);
console.log(weatherInfo);
    
document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full; 
//City-State

document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f; //Temperature in Fahrenheit.

document.getElementById('currentWeather').innerHTML = weatherInfo.current_observation.weather; //Current weather status.
    
document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph; //Wind Speed in miles per hour.
    
var icon_path = weatherInfo.current_observation.icon_url;
var urlString = document.location.href;
console.log(urlString);
var found = urlString.indexOf("https");
console.log(found);
if (found >= 0) {
    icon_path = icon_path.replace("http", "https");
    }
    document.getElementById('wi').src = icon_path;
}

//=================================================================   
//========================= JASON ==========================
//=================================================================

var xmlhttp, myObj, x, txt, mami, papi, validate;

/*obj = { table: "countries", limit: 10 };
dbParam = JSON.stringify(obj);*/
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    
    //DYNAMIC DROP DOWN SELECT ELEMENT CREATION
    txt = "<select id='dropDown' onchange='createImage()'>"
    txt += "<option>Choose a Country:</option>"
      
    for (x in myObj) {
      txt += "<option>" + myObj[x] + "</option>";
    } 
    txt += "</select>"
    document.getElementById("dropDownHome").innerHTML = txt; 
  }
};

xmlhttp.open("GET", "countries.json", true);
xmlhttp.send();

//CREATE FLAGS DYNAMICALLY
var flags = document.getElementById("flags");
function createImage() {
    mami = document.getElementById("dropDown").value;
    if(mami){mami = mami[0]+mami[1];}
    console.log(mami.toLowerCase());
    papi = mami.toLowerCase();
    
    var x = document.createElement("IMG");
    validate = x.setAttribute("src", "https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/"+papi+".png");
    x.style.position = "absolute";
    x.setAttribute("width", "250");
    x.setAttribute("height", "175");
    flags.append(x);  
}

//=================================================================   
//====================== JAVA OBJECTS & MORE ======================
//=================================================================

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {return 2018 - this.yearOfBirth};
Person.prototype.yearsToRetire = function() {return 65 - (2018 - this.yearOfBirth)};

Person.prototype.funnyComment = function() { 
    if(this.yearOfBirth > 1998){
        return "You have more years of work ahead than years of life!"
    } else if(this.yearOfBirth > 1964 && this.yearOfBirth < 1998){
        return "You are on the plateau of your working life!"
    }  else if(this.yearOfBirth > 1953 && this.yearOfBirth < 1964){
        return "You are going down the hill of your working life!"
    } else { return "This folk shouldn't be here!"}
};

var elias = new Person('Elias', 1990, 'teacher');
var vanessa = new Person('Vanessa', 1969, 'designer');
var carlos = new Person('Carlos', 1948, 'retired');

//CREATING A DYNAMIC TABLE
function dyTable(){
txt = "<table border='1'>"
    txt += "<tr>"
    txt += "<th>First Name</th>"
    txt += "<th>Birth Year</th>"
    txt += "<th>Job</th>" 
    txt += "<th>Time to Retire</th>"
    txt += "<th>Funny Comment</th>"
    txt += "</tr>"
    txt += "<tr>"
    txt += "<td>" + elias.name + "</td>"
    txt += "<td>" + elias.yearOfBirth + "</td>"
    txt += "<td>" + elias.job + "</td>"
    txt += "<td>" + elias.yearsToRetire() + "</td>"
    txt += "<td>" + elias.funnyComment() + "</td>"
    txt += "</tr>"
    txt += "<tr>"
    txt += "<td>" + vanessa.name + "</td>"
    txt += "<td>" + vanessa.yearOfBirth + "</td>"
    txt += "<td>" + vanessa.job + "</td>"
    txt += "<td>" + vanessa.yearsToRetire() + "</td>"
    txt += "<td>" + vanessa.funnyComment() + "</td>"
    txt += "</tr>"
    txt += "<tr>"
    txt += "<td>" + carlos.name + "</td>"
    txt += "<td>" + carlos.yearOfBirth + "</td>"
    txt += "<td>" + carlos.job + "</td>"
    txt += "<td>" + carlos.yearsToRetire() + "</td>"
    txt += "<td>" + carlos.funnyComment() + "</td>"
    txt += "</tr>"
    var ename = document.getElementById("ename").value;
    var ebirth = document.getElementById("ebirth").value;
    var ejob = document.getElementById("ejob").value;
    console.log(ename, ebirth, ejob);
    var newEmployee = new Person(ename, ebirth, ejob);
    txt += "<tr>"
    txt += "<td>" + newEmployee.name + "</td>"
    txt += "<td>" + newEmployee.yearOfBirth + "</td>"
    txt += "<td>" + newEmployee.job + "</td>"
    txt += "<td>" + newEmployee.yearsToRetire() + "</td>"
    txt += "<td>" + newEmployee.funnyComment() + "</td>"
    txt += "</tr>"
    console.log(newEmployee);
    
txt += "</table>";
    
document.getElementById("dytable").innerHTML = txt;
}

//=================================================================   
//===================== JAVASCRIPT EVENTS =========================
//=================================================================

var md = false;
var canvas = document.getElementById("pizarra");
canvas.addEventListener("mousedown", down);
canvas.addEventListener("mouseup", toggledraw);
canvas.addEventListener("mousemove",
function(evt)
{
    var mousePos = getMousePos(canvas, evt);
    var posx = mousePos.x;
    var posy = mousePos.y;
    draw(canvas, posx, posy);
});

function down()
{
    md = true;
}
function toggledraw()
{
    canvas.style.cursor = "default";
    md = false;
 
}
function getMousePos(canvas, evt)
{
    var rect = canvas.getBoundingClientRect();
    return{
        x:evt.clientX - rect.left, y:evt.clientY - rect.top
    };
}
function draw(canvas, posx, posy)
{
    var context = canvas.getContext("2d");
    if(md)
        {
            canvas.style.cursor = "pointer";
            context.fillStyle = "white";
            context.fillRect(posx, posy, 4, 4);
        }
}

//=================================================================   
//======================== LOCAL STORAGE =========================
//=================================================================

function clickCounter() {
    
  if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("counter").innerHTML = localStorage.clickcount;
  } else {
    document.getElementById("counter").innerHTML = "Sorry, your browser does not support web storage...Get Chrome or Fire Fox now!";
  }
}
