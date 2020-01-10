$(document).ready(function () {
    // Create click event to take user to password generator
    var passwordGenerator = $("#passwordGenerator");
    passwordGenerator.on("click", function (event) {
        event.preventDefault();
        window.open("https://jcw2865.github.io/homework-3/");
    })
    // Create click event to take user to day planner
    var dayPlanner = $("#dayPlanner");
    dayPlanner.on("click", function (event) {
        event.preventDefault();
        window.open("https://jcw2865.github.io/homework-5/");
    })
    // Create click event to take user to star wars quiz
    var starWarsQuiz = $("#starWarsQuiz");
    starWarsQuiz.on("click", function (event) {
        event.preventDefault();
        window.open("https://jcw2865.github.io/homework-4/");
    })
})