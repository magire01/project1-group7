// * displays the functions that we are calling
function displayCocktails() {
    // event.preventDefault()
    // var cocktailSearch = $("#search-bar").val() I dont know the id of the search bar yet
    var cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka`
    //get the ajax call for the ui
    $.ajax({
        url: cocktailURL,
        method: "GET"
    }).then(function (response) {
        results = response.drinks;
        for (var i = 0; i < results.length; i++){
        }
        // ! create a div
        // ! Do we want each drink to be in its own Card?
        // ! create a list of the different drinks
        // ! display the image of the drinks 
        // ! display the title of the drink
        // ! display the ingredients of the drink
        // ! display the instructions of how to make the drink
    })
}

displayCocktails()
// $("#search-button").on("click", displayCocktails) idk what the search button id looks like yet