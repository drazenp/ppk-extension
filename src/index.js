var $ = require('jquery');

// content.js
alert("Hello from your Chrome extension!");

$(function() {
    console.log($('div').length);

    $('h1').click(function() {
        console.log('H1 click.');
    });
});