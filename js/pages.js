var counter = document.getElementById('pagecounter');

// Fires each time a new slide is activated
Reveal.addEventListener( 'slidechanged', function( e ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    var page = e.indexh;
    if (page === 0) {
      page = '';
    }
    if (e.indexv !== 0) {
      page += '-' + e.indexv;
    }

    var cite = e.currentSlide.dataset.cite;
    var source = e.currentSlide.dataset.source;

    var citation = '';

    if (source !== undefined) {
      citation = ' <a href="' + source + '">';
      if (cite !== undefined) {
         citation += cite;
      }
      else {
        citaiton += source;
      }
      citation += '</a>';
    }

    counter.innerHTML = page + citation;
} );


//////////////////////////////
// Play Audio
//////////////////////////////
Reveal.addEventListener( 'slidechanged', function(e) {
  var belong = document.getElementById('belong-song');
  if (e.indexh === 2 && e.indexv === 0) {
    belong.play();
  }

  if (e.indexh !== 2 && e.indexv !== 0) {
    belong.pause();
  }
});