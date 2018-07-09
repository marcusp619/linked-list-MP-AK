function addArticle() {
  var newArticle = document.createElement('article');
  newArticle.classList.add('article');
  newArticle.innerHTML = `<h4>${websiteTitle.value}</h4><hr><p>${websiteURL.value}</p><hr><div><button>Read</button><button>Delete</button></div>`;  
  asideElement.appendChild(newArticle);
}

var asideElement = document.querySelector('aside');
var websiteTitle = document.querySelector('#website-title-js');
var websiteURL = document.querySelector('#website-url-js');
var enterBtn = document.querySelector('#submit-btn-js');

enterBtn.addEventListener('click', function() {
  event.preventDefault();
  addArticle();
})