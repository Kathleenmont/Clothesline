

// global variables
var cityName = $("#search").val().trim();
var state = "," + $("#state").val();
var stateDisplay = $("#state").val();

console.log(cityName)

// firebase config
var config = {
    apiKey: config.WEATHER_BIT_API_KEY,
    authDomain: "clothesline-c81a5.firebaseapp.com",
    databaseURL: "https://clothesline-c81a5.firebaseio.com",
    projectId: "clothesline-c81a5",
    storageBucket: "clothesline-c81a5.appspot.com",
    messagingSenderId: "609030741835"
};
firebase.initializeApp(config);

var database = firebase.database();

//  firebase keeps the last searched location up and gets weather and clothes info
database.ref().on("value", function (snapshot) {
    cityName = snapshot.val().currentCity;
    stateDisplay = snapshot.val().currentState;
    state = "," + snapshot.val().currentState;
    if (state !== ",") {
        state = "," + snapshot.val().currentState + "&country=us";
    }

    $("#card-deck").html("");
    getClothing()

    // prints city and state names onto jumbotron
    $("#city").html("");
    var location = $('<i class="fas fa-map-marker-alt"></i>');
    $("#city").append(location);
    $("#city").append(cityName);

    if (stateDisplay !== "") {
        $("#city").append(", " + stateDisplay);
    } else {
        $("#city").append("");
    }
});


// master function to use in logic area
function addItem(rowPlace, id, clothing, dataClothing, photo, saying) {
    var item = $("<div>").addClass("clothing-div card").attr("id", id)
    $(rowPlace).append(item);
    var itemBody = $("<div>").addClass("card-body").attr("id", clothing + "-body");
    itemText = $("<p>").text(saying).addClass("clothing-text card-text");
    itemPhoto = $("<img>").attr("src", photo).attr("data-clothing", dataClothing).addClass("card-img-top");
    itemPhoto.addClass("clothing-image");
    $(`#${id}`).append(itemPhoto);
    $(`#${id}`).append(itemBody);
    $(`#${clothing}-body`).append(itemText);
}


// function that makes weather API call 
// and has clothing weather logic
function getClothing() {
    // clear search inputs
    $("#search").val("");
    $("#state").val("");
    $("#card-deck").html("");
    $("#etsyResults").hide();
    $('#img1').html("");
    $('#img2').html("");
    $('#img3').html("");


// zach's key
    // var weatherBitAPIKey = "3331bbb2e05e476187e7ed6f57d9ef9e";

    var weatherBitAPIKey = config.WEATHER_BIT_API_KEY;

    // kathleen's key
    // var weatherBitAPIKey = "71e5a03df5d44319b7d4b3afd11c27a3"
    var weatherBitqueryURL = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + cityName + state + "&units=I&key=" + weatherBitAPIKey;



    $.ajax({
        url: weatherBitqueryURL,
        method: "GET",
        dataType: 'json'
    }).then(function (response) {

        if (response === undefined) {
            // message if no data exsists for search word
            $("#city").html("");
            $("#city").append("City not found - try search again");

        } else {

            //  weather discription
            var description = response.data[0].weather.description;
            //  the temp high
            var high = response.data[0].max_temp;
            //   the temp  low
            var low = response.data[0].min_temp;
            // chance of percipatation
            var pop = response.data[0].pop;
            // the temp feel high
            var highApprox = response.data[0].app_max_temp;
            // the temp feel low
            var lowApprox = response.data[0].app_min_temp;
            // the wind speed is 
            var windSpeed = response.data[0].wind_spd;
            // make average temp feel for the day
            var averageTemp = Math.floor((highApprox + lowApprox) / 2);
            // current temp
            var temp = Math.floor(response.data[0].temp);


            // for weather display
            $("#current-temp").text("Current Temp " + temp + " °F");
            $("#description").text(description);
            $("#high").text("High " + high + " °F");
            $("#low").text("Low " + low + " °F");
            $("#pop").text("Chance of percipatiation is " + pop + "%");

            // logic to change weather display icon and weather photo dispay
            if (description.toLowerCase().includes("snow"))  {
                $("#weather-img").attr("src", "assets/images/icons/snow.png");
                $("#outside-img").attr("src", "assets/images/snowy-cover.jpg");
            } else if ((description.toLowerCase().includes("sun")) || (description.toLowerCase().includes("clear"))) {
                $("#weather-img").attr("src", "assets/images/icons/sun.png");
                $("#outside-img").attr("src", "assets/images/sunny-day.jpg");
            } else if (description.toLowerCase().includes("rain")) {
                $("#weather-img").attr("src", "assets/images/icons/rain.png");
                $("#outside-img").attr("src", "assets/images/rainyday.jpg");
            } else if (description.toLowerCase().includes("thunder")) {
                $("#weather-img").attr("src", "assets/images/icons/thunder.png");
                $("#outside-img").attr("src", "assets/images/stormy-day.jpg");
            } else if ((description.toLowerCase().includes("scattered clouds")) || (description.toLowerCase().includes("Few clouds"))) {
                $("#weather-img").attr("src", "assets/images/icons/partly-cloudy.png");
                $("#outside-img").attr("src", "assets/images/partly-cloudy-day.jpg");
            } else if ((description.toLowerCase().includes("clouds"))  || (description.toLowerCase().includes("cloudy"))) {
                $("#weather-img").attr("src", "assets/images/icons/cloudy.png");
                $("#outside-img").attr("src", "assets/images/cloudy-day.jpg");
            }


            // this functionis here because it uses the pop response in it logic 
            //  so it is in the ajax call function
            function umbrella(rowPlace) {
                var umbrellaText = "";
                var umbrella = $("<div>").addClass("clothing-div card").attr("id", "umbrella1")
                $(rowPlace).append(umbrella);
                var umbrellaBody = $("<div>").addClass("card-body").attr("id", "umbrella-body");
                if ((pop > 20) && (pop < 55)) {
                    umbrellaText = $("<p>").text("Think about taking an umbrella").addClass("clothing-text card-text");
                } else if (pop >= 55) {
                    umbrellaText = $("<p>").text("Take an umbrella").addClass("clothing-text card-text");
                }
                umbrellaPhoto = $("<img>").attr("src", "assets/images/umbrella.jpg").attr("data-clothing", "umbrella-compact").addClass("card-img-top");
                umbrellaPhoto.addClass("clothing-image")
                $("#umbrella1").append(umbrellaPhoto);
                $("#umbrella1").append(umbrellaBody);
                $("#umbrella-body").append(umbrellaText);
            }

            // logic for weather calls clothing display functions
            if (averageTemp <= 34) {
                if ((description.includes("snow")) || (description.includes("Snow"))) {

                    addItem("#card-row-1", "parka1", "parka", "parka-coat", "assets/images/parka.jpeg", "Wear a parka");
                    addItem("#card-row-1", "hat1", "hat", "beanie-warm", "assets/images/hat.jpg", "Bring a hat");
                    addItem("#card-row-1", "gloves1", "gloves", "warm-gloves", "assets/images/gloves.jpg", "Take gloves");
                    $("#card-row-2").append("<h4 class='clearfix col-md-12'style=' clear: both; color:white';>Add-Ons<br></h4>");
                    addItem("#card-row-2", "socks1", "socks", "wool-socks-adults", "assets/images/socks.jpg", "Wear warm socks");
                    addItem("#card-row-2", "scarf1", "scarf", "warm-scarf", "assets/images/scarf.jpg", "Consider a scarf");
                    addItem("#card-row-2", "snow-boots1", "snowBoots", "snow-boots-winter", "assets/images/snowBoots.jpg", "Don't forget snow boots")


                } else {
                    addItem("#card-row-1", "parka1", "parka", "parka", "assets/images/parka.jpeg", "Wear a parka");
                    addItem("#card-row-1", "hat1", "hat", "warm-gloves", "assets/images/hat.jpg", "Bring a hat");
                    addItem("#card-row-1", "gloves1", "gloves", "warm-gloves", "assets/images/gloves.jpg", "Take gloves");
                    $("#card-row-2").append("<h4 class='clearfix col-md-12'style=' clear: both; color:white';>Add-Ons<br></h4>");
                    addItem("#card-row-2", "socks1", "socks", "wool-socks", "assets/images/socks.jpg", "Wear warm socks");
                    addItem("#card-row-2", "scarf1", "scarf", "warm-scarf", "assets/images/scarf.jpg", "Consider a scarf");
                }

            } else if ((averageTemp > 34) && (averageTemp < 50)) {
                addItem("#card-row-1", "coat1", "coat", "coat-winter-warm", "assets/images/coat.jpg", "Wear a coat");
                addItem("#card-row-1", "hat1", "hat", "warm-gloves", "assets/images/hat.jpg", "Bring a hat");
                addItem("#card-row-1", "scarf1", "scarf", "warm-scarf", "assets/images/scarf.jpg", "Consider a scarf");

            } else if ((averageTemp >= 50) && (averageTemp <= 60)) {
                if (windSpeed >= 14) {
                    addItem("#card-row-1", "jacket1", "jacket", "jacket-vintage-clothing", "assets/images/jacket.jpg", "Wear a jacket");
                    addItem("#card-row-1", "windbreaker1", "windbreaker", "windbreaker-jacket", "assets/images/windbreaker.jpg", "Consider a windbreaker");
                } else {
                    addItem("#card-row-1", "jacket1", "jacket", "jacket-vintage-clothing", "assets/images/jacket.jpg", "Wear a jacket");
                }
            } else if ((averageTemp >= 61) && (averageTemp < 70)) {
                addItem("#card-row-1", "lightJacket1", "lightJacket", "jacket-vintage", "assets/images/lightJacket.jpg", "Take a light jacket or sweater")
            } else if ((averageTemp >= 70) && (averageTemp <= 75)) {
                addItem("#card-row-1", "sweater1", "sweater", "sweater-vintage", "assets/images/sweater.jpg", "Consider taking a light sweater")
            } else if (averageTemp >= 76) {
                addItem("#card-row-1", "tshirt1", "tshirt", "t-shirt-vintage-clothing", "assets/images/tshirt.jpg", "Wear something lite, consider a t-shirt")
                addItem("#card-row-1", "shorts1", "shorts", "shorts-vintage-clothing", "assets/images/shorts.jpg", "Maybe some shorts")
                addItem("#card-row-1", "sandals1", "sandals", "sandals-shoes", "assets/images/sandals.jpg", "Consider wearing sandals")
            }

            if (averageTemp >= 70) {
                if ((description.includes("sun")) || (description.includes("Clear")) || (description.includes("clear")) || (description.includes("Sun"))) {
                    $("#card-row-2").append("<h4 class='clearfix col-md-12'style=' clear: both; color:white';>Add-Ons<br></h4>");
                    addItem("#card-row-2", "sunglasses1", "sunglasses", "sunglasses-vintage", "assets/images/sunglasses.jpg", "Bring sunglasses")
                }
            }

            if (averageTemp >= 35) {
                if ((pop >= 20) && (pop < 40)) {
                    $("#card-row-2").append("<h4 class='clearfix col-md-12'style=' clear: both; color:white';>Add-Ons<br></h4>");
                    umbrella("#card-row-2")
                }
            }
            if (averageTemp >= 35) {
                if (pop >= 40) {
                    $("#card-row-2").append("<h4 class='clearfix col-md-12'style=' clear: both; color:white';>Add-Ons<br></h4>");
                    umbrella("#card-row-2")
                    addItem("#card-row-2", "rainBoot1", "rainBoots", "rain-boots-rubber", "assets/images/rainBoots.jpg", "Consider wearing rain boots")
                    addItem("#card-row-2", "rainJacket1", "rainJacket", "rain-jacket", "assets/images/rainJacket.jpg", "Think about a rain jacket");
                }
            }
        }
    });


}

// click event for location search
$("#submit-button").on("click", function (event) {
    event.preventDefault();
    // clear previous search results
    $(".card-deck").html("");


    cityName = $("#search").val().trim();
    state = "," + $("#state").val();
    stateDisplay = $("#state").val();


    var displayCity = {
        currentCity: cityName,
        currentState: stateDisplay
    }

    database.ref().set(displayCity);

    // clear previous search results again to prevent repeats
    $(".card-deck").clear();

    

    getClothing();

});




