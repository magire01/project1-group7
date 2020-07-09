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