
(function($){

	//initial tileCount based on screensize
	var tilesPerRow = getTilesPerRow();

	$('.tile').on('click', function(){
		
		//if already selected, close it's drawer
		if($(this).hasClass('open')){
			closeDrawer($(this).nextAll('.drawer').first());
			$(this).removeClass('open');
		}

		//otherwise, open its details drawer
		else {
			createDrawer($(this));
			$(this).addClass('open');
		}



	});

	//Close Drawer if clicked again
	$('.genre').on('click', '.drawer', function(){
		closeDrawer($(this));
	});



	$(window).resize(function() {
		//Recalculate the numbers of visible tiles per row
 		tilesPerRow = getTilesPerRow();

 		//repaint drawer
 		$('.drawer').hide();

	});

	$(window).resizeEnd(function(){

		//Really stupid way of getting rid of all the current drawers on resize, then reimplementing them with the color they previously had
		$('.drawer').each(function(){
				var currentColor = $(this).css('background-color');
				console.log(currentColor);
				var $associatedTile = $(this).prevAll('.open');
				$(this).remove();

				console.log('associated tile/s', $associatedTile);
				var $correctDrawerPosition = calculateDrawerPosition($associatedTile);
				console.log('current log position', $correctDrawerPosition); 
				$('<div class="drawer"></div>').html('<p>Movie Details</p>').css('background-color', currentColor).hide().insertAfter($correctDrawerPosition).slideDown();

 		});
	});






	function getTilesPerRow(){
		var $el = $('.tile:first')
		var width = $el.outerWidth();
		var parentWidth = $el.parent().outerWidth();
		var percent = 100*width/parentWidth;

		var tileCount = Math.round(100 / percent);
		return tileCount;
	}



	function calculateDrawerPosition($el){

		//determine attributes of genre set
		var $currentGenre = $el.parent();
		var genreRowCount = Math.floor($currentGenre.children('.tile').length / tilesPerRow);
		var tilesInLastRow = $currentGenre.children('.tile').length % tilesPerRow;

		//determine what on-screen "row" the selected tile is in
		var whichRow = Math.floor($currentGenre.children('.tile').index($el)/tilesPerRow);

		console.log( 'tiles in genre',  $currentGenre.children('.tile').length );
		console.log('tiles per row', tilesPerRow);
		console.log(' which row', whichRow);
		console.log('whichRow * tilesPerRow', (whichRow +1) * tilesPerRow);


		console.log('tilesInLastRow', tilesInLastRow);

		//If the current selected tile is in a last row with an "incomplete" number of tiles
		if(whichRow == genreRowCount ) {
			var insertSlot = whichRow * tilesPerRow + tilesInLastRow - 1;
		}
		else  {
			var insertSlot = whichRow * tilesPerRow + tilesPerRow - 1;

		}

		//find the right place to insert the drawer
		var $correctDrawerPosition = $currentGenre.find('.tile:eq('+ insertSlot +')');
		return $correctDrawerPosition;
	}

	function createDrawer($el){
		var $correctDrawerPosition = calculateDrawerPosition($el);


		//If tile is in same row, slide up drawer, and open new one
		if($correctDrawerPosition.next().hasClass('drawer')){
			console.log('already there');
			$correctDrawerPosition.next().slideUp(function(){
				$(this).remove();
				var randomColor = getRandomColor();
				$('<div class="drawer"></div>').html('<p>Movie Details</p>').css('background-color', randomColor).hide().insertAfter($correctDrawerPosition).slideDown();
			});
		}

		//Otherwise just create new one
		else {
			//create and insert drawer div into DOM after the last item in the row
			var randomColor = getRandomColor();
			$('<div class="drawer"></div>').html('<p>Movie Details</p>').css('background-color', randomColor).hide().insertAfter($correctDrawerPosition).slideDown();
		}

	}

	function closeDrawer($el){
		$el.slideUp(function(){
			$el.remove();
		});
	}

	function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}


})(jQuery)