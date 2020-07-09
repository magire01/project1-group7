// var testing = "testing the Jquery";

// console.log(testing);

// $("#testingDiv").append(testing)





// * displays the functions that we are calling

function displayRecipes(){
    var ingredient1 = "eggs"
    var apiURL = "https://api.spoonacular.com/food/products/search?query=" + ingredient1 + "&apiKey=2c42667b7c2a405bbf07446e5d8a2887";
    $.ajax({
        url: apiURL,
        method:"GET"
    }).then(function(response) {
        console.log(response);
    });
}

function displayCocktails() {
    // event.preventDefault()
    //  var cocktailSearch = $("#search-bar-drinks").val() 
    var cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka`
    //get the ajax call for the ui
    $.ajax({
        url: cocktailURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
}

displayRecipes();
displayCocktails();

