new Vue({
  el: '#events',


   data: {

   	event: { name: '', description: '', date: '' },
  	events: []
   },

  // Anything within the ready function will run when the application loads
  ready: function() {

  	this.fetchEvents();
  },

  // Methods we want to use in our application are registered here
  methods: {

  	fetchEvents : function()
  	{
  		var events = [
  		{
  			id: 1,
  			name: 'event 1',
  			description: 'testing event 1 desc',
  			date : '2015-09-10'
  		},
  		{
  			id: 2,
  			name: 'event 2',
  			description: 'testing event 2 desc',
  			date : '2015-09-12'
  		}
  		];
  		this.$set('events',events);
  	}
  }

});