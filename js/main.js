/* global data */
/* exported data */

var inputElement = document.querySelector('#url');
// console.log(inputElement);

var imgSource = document.querySelector('img');

function input(event) {
  // console.log(inputElement.value);
  imgSource.setAttribute('src', inputElement.value);
}

inputElement.addEventListener('input', input);

var titleEl = document.querySelector('#title');
var urlEl = document.querySelector('#url');
var notesEl = document.querySelector('#notes');

var inputValue = {
  title: '',
  url: '',
  notes: ''
};

function submit(event) {
  inputValue.title = titleEl.value;
  inputValue.url = urlEl.value;
  inputValue.notes = notesEl.value;
  // console.log(inputValue);
  event.preventDefault();
}

document.addEventListener('submit', submit);
