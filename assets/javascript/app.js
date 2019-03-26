// var cityName = "pavlodar";
var cityName = "McMurdo Station"
// var cityName = "seattle"
// var cityName = "chicago"
// var cityName = "london, UK"
// var cityName = "quetzaltenango"
// var cityName = "guatemala city"
// var cityName = "veracruz"
// var cityName = "san diego"
// var cityName = "los angeles"
// var cityName = "philadelphia"
// var cityName = "New York,ny"
// var us = "&country=US"
var state = "," + ""
var weatherBitAPIKey = "71e5a03df5d44319b7d4b3afd11c27a3";
var weatherBitqueryURL = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + cityName + state +  "&units=I&key=" + weatherBitAPIKey;
// $("#submit-button").on("click", function(event) {
//     event.preventDefault();
//     var cityName = $("#search").val().trim();
//     var state = "," + $("#state").val().trim() 
//     console.log(cityName);
//     console.log(state)
// });


function displayClothes() {
    
   

    api_key = "vy2ijcoryhesrk8tkbsf6geh";
    //terms = $('#etsy-terms').val();
    terms = $(this).attr("data-clothing");
   
    console.log(terms)
    etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords=" + 
        terms + "&limit=12&includes=Images:1&api_key=" + api_key;
    
    // $('#etsy-images').empty();
    // $('<p></p>').text('Searching for ' + terms).appendTo('#etsy-images');
    
    //var images = $("<div id=" + j + ">");
    //$("#" + terms).append(images);
    console.log("banana")
    var breaksss = $("<br/>")
    $("#" + terms).append(breaksss)
    $.ajax({
        url: etsyURL,
        dataType: 'jsonp',
        success: function (data) {
            console.log(data)
            if (data.ok &&
                
                data.count > 0) {
                    $.each(data.results, function (i, item) {
                        
                        var searchR = ($("<img/>").attr("src", item.Images[0].url_75x75))
                        
                        $("#" + terms).append(searchR).wrap(
                            "<a href='" + item.url + "'></a>"
                        );
                        if (i % 4 == 3) {
                            $('<br/>').appendTo('#' + terms);
                        }
                    });
                } else {
                    $('<p>No results.</p>').appendTo('#' + terms);
                }
            } 
        }
    );
    } 


$(document).on("click", ".clothing-image", displayClothes);

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
   
    
    function addParka() {
        var parka = $("<div>").addClass("clothing-div").attr("id", "parka")
        $("#weather-items-area").append(parka);
        parkaText = parka.text("Wear a parka").addClass("clothing-text");
        parkaPhoto = $("<img>").attr("src", "images/parka.jpeg").attr("data-clothing", "parka");
        // parkaPhoto.attr("data-clothing", "parka")
        parkaPhoto.addClass("clothing-image")
        $("#parka").append(parkaText);
        $("#parka").append(parkaPhoto);
    }
    function addHat() {
        var hat = $("<div>").addClass("clothing-div").attr("id", "hat")
        $("#weather-items-area").append(hat);
        hatText = hat.text("Bring a hat").addClass("clothing-text");
        hatPhoto = $("<img>").attr("src", "images/hat.jpg").attr("data-clothing", "hat");
        hatPhoto.addClass("clothing-image")
        $("#hat").append(hatText);
        $("#hat").append(hatPhoto);
    }
    function addGloves() {
        var gloves = $("<div>").addClass("clothing-div").attr("id", "gloves")
        $("#weather-items-area").append(gloves);
        glovesText = gloves.text("Take gloves").addClass("clothing-text");
        glovesPhoto = $("<img>").attr("src", "images/gloves.jpg");
        glovesPhoto.addClass("clothing-image")
        $("#gloves").append(glovesText);
        $("#gloves").append(glovesPhoto);
    }
    function addSocks() {
        var socks = $("<div>").addClass("clothing-div").attr("id", "socks")
        $("#weather-items-area").append(socks);
        socksText = socks.text("Wear warm socks").addClass("clothing-text");
        socksPhoto = $("<img>").attr("src", "images/socks.jpg");
        socksPhoto.addClass("clothing-image")
        $("#socks").append(socksText);
        $("#socks").append(socksPhoto);
    }
    function addScarf() {
        var scarf = $("<div>").addClass("clothing-div").attr("id", "scarf")
        $("#weather-items-area").append(scarf);
        scarfText = scarf.text("Consider a scarf").addClass("clothing-text");
        scarfPhoto = $("<img>").attr("src", "images/scarf.jpg");
        scarfPhoto.addClass("clothing-image")
        $("#scarf").append(scarfText);
        $("#scarf").append(scarfPhoto);
    }
    function addSnowBoots() {
        var snowBoots = $("<div>").addClass("clothing-div").attr("id", "snow-boots")
        $("#weather-items-area").append(snowBoots);
        snowBootsText = snowBoots.text("Don't forget snow boots").addClass("clothing-text");
        snowBootsPhoto = $("<img>").attr("src", "images/snowBoots.jpg");
        snowBootsPhoto.addClass("clothing-image")
        $("#snow-boots").append(snowBootsText);
        $("#snow-boots").append(snowBootsPhoto);
    }
    function addCoat() {
        var coat = $("<div>").addClass("clothing-div").attr("id", "coat")
        $("#weather-items-area").append(coat);
        coatText = coat.text("Wear a coat").addClass("clothing-text");
        coatPhoto = $("<img>").attr("src", "images/coat.jpg");
        coatPhoto.addClass("clothing-image")
        $("#coat").append(coatText);
        $("#coat").append(coatPhoto);
    }
    function addJacket() {
        var jacket = $("<div>").addClass("clothing-div").attr("id", "jacket")
        $("#weather-items-area").append(jacket);
        jacketText = jacket.text("Wear a jacket").addClass("clothing-text");
        jacketPhoto = $("<img>").attr("src", "images/jacket.jpg");
        jacketPhoto.addClass("clothing-image")
        $("#jacket").append(jacketText);
        $("#jacket").append(jacketPhoto);
    }
    function addWindbreaker() {
        var windbreaker = $("<div>").addClass("clothing-div").attr("id", "windbreaker")
        $("#weather-items-area").append(windbreaker);
        windbreakerText = windbreaker.text("Condider a windbreaker").addClass("clothing-text");
        windbreakerPhoto = $("<img>").attr("src", "images/windbreaker.jpg");
        windbreakerPhoto.addClass("clothing-image")
        $("#windbreaker").append(windbreakerText);
        $("#windbreaker").append(windbreakerPhoto);
    }
    function addLightJacket() {
        var lightJacket = $("<div>").addClass("clothing-div").attr("id", "lightJacket")
        $("#weather-items-area").append(lightJacket);
        lightJacketText = lightJacket.text("Take a light jacket or sweater").addClass("clothing-text");
        lightJacketPhoto = $("<img>").attr("src", "images/lightJacket.jpg");
        lightJacketPhoto.addClass("clothing-image")
        $("#lightJacket").append(lightJacketText);
        $("#lightJacket").append(lightJacketPhoto);
    }
    function addSweater() {
        var sweater = $("<div>").addClass("clothing-div").attr("id", "sweater")
        $("#weather-items-area").append(sweater);
        sweaterText = sweater.text("Consider taking a light sweater").addClass("clothing-text");
        sweaterPhoto = $("<img>").attr("src", "images/sweater.jpg");
        sweaterPhoto.addClass("clothing-image")
        $("#sweater").append(sweaterText);
        $("#sweater").append(sweaterPhoto);
    }
    function addTshirt() {
        var tshirt = $("<div>").addClass("clothing-div").attr("id", "tshirt")
        $("#weather-items-area").append(tshirt);
        tshirtText = tshirt.text("Wear something lite, consider a t-shirt").addClass("clothing-text");
        tshirtPhoto = $("<img>").attr("src", "images/tshirt.jpg");
        tshirtPhoto.addClass("clothing-image")
        $("#tshirt").append(tshirtText);
        $("#tshirt").append(tshirtPhoto);
    }
    function addShorts() {
        var shorts = $("<div>").addClass("clothing-div").attr("id", "shorts")
        $("#weather-items-area").append(shorts);
        shortsText = shorts.text("Maybe some shorts").addClass("clothing-text");
        shortsPhoto = $("<img>").attr("src", "images/shorts.jpg");
        shortsPhoto.addClass("clothing-image")
        $("#shorts").append(shortsText);
        $("#shorts").append(shortsPhoto);
    }
    function addSandals() {
        var sandals = $("<div>").addClass("clothing-div").attr("id", "sandals")
        $("#weather-items-area").append(sandals);
        sandalsText = sandals.text("Consider wearing sandals").addClass("clothing-text");
        sandalsPhoto = $("<img>").attr("src", "images/sandals.jpg");
        sandalsPhoto.addClass("clothing-image")
        $("#sandals").append(sandalsText);
        $("#sandals").append(sandalsPhoto);
    }
    function addSunglasses() {
        var sunglasses = $("<div>").addClass("clothing-div").attr("id", "sunglasses")
        $("#weather-items-area").append(sunglasses);
        sunglassesText = sunglasses.text("Bring sunglasses").addClass("clothing-text");
        sunglassesPhoto = $("<img>").attr("src", "images/sunglasses.jpg");
        sunglassesPhoto.addClass("clothing-image")
        $("#sunglasses").append(sunglassesText);
        $("#sunglasses").append(sunglassesPhoto);
    }
    function addSunglasses() {
        var sunglasses = $("<div>").addClass("clothing-div").attr("id", "sunglasses")
        $("#weather-items-area").append(sunglasses);
        sunglassesText = sunglasses.text("Bring sunglasses").addClass("clothing-text");
        sunglassesPhoto = $("<img>").attr("src", "images/sunglasses.jpg");
        sunglassesPhoto.addClass("clothing-image")
        $("#sunglasses").append(sunglassesText);
        $("#sunglasses").append(sunglassesPhoto);
    }
    function umbrella() {
        var umbrella = $("<div>").addClass("clothing-div").attr("id", "umbrella")
        $("#weather-items-area").append(umbrella);
        if ((pop > 20) && (pop < 55)) {
            umbrellaText = umbrella.text("Think about taking an umbrella").addClass("clothing-text");   
        } else if (pop >= 55) {
            umbrellaText = umbrella.text("Take an umbrella").addClass("clothing-text");   
        }
        umbrellaPhoto = $("<img>").attr("src", "images/umbrella.jpg");
        umbrellaPhoto.addClass("clothing-image")
        $("#umbrella").append(umbrellaText);
        $("#umbrella").append(umbrellaPhoto);
    }
    function addRainBoots() {
        var rainBoots = $("<div>").addClass("clothing-div").attr("id", "rainBoots")
        $("#weather-items-area").append(rainBoots);
        rainBootsText = rainBoots.text("Consider wearing rain boots").addClass("clothing-text");
        rainBootsPhoto = $("<img>").attr("src", "images/rainBoots.jpg");
        rainBootsPhoto.addClass("clothing-image")
        $("#rainBoots").append(rainBootsText);
        $("#rainBoots").append(rainBootsPhoto);
    }
    function addRainJacket() {
        var rainJacket = $("<div>").addClass("clothing-div").attr("id", "rainJacket")
        $("#weather-items-area").append(rainJacket);
        rainJacketText = rainJacket.text("Think about a rain jacket").addClass("clothing-text");
        rainJacketPhoto = $("<img>").attr("src", "images/rainJacket.jpg");
        rainJacketPhoto.addClass("clothing-image")
        $("#rainJacket").append(rainJacketText);
        $("#rainJacket").append(rainJacketPhoto);
    }
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
        if (pop >=40) {
            umbrella()
            addRainBoots();
            addRainJacket();
        }
    }
});
