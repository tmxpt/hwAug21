// add an event listener to the dog picture that listens for a "click" and gives an alert
const myDoggie=document.querySelector(`#dog-picture`);
myDoggie.addEventListener("dblclick", () => (alert("image was double clicked")));
// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
const myClassSchedule=document.querySelector("#class-schedule-list");
myClassSchedule.addEventListener("mouseover", event =>(event.target.style.backgroundColor="red"));
myClassSchedule.addEventListener("mouseout", event =>(event.target.style.backgroundColor=""));
// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
const keyPresSense=document.querySelector(`body`);
keyPresSense.addEventListener(`keypress`, event => (console.log(event.key)));