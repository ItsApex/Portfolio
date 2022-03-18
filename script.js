
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
const items = document.querySelectorAll('.menu-item');

// on click
function toggleItem() {
    if (this.classList.contains("sub-menu-active")) {
        this.classList.remove("sub-menu-active");
    } else {
        this.classList.remove();
        this.classList.add("sub-menu-active");
    }
}

for (let item of items) {
    if (item.querySelector(".sub-menu")) {
        item.addEventListener("click", toggleItem, false);
    }   
}