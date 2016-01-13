var $ = require('jquery');
var Flickity = require('flickity-imagesloaded');
require('jquery-bridget');
// make Flickity a jQuery plugin
$.bridget('flickity', Flickity);

$(document).ready(function(){
	var $projectsNav = $('.projects-nav');
	var $projects = $('.project');
	var $firstProject = $projects.first()

	$firstProject.removeClass('hide');
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

			// $project.fadeIn(200, function() {
			// 	// setTimeout(function(){
			// 		console.log('yo')
			// 		$('.project-images').flickity({
			// 					  // options
			// 					  imagesLoaded: true,
			// 					  wrapAround: true,
			// 					  pageDots: false
			// 					  // setGallerySize: true
			// 					});
			// 	// },2000);
			// });

			//initiate flickity on it
			$project.find('.project-images').flickity({
			  // options
			  imagesLoaded: true,
			  wrapAround: false,
			  pageDots: true
			  // setGallerySize: true
			});
	
	})
	// var flkty = $projects.data('flickity');

	// // update selected projectLinks
	// flkty.on('cellSelect', function() {
	//   $projectLinks.filter('.is-selected')
	//     .removeClass('is-selected');
	//   $projectLinks.eq( flkty.selectedIndex )
	//     .addClass('is-selected');
	// });

	// flkty.select(0);

	// // select cell on button click
	// $projectsNav.on( 'click', '.project-link', function() {
	//   var index = $(this).index();
	//   $projects.flickity( 'select', index );
	// });
	// // previous
	// $('.button--previous').on( 'click', function() {
	//   $projects.flickity('previous');
	// });
	// // next
	// $('.button--next').on( 'click', function() {
	//   $projects.flickity('next');
	// });



});


