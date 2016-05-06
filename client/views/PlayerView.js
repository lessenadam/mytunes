// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.$el.on('ended', function() {
      this.model.ended();
      // this.setSong(songQueue.models[0]);
    }.bind(this));

    
    
  },

  setSong: function(song) {
    this.model = song;
    this.model.on('stop', function() {
      this.el.pause();
      this.el.currentTime = 0;
    }.bind(this));
    if (this.el.paused) {
      this.el.play();
    }
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});