(function( ns, Backbone ) {

	var ContentMarkdown = Backbone.Model.extend({

		defaults: {
			content: ''
		}

	});

	function createContentMarkdown( options ) {

		return new ContentMarkdown( options );
	}

	ns.createContentMarkdown = createContentMarkdown;

})( window, Backbone );
