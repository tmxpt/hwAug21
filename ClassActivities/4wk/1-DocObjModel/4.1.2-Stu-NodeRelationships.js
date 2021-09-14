// select the root node
console.log(`412 rootnode: `,document.getElementsByTagName(`html`));
// select the last child of the root node
console.log(`412 lastChildRootNode: `,document.querySelector(`html`).lastElementChild);
// select all the children of the body element
console.log(`412 allChildOfBody: `,document.getElementsByTagName(`body`).children);
// select the next sibling of the h2 node
console.log(`412 nextSiblingH2: `,document.querySelector(`h2`).nextElementSibling);
// select the parent element of the h1 node
console.log(`412 parentElementH1: `,document.getElementsByTagName(`body`).parent);