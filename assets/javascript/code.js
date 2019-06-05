
$('#etsyResults').hide();

function displayClothes() {
    
    $('#etsyResults').show();

   
    api_key = config.YELP_API_KEY;
  

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
                $('#img1').empty();
                $('#img2').empty();
                $('#img3').empty();
                if (data.count > 0) {
                    $.each(data.results, function(i,item) {
                        
                        var aTag = $("<a target='_blank' href='" + item.url + "'>")
                        
                        var img = $("<img style= 'height:100%; width: 100%; max-height: 300px; max-width: 300px; object-fit:cover; padding-left: 9px; overflow: hide;' />").attr("src", item.Images[0].
                        url_fullxfull);

                        aTag.append(img)
                        console.log(aTag)    
                        // $("<div class=col-3 float-left id='imgDiv'></div>");
                       var abc =  $("<div>").addClass("col-3 float-left p-0").attr("id", "imgDiv");
                        abc.append(aTag)
                        

                        //var z = $("imgDiv").append(img)
                        console.log(abc)
                        $("#img1").append(abc)

                        if (i >= 4 ) {
                            $('#img2').append(abc);
                        }
                        if (i >= 8 ) {
                            $('#img3').append(abc);
                        }

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


