function addArticle() {
  var newArticle = document.createElement('article');
  newArticle.classList.add('article');
  newArticle.innerHTML = `<h4>${websiteTitle.value}</h4><hr><p>${websiteURL.value}</p><hr><div><button class="read-btn">Read</button><button class="delete-btn" onclick="removeElement()">Delete</button></div>`;  
  asideElement.appendChild(newArticle);
  var deleteBtn = document.querySelector('.delete-btn');
}

function removeElement() {
  event.target.parentNode.parentNode.remove("article");
}

var enterBtn = document.querySelector('#submit-btn-js');
var asideElement = document.querySelector('aside');
var websiteTitle = document.querySelector('#website-title-js');
var websiteURL = document.querySelector('#website-url-js');
// var readBtn = document.querySelector('.read-btn');

enterBtn.addEventListener('click', function() {
  event.preventDefault();
  addArticle()
});


