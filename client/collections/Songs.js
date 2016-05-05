// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/'

  // initialize: function () {
  //   this.fetch();
  // },


  // parse: function(response, options) {
  //   var results = [];
  //   for (var i = 0; i < response.results.length; i++) {
  //     // results.push(response.results[i]);
  //     results.push(new SongModel(response.results[i]));
  //   }
  //   return results;
  // }
});