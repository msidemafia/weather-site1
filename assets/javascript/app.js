// var queryURL = "https://api.weatherbit.io/v2.0/current?city=Roselle,NJ&key=71a3972b88d0405aa9498ffd466984e0"

// var zipSubmit = $("#zipForm").val();
// var zipUrl = "https://api.weatherbit.io/v2.0/current?&postal_code=" + zipSubmit + "&country=US&key=71a3972b88d0405aa9498ffd466984e0"

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//     $("#tempBox").text((response.data[0].temp) + " degrees fahreinheit");
//     $("#weatherBox").text(response.data[0].weather.description);

//     if (response.data[0].weather.description === "Clear sky") {
//         $("#weatherImg").attr("src", "assets/images/clear-sky.jpg");
//     }
//     else if (response.data[0].weather.description === "Few clouds") {
//         $("#weatherImg").attr("src", "assets/images/few-clouds.jpg");
//     }
//     console.log(response);
//   });

// $("#submitBtn").on("click", function() {
//   $.ajax({
//     url: zipURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//   });
// });
