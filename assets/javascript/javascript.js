var queryURL = "https://api.weatherbit.io/v2.0/current?city=Roselle,NJ&key=71a3972b88d0405aa9498ffd466984e0"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
