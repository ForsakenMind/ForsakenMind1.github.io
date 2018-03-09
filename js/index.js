console.clear();

var customPath = "https://scaleular.com/webfonts/";

var flkty = new Flickity(".carousel", { "imagesLoaded": true, "percentPosition": false, "cellAlign": "left", "autoPlay": true, "pageDots": false, "cellSelector": ".carousel-cell" });

var currentSlide = document.querySelector(".js-current-slide");

flkty.on( 'select', function() {
  currentSlide.innerHTML = (flkty.selectedIndex + 1) + "/" + flkty.cells.length;
});

var obj = { match: '0%' };

var JSobject = anime({
  targets: obj,
  match: '84%',
  round: 1,
  easing: 'easeInOutQuart',
  update: function() {
    var el = document.querySelector('.js-matchPercentage');
    el.innerHTML = obj.match;
  }
});

var functionBasedDelay = anime({
  targets: '.js-interest',
  translateX: [-250, 0],
  direction: 'alternate',
  loop: false,
  delay: function(el, i, l) {
    return i * 50;
  }
});