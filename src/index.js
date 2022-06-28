import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoService from './js/dino-service.js';

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
    let language = "HTML";
    clearFields();
    let promise = DinoService.getDino(paragraph, word);
    promise.then(function(response) {
      if (language === 'JSON') {
        const body = JSON.parse(response);
        $('.output').text(`${body}`);
      } else {
        $('.output').html(`${response}`);
      }
    }, function(error) {
      $('.showError').text(`There was an error processing your request; ${error}`);
    });
  });
});