
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




elms = document.querySelectorAll("p")
// Declare the variable to hold our elements.
for(elm of elms){
    elm.style.color = "green";
}

for(elms of chocolateElms){
    elms.style.backgroundColor= "lightblue"
    
}

for(elms of cottonElms){
    elms.style.fontSize= "55px"
}

// Select the elements we wish to change.
elms[0].style.color = "red"
elms[1].style.color = "red"
elms[2].style.color = "red"
elms[3].style.color = "red"

// Loop through the elements and change them.
function changeAll(){
    window.alert("colors");
    colorElement = $("#cool-btn")
    colorElement.style.color ="yellow";
}

let coolBtn = $("#cool-btn")
coolBtn.onclick = setmessage


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