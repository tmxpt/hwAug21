// print the outer HTML of the navigation bar
    const navbar=document.querySelector(`.nav-bar`);
    console.log(`413 navbar outerhtml:\n`,navbar.outerHTML);
// print the inner HTML of the navigation bar
    console.log(`413 navbar innerHTML:\n`,navbar.outerHTML);
// print the text content of the #class-schedule-list element
    const classScheduleID=document.querySelector(`#class-schedule-list`);
    console.log(`413 class-schedule-list textcontent:\n`,classScheduleID.textContent);
// select the classList for the first class-week, then add the class "week-1"
    const firstClassWeek = document.querySelector(`.class-week`);
    console.log(firstClassWeek, `before`);
    firstClassWeek.classList.add(`week-1`);
    console.log(firstClassWeek, `after`);
// select the img element and add a src attribute
    document.querySelector(`img`).src=`https://www.goodfreephotos.com/albums/canada/british-columbia/victoria/fountains-in-butchart-garden-landscape-in-victoria-british-columbia-canada.jpg`;
// change the font color of the h1 element

    document.getElementsByTagName("h1").style.color="#ffcccc";