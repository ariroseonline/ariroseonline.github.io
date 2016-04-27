// For more information see: http://emberjs.com/guides/routing/

Cardigan.Router.map(function() {
  this.resource('cards', function(){
  	this.resource('card');
  });
});
