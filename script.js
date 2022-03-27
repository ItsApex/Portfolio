
// Email Button
const emailBtn = document.getElementsByClassName('one')[0]; //Indexing the arry 
emailBtn.addEventListener('click', function() {
    window.open("https://twitter.com/ItsApexAryan", "_blank");
});

// linkedin Button
const linkedInBtn = document.getElementsByClassName('two')[0]; //Indexing the arry 
linkedInBtn.addEventListener('click', function() {
    window.open("https://www.linkedin.com/in/aryan-singh-b344a7211/", "_blank");
});

// youtube button
const youtubeBtn = document.getElementsByClassName('three')[0]; //Indexing the arry 
youtubeBtn.addEventListener('click', function() {
    window.open("https://www.youtube.com/channel/UCUqgy9ToNERxGGaYnh8c-Mw", "_blank");
});

// github button
const githubBtn = document.getElementsByClassName('four')[0]; //Indexing the arry 
githubBtn.addEventListener('click', function() {
    window.open("https://github.com/ItsApex", "_blank");
});

// Side Nav Toogle Buttons
// const items = document.querySelectorAll('.menu-item');
// const menu = document.querySelector(".menu");

// on click
// function toggleItem() {
//     if (this.classList.contains(("sub-menu-active"))) {
//         this.classList.toggle("sub-menu-active");
//     } else if (menu.querySelector(".sub-menu-active")) {
//         menu.querySelector(".sub-menu-active").classList.toggle("sub-menu-active");
//         this.classList.toggle("sub-menu-active");
//     } else {
//         this.classList.toggle("sub-menu-active");
//     }
// }

/* Event listener */
// for (let item of items) {
//     if (item.querySelector(".sub-menu")) {
//         item.addEventListener("click", toggleItem, false);
//     }
// }

$(document).ready(function(){
    $("#test").click(function(){
        $("#submenu-1").slideToggle("slow");
    });

    $("#test2").click(function(){
        $("#submenu-2").slideToggle("slow");
    });

    $("#test3").click(function(){
        $("#submenu-3").slideToggle("slow");
    });
});

// View port for each element
const paraInfo = document.getElementById('para-info');
const HeadingInfo = document.getElementById('Heading-info');
const dateinfo = document.getElementById("date");

let element = [
    'c++',
    'javaScript',
    'python',
    'flutter',  
    'premier-pro',
    'after-effects',
    'vegas-pro',
    'filmora',
    'photoshop',
    'illustrator',
    'figma'
];

let innertext= [
    '- C++ <br><br> - Hello World',
    '- JavaScript <br><br> - Hello World',
    '- Python <br><br> - Hello World',
    '- flutter <br><br> - Hello World',
    '- Premier Pro <br><br> - Noice',
    ' - After Efects <br><br> - Noice',
    ' - Vegas Pro <br><br> - lets go ',
    '- Filmora <br><br> - DOnt know ',
    '- Photoshop <br><br> - Expert ',
    '- Illustrator <br><br> - Expert ',
    '- Figma <br><br> - Expert '
];

let usedate =[
    'Jun 2021 - Present',
    'March 2019 - Present',
    'June 2071 - Present',
    'Jun 2011 - Present',
    'Jun 2022 - Present',
    'March 2041 - Present',
    'Dec 2001 - Present',
    'Jun 2031 - Present',
    'Jun 2024 - Present',
    'Jun 2011 - Present',
    'Jun 2012 - Present'
]

for (let item of element) {
    document.getElementById(item).addEventListener('click', () => {
        console.log(HeadingInfo.innerHTML)
        HeadingInfo.innerHTML = `${document.getElementById(item).innerText}`;
        let temps = element.indexOf(item);
        paraInfo.innerHTML = `${innertext[temps]}`;
        dateinfo.innerHTML = `${usedate[temps]}`;
    });
}

// Email
function sendEmail() {
    var message = document.getElementById('message').value;
    var email = document.getElementById('email').value;
    var emailBody = "Email: " + email + "<br> Message: " + message;
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "ec4aec47e748d6",
        Password : "fc1d14322f426a",
        To : 'aryansingh6011@gmail.com',
        From : "sender@example.com",
        Subject : "Test email",
        Body : emailBody
    });
}