// create a new unordered list (ul) element
const newList = document.createElement("ul");
newList.className="new-navlist";
newList.textContent="navigation new stuff"
// remove the paragraph element in the nav-bar
document.querySelector(".nav-bar > p").remove();
// add your new ul element to the nav-bar
document.querySelector(`.nav-bar`).appendChild(newList);
// create two new list item (li) elements, and add some text to them
const listItem1=document.createElement(`li`);
const listItem2=document.createElement(`li`);

listItem1.textContent="my text one";
listItem2.textContent="my second text";

// add the li elements to the ul in the nav-bar
document.querySelector(`.new-navlist`).appendChild(listItem1);
document.querySelector(`.new-navlist`).appendChild(listItem2);