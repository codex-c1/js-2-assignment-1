// Our JavaScript will set the style of the html
// First we will use document.querySelectorAll to
// get all the elements that match our selection.
// Then we will

// Declare the variable to hold our elements.
let elms, para, jtSpan, go;

// Select the elements we wish to change.
elms = document.querySelectorAll("h1");

// Loop through the elements and change them.
for (elm of elms) {
  elm.style.color = "red";
  // TODO: set the backgroundColor;
}
for (elm of elms) {
  elm.style.backgroundColor = "lightcyan";
}

// TODO: select and change the p tags
//       then loop through the elements and change them.
para = document.querySelectorAll("p");

for (elm of para) {
  elm.style.color = " blue";
  elm.style.fontFamily = "Cursive";
}

// TODO: select and change the span tags
//       then loop through the elements and change them.
jtSpan = document.querySelectorAll("span");

for (elm of jtSpan) {
  elm.style.backgroundColor = "black";
  elm.style.fontFamily = "cursive";
}
// TODO: Go back to index.html and add
//       a class called "jump" to 10 elements.
//       These can be any elements you want.
//       For example: 2 h1 tags, 3 p tags, 5 span tags.
jumpUp = document.querySelectorAll(".jump");

for (elm of jumpUp) {
  elm.style.position = "relative";
  elm.style.top = "-10px";
}

function resetStyles() {
  for (elm of jumpUp) {
    elm.style.position = "relative";
    elm.style.top = "5px";
  }
}
document.getElementById("resetButton").addEventListener("click", resetStyles);

// TODO: select and change the elements with a .jump class
// Set the style of each jump so that the element moves up 10px on the page.
// HINT: You can try...
//       elm.style.position = "relative"
//       elm.style.top = "-10px"
