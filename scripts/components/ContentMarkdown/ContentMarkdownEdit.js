(function( ns, Backbone ) {

	var ContentMarkdownEdit = Backbone.View.extend({

		initialize: function() {

			this.listenTo( this.model, 'change', update );

			function update() {
				var textarea = this.$el.find('textarea').get(0);
				if (document.activeElement == textarea) {
					return;
				}
				this.render();
			}	

		},

		render: function() {

			var html = '<textarea spellcheck="false" cols="80" rows="20">' + this.model.get('content') + '</textarea>';

			this.$el.html( html );

			var $textarea = this.$el.find('textarea');
			$textarea.autosize();
			$textarea.enableSmartTab();

			return this;
		},

		events: {

			'input textarea': 'onInput'

		},

		onInput: function(event) {

			this.model.set('content', $(event.target).val());

		}

	});

	function createContentMarkdownEdit( options ) {

		return new ContentMarkdownEdit( options );
	}

	ns.createContentMarkdownEdit = createContentMarkdownEdit;

})( window, Backbone );
