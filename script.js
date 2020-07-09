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
        var apiURL = "https://api.spoonacular.com/food/products/search?query=" + ingredient1 + "&apiKey=2c42667b7c2a405bbf07446e5d8a2887";

        $.ajax({
            url: apiURL,
            method:"GET"
        }).then(function(response) {
            console.log(response);
        });
    } 
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

// // <<<<<<< cocktail-search
// $("#search-button-drinks").on("click", displayCocktails)
// =======
// displayCocktails()
// // $("#search-button").on("click", displayCocktails) idk what the search button id looks like yet
// >>>>>>> master
