// Function to scroll to every section
$(document).ready(function(){
  // Add smooth scroll to a elements
  $("a").on('click', function(event) {

    // Check this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      
      var hash = this.hash;

      // 1000 milliseconds to scroll to the section
      $('html, body').animate({
        scrollTop: $(hash).offset().top-50
      }, 1000, function(){
   
        // Add hash (#) to URL when the scroll is finished
        //window.location.hash = hash;
      });
    } 
  });
});