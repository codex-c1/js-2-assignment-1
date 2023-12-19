
// Our JavaScript will set the style of the html
// First we will use document.querySelectorAll to
// get all the elements that match our selection.
// Then we will 
let chocolateElms, cottonElms, SnoopElms, KittenElms, CharmsEmls,
JumpsElms, CakesElms, ChoolElms, CrazyElms, SlidesElms, BublesElms,
CabbinElms, CarryElms, BakesElms;

chocolateElms= document.querySelectorAll("h1");
chocolateElms[0].style.color= "orange";

cottonElms= document.querySelectorAll("h1");
cottonElms[1].style.color= "red";

SnoopElms= document.querySelectorAll("h1");
SnoopElms[2].style.color= "blue";

KittenElms=document.querySelectorAll("h1");
KittenElms[3].style.color= "purple";

CharmsEmls=document.querySelectorAll("h1");
CharmsEmls[4].style.color= "brown";

JumpsElms=document.querySelectorAll("h1");
JumpsElms[5].style.color= "pink";

CakesElms=document.querySelectorAll("h1");
CakesElms[6].style.color= "gold";

ChoolElms=document.querySelectorAll("h1");
ChoolElms[7].style.color= "lightpurple";

CrazyElms=document.querySelectorAll("h1");
CrazyElms[8].style.color= "green";

SlidesElms= document.querySelectorAll("h1");
SlidesElms[9].style.color= "yellow";

BublesElms=document.querySelectorAll("h1");
BublesElms[10].style.color= "tan";

CabbinElms=document.querySelectorAll("h1");
CabbinElms[11].style.color= "blue"

CarryElms=document.querySelectorAll("h1");
CarryElms[12].style.color= "red"

BakesElms=document.querySelectorAll("h1");
BakesElms[13].style.color= "purple"



let elms;
elms = document.querySelectorAll("h1")
console.log(elms)
// Declare the variable to hold our elements.


// Select the elements we wish to change.

elms[1].style.color = "red"
elms[2].style.color = "red"
elms[3].style.color = "red"
elms[4].style.color = "red"
elms[5].style.color = "red"
elms[6].style.color = "red"
elms[7].style.color = "red"
elms[8].style.color = "red"
elms[9].style.color = "red"
elms[10].style.color = "red"
elms[11].style.color = "red"
elms[12].style.color = "red"
elms[13].style.color = "red"

// Loop through the elements and change them.
function changeElms(){
  
    window.alert("BakesElms");
    BakesElms = document.querySelector("#Bakes-h1");
    BakesElms.style.color = 'purple';
  }
  coolbutton = document.querySelector("#Lynndale-btn");
  coolbutton.onclick = changeElms;
  


       // TODO: set the backgroundColor
    
// TODO: select and change the p tags
//       then loop through the elements and change them.


// TODO: select and change the span tags
//       then loop through the elements and change them.


// TODO: Go back to index.html and add
//       a class called "jump" to 10 elements.
//       These can be any elements you want.
//       For example: 2 h1 tags, 3 p tags, 5 span tags.


// TODO: select and change the elements with a .jump class 
// Set the style of each jump so that the element moves up 10px on the page.
// HINT: You can try...
//       elm.style.position = "relative"
//       elm.style.top = "-10px"