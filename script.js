
// Our JavaScript will set the style of the html
// First we will use document.querySelectorAll to
// get all the elements that match our selection.
// Then we will 
elms = document.querySelectorAll("h1")

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

CabbinElms= document.querySelectorAll("h1");
CabbinElms[11].style.color= "blue";

CarryElms= document.querySelectorAll("h1");
CarryElms[12].style.color= "red";

BakesElms=document.querySelectorAll("h1");
BakesElms[13].style.color= "purple";



for (elms of elms);
{
  elms= style.backgroundColor("blue");

}

// Declare the variable to hold our elements.


// Select the elements we wish to change.
elms[1].style.color = "red"

elms[3].style.color = "red"
elms[4].style.color = "red"

elms[7].style.color = "red"
elms[8].style.color = "red"
elms[9].style.color = "red"

elms[12].style.color = "red"
elms[13].style.color = "red"


const x = document.querySelectorAll("p");
x[0].style.backgroundColor= "green";
x[1].style.backgroundColor="red";
x[2].style.backgroundColor="orange";
x[3].style.backgroundColor="blue";
x[4].style.backgroundColor="black";
x[5].style.backgroundColor="purple";
x[6].style.backgroundColor="pink";
x[7].style.backgroundColor="yellow";
x[8].style.backgroundColor="lightgreen";
x[9].style.backgroundColor="black";


// Loop through the elements and change them.
function changeElms(){
  
    window.alert("BakesElms");
    BakesElms = document.querySelector("#Bakes-h1");
    BakesElms.style.color = 'purple';
  
  }



  coolbutton = document.querySelectorAll("#Lynndale-btn");
  coolbutton.onclick = changeElmsofElms;
  


       // TODO: set the backgroundColor
    
// TODO: select and change the p tags
//       then loop through the elements and change them.


// TODO: select and change the span tags
//       then loop through the elements and change them.
const y= document.querySelectorAll("span");
y[0] .style.backgroundColor="pink";
y[1].style.backgroundColor="black";
y[2].style.backgroundColor="white";
y[3].style.backgroundColor="red";
y[4].style.backgroundColor="white";
y[5].style.backgroundColor="yellow";
y[6].style.backgroundColor="black";
y[7].style.backgroundColor="blue";
y[8].style.backgroundColor="white";
y[9].style.backgroundColor="red";



// TODO: Go back to index.html and add
//       a class called "jump" to 10 elements.
//       These can be any elements you want.
//       For example: 2 h1 tags, 3 p tags, 5 span tags.
const f= document.querySelectorAll("jump");
f[0].style.backgroundColor="yellow";

// TODO: select and change the elements with a .jump class 
// Set the style of each jump so that the element moves up 10px on the page.
// HINT: You can try...
//       elm.style.position = "relative"
//       elm.style.top = "-10px"