// $("#search-button").on("click", function(event){
//     event.preventDefault
//     var ingredient1 = $("search-bar").val();
//     console.log(ingredient1)
// })

function displayToPage() {
    var apiURL = "https://api.spoonacular.com/food/products/search?query=" + ingredient1 + "&apiKey=2c42667b7c2a405bbf07446e5d8a2887";

    $.ajax({
        url: apiURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
}
// * displays the functions that we are calling



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
        var drinksContent = $("<div>")

        $("#drinks-content").append(drinksContent);

        var wrapper = $("<div class='wrapper'>");
        var titleH2 = $("<h2>").text(response.Title);
        var drinkImg = $("<img>").attr({
            "src": response.Drinks,
            "alt": response.Title,
            "class": "drinkImg"
        })
    })


      $("#search-button-drinks").on("click", function(event){
        event.preventDefault();
        var cocktailSearch = $("#search-bar-drinks").val();
        console.log(cocktailSearch);
        displayCocktails(cocktailSearch)

    })

displayRecipes();
displayCocktails();
}

