/*
function showProperties(element) {
  // document.getElementById('image').innerHTML = element.alt;
  document.getElementById('brief').innerHTML = 'This is a landing page for Nolimits Stores, designed to enable customers to place demand for products of choice by sending requests through a provided form.';
}

function Undo(element) {
  document.getElementById('brief').innerHTML = 'Hover over each project image to read its brief details here!';
}



function showProperties3(element) {
  // document.getElementById('image').innerHTML = element.alt;
  document.getElementById('brief').innerHTML = 'This is a landing page for Premium Airways, designed to enable travellers to book a flight by clicking on relevant buttons, and also read reviews by other travellers';
}

function Undo(element) {
  document.getElementById('brief').innerHTML = 'Hover over each project image to read its brief details here!';
}de
*/

document.querySelector('.project-a').addEventListener('mouseover', function () {
  document.querySelector('.detail').style.backgroundColor = '#60b347';
  document.querySelector('.detail-h2').style.color = '#fff';
  document.querySelector('.detail-h2').textContent = 'This is a landing page for Nolimits Stores, designed to enable customers to place demand for products of choice by sending requests through a provided form.';

});

document.querySelector('.second-slide').addEventListener('mouseover', function () {
  document.querySelector('.detail').style.backgroundColor = '#60b347';
  document.querySelector('.detail-h2').style.color = '#fff';
  document.querySelector('.detail-h2').textContent = 'This is a landing page for Premium Airways, designed to enable travellers to book a flight by clicking on relevant buttons, and also read reviews by other travellers';

});



document.querySelector('.project-a').addEventListener('mouseout', function () {
  document.querySelector('.detail').style.backgroundColor = 'rgb(216, 248, 242)';
  document.querySelector('.detail-h2').style.color = 'rgb(255, 94, 0)';
  document.querySelector('.detail-h2').textContent = 'Hover over each project image to read its brief details here';
  // console.log(guess, typeof guess);

});

document.querySelector('.second-slide').addEventListener('mouseout', function () {
  document.querySelector('.detail').style.backgroundColor = 'rgb(216, 248, 242)';
  document.querySelector('.detail-h2').style.color = 'rgb(255, 94, 0)';
  document.querySelector('.detail-h2').textContent = 'Hover over each project image to read its brief details here';
  // console.log(guess, typeof guess);

});
