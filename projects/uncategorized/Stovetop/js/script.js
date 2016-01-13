/* Author:

*/

$('#hideButton').click(function(){
	$('#planner-area').slideToggle('slow');
});


$('#planner-area').toggle(function(){
	$(this).find('.planner-slot').stop(true, true).animate({'height': '200px'}, 'medium');
}, function(){
	$(this).find('.planner-slot').stop(true,true).animate({'height': '65px'}, 'medium');
});



