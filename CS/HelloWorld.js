console.log("Hello World!");
console.log("capybara"); //prints to console. 
//window.alert("Capybara's are not to eat."); //creates window popup
document.getElementById("p1").innerHTML="I changed this with js";
let username;
/*
 * If you wanna change a element, the script should be  
 * initialized in the html file after the element is 
 * created. If you do it before, there'll be no change. 

 */

//getting user input
//let username = window.prompt("What's yo name cuz");
//document.getElementById("p2").innerHTML=username

/*
 * This function will tkae user input in the textbox, and print out the number from it on the console.  
 */
const pi = Math.PI;
document.getElementById("Button1").onclick = function(){
    var username = document.getElementById("mytest").value;
    document.getElementById("outputbutton1").innerHTML = "Your name is " + username + ".";
};
document.getElementById("radiussubmit").onclick = function(){
    var radius = document.getElementById("radiusinput").value;
    var circumference = 2 * pi * radius;

    if (circumference  > 60 ) {
        document.getElementById("outputradius").innerHTML = "This circle big. We talkin " + circumference + ". This datatype is " + typeof circumference + ".";
    } else {
        document.getElementById("outputradius").innerHTML = "The circumference of this circle is " + circumference + ". This datatype is " + typeof circumference + ".";
    }
    
}
let ischecked = false;
document.getElementById("checkbox").onclick = function(){
    if(!ischecked){
        document.getElementById("Button1").innerHTML = "skill issue";
        ischecked = !ischecked;
    }
    else{
        document.getElementById("Button1").innerHTML = "submit";
        ischecked = !ischecked;
    }
    
}
document.getElementById("printusage").onclick = function(){
    tom = Number(document.getElementById("fibonaccI").value);
   // console.log("tom is " + tom);
    if(tom > 0){
        window.alert(fibonacci(tom));
    }
    else{
        window.alert("Can't do that? skill issue");
    }
    
}
/**
 * 
 * document.getElementById("binc").onclick = function(){
    increase();
    document.getElementById("numbercounter").innerHTML = count;
}
document.getElementById("bdec").onclick = function(){
    decrease();
    document.getElementById("numbercounter").innerHTML = count;
}
 */

let count = 0;
const car = {
    Chapter: "Study Unit 1",
    Question: 90,
    getchapter: function() {
        return this.Chapter;
    },
    getquestion: function() {
        return this.Question;
    }
};

class Book{
    Name;
    Author;
    page;
    printbook(){
        console.log(this.Name + ", by " + this.Author + ". And this contains " + this.page + " pages.");
    }

}

console.log("Gleim " + car.getchapter() + " " + car.getquestion());
let algos = new Book();
algos.Name = "Algorithms: Design and Analysis";
algos.Author = "Harsh Bhasin";
algos.page = 691;
let pomodesired = 0;
console.log(algos.printbook());

document.getElementById("binc").onclick = () => increase();
document.getElementById("bdec").onclick = () => decrease();

document.getElementById("pomodoroinc").onclick = () => pomoinc(1);
document.getElementById("pomodorodec").onclick = () => pomoinc(-1);
document.getElementById("pomostart").onclick = () => pomodorotimer();
document.getElementById("reset").onclick = () => reset = true;


function pomoinc(difference){
if(pomodesired + difference >= 0){
    pomodesired += difference;
document.getElementById("pomodestime").innerHTML = "Desired time: " + pomodesired + " minutes";
document.getElementById("timeboiboi").innerHTML = pomodesired + ":00";
}
}
function totaltimer(){
    pomodorotimer();
    playaudio();
}
function playaudio() {
    var audio = new Audio('alarm.mp3'); // Replace 'alarm.mp3' with the path to your sound file
    audio.play();
  }
  let reset = false;
  let pause = false;
  
  document.getElementById("pause").onclick = () => togglepause();
function togglepause(){
    pause = !pause;
    if(!pause){
        document.getElementById("pause").innerHTML = "pause";
    }
    else{
        document.getElementById("pause").innerHTML = "Continue";
    }
}
function pomodorotimer() {
    reset = false;
    var endTime = new Date();
    endTime.setMinutes(endTime.getMinutes() + pomodesired);
  
    function updateTimer() {
      var currentTime = new Date();
      var timeRemaining = Math.floor((endTime - currentTime) / 1000);
  
      if (reset) {
        document.getElementById("timeboiboi").innerHTML = pomodesired + ":00";
        return;
      }
  
      if (timeRemaining > 0) {
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = timeRemaining % 60;
  
        if (seconds < 10) {
          document.getElementById("timeboiboi").innerHTML = minutes + ":0" + seconds;
        } else {
          document.getElementById("timeboiboi").innerHTML = minutes + ":" + seconds;
        }
  
        if (!pause) {
          setTimeout(updateTimer, 1000); // Delay of 1 second (1000ms)
        }
      } else {
        playaudio(); // Call the playaudio() function when the timer is done
      }
    }
  
    updateTimer();
  }
  
  
  
  

function increase(){
    count++;
    document.getElementById("numbercounter").innerHTML = count;
}
function decrease(){
    count--;
    document.getElementById("numbercounter").innerHTML = count;
}
function fibonacci(input){
    if(input <= 1){
        return 1;
    }
    return  input*fibonacci(input-1);
}