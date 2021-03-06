$("#search-button-recipe").on("click", function (event) {

    event.preventDefault();

    $("#search-results-recipe").empty();

    var ingredient1 = $("#search-bar-recipe").val();

    displayToPage(ingredient1)
})

$(document).on("click", ".newRecipes", function (event) {

    $("#recipe-content").empty();

    var recipe = $(this).data("name")

    console.log("This button was press: \n", recipe)

    buildRecipeCard(recipe);
    nutritionInfo(recipe);

    console.log("This button was press: \n",recipe)
})

function displayToPage(ingredient) {

    var apiURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredient + "&number=5&apiKey=26ac3ffbd7f44fecab6782f58704ed4e";

    $.ajax({
        url: apiURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        for (i = 0; i < 5; i++) {

            var recipeBtn = $("<button class = newRecipes>").text(response[i].title);

            recipeBtn.attr("data-name", response[i].id)

            $("#search-results-recipe").append(recipeBtn);

        }
    });

}

function buildRecipeCard(recipe) {
    var apiUrl = "https://api.spoonacular.com/recipes/" + recipe + "/information?&apiKey=26ac3ffbd7f44fecab6782f58704ed4e"
    $.ajax({
        url: apiUrl,
        method: "GET"
    }).then(function (response) {

        console.log(response)
        
        var recipeCard = $("<div class = 'card'>");

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
        link.attr("href", response.sourceUrl)

        $("#recipe-content").append(recipeCard)

    });
}

//CocktailDB Search
//Click event for "#search-button-drinks"
$("#search-button-drinks").on("click", function (event) {
    event.preventDefault();

    $("#drinks-content").empty();
    //Empty the search results div so the next search will delete the previous search results
    $("#search-results-drink").empty();
    //variable for value of search bar
    var ingredientDrinks = $("#search-bar-drinks").val();
    //Call displayCocktails (AJAX function for cocktailDB) allowing value of search to be used in queryURL
    displayCocktails(ingredientDrinks)
})

//Click events for each generated "#search-results-drinks" button
$(document).on("click", ".newDrinks", function (event) {
    //Variable for value of button text (in this case the recipe name pulled from API)
    $("#drinks-content").empty();

    var drinkRecipe = $(this).data("name")
    //Button Name test
    console.log(drinkRecipe);

    displayContentDrink(drinkRecipe);
})



//AJAX function for TheCocktailDB API (Input is dummy variable to pass "ingredientDrinks")
function displayCocktails(input) {
    //URL link which will pass "input" AKA ingredientDrinks
    var cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}+&apiKey=1`

    $.ajax({
        url: cocktailURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        for (var i = 0; i < 5; i++) {

            var drinksBtn = $("<button class = newDrinks>").text(response.drinks[i].strDrink);

            console.log(response.drinks[i].strDrink)

            drinksBtn.attr("data-name", response.drinks[i].strDrink)

            $("#search-results-drink").append(drinksBtn);
        }
    })
}

function displayContentDrink(input2) {

    var cocktailURL2 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input2}&apiKey=1`
    console.log(cocktailURL2);
    //Call to AJAX 
    $.ajax({
        url: cocktailURL2,
        method: "GET"
    }).then(function (response) {

        console.log(response)
       
        var drinksContent = $("<div class = 'card'>");
        $("#drinks-content").append(drinksContent);
        drinksContent.append("<h2>" + response.drinks[0].strDrink + "<h2>");

        var imgURL = response.drinks[0].strDrinkThumb;

        var image = $("<img>").attr("src", imgURL); 

        drinksContent.append(image);

        var drink = response.drinks[0];

        drinksContent.append("<p>Ingredient 1: " + response.drinks[0].strIngredient1 + "<p>");

        if (drink.strIngredient2) {
            drinksContent.append("<p>Ingredient 2: " + response.drinks[0].strIngredient2 + "<p>");
        }

        if (drink.strIngredient3) {
            drinksContent.append("<p>Ingredient 3: " + response.drinks[0].strIngredient3 + "<p>");
        }

        if (drink.strIngredient4){
        drinksContent.append("<p>Ingredient 4: " + response.drinks[0].strIngredient4 + "<p>");
        }

        if (drink.strIngredient5) {
        drinksContent.append("<p>Ingredient 5: " + response.drinks[0].strIngredient5 + "<p>"); 
        }

        drinksContent.append("<p>Instructions: " + response.drinks[0].strInstructions + "<p>");


        
    })
}function nutritionInfo(id) {
  var nutritionURL =
    `https://api.spoonacular.com/recipes/${id}/nutritionWidget?apiKey=26ac3ffbd7f44fecab6782f58704ed4e&defaultCss=true`;

  $.ajax({
    url: nutritionURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}


function randomFoodJoke() {
  var jokeURL =
    "https://api.spoonacular.com/food/jokes/random?apiKey=26ac3ffbd7f44fecab6782f58704ed4e";

  $.ajax({
    url: jokeURL,
    method: "GET",
  }).then(function (response) {
    console.log("Have you heard? ....." + response.text);
    $("#food-joke").append("<h4 class='Title'>Random Food Joke</h4>")
    $("#food-joke").append("<p class='HAHA'> Have you heard? ....." + response.text + "</p>")
  });
}

function randomFoodTrivia() {
  var triviaURL =
    "https://api.spoonacular.com/food/trivia/random?apiKey=26ac3ffbd7f44fecab6782f58704ed4e";

  $.ajax({
    url: triviaURL,
    method: "GET",
  }).then(function (response) {
    console.log("Random Fact :" + response.text);
    $("#food-trivia").append("<h4 class='Title'>Random Fun Fact</h4>")
    $("#food-trivia").append("<p class='WOW'> Did You Know? ....." + response.text + "</p>")
  });
}
randomFoodJoke();
randomFoodTrivia();
