// * displays the functions that we are calling
function displayCocktails(event) {
    event.preventDefault()
     var cocktailSearch = $("#search-bar-drinks").val() 
    var cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailSearch}`
    //get the ajax call for the ui
    $.ajax({
        url: cocktailURL,
        method: "GET"
    }).then(function (response) {
        results = response.drinks;
        console.log(results)
        // for (var i = 0; i < results.length; i++){
           
        // }
        // ! create a div
        // ! Do we want each drink to be in its own Card?
        // ! create a list of the different drinks
        // ! display the image of the drinks 
        // ! display the title of the drink
        // ! display the ingredients of the drink
        // ! display the instructions of how to make the drink
    })
}

$("#search-button-drinks").on("click", displayCocktails)