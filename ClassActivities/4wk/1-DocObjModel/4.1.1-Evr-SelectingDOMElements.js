// select all unordered list (ul) elements
console.log(`411ul gebtn: `,document.getElementsByTagName("ul"));
console.log(`411ul qsa: `,document.querySelectorAll("ul"));
// select all elements with the class "class-week"
console.log(`411class-week qsa: `,document.querySelectorAll(".class-week"));
// select all elements with the class "nav-bar"
console.log(`411nav-bar gebcn: `,document.getElementsByClassName("nav-bar"));
console.log(`411nav-bar qsa: `,document.querySelectorAll(".nav-bar"));
// select the element with the id "dog-picture" and save it to a variable
const grabs_dog_picture = document.querySelector("#dog-picture");
console.log(`411`,grabs_dog_picture);


//self-added - displays output on a html element
const output411=document.querySelector("#411");
let tc411=output411.textContent;
tc411+=`411ul gebtn: `,document.getElementsByTagName("ul");