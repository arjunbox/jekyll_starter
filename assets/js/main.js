$(document).ready(function() {

  // get random city
  if ($('#rand-city').length) {
    $.get("data/cities.json", function(data) {
      cities = data.Cities
      var city = cities[Math.floor(Math.random() * cities.length)];
      $('#rand-city').text(city.data);
    });
  }


  // Get Next Rocket Launch
  if ($('#next-launch').length) {
    // get latest rocket launch data from API
    $.get("https://launchlibrary.net/1.2/launch/next/1", function(data) {
      launch = data.launches[0];
      html = '<h1><i class="fa fa-rocket" aria-hidden="true"></i> ' + launch.name + '</h1>';
      html += '<strong>' + launch.windowstart + ' - ' + launch.windowend + '</strong>';
      html += '<small class="pull-right">' + launch.location.pads[0].agencies[0].name + '</small>';
      html += '<hr><p>' + launch.missions[0].description + '</p>';
      $('#next-launch').html(html);
    });
  }

  // google map
  var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 8
    });
  }


  // ##### Optional Libraries that may not be on every page
  // if check for pages that may optionally have this
  if ($('.dataTable').length) {
    $('.dataTable').DataTable();
  }
  // owlCarousel
  if ($("#testimonial-slider").length) {
    $("#testimonial-slider").owlCarousel({
      paginationSpeed: 500,
      singleItem: true,
      autoPlay: 3000,
    });
  }
  if ($("#clients-logo").length) {
    $("#clients-logo").owlCarousel({
      autoPlay: 3000,
      items: 5,
      itemsDesktop: [1199, 5],
      itemsDesktopSmall: [979, 5],
    });
  }
  if ($("#works-logo").length) {
    $("#works-logo").owlCarousel({
      autoPlay: 3000,
      items: 5,
      itemsDesktop: [1199, 5],
      itemsDesktopSmall: [979, 5],
    });
  }
  // Counter
  if ($('.counter').length) {
    $('.counter').counterUp({
      delay: 10,
      time: 1500
    });
  }

});
