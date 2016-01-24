var $ = require('jquery');
var Flickity = require('flickity-imagesloaded');
require('jquery-bridget');
// make Flickity a jQuery plugin
$.bridget('flickity', Flickity);

$(document).ready(function(){

	var lazyLoadImages = function(projectId) {
		var $projectImages = $('.projects').find('[data-project-id=' + projectId + '] img');
		var $nextImages = $('.projects').find('[data-project-id=' + (projectId+1) + '] img');

		//add in next project images for good measure
		$images = $.merge($projectImages, $nextImages);

		var loadImagesInOrder = function(counter) {
			//Break out if no more images
			 if(counter== $images.length) { return; }

			 //Grab an image obj
			 var image = $images[counter];

			 //Monitor load or error events, moving on to next image in either case
			 image.onload = image.onerror = function() { loadImagesInOrder(counter+1); }

			 //Change source (then wait for event)
			 image.src = $(image).data('src');
		}

		loadImagesInOrder(0);

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
	lazyLoadImages(0); 

	$firstProject.find('.project-images').flickity({
	  // options
	  imagesLoaded: true,
	  wrapAround: false,
	  pageDots: true
	  // setGallerySize: true
	});

	$projectsNav.on('click', '.project-link', function(){
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



// (function($){
//     // Bind the function to global jQuery object.
//     $.fn.reveal = function(){
//         // Arguments is a variable which is available within all functions
//         // and returns an object which holds the arguments passed.
//         // It is not really an array, so by calling Array.prototype
//         // he is actually casting it into an array.
//         var args = Array.prototype.slice.call(arguments);

//         // For each elements that matches the selector:
//         return this.each(function(){
//             // this is the dom element, so encapsulate the element with jQuery.
//             var img = $(this),
//                 src = img.data("src");

//             // If there is a data-src attribute, set the attribute
//             // src to make load the image and bind an onload event.
//             src && img.attr("src", src).load(function(){
//                 // Call the first argument passed (like fadeIn, slideIn, default is 'show').
//                 // This piece is like doing img.fadeIn(1000) but in a more dynamic way.
//                 img[args[0]||"show"].apply(img, args.splice(1));
//             });
//         });
//     }
// }($));


