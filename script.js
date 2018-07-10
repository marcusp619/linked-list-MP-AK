function addArticle() {
  var newArticle = document.createElement('article');
  newArticle.classList.add('article');
  newArticle.innerHTML = `<h4>${websiteTitle.value}</h4><hr><p>${websiteURL.value}</p><hr><div><button class="read-btn">Read</button><button class="delete-btn">Delete</button></div>`;
  asideElement.appendChild(newArticle);
}

var asideElement = document.querySelector('aside');
var websiteTitle = document.querySelector('#website-title-js');
var websiteURL = document.querySelector('#website-url-js');
var enterBtn = document.querySelector('#submit-btn-js');
var deleteBtn = document.querySelector('.delete-btn');
var readArr = [];


enterBtn.addEventListener('click', function() {
  event.preventDefault();
  addArticle();
  readBtn = document.querySelectorAll('.read-btn');
  // console.log(readBtn);
  for (var btn of readBtn.entries()) {
    readBtn.addEventListener('click', function () {
      event.preventDefault();
      console.log(this);
      this.classList.toggle('read');
    })
  }
  // readBtns();
});





function readBtns() {
  // debugger;
  for (var i = 0; i < readBtn.length; i++) {
    readBtn[i].addEventListener('click', function() {
      event.preventDefault();
      this.classList.toggle('read');
      console.log(readBtn);
    });
  }
}
