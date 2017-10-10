(function( ns, Backbone, marked ) {

	var ContentMarkdownView = Backbone.View.extend({

		className: 'content-markdown-view',

		initialize: function() {

			this.listenTo( this.model, 'change', this.render );

			this.markdownparser = createMarkdownParser();

		},

		render: function() {

			var html = this.markdownparser.parse( this.model.get('content') );

			this.$el.html( html );

			return this;
		}

	});

	function createContentMarkdownView( options ) {

		return new ContentMarkdownView( options );
	}

	ns.createContentMarkdownView = createContentMarkdownView;

})( window, Backbone, marked );
