function addArticle() {
  var newArticle = document.createElement('article');
  newArticle.classList.add('article');
  newArticle.innerHTML = `<h4>${websiteTitle.value}</h4><p>${websiteURL.value}</p><div><button class="read-btn">Read</button><button class="delete-btn">Delete</button></div>`;  
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

enterBtn.addEventListener('click', function(event) {
  event.preventDefault();
  addArticle();
});

asideElement.addEventListener('click', function() {
  if (event.target.classList.contains('read-btn')) {
    event.target.classList.toggle('read');
  } else if (event.target.className === 'delete-btn') {
    removeElement();
  }
});
