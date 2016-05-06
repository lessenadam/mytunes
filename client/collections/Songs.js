// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/',

  initialize: function () {
    this.fetch(this);
  },

  fetch: function(collection) { 
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      success: function(response){
        response.results;
        collection.reset();

        for (var i = 0; i < response.results.length; i++) {
        // loop over results and add to songs
          collection.add(response.results[i]);

        }

        collection.trigger('fetched', this);


      }
    });
  }


});