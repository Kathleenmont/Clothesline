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
    console.log(terms)
    $('#etsy-images').empty();
    $('<p></p>').text('Searching for '+terms).appendTo('#etsy-images');

    $.ajax({
        url: etsyURL,
        dataType: 'jsonp',
        success: function (data) {
            console.log(data)
            if (data.ok) {
                $('#etsy-images').empty();
                if (data.count > 0) {
                    $.each(data.results, function(i,item) {
                        var img = $("<img/>").attr("src", item.Images[0].url_170x135).appendTo("#etsy-images").wrap(
                            "<a href='" + item.url + "'></a>"
                            
                        );
                    });
                } else {
                    $('<p>No results.</p>').appendTo('#etsy-images');
                }
            } else {
                $('#etsy-images').empty();
                alert(data.error);
            }
                    
            } 
        });
    }
    
   


$(document).on("click", ".clothing-image", displayClothes);


