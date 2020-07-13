$("#search-button-recipe").on("click", function (event) {

    event.preventDefault();

    var ingredient1 = $("#search-bar-recipe").val(); 

    displayToPage(ingredient1)
})

$(document).on("click", ".newRecipes", function (event) {

    $("#recipe-content").empty();

    var recipe = $(this).data("name")

    console.log("This button was press: \n", recipe)

    buildRecipeCard(recipe);

    console.log("This button was press: \n",recipe)
})

function displayToPage(ingredient) {

    var apiURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredient + "&number=5&apiKey=124a6ebafffa4ec9a8b75c752871ee40";

    $.ajax({
        url: apiURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        for (i = 0; i < 5; i++) {

            var recipeBtn = $("<button class = newRecipes>").text(response[i].title);

            recipeBtn.attr("data-name", response[i].id)

            $("#search-results-recipe").append(recipeBtn)

        }
    });

}

function buildRecipeCard(recipe) {
    var apiUrl = "https://api.spoonacular.com/recipes/" + recipe + "/information?&apiKey=124a6ebafffa4ec9a8b75c752871ee40"
    $.ajax({
        url: apiUrl,
        method: "GET"
    }).then(function(response) {

        console.log(response)
        
        var recipeCard = $("<card>");

        var recipeTitle = $("<h2>").text(response.title);

        recipeCard.append(recipeTitle);

        var recipeImage = $("<img>").attr("src", response.image);

        recipeCard.append(recipeImage);

        var recipePrepTime = $("<p>").text("Prep Time - " + response.preparationMinutes + " Minutes");

        recipeCard.append(recipePrepTime);

        var recipeCookTime = $("<p>").text("Cook Time - " + response.cookingMinutes + " Minutes");

        recipeCard.append(recipeCookTime);

        var servings = $("<p>").text("Servings - " + response.servings);

        recipeCard.append(servings);

        var link = $("<a>").text(response.sourceUrl);
        recipeCard.append(link);

        $("#recipe-content").append(recipeCard)

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
            // var drinksCard = $("<card>");
            // drinksCard.attr("class", "uk-card uk-card-default uk-card-body uk-width-1-5");
            // drinksCard.attr("id", "drinks-card");
            // //Append Cocktail Search Result card to "#search-results-drink" div
            // $("#search-results-drink").append(drinksCard);
            // //Append Cocktail title to Cocktail Result Card - response.drinks[j].strDrink is the api call for drink title
            // drinksCard.append("<h5>"+ response.drinks[j].strDrink + "</h5>");
            //Append Cocktail button to Cocktail Result Card
            $("#search-results-drink").append("<button class='newDrinks'>" + response.drinks[j].strDrink + "</button>");
        }
    })
}
