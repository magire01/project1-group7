/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */
function buildQueryURL(event) {
  event.preventDefault();
  // queryURL is the url we'll use to query the API
  var queryParams = $("#search-bar").val().trim();
  var queryURL =
    "https://api.spoonacular.com/food/products/search?query=" +
    queryParams +
    "&apiKey=7b117b323fbe4805ae1814968944aca2";

  console.log(queryURL);
  // return queryURL;
}

//
// //  .on("click") function associated with the clear button
// $("#clear-all").on("click", clear);
$("#search-button").on("click", buildQueryURL);

function displayToPage() {
  var apiURL =
    "https://api.spoonacular.com/food/products/search?query=" +
    ingredient1 +
    "&apiKey=7b117b323fbe4805ae1814968944aca2";

  $.ajax({
    url: apiURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}
// var testing = "testing the Jquery";
$("#search-button-recipe").on("click", function (event) {
  event.preventDefault();

  var ingredient1 = $("#search-bar-recipe").val();

  displayToPage(ingredient1);
});

$(document).on("click", ".newRecipes", function (event) {
  var recipe = $(this)[0].innerHTML;

  console.log(recipe);
});

function displayToPage(ingredient) {
  var apiURL =
    "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
    ingredient +
    "&number=5&apiKey=124a6ebafffa4ec9a8b75c752871ee40";

  $.ajax({
    url: apiURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    for (i = 0; i < 5; i++) {
      var recipeBtn = $("<button class = newRecipes>").text(response[i].title);

      $("#search-results-recipe").append(recipeBtn);
    }
  });
}

//CocktailDB Search
//Click event for "#search-button-drinks"
$("#search-button-drinks").on("click", function (event) {
  event.preventDefault();
  //Empty the search results div so the next search will delete the previous search results
  $("#search-results-drink").empty();
  //variable for value of search bar
  var ingredientDrinks = $("#search-bar-drinks").val();
  //Call displayCocktails (AJAX function for cocktailDB) allowing value of search to be used in queryURL
  displayCocktails(ingredientDrinks);
});

//Click events for each generated "#search-results-drinks" button
$(document).on("click", ".newDrinks", function (event) {
  //Variable for value of button text (in this case the recipe name pulled from API)
  var drink = $(this)[0].innerHTML;
  //Button Name test
  console.log(drink);
});

// //AJAX function for TheCocktailDB API (Input is dummy variable to pass "ingredientDrinks")
// function displayCocktails(input) {
//   //URL link which will pass "input" AKA ingredientDrinks
//   var cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}+&apiKey=1`;
//   console.log(cocktailURL);
//   //Call to AJAX
//   $.ajax({
//     url: cocktailURL,
//     method: "GET",
//   }).then(function (response) {
//     console.log(response);
//     //If statement to change drinksLength variable, so the for loop that creates search results shows no more than 5
//     if (response.drinks.length < 5) {
//       var drinksLength = response.drinks.length;
//     } else {
//       var drinksLength = 5;
//     }

//     //Loop to create "#search-results-drink" buttons
//     for (var j = 0; j < drinksLength; j++) {
//       //Create Cocktail Search Result card
//       var drinksCard = $("<card>");
//       drinksCard.attr(
//         "class",
//         "uk-card uk-card-default uk-card-body uk-width-1-5"
//       );
//       drinksCard.attr("id", "drinks-card");
//       //Append Cocktail Search Result card to "#search-results-drink" div
//       $("#search-results-drink").append(drinksCard);
//       //Append Cocktail title to Cocktail Result Card - response.drinks[j].strDrink is the api call for drink title
//       drinksCard.append("<h5>" + response.drinks[j].strDrink + "</h5>");
//       //Append Cocktail button to Cocktail Result Card
//       drinksCard.append(
//         "<button class='newDrinks'>" + response.drinks[j].strDrink + "</button>"
//       );
//     }
//   });
// }

displayRecipes();
displayCocktails();

//recipes Search
//Click event for "#search-button-recipe"
$("#search-button-recipe").on("click", function (event) {
  event.preventDefault();
  //Empty the search results div so the next search will delete the previous search results
  $("#search-bar-recipe").empty();
  //variable for value of search bar
  var ingredientRecipe = $("#search-bar-recipe").val();
  //Call displayRecipes (AJAX function for spoonacular) allowing value of search to be used in queryURL
  displayRecipes(ingredientRecipe);
});

//Click events for each generated "#search-results-recipe" button
$(document).on("click", ".newRecipes", function (event) {
  //Variable for value of button text (in this case the recipe name pulled from API)
  var recipe = $(this)[0].innerHTML;
  //Button Name test
  console.log(recipe);
});

//AJAX function for spoonacular API (Input is dummy variable to pass "ingredientRecipe")
function displayRecipes(input) {
  //URL link which will pass "input" AKA ingredientDrinks
  var recipeURL =
    "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
    { input } +
    "&number=5&apiKey=124a6ebafffa4ec9a8b75c752871ee40";
  console.log(recipeURL);
  //Call to AJAX
  $.ajax({
    url: recipeURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    //If statement to change drinksLength variable, so the for loop that creates search results shows no more than 5
    if (response.recipe.length < 5) {
      var recipeLength = response.recipe.length;
    } else {
      var recipeLength = 5;
    }

    //Loop to create "#search-results-drink" buttons
    for (var j = 0; j < recipeLength; j++) {
      //Create Cocktail Search Result card
      var recipesCard = $("<card>");
      recipesCard.attr(
        "class",
        "uk-card uk-card-default uk-card-body uk-width-1-5"
      );
      recipesCard.attr("id", "recipe-card");
      //Append Cocktail Search Result card to "#search-results-drink" div
      $("#search-results-recipe").append(recipeCard);
      //Append Cocktail title to Cocktail Result Card - response.drinks[j].strDrink is the api call for drink title
      recipesCard.append("<h5>" + response.recipe[j].strRecipe + "</h5>");
      //Append Cocktail button to Cocktail Result Card
      recipesCard.append(
        "<button class='newRecipe'>" +
          response.recipe[j].strRecipe +
          "</button>"
      );
    }
  });
}

function randomFoodJoke() {
  var jokeURL =
    "https://api.spoonacular.com/food/jokes/random&apiKey=7b117b323fbe4805ae1814968944aca2";

  $.ajax({
    url: jokeURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}

function randomFoodTrivia() {
  var triviaURL =
    "https://api.spoonacular.com/food/trivia/random&apiKey=7b117b323fbe4805ae1814968944aca2";

  $.ajax({
    url: triviaURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}
randomFoodJoke();
randomFoodTrivia();