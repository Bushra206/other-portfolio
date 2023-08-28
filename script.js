/*------------------------ about----------------------*/

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    // console.log(tabname);
 for(tablink of tablinks){
     tablink.classList.remove("active-link");
 }
  for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
  }


event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab"); }
/*-------------------------contact us----------------------*/

// const mobile_nav=document.querySelector(".mobile-navbar-btn");
// mobile_nav.addEventListener("click",toggleNavBar());


// function toggleNavBar(){
//     alert("plz sunscribe");


var sidemenu=document.getElementById("sidemenu");
function openmenu(){
   sidemenu.style.right="0";
   
}

function closemenu(){
    
   sidemenu.style.right="-200px";
}

