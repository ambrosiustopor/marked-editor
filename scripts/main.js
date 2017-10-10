var markedEditor = {};

(function(ns, $) {

	ns.getPage = function( file, callback ) {

		$.ajax({
			url: 'pages/' + file,
			type: 'GET',
			dataType: 'text',
			success: function( response ) {
				callback( response );
			}
		});

	}

})(markedEditor, jQuery);

(function( $ ) {

	var contentMarkdown,
		contentMarkdownView,
		contentMarkdownViewOutline,
		contentMarkdownEdit;

	contentMarkdown = createContentMarkdown({content: '# Marked Editor'});

	$(function() {

		contentMarkdownView = createContentMarkdownView({
			model: contentMarkdown
		});

		contentMarkdownViewOutline = createContentMarkdownViewOutline({
			model: contentMarkdown
		});

		contentMarkdownEdit = createContentMarkdownEdit({
			model: contentMarkdown
		});

		$('#view-content').html(contentMarkdownView.render().el);
		$('#view-outline').html(contentMarkdownViewOutline.render().el);

		$('#edit').html(contentMarkdownEdit.render().el);

		$('.js-dropdown-action').on('click', '.dropdown-menu a', function( event ) {
			
			event.preventDefault();

			var href = $(this).attr('href');
			var action = $(this).data('action');

			if ( action === 'file:load' && href.charAt( 0 ) === '#' ) {

				var file = href.substr( 1 );

				var documentTitle = $(this).text();
				var documentFile = file;

				markedEditor.getPage( file + '.md', function( response ) {

					$('#js-document-title').text( documentTitle );
					$('#js-document-file').text( documentFile );

					contentMarkdown.set( 'content', response );

				});

			}

		})

	});

})( jQuery );
