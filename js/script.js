'use strict';
(function () {
  var templateList = document.getElementById('template-product-list').innerHTML;
  var results = document.getElementById('result');
  Mustache.parse(templateList);
  var listItems = '';
  var coordinates = [];
  
  for (var i = 0; i < productsData.length; i++) {
    listItems += Mustache.render(templateList, productsData[i]);
    coordinates.push(productsData[i].coords);
    }

  results.insertAdjacentHTML('beforeend', listItems);

  window.initMap = function () {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6, 
      center: coordinates[0]
    });
    for(var m = 0; m < coordinates.length; m++){
      new google.maps.Marker({
      position: coordinates[m],
      map: map,
    });
  }
  
  };
  
})();







var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true
  
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});

var buttonReset = document.querySelector('#buttonReset');
buttonReset.addEventListener('click', function(){
    flkty.select(0)
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
