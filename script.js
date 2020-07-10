// var testing = "testing the Jquery";

// console.log(testing);

// $("#testingDiv").append(testing)


var cocktailSearchValue = $("#search-bar-drinks").val();
var cocktailSearchBtn = $("#search-button-drinks");
var cocktailSearchResults = $("#drinks-results");


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


// //CocktailDB Query Builder
// function buildQueryCocktails(cocktailIngredient) {
//     var cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailIngredient}`
//     console.log(cocktailURL);
//     return cocktailURL;
// }

//CocktailDB AJAX Call
function displayCocktails(ingredientDrink) {
    // event.preventDefault()
    //  var cocktailSearch = $("#search-bar-drinks").val() 
    var cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingredientDrink}&apiKey=26ac3ffbd7f44fecab6782f58704ed4e`
    //get the ajax call for the ui
    $.ajax({
        url: cocktailURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    })
}

//CocktailDB Search Button
cocktailSearchBtn.on("click", function(event) {
    event.preventDefault();

    var cocktailIngredient = $("#search-bar-drinks").val();

    displayCocktails(cocktailIngredient);
    
    console.log("ingredient-drink: " + cocktailIngredient)

});

// //CocktailDB Generate Search Results

// function generateCocktailResults() {
    
// }

// displayRecipes();


