function addArticle() {
  var newArticle = document.createElement('article');
  newArticle.classList.add('article');
  newArticle.innerHTML = `<h4>${websiteTitle.value}</h4><p><a href="${websiteURL.value}"> ${websiteURL.value}</a></p><div><button class="read-btn">Read</button><button class="delete-btn">Delete</button></div>`;
  asideElement.appendChild(newArticle);
  var deleteBtn = document.querySelector('.delete-btn');
  linkCount++;
}

function buttonToggle () {
  if (websiteTitle.value === '' || websiteURL.value === '' ) {
    enterBtn.disabled = true;
  } else {
    enterBtn.disabled = false;
  }
}

function removeElement() {
  event.target.parentNode.parentNode.remove("article");
  linkCount--;
  updateLinks();
}

function updateLinks () {
  var readBtn = document.querySelectorAll('.read');
  readBtn = linkCount - readBtn.length;
  linkTotal.innerText = 'Total Links: ' + linkCount;
  linkRead.innerText = 'Unread: ' + readBtn;
}

function checkURL(str) {
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  var url = str;

  if (url.match(regex)) {
    return true
  } else {
    errorMsg.innerText = 'Input fields are invalid URL';
    return false;
  }
}

var linkCount = 0;
var enterBtn = document.querySelector('#submit-btn-js');
var asideElement = document.querySelector('aside');
var errorMsg = document.querySelector('.error-msg');
var inputBox = document.querySelector('.input-box');
var linkRead = document.querySelector('#read-count-js');
var linkTotal = document.querySelector('#total-count-js');
var websiteTitle = document.querySelector('#website-title-js');
var websiteURL = document.querySelector('#website-url-js');


enterBtn.addEventListener('click', function(event) {

  event.preventDefault();
  if (checkURL(websiteURL.value)) {
    addArticle();
    updateLinks();
  }
});

inputBox.addEventListener('keyup', function (event) {
  if (event.target.classList.contains('input-fields')) {
    buttonToggle();
  }
})

asideElement.addEventListener('click', function(event) {
  if (event.target.classList.contains('read-btn')) {
    event.target.classList.toggle('read');
    updateLinks();
  } else if (event.target.className === 'delete-btn') {
    removeElement();
  }
});
