function displayClothes() {
    
    api_key = "vy2ijcoryhesrk8tkbsf6geh";
    //terms = $('#etsy-terms').val();
    terms = $(this).attr("data-clothing");
   
    console.log(terms)
    etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords=" + 
        terms + "&limit=8&includes=Images:1&api_key=" + api_key;
    
    // $('#etsy-images').empty();
    // $('<p></p>').text('Searching for ' + terms).appendTo('#etsy-images');
    
    //var images = $("<div id=" + j + ">");
    //$("#" + terms).append(images);
    console.log("banana")
    var breaksss = $("<div id='" + terms + "'></div>")
    $("#" + terms + "1").append(breaksss)
    $.ajax({
        url: etsyURL,
        dataType: 'jsonp',
        success: function (data) {
            console.log(data)
            if (data.ok) {
                $("#" + terms).empty();
                if (data.count > 0) {
                    $.each(data.results, function (i, item) {
                        $("<img/>").attr("src", item.Images[0].url_170x135).appendTo("#" + terms).wrap(
                            "<a href='" + item.url + "'target=_blank></a>"
                        );
                        
                        //if (i % 4 == 3) {
                        //    $('<br/>').appendTo(breaksss);
                        //}
                        });
                    } else {
                        $('<p>No results.</p>').appendTo(breaksss);
                }
            } 
        } 
    });
}

$(document).on("click", ".clothing-image", displayClothes);


