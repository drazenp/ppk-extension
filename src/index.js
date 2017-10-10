var $ = require('jquery');

// content.js
alert("Hello from your Chrome extension!");

$(function() {
    console.log($('div').length);
    $('div').append('test');
});