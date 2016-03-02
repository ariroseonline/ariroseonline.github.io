var $ = require('jquery');
var Flickity = require('flickity-imagesloaded');
require('jquery-bridget');
// make Flickity a jQuery plugin
$.bridget('flickity', Flickity);

$(document).ready(function(){

  var lazyLoadImages = function(projectId) {
  	$('.projects').find('[data-project-id=' + projectId + '] img').reveal("fadeIn", 5000);
  	//fadeIn doesn't work...maybe http://stackoverflow.com/questions/3818063/dont-load-hidden-images
  }

	//Don't load images until project clicked on 
	$("img").not(":visible").each(function () {
    $(this).data("src", this.src);
    this.src = "";
  });

	//lazy load
	// var reveal = function (selector) {
	// 	debugger
	//   var img = $(selector);
	//   img[0].src = img.data("src");
	// }

	var $projectsNav = $('.projects-nav');
	var $projects = $('.project');
	var $firstProject = $projects.first()

	$firstProject.removeClass('hide');
  $('.project-link:first').addClass('is-selected');
	lazyLoadImages(1); 

	$firstProject.find('.project-images').flickity({
	  // options
	  imagesLoaded: true,
	  wrapAround: false,
    contain: true,
	  pageDots: true
	  // setGallerySize: true
	});

	$projectsNav.on('click', '.project-link', function(){
      //select this project link
      $('.project-link').removeClass('is-selected');
      $(this).addClass('is-selected');

			//hide all projects
			$projects.addClass('hide');

			//grab selected project and unhide it
			var projectId = $(this).data('project-id');
			var $project = $('.projects').find('[data-project-id=' + projectId + ']');
			$project.removeClass('hide');
			
			//load in images lazily
			lazyLoadImages(projectId);
			lazyLoadImages(projectId + 1); //the next project, foreseeing their next click :)
			
			//initiate flickity on it
			$project.find('.project-images').flickity({
			  // options
			  imagesLoaded: true,
			  wrapAround: false,
			  pageDots: true
			  // setGallerySize: true
			});
	
	})



});



(function($){
    // Bind the function to global jQuery object.
    $.fn.reveal = function(){
        // Arguments is a variable which is available within all functions
        // and returns an object which holds the arguments passed.
        // It is not really an array, so by calling Array.prototype
        // he is actually casting it into an array.
        var args = Array.prototype.slice.call(arguments);

        // For each elements that matches the selector:
        return this.each(function(){
            // this is the dom element, so encapsulate the element with jQuery.
            var img = $(this),
                src = img.data("src");

            // If there is a data-src attribute, set the attribute
            // src to make load the image and bind an onload event.
            src && img.attr("src", src).load(function(){
                // Call the first argument passed (like fadeIn, slideIn, default is 'show').
                // This piece is like doing img.fadeIn(1000) but in a more dynamic way.
                img[args[0]||"show"].apply(img, args.splice(1));
            });
        });
    }
}($));


