console.log("starting")

//sets function and display for the tabs
document.getElementById("AboutMe").addEventListener("click", setActive, false);
document.getElementById("Works").addEventListener("click", setActive, false);
document.getElementById("Resume").addEventListener("click", setActive, false);


function setActive(e){
  prevpage = document.getElementsByClassName("active")[0].id;
  if(prevpage != undefined){
    document.getElementById(prevpage).classList.toggle("active");
    document.getElementById(prevpage +"Page").style.display="none";
  }

  if (e.target.tagName=="H2"){
    e.target.parentNode.classList.toggle("active");
  }
  else{
    e.target.classList.toggle("active");
  }
  page=document.getElementsByClassName("active")[0].id;
  document.getElementById(page +"Page").style.display="block";
}
