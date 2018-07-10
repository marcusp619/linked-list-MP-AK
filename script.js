function addArticle() {
  var newArticle = document.createElement('article');
  newArticle.classList.add('article');
  newArticle.innerHTML = `<h4>${websiteTitle.value}</h4><p><a href="${websiteURL.value}"> ${websiteURL.value}</a></p><div><button class="read-btn">Read</button><button class="delete-btn">Delete</button></div>`;
  asideElement.appendChild(newArticle);
  var deleteBtn = document.querySelector('.delete-btn');
}

function checkInputs () {
  if (websiteTitle.value === '' || websiteURL.value === '' ){
    errorMsg.innerText = 'Input fields are empty';
  } else {
      addArticle();
  }
}

function removeElement() {
  event.target.parentNode.parentNode.remove("article");
}

var enterBtn = document.querySelector('#submit-btn-js');
var asideElement = document.querySelector('aside');
var errorMsg = document.querySelector('.error-msg');
var websiteTitle = document.querySelector('#website-title-js');
var websiteURL = document.querySelector('#website-url-js');

enterBtn.addEventListener('click', function(event) {

  event.preventDefault();
  checkInputs();

});

asideElement.addEventListener('click', function() {
  if (event.target.classList.contains('read-btn')) {
    event.target.classList.toggle('read');
  } else if (event.target.className === 'delete-btn') {
    removeElement();
  }
});
