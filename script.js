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
$("#search-button-recipe").on("click", function (event) {

    event.preventDefault();

    var ingredient1 = $("#search-bar-recipe").val();

    displayToPage(ingredient1)
})

$(document).on("click", ".newRecipes", function (event){

    var recipe=$(this)[0].innerHTML;

    console.log(recipe)

})



function displayToPage(ingredient){
    
        var apiURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredient + "&number=5&apiKey=124a6ebafffa4ec9a8b75c752871ee40";

        $.ajax({
            url: apiURL,
            method:"GET"
        }).then(function(response) {

            console.log(response)
            
            for (i = 0; i < 5; i++){

                var recipeBtn = $("<button class = newRecipes>").text(response[i].title);

                $("#search-results-recipe").append(recipeBtn)

            }
        });
        
    } 

//CocktailDB Search
//Click event for "#search-button-drinks"
$("#search-button-drinks").on("click", function(event) {
     event.preventDefault();
     //Empty the search results div so the next search will delete the previous search results
     $("#search-results-drink").empty();
     //variable for value of search bar
     var ingredientDrinks = $("#search-bar-drinks").val();
     //Call displayCocktails (AJAX function for cocktailDB) allowing value of search to be used in queryURL
     displayCocktails(ingredientDrinks)
})

//Click events for each generated "#search-results-drinks" button
$(document).on("click", ".newDrinks", function (event){
    //Variable for value of button text (in this case the recipe name pulled from API)
    var drink = $(this)[0].innerHTML;
    //Button Name test
    var ingredientDrinks2 = $("#search-bar-drinks").val();
   // displayDrink(ingredientDrinks2);
    displayContentDrink(ingredientDrinks2);
    console.log(drink);
})

//AJAX function for TheCocktailDB API (Input is dummy variable to pass "ingredientDrinks")
function displayCocktails(input) {
    //URL link which will pass "input" AKA ingredientDrinks
    var cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}+&apiKey=1`
    console.log(cocktailURL);
    //Call to AJAX 
    $.ajax({
        url: cocktailURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        //If statement to change drinksLength variable, so the for loop that creates search results shows no more than 5 
        if (response.drinks.length < 5) {
            var drinksLength = response.drinks.length;
        } else {
            var drinksLength = 5;
        }

        //Loop to create "#search-results-drink" buttons
        for (var j = 0; j < drinksLength; j++) {
            //Create Cocktail Search Result card
            var drinksCard = $("<card>");
            drinksCard.attr("class", "uk-card uk-card-default uk-card-body uk-width-1-5");
            drinksCard.attr("id", "drinks-card");
            //Append Cocktail Search Result card to "#search-results-drink" div
            $("#search-results-drink").append(drinksCard);
            //Append Cocktail title to Cocktail Result Card - response.drinks[j].strDrink is the api call for drink title
            drinksCard.append("<h5>"+ response.drinks[j].strDrink + "</h5>");
            //Append Cocktail button to Cocktail Result Card
            drinksCard.append("<button class='newDrinks'>" + response.drinks[j].strDrink + "</button>");
        }
    })
}

    
    
    function displayContentDrink (input2) {
    
        var cocktailURL2 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input2}+&apiKey=1`
        console.log(cocktailURL2);
        //Call to AJAX 
        $.ajax({
            url: cocktailURL2,
            method: "GET"
        }).then(function (response) {
            console.log(response.drinks[0].strDrink)
    var drinksContent = $("<div class='drink content'>");
    $("#drinks-content").append(drinksContent);


    var drinkName = $("<h2>")
    drinkName.text(response.drinks[0].strDrink);
    console.log(reponse.Instructions)
    drinksContent.append(drinkName);
    var drinkImg = $("<img>").attr({
        "src": response.DrinkThumb,
        "alt": response.Drink,
        "class": "drinkImg" 
    });

    drinksContent.append(drinkImg);
    var drinkRecipe = $("<p>").text(response.Instructions);
   drinksContent.append(drinkRecipe)
});
    }

   
 
