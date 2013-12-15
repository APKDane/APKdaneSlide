$(document).ready(function(){
  var currentPosition2 = 0;
  var slideWidth2 = 1366;
  var slides2 = $('.slide2');
  var numberOfSlides2 = slides2.length;
  var CurrentSlide2 = 0;
  var sliderCount2 = 0;

  // Remove scrollbar in JS
  $('#slidesContainer2').css('overflow', 'hidden');

  // Wrap all .slides with #slideInner div
  slides2
    .wrapAll('<div id="slideInner2"></div>')
    // Float left to display horizontally, readjust .slides width
    .css({
      'float' : 'left',
      'width' : slideWidth2
    });

  // Set #slideInner width equal to total width of all slides
  $('#slideInner2').css('width', slideWidth2 * numberOfSlides2);

  // Insert controls in the DOM
  $('#slideshow2')
    .prepend('<span class="controlStyle2" id="prev2">Clicking moves left</span>')
    .append('<span class="controlStyle2" id="next2">Clicking moves right</span>');

    startSlider2();

  // hover effect - Stop slideshow


  // Make next and prev divs clickable and run functions

      $("#next3").click(function(){     
        next2();
        return false;
    });
    $("#prev3").click(function(){     
        prev2();
        return false;
    });
/*
#################################################
Funktioner
#################################################
*/
function stopLoop2(){

  window.clearInterval(loop2);

}


function startSlider2(){

    // vi definere vores loop med js funktionen setInterval
    loop2 = setInterval(function(){

    // hvis vores slidernext er større eller lig med antallet af den totalle mængde af billeder.
       if( CurrentSlide2 >= numberOfSlides2){

          CurrentSlide2 = 0;
          sliderCount2  = 0;
       }

    $('#slideInner2').animate({
      'marginLeft' : slideWidth2*(-CurrentSlide2)
    });

    sliderCount2 = CurrentSlide2;

    // hver gang vi kører loopet, vil vi gerne tilføje 1 oven i den nuværende slide værdi.    
        CurrentSlide2 = CurrentSlide2 + 1;

   }, 100000);
}

function prev2(){

  // Den nuværende slide værdi minus 1, og kalder derefter showSlide funktionen med den nye værdi
  newSlide2 = sliderCount2 - 1;
  slideNavigation2(newSlide2);
}

function next2(){

  // Den nuværende slide værdi plus 1, og kalder derefter showSlide funktionen med den nye værdi
  newSlide2 = sliderCount2 + 1;
  slideNavigation2(newSlide2);
}
function slideNavigation2(id2){

  // stopper loop imens vi kører vores funktion
  stopLoop2();

// hvis id er lavere end numberOfSlides(total antal billeder), så giv id værdien 0.
  if( id2 >= numberOfSlides2){
          id2 = 0;
       }

// hvis id er lavere end 0 så giv id værdien = count (total antal billeder).       
    else if( id2 < 0){
          id2 = numberOfSlides2 - 1; 
          //alert(numberOfSlides);
       }


    $('#slideInner2').animate({
      'marginLeft' : slideWidth2*(-id2)
    });

    // slidernummeret sætter vi lig med id som vi fik fra newslide ( det næste/forrige slide )
       sliderCount2 = id2;

    // hver gang vi kører loopet, vil vi gerne tilføje 1 oven i den nuværende slide værdi.    
        CurrentSlide2 = id2 + 1;

    // til sidst kører vi loopet igen

    startSlider2();    
}


});


