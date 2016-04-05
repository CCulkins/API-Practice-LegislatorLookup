import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=false&&apikey=dcbe6f973f804bf28ab662c7f64a55a9';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
