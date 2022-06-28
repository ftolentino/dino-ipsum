
// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoIpsum from './js/Dino.js';

function clearFields() {
  $('#paragraph').text("");
  $('#word').text("");
}

$(document).ready(function () {
  $('#dino').click(function () {
    //if it's a form
    // UI code here
    let paragraph = $('#paragraph').val();
    let word = $('#word').val();
    clearFields();
    let promise = DinoIpsum.getDino(paragraph, word);
    promise.then(function(response) {
      $('.output').html(response);
    }, function(error) {
      $('.showError').text(`There was an error processing your request; ${error}`);
    });
  });
});