/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */
function buildQueryURL(event) {
  event.preventDefault();
    // queryURL is the url we'll use to query the API
    var queryParams = $("#search-bar").val().trim();
    var queryURL = "https://api.spoonacular.com/food/products/search?query=" + queryParams + "&apiKey=7b117b323fbe4805ae1814968944aca2";
  
    // Begin building an object to contain our API call's query parameters
    // Set the API key
    // var queryParams = { "API-KEY": "7b117b323fbe4805ae1814968944aca2" };
  
    // Grab text the user typed into the search input, add to the queryParams object
      
      
  
    // // If the user provides a startYear, include it in the queryParams object
    // var startYear = $("#start-year")
    //   .val()
    //   .trim();
  
    // if (parseInt(startYear)) {
    //   queryParams.begin_date = startYear + "0101";
    // }
  
    // // If the user provides an endYear, include it in the queryParams object
    // var endYear = $("#end-year")
    //   .val()
    //   .trim();
  
    // if (parseInt(endYear)) {
    //   queryParams.end_date = endYear + "0101";
    // }
  
    // Logging the URL so we have access to it for troubleshooting
    // console.log( queryURL + );
    console.log(queryURL);
    // return queryURL;
  }
  
//   /**
//    * takes API data (JSON/object) and turns it into elements on the page
//    * @param {object} NYTData - object containing NYT API data
//    */
//   function updatePage(NYTData) {
//     // Get from the form the number of results to display
//     // API doesn't have a "limit" parameter, so we have to do this ourselves
//     var numArticles = $("#article-count").val();
  
//     // Log the NYTData to console, where it will show up as an object
//     console.log(NYTData);
//     console.log("------------------------------------");
  
//     // Loop through and build elements for the defined number of articles
//     for (var i = 0; i < numArticles; i++) {
//       // Get specific article info for current index
//       var article = NYTData.response.docs[i];
  
//       // Increase the articleCount (track article # - starting at 1)
//       var articleCount = i + 1;
  
//       // Create the  list group to contain the articles and add the article content for each
//       var $articleList = $("<ul>");
//       $articleList.addClass("list-group");
  
//       // Add the newly created element to the DOM
//       $("#article-section").append($articleList);
  
//       // If the article has a headline, log and append to $articleList
//       var headline = article.headline;
//       var $articleListItem = $("<li class='list-group-item articleHeadline'>");
  
//       if (headline && headline.main) {
//         console.log(headline.main);
//         $articleListItem.append(
//           "<span class='label label-primary'>" +
//             articleCount +
//             "</span>" +
//             "<strong> " +
//             headline.main +
//             "</strong>"
//         );
//       }
  
//       // If the article has a byline, log and append to $articleList
//       var byline = article.byline;
  
//       if (byline && byline.original) {
//         console.log(byline.original);
//         $articleListItem.append("<h5>" + byline.original + "</h5>");
//       }
  
//       // Log section, and append to document if exists
//       var section = article.section_name;
//       console.log(article.section_name);
//       if (section) {
//         $articleListItem.append("<h5>Section: " + section + "</h5>");
//       }
  
//       // Log published date, and append to document if exists
//       var pubDate = article.pub_date;
//       console.log(article.pub_date);
//       if (pubDate) {
//         $articleListItem.append("<h5>" + article.pub_date + "</h5>");
//       }
  
//       // Append and log url
//       $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
//       console.log(article.web_url);
  
//       // Append the article
//       $articleList.append($articleListItem);
//     }
//   }
  
//   // Function to empty out the articles
//   function clear() {
//     $("#article-section").empty();
//   }
  
//   // CLICK HANDLERS
//   // ==========================================================
  
// //   // .on("click") function associated with the Search Button
//   $("#run-search").on("click", function(event) {
//     // This line allows us to take advantage of the HTML "submit" property
//     // This way we can hit enter on the keyboard and it registers the search
//     // (in addition to clicks). Prevents the page from reloading on form submit.
//     event.preventDefault();
  
//     // Empty the region associated with the articles
//     clear();
  
//     // Build the query URL for the ajax request to the NYT API
//     var queryURL = buildQueryURL();
  
//     // Make the AJAX request to the API - GETs the JSON data at the queryURL.
//     // The data then gets passed as an argument to the updatePage function
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(updatePage);
//   });
  
  // //  .on("click") function associated with the clear button
  // $("#clear-all").on("click", clear);
  $("#search-button").on("click", buildQueryURL);
  
// $("#search-button").on("click", function(event){
//     event.preventDefault
//     var ingredient1 = $("search-bar").val();
//     console.log(ingredient1)
// })

function displayToPage(){
        var apiURL = "https://api.spoonacular.com/food/products/search?query=" + ingredient1 + "&apiKey=7b117b323fbe4805ae1814968944aca2";

        $.ajax({
            url: apiURL,
            method:"GET"
        }).then(function(response) {
            console.log(response);
        });
    } 
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
function displayRecipieCard(){
  var recipe = {
    title: "Testipie",
    img: "awesomepic",
    ingredients: "good vittles",
    instructions: "eat it",
    readyInMinutes: 15,
    servings: 8,
    mask: "diamondMask",
    backgroundImage:"hey",
    author: "the Guy",
    backgroundColor: "red",
    fontColor: "blue",
    source: "url",
    apiKey: "7b117b323fbe4805ae1814968944aca2"
  }
  var cardURL = `https://api.spoonacular.com/recipes/visualizeRecipe?` +$.param(recipe)
  $.ajax({
    url: cardURL,
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    }
  
    
}).then(function (response) {
    console.log(response);

})
}
displayRecipes();
displayCocktails();
displayRecipieCard()





