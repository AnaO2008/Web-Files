//Sets the daily quote//
const d= new Date;
let daynum = d.getDate()

const array=["The greatest discovery of my generation is that a human being can alter his life by altering his attitudes.",
  "I’d rather regret the things I’ve done than regret the things I haven’t done.",
  "I am not a product of my circumstances. I am a product of my decisions.",
  "Just one small positive thought in the morning can change your whole day.",
  "Opportunities don't happen, you create them.",
  "It is never too late to be what you might have been.",
  "Alone we can do so little, together we can do so much.",
  "Remember, teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability.",
  "The elevator to success is out of order. You’ll have to use the stairs, one step at a time.",
  "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.",
  "You've got to get up every morning with determination if you're going to go to bed with satisfaction.",
  "The most difficult thing is the decision to act, the rest is merely tenacity.",
  "He who conquers himself is the mightiest warrior.",
  "Try not to become a man of success, but rather become a man of value.",
  "The successful man will profit from his mistakes and try again in a different way.",
  "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
  "We don’t just sit around and wait for other people. We just make, and we do.",
  "Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.",
  "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.",
  "I’m a greater believer in luck, and I find the harder I work the more I have of it.",
  "When we strive to become better than we are, everything around us becomes better too.",
  "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
  "Setting goals is the first step in turning the invisible into the visible.",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
  "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
  "You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
  "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
  "Experience is a hard teacher because she gives the test first, the lesson afterwards.",
  "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
  "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
  "Learn as if you will live forever, live like you will die tomorrow.",
  "The greatest discovery of my generation is that a human being can alter his life by altering his attitudes."]


document.getElementById("quote").innerHTML=array[1]

//sets the slug stats on startup
let prevday = "Progress";
var Energy = 0;
var Level = 1
if(Energy<=10){
  Level = 1
}
else if (10<Energy && Energy<=20) {
  Level = 2
}
else if (20<Energy && Energy<=30) {
  Level=3
}
else if (30<Energy && Energy<=40) {
  Level = 4
}
else if (40<Energy && Energy<=50) {
  Level = 5
}
else if (50<Energy && Energy<=60) {
  Level = 6
}
else if (60<Energy) {
  Level = 7
}

if(2 <= Level){
  document.getElementById("Level2").style.display="block";
}

if(3 <= Level){
  document.getElementById("Level3").style.display="block";
}

if(4 <= Level){
  document.getElementById("Level4").style.display="block";
}

if(5 <= Level){
  document.getElementById("Level5").style.display="block";
}

if(6 <= Level){
  document.getElementById("Level6").style.display="block";
}

if(7 <= Level){
  document.getElementById("Level7").style.display="block";
}

//defines the functionality of the meditation animation
function anim(){
  document.getElementById('span').className="dot"
}

//sets up functionality for the write-in responses
function responseGreatful(){
  var answer= document.getElementById("userInputGreatful").value;
  alert("I am greatful for: " + answer + " +1 Slug Energy!");
  Energy=Energy+1


  var journalEntry = document.createElement("P");
  journalEntry.innerHTML= "I am greatful for " + answer;
  document.getElementById("ProgressPlan").appendChild(journalEntry);
  document.getElementById("EnergyText").innerHTML = Energy;
  document.getElementById("LevelText").innerHTML = Level

  //re-establishes the slug stats
  if(Energy<=10){
    Level = 1
  }
  else if (10<Energy && Energy<=20) {
    Level = 2
  }
  else if (20<Energy && Energy<=30) {
    Level=3
  }
  else if (30<Energy && Energy<=40) {
    Level= 4
  }
  else if (40<Energy && Energy<=50) {
    Level =5
  }
  else if (50<Energy && Energy<=60) {
    Level= 6
  }
  else if (60<Energy) {
    Level= 7
  }

  if(2 <= Level){
    document.getElementById("Level2").style.display="block";
  }

  if(3 <= Level){
    document.getElementById("Level3").style.display="block";
  }

  if(4 <= Level){
    document.getElementById("Level4").style.display="block";
  }

  if(5 <= Level){
    document.getElementById("Level5").style.display="block";
  }

  if(6 <= Level){
    document.getElementById("Level6").style.display="block";
  }

  if(7 <= Level){
    document.getElementById("Level7").style.display="block";
  }
}

function responseReaf(){
  var answer= document.getElementById("userInputReaf").value;
  alert("A reafirming thought is: " + answer + " +1 Slug Energy!");
  Energy=Energy+1

  var journalEntry = document.createElement("P");
  journalEntry.innerHTML="A reafirming thought is: " + answer;
  document.getElementById("ProgressPlan").appendChild(journalEntry);
  document.getElementById("EnergyText").innerHTML = Energy;
  document.getElementById("LevelText").innerHTML = Level

  //re-establishes the slug stats
  if(Energy<=10){
    Level = 1
  }
  else if (10<Energy && Energy<=20) {
    Level = 2
  }
  else if (20<Energy && Energy<=30) {
    Level=3
  }
  else if (30<Energy && Energy<=40) {
    Level= 4
  }
  else if (40<Energy && Energy<=50) {
    Level =5
  }
  else if (50<Energy && Energy<=60) {
    Level= 6
  }
  else if (60<Energy) {
    Level= 7
  }

  if(2 <= Level){
    document.getElementById("Level2").style.display="block";
  }

  if(3 <= Level){
    document.getElementById("Level3").style.display="block";
  }

  if(4 <= Level){
    document.getElementById("Level4").style.display="block";
  }

  if(5 <= Level){
    document.getElementById("Level5").style.display="block";
  }

  if(6 <= Level){
    document.getElementById("Level6").style.display="block";
  }

  if(7 <= Level){
    document.getElementById("Level7").style.display="block";
  }
}

function responseGood(){
  var answer= document.getElementById("userInputGood").value;
  alert("I am good at: " + answer + " +1 Slug Energy!");
  Energy=Energy+1

  var journalEntry = document.createElement("P");
  journalEntry.innerHTML= "I am good at " + answer;
  document.getElementById("ProgressPlan").appendChild(journalEntry);
  document.getElementById("EnergyText").innerHTML = Energy;
  document.getElementById("LevelText").innerHTML = Level

  //re-establishes the slug stats
  if(Energy<=10){
    Level = 1
  }
  else if (10<Energy && Energy<=20) {
    Level = 2
  }
  else if (20<Energy && Energy<=30) {
    Level=3
  }
  else if (30<Energy && Energy<=40) {
    Level= 4
  }
  else if (40<Energy && Energy<=50) {
    Level =5
  }
  else if (50<Energy && Energy<=60) {
    Level= 6
  }
  else if (60<Energy) {
    Level= 7
  }

  if(2 <= Level){
    document.getElementById("Level2").style.display="block";
  }

  if(3 <= Level){
    document.getElementById("Level3").style.display="block";
  }

  if(4 <= Level){
    document.getElementById("Level4").style.display="block";
  }

  if(5 <= Level){
    document.getElementById("Level5").style.display="block";
  }

  if(6 <= Level){
    document.getElementById("Level6").style.display="block";
  }

  if(7 <= Level){
    document.getElementById("Level7").style.display="block";
  }
}

//sets functionality for button responses
function hurray(){
  Energy = Energy+1

  alert("+1 Slug Energy!")
  document.getElementById("EnergyText").innerHTML = Energy;

  //re-establishes the slug stats
  if(Energy<=10){
    Level = 1
  }
  else if (10<Energy && Energy<=20) {
    Level = 2
  }
  else if (20<Energy && Energy<=30) {
    Level=3
  }
  else if (30<Energy && Energy<=40) {
    Level =4
  }
  else if (40<Energy && Energy<=50) {
    Level= 5
  }
  else if (50<Energy && Energy<=60) {
    Level= 6
  }
  else if (60<Energy) {
    Level= 7
  }

  if(2 <= Level){
    document.getElementById("Level2").style.display="block";
  }

  if(3 <= Level){
    document.getElementById("Level3").style.display="block";
  }

  if(4 <= Level){
    document.getElementById("Level4").style.display="block";
  }

  if(5 <= Level){
    document.getElementById("Level5").style.display="block";
  }

  if(6 <= Level){
    document.getElementById("Level6").style.display="block";
  }

  if(7 <= Level){
    document.getElementById("Level7").style.display="block";
  }
}

//sets function and display for the tabs
document.getElementById("Monday").addEventListener("click", setActive, false);
document.getElementById("Tuesday").addEventListener("click", setActive, false);
document.getElementById("Wednesday").addEventListener("click", setActive, false);
document.getElementById("Thursday").addEventListener("click", setActive, false);
document.getElementById("Friday").addEventListener("click", setActive, false);
document.getElementById("Saturday").addEventListener("click", setActive, false);
document.getElementById("Sunday").addEventListener("click", setActive, false);
document.getElementById("Progress").addEventListener("click", setActive, false);


function setActive(e){
  prevday = document.getElementsByClassName("active")[0].id;
  if(prevday != undefined){
    document.getElementById(prevday).classList.toggle("active");
    document.getElementById(prevday +"Plan").style.display="none";
  e.target.classList.toggle("active");
  }


  day=document.getElementsByClassName("active")[0].id;
  document.getElementById(day +"Plan").style.display="block";

  if(day!="Progress"){
    document.getElementById("words").innerHTML=("To do:")
    document.getElementById("meditate").style.display="block";
    document.getElementById("stats").style.display="none";
  }
  else {
    document.getElementById("words").innerHTML=("Progress:")
    document.getElementById("meditate").style.display="none";
    document.getElementById("stats").style.display="block";
  }
}
