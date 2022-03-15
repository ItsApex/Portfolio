
// Email Button
const emailBtn = document.getElementsByClassName('one')[0]; //Indexing the arry 
emailBtn.addEventListener('click', function() {
    location.href = "";
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
  for (let item of items) {
      if (item.querySelector(".sub-menu")) {
        item.addEventListener("click", function() {
            item.className = 'sub-menu-active';
        });
      }

      if (item.querySelector(".sub-menu-active")) {
        item.addEventListener("click", function() {
            console.log('lk')
            item.className = 'sub-menu';
        });
      }   
  }