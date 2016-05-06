// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    // this.collection.on('update', this.render, this);
  },

  render: function() {
    // this.$el.children().detach();
    this.$el.empty();
    // this.collection.forEach(this.renderSongs, this);

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    $('div').children('audio').after(this.$el);
  }

  // renderSongs: function(song) {
  //   console.log(song);
  //   var songView = new SongQueueEntryView({model: song});
  //   this.$el.append(songView.render());
  // }

});
