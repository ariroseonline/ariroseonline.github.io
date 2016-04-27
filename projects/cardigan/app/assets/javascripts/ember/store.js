// http://emberjs.com/guides/models/using-the-store/


// Cardigan.ApplicationAdapter = DS.RESTAdapter.extend({
// 	namespace: 'api/v1'
// });

Cardigan.Store = DS.Store.extend({
  revision: 14,
  adapter: DS.RESTAdapter.create({
  	  namespace: 'api/v1'
  })
});



