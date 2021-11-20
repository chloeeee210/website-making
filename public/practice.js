// var footer = document.querySelector('.footer');
// var newElement = document.createElement('p');

// newElement.appendChild(footer);
var message = document.lastModified;

var footer = document.getElementsByClassName('footer');
var secondOnly = document.getElementsByClassName('footer_second_page_only');
var day = document.createTextNode(message);

secondOnly[0].appendChild(day);
footer[0].appendChild(secondOnly[0]);