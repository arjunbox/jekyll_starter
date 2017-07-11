$(document).ready(function(){

  // get random city
  if($('#rand-city').length){
    $.get( "data/cities.json", function( data ) {
      cities = data.Cities
      var city = cities[Math.floor(Math.random() * cities.length)];
      $('#rand-city').text(city.data);
    });
  }


// Get Next Rocket Launch
  if($('#next-launch').length){
    // get latest rocket launch data from API
    $.get( "https://launchlibrary.net/1.2/launch/next/1", function( data ) {
      launch = data.launches[0];
      html = '<h1><i class="fa fa-rocket" aria-hidden="true"></i> '+launch.name+'</h1>';
      html += '<strong>'+launch.windowstart+' - '+launch.windowend+'</strong>';
      html += '<small class="pull-right">'+ launch.location.pads[0].agencies[0].name+'</small>';
      html += '<hr><p>'+launch.missions[0].description+'</p>';
       $('#next-launch').html(html);
    });
  }


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,
	    singleItem:true,
	    autoPlay: 3000,
	});


  $('.dataTable').DataTable();

	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter
	$('.counter').counterUp({
        delay: 10,
        time: 1500
    });


});
