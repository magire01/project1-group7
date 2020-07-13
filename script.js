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

})

function displayToPage(ingredient) {

    var apiURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredient + "&number=5&apiKey=cbd9ed14fce948619e1c479e46d3406e";

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
    var apiUrl = "https://api.spoonacular.com/recipes/" + recipe + "/information?&apiKey=cbd9ed14fce948619e1c479e46d3406e"

    $.ajax({
        url: apiUrl,
        method: "GET"
    }).then(function (response) {

        console.log(response)

        var recipeCard = $("<card>");

        var recipeTitle = $("<h3>").text(response.title);

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

    })

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

