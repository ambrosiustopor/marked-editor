(function( ns, Backbone, marked ) {

	var ContentMarkdownViewOutline = Backbone.View.extend({

		initialize: function() {

			this.listenTo( this.model, 'change', this.render );

			this.markdownparser = createMarkdownParser();

		},

		render: function() {

			var html = this.markdownparser.parse( this.model.get('content') );

			var $headings = $(html).filter(':header');

			var $ul = $('<ul></ul>');
			$headings.each(function() {

				var level = parseInt(this.nodeName.substr(1)) - 1;

				var $li = $('<li><a href="#'+this.id+'" onclick="return false;" style="margin-left: '+level+'em;">'+$(this).text()+'</a></li>');
				$ul.append( $li );
			});

			this.$el.html( $ul );

			return this;
		}

	});

	function createContentMarkdownViewOutline( options ) {

		return new ContentMarkdownViewOutline( options );
	}

	ns.createContentMarkdownViewOutline = createContentMarkdownViewOutline;

})( window, Backbone, marked );
