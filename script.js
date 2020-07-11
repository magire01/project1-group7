$("#search-button-recipe").on("click", function (event) {

    event.preventDefault();

    var ingredient1 = $("#search-bar-recipe").val();

    displayToPage(ingredient1)
})

$(document).on("click", ".newRecipes", function (event){

    var recipe =$(this)[0].innerHTML;

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
    console.log(drink);
    displayCocktailRecipe();
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
        //Loop to create "#search-results-drink" buttons
        for (var j = 0; j < 5; j++) {
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

function displayCocktailRecipe() {
    drinksRecipeDiv = $("<div>");
    drinksRecipeDiv.attr("class", "uk-container");

    drinksRecipeDiv.attr("id", "drink-recipe-card");
    $("#drinks-content").append(drinksRecipeDiv);

    var drinkRecipeCard = $("#drink-recipe-card");
    drinkRecipeCard.attr("class", "uk-card uk-card-default uk-grid-collapse uk-child-width-1-2");
    drinkRecipeCard.append("<h3 class='uk-card-media-left uk-cover-container'> Drink Name </h3>");
    drinkRecipeCard.append("<h4 class='uk-card-media-left uk-cover-container'> Ingredients </h6");
    drinkRecipeCard.append("<ul class='uk-card-media-left uk-cover-container'> Ingredient 1 </ul>");
    drinkRecipeCard.append("<ul class='uk-card-media-left uk-cover-container'> Ingredient 2 </ul>");

    drinkRecipeCard.append("<img class='uk-card-media-right uk-cover-container' src='https://placehold.it/100'></img>");



}








