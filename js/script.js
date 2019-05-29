'use strict';
(function () {
  
  var templateList = document.getElementById('template-product-list').innerHTML;
  var results = document.getElementById('result');
  var progressBar = document.querySelector('.progress-bar');
  var listItems = '';
  var coordinates = [];
  var elem = document.querySelector('.main-carousel');
  var buttonReset = document.querySelector('#buttonReset');
  
  
  Mustache.parse(templateList);
  
  for (let i = 0; i < productsData.length; i++) {
    listItems += Mustache.render(templateList, productsData[i]);
    coordinates.push(productsData[i].coords);
    }

  results.insertAdjacentHTML('beforeend', listItems);

 
  var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true
});

buttonReset.addEventListener('click', function(){
    flkty.select(0)
});

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});



window.initMap = function () {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6, 
    center: coordinates[0]
  });
  
  for(let m = 0; m < coordinates.length; m++){
    const marker = new google.maps.Marker({
    position: coordinates[m],
    map: map,
  });
    
    marker.addListener('click', function() {
    flkty.select(m);
  });
};

flkty.on('change', function (index) {
  map.panTo(coordinates[index]);
  map.setZoom(4);
});

};

})();
