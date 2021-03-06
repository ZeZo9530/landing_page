/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/





//function to add item list 

  function sectionAdder (x){
    for (let i =1; i <= x; i++){
      const newListItem = document.createElement('li');

      //set ID and Class for later
      newListItem.id="sec"+i;
      newListItem.className="sec";

      newListItem.textContent = "Section "+ i;
      newListItem.style.cssText = 'font-size:20px;color:black;padding:15px';
      

      //active when hover
      newListItem.addEventListener('mouseover',function eventFunction (evt){
        evt.target.style.color="white";evt.target.style.background="black";})

      //diactive when mouse out
      newListItem.addEventListener('mouseout',function restFunction (evt){
        evt.target.style.color="black";evt.target.style.background="";})

      navBar.appendChild(newListItem);
      
    }
    
  }

  //build the nav
  let navBar = document.getElementById('navbar__list');
  sectionAdder(4);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

// on click goes to the section

document.getElementById('sec1').addEventListener('click',function (){
  document.getElementById('section1').scrollIntoView({behavior:"smooth"})
  
})

document.getElementById('sec2').addEventListener('click',function (){
  document.getElementById('section2').scrollIntoView({behavior:"smooth"})
  
})

document.getElementById('sec3').addEventListener('click',function (){
  document.getElementById('section3').scrollIntoView({behavior:"smooth"})
  
})

document.getElementById('sec4').addEventListener('click',function (){
  document.getElementById('section4').scrollIntoView({behavior:"smooth"})
  
})


//to active and deactive the class 
//updated

function isInViewport(elm) {
  const x = elm.getBoundingClientRect();
  return (
      x.top >= 0 &&
      x.left >= 0 &&
      x.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      x.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
let findSect = document.querySelectorAll(".sect")

window.addEventListener('scroll', function(evt){

  findSect.forEach(element => {

    if (isInViewport(element)){
      element.classList.add("your-active-class");
    }
    else {element.classList.remove("your-active-class")}
  });
}, false);
