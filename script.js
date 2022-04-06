
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
    'javaScript',
    'c++',
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
    '- I have over 6 months of experience and have built a couple successful projects. This is my preferred language.<br><br> - Rating : 6/10',
    '- Have over 6 months of experience , But havent made any significant project. <br><br> - Rating : 4/10',
    '- Have over 2 years of experience and a significant number of projects under my portfolio. I went through a lot of libraries and have aquired a lot of knowelage in this language.  <br><br> -  Rating : 8/10',
    '- Learned this language In just 1 month and Made an Epic App that could trace Co2. <br><br> - I am not sure how much more I have to learn, so I am not going to rate myself here.',
    '- My all-time favorite software. I have completed numerous projects and am proficient in all shortcuts. <br><br> - Rating : 8/10',
    '- I used this software to create all of my text elements. Its a very creative piece of software that I enjoy utilizing. <br><br> - Rating : 7/10',
    '- I tried it out, but its not as good as Premier Pro. I used it for a few of my projects and cant remember how to use it now.<br><br> - Since I cant use it I wont rate myself',
    '- My first Software which I used to learn Video Editing , And used to it fill potential.  <br><br> - Rating : 10/10 ',
    '- I have done a lot of epic projects, and I know all the shortcuts. With Photoshop you can do anything to manipulate images, and have total control. <br><br> - Rating : 8/10',
    '- Made many Vector Project like Logos, App Interface. Have beeing using this For a very long time.<br><br> - Rating : 7/10 ',
    '- Recently Started using this software for UI/UX designing. <br><br> - Rating : 3/10 '
];

let usedate =[
    'June 2021 - Present',
    'June 2021 - Present',
    'July 2019 - Present',
    'Dec 2021 - Present',
    'Jun 2019 - Present',
    'Jun 2019 - Present',
    'Dec 2016 - Present',
    'Dec 2016 - Present',
    'Dec 2018 - Present',
    'Mar 2019 - Present',
    'Dec 2021 - Present'
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