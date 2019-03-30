

// global variables
var cityName = $("#search").val().trim();
var state = "," + $("#state").val();
var stateDisplay = $("#state").val();

console.log(cityName)

// getting input for us check
var usa = $("#usa").is(':checked');
if (usa === false) {
    usa = "";
} else {
    usa = "us";
}

// firebase config
var config = {
    apiKey: "3331bbb2e05e476187e7ed6f57d9ef9e",
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
    $("#card-deck").html("");
    getClothing()

    // prints city and state names onto jumbotron
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
function addParka(rowPlace) {
    var parka = $("<div>").addClass("clothing-div card").attr("id", "parka1")
    $(rowPlace).append(parka);
    var parkaBody = $("<div>").addClass("card-body").attr("id", "parka-body");
    parkaText = $("<p>").text("Wear a parka").addClass("clothing-text card-text");
    parkaPhoto = $("<img>").attr("src", "assets/images/parka.jpeg").attr("data-clothing", "parka").addClass("card-img-top");
    parkaPhoto.addClass("clothing-image")
    $("#parka1").append(parkaPhoto);
    $("#parka1").append(parkaBody);
    $("#parka-body").append(parkaText);
}


function addHat(rowPlace) {
    var hat = $("<div>").addClass("clothing-div card").attr("id", "hat1")
    $(rowPlace).append(hat);
    var hatBody = $("<div>").addClass("card-body").attr("id", "hat-body");
    hatText = $("<p>").text("Bring a hat").addClass("clothing-text card-text");
    hatPhoto = $("<img>").attr("src", "assets/images/hat.jpg").attr("data-clothing", "winter-hat-beanie").addClass("card-img-top");
    hatPhoto.addClass("clothing-image");
    $("#hat1").append(hatPhoto);
    $("#hat1").append(hatBody);
    $("#hat-body").append(hatText);
}


function addGloves(rowPlace) {
    var gloves = $("<div>").addClass("clothing-div card").attr("id", "gloves1");
    $(rowPlace).append(gloves);
    var glovesBody = $("<div>").addClass("card-body").attr("id", "gloves-body");
    glovesText = $("<p>").text("Take gloves").addClass("clothing-text card-text");
    glovesPhoto = $("<img>").attr("src", "assets/images/gloves.jpg").attr("data-clothing", "warm-gloves").addClass("card-img-top");
    glovesPhoto.addClass("clothing-image");
    $("#gloves1").append(glovesPhoto);
    $("#gloves1").append(glovesBody);
    $("#gloves-body").append(glovesText);
}

function addSocks(rowPlace) {
    var socks = $("<div>").addClass("clothing-div card").attr("id", "socks1");
    $(rowPlace).append(socks);
    var socksBody = $("<div>").addClass("card-body").attr("id", "socks-body");
    socksText = $("<p>").text("Wear warm socks").addClass("clothing-text card-text");
    socksPhoto = $("<img>").attr("src", "assets/images/socks.jpg").attr("data-clothing", "wool-socks").addClass("card-img-top");
    socksPhoto.addClass("clothing-image");
    $("#socks1").append(socksPhoto);
    $("#socks1").append(socksBody);
    $("#socks-body").append(socksText);
}

function addScarf(rowPlace) {
    var scarf = $("<div>").addClass("clothing-div card").attr("id", "scarf1");
    $(rowPlace).append(scarf);
    var scarfBody = $("<div>").addClass("card-body").attr("id", "scarf-body");
    scarfText = $("<p>").text("Consider a scarf").addClass("clothing-text card-text");
    scarfPhoto = $("<img>").attr("src", "assets/images/scarf.jpg").attr("data-clothing", "warm-scarf").addClass("card-img-top");
    scarfPhoto.addClass("clothing-image");
    $("#scarf1").append(scarfPhoto);
    $("#scarf1").append(scarfBody);
    $("#scarf-body").append(scarfText);


}

function addSnowBoots(rowPlace) {
    var snowBoots = $("<div>").addClass("clothing-div card").attr("id", "snow-boots1")
    $(rowPlace).append(snowBoots);
    var snowBootsBody = $("<div>").addClass("card-body").attr("id", "snow-body")
    snowBootsText = $("<p>").text("Don't forget snow boots").addClass("clothing-text card-text");
    snowBootsPhoto = $("<img>").attr("src", "assets/images/snowBoots.jpg").attr("data-clothing", "snow-boots").addClass("card-img-top");
    snowBootsPhoto.addClass("clothing-image")
    $("#snow-boots1").append(snowBootsPhoto);
    $("#snow-boots1").append(snowBootsBody);
    $("#snow-body").append(snowBootsText);
}


function addCoat(rowPlace) {
    var coat = $("<div>").addClass("clothing-div card").attr("id", "coat1")
    $(rowPlace).append(coat);
    var coatBody = $("<div>").addClass("card-body").attr("id", "coat-body")
    coatText = $("<p>").text("Wear a coat").addClass("clothing-text card-text");
    coatPhoto = $("<img>").attr("src", "assets/images/coat.jpg").attr("data-clothing", "coat-winter-warm").addClass("card-img-top");
    coatPhoto.addClass("clothing-image")
    $("#coat1").append(coatPhoto);
    $("#coat1").append(coatBody);
    $("#coat-body").append(coatText);
}

function addJacket(rowPlace) {
    var jacket = $("<div>").addClass("clothing-div card").attr("id", "jacket1")
    $(rowPlace).append(jacket);
    var jacketBody = $("<div>").addClass("card-body").attr("id", "jacket-body");
    jacketText = $("<p>").text("Wear a jacket").addClass("clothing-text card-text");
    jacketPhoto = $("<img>").attr("src", "assets/images/jacket.jpg").attr("data-clothing", "jacket-vintage-clothing").addClass("card-img-top");
    jacketPhoto.addClass("clothing-image")
    $("#jacket1").append(jacketPhoto);
    $("#jacket1").append(jacketBody);
    $("#jacket-body").append(jacketText);
}

function addWindbreaker(rowPlace) {
    var windbreaker = $("<div>").addClass("clothing-div card").attr("id", "windbreaker1")
    $(rowPlace).append(windbreaker);
    var windbreakerBody = $("<div>").addClass("card-body").attr("id", "windbreaker-body");
    windbreakerText = $("<p>").text("Consider a windbreaker").addClass("clothing-text card-text");
    windbreakerPhoto = $("<img>").attr("src", "assets/images/windbreaker.jpg").attr("data-clothing", "windbreaker-jacket").addClass("card-img-top");
    windbreakerPhoto.addClass("clothing-image")
    $("#windbreaker1").append(windbreakerPhoto);
    $("#windbreaker1").append(windbreakerBody);
    $("#windbreaker-body").append(windbreakerText);
}

function addLightJacket(rowPlace) {
    var lightJacket = $("<div>").addClass("clothing-div card").attr("id", "lightJacket1")
    $(rowPlace).append(lightJacket);
    var lightJacketBody = $("<div>").addClass("card-body").attr("id", "lightJacket-body");
    lightJacketText = $("<p>").text("Take a light jacket or sweater").addClass("clothing-text card-text");
    lightJacketPhoto = $("<img>").attr("src", "assets/images/lightJacket.jpg").attr("data-clothing", "jacket-vintage").addClass("card-img-top");
    lightJacketPhoto.addClass("clothing-image")
    $("#lightJacket1").append(lightJacketPhoto);
    $("#lightJacket1").append(lightJacketBody);
    $("#lightJacket-body").append(lightJacketText);
}

function addSweater(rowPlace) {
    var sweater = $("<div>").addClass("clothing-div card").attr("id", "sweater1")
    $(rowPlace).append(sweater);
    var sweaterBody = $("<div>").addClass("card-body").attr("id", "sweater-body");
    sweaterText = $("<p>").text("Consider taking a light sweater").addClass("clothing-text card-text");
    sweaterPhoto = $("<img>").attr("src", "assets/images/sweater.jpg").attr("data-clothing", "sweater-vintage").addClass("card-img-top");
    sweaterPhoto.addClass("clothing-image")
    $("#sweater1").append(sweaterPhoto);
    $("#sweater1").append(sweaterBody);
    $("#sweater-body").append(sweaterText);
}

function addTshirt(rowPlace) {
    var tshirt = $("<div>").addClass("clothing-div card").attr("id", "tshirt1")
    $(rowPlace).append(tshirt);
    var tshirtBody = $("<div>").addClass("card-body").attr("id", "tshirt-body");
    tshirtText = $("<p>").text("Wear something lite, consider a t-shirt").addClass("clothing-text card-text");
    tshirtPhoto = $("<img>").attr("src", "assets/images/tshirt.jpg").attr("data-clothing", "t-shirt-vintage-clothing").addClass("card-img-top");
    tshirtPhoto.addClass("clothing-image")
    $("#tshirt1").append(tshirtPhoto)
    $("#tshirt1").append(tshirtBody);
    $("#tshirt-body").append(tshirtText);
}

function addShorts(rowPlace) {
    var shorts = $("<div>").addClass("clothing-divc card").attr("id", "shorts1")
    $(rowPlace).append(shorts);
    var shortsBody = $("<div>").addClass("card-body").attr("id", "shorts-body");
    shortsText = $("<p>").text("Maybe some shorts").addClass("clothing-text card-body");
    shortsPhoto = $("<img>").attr("src", "assets/images/shorts.jpg").attr("data-clothing", "shorts-vintage-clothing").addClass("card-img-top");
    shortsPhoto.addClass("clothing-image");
    $("#shorts1").append(shortsPhoto);
    $("#shorts1").append(shortsBody);
    $("#shorts-body").append(shortsText);
}

function addSandals(rowPlace) {
    var sandals = $("<div>").addClass("clothing-div card").attr("id", "sandals1")
    $(rowPlace).append(sandals);
    var sandalsBody = $("<div>").addClass("card-body").attr("id", "sandals-body");
    sandalsText = $("<p>").text("Consider wearing sandals").addClass("clothing-text card-text");
    sandalsPhoto = $("<img>").attr("src", "assets/images/sandals.jpg").attr("data-clothing", "sandals-shoes").addClass("card-img-top");
    sandalsPhoto.addClass("clothing-image");
    $("#sandals1").append(sandalsPhoto);
    $("#sandals1").append(sandalsBody);
    $("#sandals-body").append(sandalsText);
}

function addSunglasses(rowPlace) {
    var sunglasses = $("<div>").addClass("clothing-div card").attr("id", "sunglasses1")
    $(rowPlace).append(sunglasses);
    var sunglassesBody = $("<div>").addClass("card-body").attr("id", "sunglasses-body");
    sunglassesText = $("<p>").text("Bring sunglasses").addClass("clothing-text card-text");
    sunglassesPhoto = $("<img>").attr("src", "assets/images/sunglasses.jpg").attr("data-clothing", "sunglasses-vintage").addClass("card-img-top");
    sunglassesPhoto.addClass("clothing-image")
    $("#sunglasses1").append(sunglassesPhoto);
    $("#sunglasses1").append(sunglassesBody);
    $("#sunglasses-body").append(sunglassesText);
}


function addRainBoots(rowPlace) {
    var rainBoots = $("<div>").addClass("clothing-div card").attr("id", "rainBoots1")
    $(rowPlace).append(rainBoots);
    var rainBootsBody = $("<div>").addClass("card-body").attr("id", "rainBoots-body");
    rainBootsText = $("<p>").text("Consider wearing rain boots").addClass("clothing-text card-text");
    rainBootsPhoto = $("<img>").attr("src", "assets/images/rainBoots.jpg").attr("data-clothing", "rain-boots-rubber").addClass("card-img-top");
    rainBootsPhoto.addClass("clothing-image");
    $("#rainBoots1").append(rainBootsPhoto);
    $("#rainBoots1").append(rainBootsBody);
    $("#rainBoots-body").append(rainBootsText);

}

function addRainJacket(rowPlace) {
    var rainJacket = $("<div>").addClass("clothing-div card").attr("id", "rainJacket1")
    $(rowPlace).append(rainJacket);
    var rainJacketBody = $("<div>").addClass("card-body").attr("id", "rainJacket-body");
    rainJacketText = $("<p>").text("Think about a rain jacket").addClass("clothing-text card-text");
    rainJacketPhoto = $("<img>").attr("src", "assets/images/rainJacket.jpg").attr("data-clothing", "rain-jacket").addClass("card-img-top");
    rainJacketPhoto.addClass("clothing-image")
    $("#rainJacket1").append(rainJacketPhoto);
    $("#rainJacket1").append(rainJacketBody);
    $("#rainJacket-body").append(rainJacketText);

}


// function that makes weather API call 
// and has clothing weather logic
function getClothing() {
    // clear search inputs
    $("#search").val("");
    $("#state").val("");
    $("#card-deck").html("");
    $("#etsy-images").html("");


    var weatherBitAPIKey = "71e5a03df5d44319b7d4b3afd11c27a3";
    var weatherBitqueryURL = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + cityName + state + "&country=" + usa + "&units=I&key=" + weatherBitAPIKey;


    $.ajax({
        url: weatherBitqueryURL,
        method: "GET",
        dataType: 'json'
    }).then(function (response) {
        console.log(response)
        console.log(weatherBitqueryURL)
        
        if (response === undefined ) {
            // message if no data exsists for search word
            $("#city").html("");
            $("#city").append("City not found - try search again");

        } else {

            var description = response.data[0].weather.description;
            // log the daily weather discription
            console.log("Today the weather will be  " + description)
            // log the temp high
            var high = response.data[0].max_temp;
            console.log("the high today is " + high + " °F")
            // log  the temp  low
            var low = response.data[0].min_temp;
            console.log("the low today is " + low + " °F")
            // log the chance of percipatation
            var pop = response.data[0].pop;
            console.log("the chance of percipatiation is" + pop + "%")
            // the wind speed is 
            var windSpeed = response.data[0].wind_spd;
            console.log("The windspeed is " + windSpeed)
            console.log(response)
            // make average temp
            var averageTemp = Math.floor((high + low) / 2);
            // current temp
            var temp = Math.floor(response.data[0].temp);
            console.log(temp);

            // for weather display
            $("#current-temp").text("Current Temp " + temp + " °F");
            $("#description").text(description);
            $("#high").text("High " + high + " °F");
            $("#low").text("Low " + low + " °F");
            $("#pop").text("Chance of percipatiation is " + pop + "%");

            // logic to change weather display icon and weather photo dispay
            if ((description.includes("snow")) || (description.includes("Snow"))) {
                $("#weather-img").attr("src", "assets/images/icons/snow.png");
                $("#outside-img").attr("src", "assets/images/snowy-cover.jpg");
            } else if ((description.includes("sun")) || (description.includes("Clear")) || (description.includes("clear")) || (description.includes("Sun"))) {
                $("#weather-img").attr("src", "assets/images/icons/sun.png");
                $("#outside-img").attr("src", "assets/images/sunny-day.jpg");
            } else if ((description.includes("rain")) || (description.includes("Rain"))) {
                $("#weather-img").attr("src", "assets/images/icons/rain.png");
                $("#outside-img").attr("src", "assets/images/rainyday.jpg");
            } else if ((description.includes("thunder")) || (description.includes("Thunder"))) {
                $("#weather-img").attr("src", "assets/images/icons/thunder.png");
                $("#outside-img").attr("src", "assets/images/stormy-day.jpg");
            } else if ((description.includes("Scattered clouds")) || (description.includes("Few clouds"))) {
                $("#weather-img").attr("src", "assets/images/icons/partly-cloudy.png");
                $("#outside-img").attr("src", "assets/images/partly-cloudy-day.jpg");
            } else if ((description.includes("clouds")) || (description.includes("Clouds")) || (description.includes("cloudy")) || (description.includes("Cloudy"))) {
                $("#weather-img").attr("src", "assets/images/icons/cloudy.png");
                $("#outside-img").attr("src", "assets/images/cloudy-day.jpg");
            }


            // this functionis here because it uses the pop response in it logic 
            //  so it needs to be in the ajax call function
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
                    addParka("#card-row-1");
                    addHat("#card-row-1");
                    addGloves("#card-row-1");
                    addSocks("#card-row-2");
                    addScarf("#card-row-2");
                    addSnowBoots("#card-row-2");

                } else {
                    addParka("#card-row-1");
                    addHat("#card-row-1");
                    addGloves("#card-row-1");
                    addSocks("#card-row-2");
                    addScarf("#card-row-2");
                }
            } else if ((averageTemp > 34) && (averageTemp < 50)) {
                addCoat("#card-row-1");
                addHat("#card-row-1");
                addScarf("#card-row-1");
            } else if ((averageTemp >= 50) && (averageTemp <= 60)) {
                if (windSpeed >= 7) {
                    addJacket("#card-row-1");
                    addWindbreaker("#card-row-1");
                } else {
                    addJacket("#card-row-1");
                }
            } else if ((averageTemp >= 61) && (averageTemp < 70)) {
                addLightJacket("#card-row-1");
            } else if ((averageTemp >= 70) && (averageTemp <= 75)) {
                addSweater("#card-row-1")
            } else if (averageTemp >= 76) {
                addTshirt("#card-row-1");
                addShorts("#card-row-1");
                addSandals("#card-row-1");
            }

            if (averageTemp >= 70) {
                if ((description.includes("sun")) || (description.includes("Clear")) || (description.includes("clear")) || (description.includes("Sun"))) {
                    addSunglasses("#card-row-2")
                }
            }

            if (averageTemp >= 35) {
                if ((pop >= 20) && (pop < 40)) {
                    umbrella("#card-row-2")
                }
            }
            if (averageTemp >= 35) {
                if (pop >= 40) {
                    umbrella("#card-row-2")
                    addRainBoots("#card-row-2");
                    addRainJacket("#card-row-2");
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


    console.log(displayCity.currentState)
    console.log(displayCity.cityName)
    $(".card-deck").clear();
    getClothing();

});




