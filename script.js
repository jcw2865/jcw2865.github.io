$(document).ready(function () {
    // Create click event to take user to password generator
    var passwordGenerator = $("#passwordGenerator");
    passwordGenerator.on("click", function (event) {
        event.preventDefault();
        window.open("https://jcw2865.github.io/Password-Generator/");
    })
    // Create click event to take user to day planner
    var dayPlanner = $("#dayPlanner");
    dayPlanner.on("click", function (event) {
        event.preventDefault();
        window.open("https://jcw2865.github.io/Day-Planner/");
    })
    // Create click event to take user to star wars quiz
    var starWarsQuiz = $("#employeeTracker");
    starWarsQuiz.on("click", function (event) {
        event.preventDefault();
        window.open("https://github.com/jcw2865/Employee-Tracker");
    })
    // Create click event to take user to their daily homepage
    var dailyHomepage = $("#dailyHomepage");
    dailyHomepage.on("click", function (event) {
        event.preventDefault();
        window.open("https://jcw2865.github.io/Daily-Homepage/");
    })
    // Create click event to take user to the express note taker
    var expressNoteTaker = $("#expressNoteTaker");
    expressNoteTaker.on("click", function (event) {
        event.preventDefault();
        window.open("https://shrouded-chamber-01100.herokuapp.com/");
    })
    // Create click event to take user to the express note taker
    var electedOfficials = $("#electedOfficials");
    electedOfficials.on("click", function (event) {
        event.preventDefault();
        window.open("https://quiet-meadow-10109.herokuapp.com/");
    })
})