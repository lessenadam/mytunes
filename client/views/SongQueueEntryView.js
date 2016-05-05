// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!


  // template: _.template('<div class="song"> \
  //                         <span class="title"><%- title %></span> \
  //                         <span class="year">(<%- year %>)</span> \
  //                       </div>'),

  // initialize: function() {
  //   this.model.on('change:like', this.render, this);
  // },


  render: function() {
    // this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
});