
// global variables
var cityName = $("#search").val().trim();
var state = "," + $("#state").val();
var stateDisplay = $("#state").val();


// getting input for us check
var usa = $("#usa").is(':checked');
if (usa === false) {
    usa = "";
} else {
    usa = "us";
}

// firebase config
var config = {
    apiKey: "AIzaSyCQgsLkFwDX6FAc5MmJz9t-9Ac1Rf-YzxY",
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
    console.log(cityName)
    $("#weather-items-area").html("");
    getClothing()

    console.log(stateDisplay)
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


// functions to for clothing text and images
function addParka() {
    var parka = $("<div>").addClass("clothing-div").attr("id", "parka")
    $("#weather-items-area").append(parka);
    parkaText = parka.text("Wear a parka").addClass("clothing-text");
    parkaPhoto = $("<img>").attr("src", "assets/images/parka.jpeg").attr("data-clothing", "parka");
    parkaPhoto.addClass("clothing-image")
    $("#parka").append(parkaText);
    $("#parka").append(parkaPhoto);
}

function addHat() {
    var hat = $("<div>").addClass("clothing-div").attr("id", "hat")
    $("#weather-items-area").append(hat);
    hatText = hat.text("Bring a hat").addClass("clothing-text");
    hatPhoto = $("<img>").attr("src", "assets/images/hat.jpg").attr("data-clothing", "hat");
    hatPhoto.addClass("clothing-image")
    $("#hat").append(hatText);
    $("#hat").append(hatPhoto);
}


function addGloves() {
    var gloves = $("<div>").addClass("clothing-div").attr("id", "gloves")
    $("#weather-items-area").append(gloves);
    glovesText = gloves.text("Take gloves").addClass("clothing-text");
    glovesPhoto = $("<img>").attr("src", "assets/images/gloves.jpg").attr("data-clothing", "gloves");
    glovesPhoto.addClass("clothing-image")
    $("#gloves").append(glovesText);
    $("#gloves").append(glovesPhoto);
}

function addSocks() {
    var socks = $("<div>").addClass("clothing-div").attr("id", "socks")
    $("#weather-items-area").append(socks);
    socksText = socks.text("Wear warm socks").addClass("clothing-text").attr("data-clothing", "socks");
    socksPhoto = $("<img>").attr("src", "assets/images/socks.jpg");
    socksPhoto.addClass("clothing-image")
    $("#socks").append(socksText);
    $("#socks").append(socksPhoto);
}

function addScarf() {
    var scarf = $("<div>").addClass("clothing-div").attr("id", "scarf")
    $("#weather-items-area").append(scarf);
    scarfText = scarf.text("Consider a scarf").addClass("clothing-text").attr("data-clothing", "scarf");
    scarfPhoto = $("<img>").attr("src", "assets/images/scarf.jpg");
    scarfPhoto.addClass("clothing-image")
    $("#scarf").append(scarfText);
    $("#scarf").append(scarfPhoto);
}

function addSnowBoots() {
    var snowBoots = $("<div>").addClass("clothing-div").attr("id", "snow-boots")
    $("#weather-items-area").append(snowBoots);
    snowBootsText = snowBoots.text("Don't forget snow boots").addClass("clothing-text");
    snowBootsPhoto = $("<img>").attr("src", "assets/images/snowBoots.jpg").attr("data-clothing", "snow-boots");
    snowBootsPhoto.addClass("clothing-image")
    $("#snow-boots").append(snowBootsText);
    $("#snow-boots").append(snowBootsPhoto);
}


// function addCoat() {
// var coat = $("<div>").addClass("clothing-div card").attr("id", "coat")
// $(".card-deck").append(coat);
// var coatBody = $("<div>").addClass("card-body").attr("id", "coat-body")
// coatText = $("<p>").text("Wear a coat").addClass("clothing-text card-text");
// coatPhoto = $("<img>").attr("src", "assets/images/coat.jpg").attr("data-clothing", "coat").addClass("card-img-top");
// coatPhoto.addClass("clothing-image")
// $("#coat-body").append(coatText);
// $("#coat").append(coatPhoto);
// }

function addCoat() {
    var coat = $("<div>").addClass("clothing-div").attr("id", "coat")
    $("#weather-items-area").append(coat);
    coatText = coat.text("Wear a coat").addClass("clothing-text");
    coatPhoto = $("<img>").attr("src", "assets/images/coat.jpg").attr("data-clothing", "coat");
    coatPhoto.addClass("clothing-image")
    $("#coat").append(coatText);
    $("#coat").append(coatPhoto);
}

function addJacket() {
    var jacket = $("<div>").addClass("clothing-div").attr("id", "jacket")
    $("#weather-items-area").append(jacket);
    jacketText = jacket.text("Wear a jacket").addClass("clothing-text");
    jacketPhoto = $("<img>").attr("src", "assets/images/jacket.jpg").attr("data-clothing", "jacket");
    jacketPhoto.addClass("clothing-image")
    $("#jacket").append(jacketText);
    $("#jacket").append(jacketPhoto);
}

function addWindbreaker() {
    var windbreaker = $("<div>").addClass("clothing-div").attr("id", "windbreaker")
    $("#weather-items-area").append(windbreaker);
    windbreakerText = windbreaker.text("Condider a windbreaker").addClass("clothing-text");
    windbreakerPhoto = $("<img>").attr("src", "assets/images/windbreaker.jpg").attr("data-clothing", "windbreaker");
    windbreakerPhoto.addClass("clothing-image")
    $("#windbreaker").append(windbreakerText);
    $("#windbreaker").append(windbreakerPhoto);
}

function addLightJacket() {
    var lightJacket = $("<div>").addClass("clothing-div").attr("id", "lightJacket")
    $("#weather-items-area").append(lightJacket);
    lightJacketText = lightJacket.text("Take a light jacket or sweater").addClass("clothing-text");
    lightJacketPhoto = $("<img>").attr("src", "assets/images/lightJacket.jpg").attr("data-clothing", "Jacket");
    lightJacketPhoto.addClass("clothing-image")
    $("#lightJacket").append(lightJacketText);
    $("#lightJacket").append(lightJacketPhoto);
}

function addSweater() {
    var sweater = $("<div>").addClass("clothing-div").attr("id", "sweater")
    $("#weather-items-area").append(sweater);
    sweaterText = sweater.text("Consider taking a light sweater").addClass("clothing-text");
    sweaterPhoto = $("<img>").attr("src", "assets/images/sweater.jpg").attr("data-clothing", "sweater");
    sweaterPhoto.addClass("clothing-image")
    $("#sweater").append(sweaterText);
    $("#sweater").append(sweaterPhoto);
}

function addTshirt() {
    var tshirt = $("<div>").addClass("clothing-div").attr("id", "tshirt")
    $("#weather-items-area").append(tshirt);
    tshirtText = tshirt.text("Wear something lite, consider a t-shirt").addClass("clothing-text");
    tshirtPhoto = $("<img>").attr("src", "assets/images/tshirt.jpg").attr("data-clothing", "tshirt");
    tshirtPhoto.addClass("clothing-image")
    $("#tshirt").append(tshirtText);
    $("#tshirt").append(tshirtPhoto);
}

function addShorts() {
    var shorts = $("<div>").addClass("clothing-div").attr("id", "shorts")
    $("#weather-items-area").append(shorts);
    shortsText = shorts.text("Maybe some shorts").addClass("clothing-text");
    shortsPhoto = $("<img>").attr("src", "assets/images/shorts.jpg").attr("data-clothing", "shorts");
    shortsPhoto.addClass("clothing-image");
    $("#shorts").append(shortsText);
    $("#shorts").append(shortsPhoto);
}

function addSandals() {
    var sandals = $("<div>").addClass("clothing-div").attr("id", "sandals")
    $("#weather-items-area").append(sandals);
    sandalsText = sandals.text("Consider wearing sandals").addClass("clothing-text");
    sandalsPhoto = $("<img>").attr("src", "assets/images/sandals.jpg").attr("data-clothing", "sandals");
    sandalsPhoto.addClass("clothing-image");
    $("#sandals").append(sandalsText);
    $("#sandals").append(sandalsPhoto);
}

function addSunglasses() {
    var sunglasses = $("<div>").addClass("clothing-div").attr("id", "sunglasses")
    $("#weather-items-area").append(sunglasses);
    sunglassesText = sunglasses.text("Bring sunglasses").addClass("clothing-text");
    sunglassesPhoto = $("<img>").attr("src", "assets/images/sunglasses.jpg").attr("data-clothing", "sunglasses");
    sunglassesPhoto.addClass("clothing-image")
    $("#sunglasses").append(sunglassesText);
    $("#sunglasses").append(sunglassesPhoto);
}



function addRainBoots() {
    var rainBoots = $("<div>").addClass("clothing-div").attr("id", "rainBoots")
    $("#weather-items-area").append(rainBoots);
    rainBootsText = rainBoots.text("Consider wearing rain boots").addClass("clothing-text");
    rainBootsPhoto = $("<img>").attr("src", "assets/images/rainBoots.jpg").attr("data-clothing", "rain-boots");
    rainBootsPhoto.addClass("clothing-image")
    $("#rainBoots").append(rainBootsText);
    $("#rainBoots").append(rainBootsPhoto);
}

function addRainJacket() {
    var rainJacket = $("<div>").addClass("clothing-div").attr("id", "rainJacket")
    $("#weather-items-area").append(rainJacket);
    rainJacketText = rainJacket.text("Think about a rain jacket").addClass("clothing-text");
    rainJacketPhoto = $("<img>").attr("src", "assets/images/rainJacket.jpg").attr("data-clothing", "rain-jacket");
    rainJacketPhoto.addClass("clothing-image")
    $("#rainJacket").append(rainJacketText);
    $("#rainJacket").append(rainJacketPhoto);
}


// function that makes weather API call 
// and has clothing weather logic
function getClothing() {
    // clear search inputs
    $("#search").val("");
    $("#state").val("");
    $("#weather-items-area").html("");


    var weatherBitAPIKey = "71e5a03df5d44319b7d4b3afd11c27a3";
    var weatherBitqueryURL = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + cityName + state + "&country=" + usa + "&units=I&key=" + weatherBitAPIKey;


    $.ajax({
        url: weatherBitqueryURL,
        method: "GET",
        dataType: 'json'
    }).then(function (response) {


        var description = response.data[0].weather.description;
        // log the daily weather discription
        console.log("Today the weather will be  " + description)
        // log the temp fhigh
        var high = response.data[0].max_temp;
        console.log("the high today is " + high + " °F")
        // log  the temp  low
        var low = response.data[0].min_temp;
        console.log("the low today is " + low + " °F")
        // log the chance of percipatation
        var pop = response.data[0].pop;
        console.log("the chance of percipatiation is %" + pop)
        // the wind speed is 
        var windSpeed = response.data[0].wind_spd;
        console.log("The windspeed is " + windSpeed)
        console.log(response)
        // make average temp
        var averageTemp = Math.floor((high + low) / 2);
        console.log(averageTemp);

        // this functionis here because it uses the pop response in it logic 
        //  so it needs to be in the ajax call function
        function umbrella() {

            var umbrella = $("<div>").addClass("clothing-div").attr("id", "umbrella")
            $("#weather-items-area").append(umbrella);
            if ((pop > 20) && (pop < 55)) {
                umbrellaText = umbrella.text("Think about taking an umbrella").addClass("clothing-text");
            } else if (pop >= 55) {
                umbrellaText = umbrella.text("Take an umbrella").addClass("clothing-text");
            }
            umbrellaPhoto = $("<img>").attr("src", "assets/images/umbrella.jpg").attr("data-clothing", "umbrella");
            umbrellaPhoto.addClass("clothing-image")
            $("#umbrella").append(umbrellaText);
            $("#umbrella").append(umbrellaPhoto);
        }


        // logic for weather calls clothing display functions
        if (averageTemp <= 34) {
            if ((description.includes("snow")) || (description.includes("snow"))) {
                addParka();
                addHat();
                addGloves();
                addSocks();
                addScarf();
                addSnowBoots();

            } else {
                addParka();
                addHat();
                addGloves();
                addSocks();
                addScarf();
            }
        } else if ((averageTemp > 34) && (averageTemp < 50)) {
            addCoat();
            addHat();
            addScarf();
        } else if ((averageTemp >= 50) && (averageTemp <= 60)) {
            if (windSpeed >= 20) {
                addJacket();
                addWindbreaker();
            } else {
                addJacket();
            }
        } else if ((averageTemp >= 61) && (averageTemp < 70)) {
            addLightJacket();
        } else if ((averageTemp >= 70) && (averageTemp <= 75)) {
            addSweater()
        } else if (averageTemp >= 76) {
            addTshirt();
            addShorts();
            addSandals();
        }

        if (averageTemp >= 70) {
            if ((description.includes("sun")) || (description.includes("Clear")) || (description.includes("clear")) || (description.includes("Sun"))) {
                addSunglasses()
            }
        }

        if (averageTemp >= 35) {
            if ((pop > 20) && (pop < 40)) {
                umbrella()
            }
        }
        if (averageTemp >= 35) {
            if (pop >= 40) {
                umbrella()
                addRainBoots();
                addRainJacket();
            }
        }
    });


}


// click event for location search
$("#submit-button").on("click", function (event) {
    event.preventDefault();
    // clear previous search results
    $("#weather-items-area").html("");


    cityName = $("#search").val().trim();
    state = "," + $("#state").val();
    stateDisplay = $("#state").val();

    var displayCity = {
        currentCity: cityName,
        currentState: stateDisplay
    }

    database.ref().set(displayCity);


    console.log(displayCity.currentState)
    console.log(displayCity.cityName)
    $("#weather-items-area").clear();
    getClothing();

});



