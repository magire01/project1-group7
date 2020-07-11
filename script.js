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
            console.log(response.drinks[0].strDrink)
            var drinksBtn = $("<button>");
            //Class = "newDrinks" for styling and click event targeting purposes
            drinksBtn.attr("class", "newDrinks")
            //Assign button text for Cocktail name from API
            drinksBtn.text(response.drinks[j].strDrink);
            //Append to "#search-results-drink" DIV
            $("#search-results-drink").append(drinksBtn);
        }
    })
}





