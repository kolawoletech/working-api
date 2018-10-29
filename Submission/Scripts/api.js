$(function () {
    $('#searchButton').click(function () {
        var searchTag = $('#tag').val();


        var TURL = 'https://www.omdbapi.com/?' + 'apikey=95eeb86' + '&s=' + searchTag + '&type=movie&r=json';
        console.log(TURL)



        $.ajax({
            type: 'GET',

            url: TURL,



            success: function (data) {
                var Output = "";
                var title = "";
                var movies = data.Search;
                console.log(movies)

                if (movies === undefined) {
                    console.log("Yeah 1")
                    alert("Movie Not Found Check You Spelling");
                    $("#result").val("Movie Not Found Check You Spelling");

                }

                $.each(movies, function (index) {


                    Output += '<div class="col-md-4 col-lg-4">';
                    Output += '<div class="home-blog-post">';
                    Output += '<div class="image"> ' + '<img  src=' + movies[index].Poster + ' class="img-fluid" />';
                    Output += '<div class="overlay d-flex align-items-center justify-content-center"></div >';
                    Output += '</div>'
                    Output += '<div id="viewDetails" class="text">';
                    Output += '<h4 class="movieTitle">' + movies[index].Title + '</h4>';
                    Output += '<p class="author-category">' + movies[index].Type + ' Released in ' + movies[index].Year + '</p>';

                    Output += '</div></div></div><hr />';
                });

                $("#result").html(Output)
                var titleVal = $("#title").val()






            },
            error: function (err) {

                if (err === "undefined") {
                    console.log("Yeah 1")
                    $("#result").html("Moviee Not Gound")
                }
                $("#result").html(err)
                console.log(err)
            }
        })
    })

    $(document).on('click', '.movieTitle', function () {

        $(this).addClass("active").on(function () {

        });
        var title2 = $('.active').text()
        //console.log(this.movieTitle)
        console.log("Clicked 2" + title2)
        var PURL = 'https://www.omdbapi.com/?' + 'apikey=95eeb86' + '&t=' + title2 + '&type=movie&r=json';
        $.when(
            $.getJSON('https://www.omdbapi.com/?' + 'apikey=95eeb86' + '&t=' + title2 + '&type=movie&r=json', function (response) {
                data = response;
                console.log("call succcessful");
            })
        ).then(function () {
            $.ajax({
                type: "POST",
                url: '/Home/GetMovie',
                data: { 'JSON': JSON.stringify(data) },
                success: function (response2) {


                    var Output2 = "";
                    var movie = data;

                    console.log(response2)




                    Output2 += '<div id="content"><div class="container"><div class="row bar"><div class="col-lg-12">'
                    Output2 += '<h2>Title : ' + movie.Title + '</h2>'
                    Output2 += '<p class="lead">Plot: ' + movie.Plot + '.</p>'
                    Output2 += '<p class="goToDescription"><a href="#details" class="scroll-to text-uppercase">Scroll to movie details</a></p>'
                    Output2 += '<div id="productMain" class="row"><div class="col-sm-6"><div data-slider-id="1" class="owl-carousel shop-detail-carousel">'
                    Output2 += '<div> <img src=' + movie.Poster + ' alt="" class="img-fluid">'
                    Output2 += '</div></div></div>'
                    Output2 += '<div class="col-sm-6"><div class="box">'
                    Output2 += '<form>'
                    Output2 += '<p class="price">Director(s) : ' + movie.Director + '</p>'
                    Output2 += '<p class="price">Box Office : ' + movie.BoxOffice + '</p>'
                    Output2 += '<p class="price">Released : ' + movie.Released + '</p>'
                    Output2 += '<p class="price">Rating : ' + movie.imdbRating + '</p>'
                    Output2 += '<p class="text-center">'
                    Output2 += '<button  onClick="addToCollection2()" type="submit" class="btn btn-template-outlined"><i class="fa fa-shopping-cart"></i> Add to Collection</button>'
                    Output2 += '<button type="submit" data-toggle="tooltip" data-placement="top" title="Add to wishlist" class="btn btn-default"><i class="fa fa-heart-o"></i></button>'
                    Output2 += '</p>'
                    Output2 += '</form>'
                    Output2 += '</div></div></div>'
                    Output2 += '<div id="details" class="box mb-4 mt-4">'
                    Output2 += '<h4>Actors</h4>'
                    Output2 += '<p>' + movie.Actors + '</p>'
                    Output2 += '<h4>Genre</h4>'
                    Output2 += '<p>' + movie.Genre + '</p>'
                    Output2 += '<h4>Writer(s)</h4>'
                    Output2 += '<p> ' + movie.Writer + '</p>'
                    Output2 += '<blockquote class="blockquote"><p class="mb-0"><em>' + movie.Plot + '</em ></p ></blockquote > '
                    Output2 += '</div>'
                    Output2 += '<div id="product-social" class="box social text-center mb-5 mt-5">'
                    Output2 += '<h4 class="heading-light">Show it to your friends</h4>'
                    Output2 += '<ul class="social list-inline">'
                    Output2 += '<li class="list-inline-item"><a href="#" data-animate-hover="pulse" class="external facebook"><i class="fa fa-facebook"></i></a></li>'
                    Output2 += '<li class="list-inline-item"><a href="#" data-animate-hover="pulse" class="external gplus"><i class="fa fa-google-plus"></i></a></li>'
                    Output2 += '<li class="list-inline-item"><a href="#" data-animate-hover="pulse" class="external twitter"><i class="fa fa-twitter"></i></a></li>'
                    Output2 += '<li class="list-inline-item"><a href="#" data-animate-hover="pulse" class="email"><i class="fa fa-envelope"></i></a></li>'
                    Output2 += '</ul>'
                    Output2 += '</div>'
                    Output2 += '</div></div></div></div>'

                    ////Loop through the total number of movies found

                    //http://embed.plnkr.co/dSLiub/

                    //$("#results").html(results)
                    $("#result").html(Output2)



                }
            });
        });
    })
});

