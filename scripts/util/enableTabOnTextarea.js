(function( ns, $ ) {

	/**
	 * @see: http://stackoverflow.com/questions/6637341/use-tab-to-indent-in-textarea#6637396
	 */
	function enableTabOnTextarea( $textarea ) {
		//$(document).delegate('#textbox', 'keydown', function(e) {
		$textarea.on('keydown', function(e) {
			var keyCode = e.keyCode || e.which;

			if (keyCode == 9) {
				e.preventDefault();
				var start = this.selectionStart;
				var end = this.selectionEnd;

				// set textarea value to: text before caret + tab + text after caret
				$(this).val($(this).val().substring(0, start)
					+ "\t"
					+ $(this).val().substring(end));

				// put caret at right position again
				this.selectionStart =
				this.selectionEnd = start + 1;
			}
		});		
	}

	ns.enableTabOnTextarea = enableTabOnTextarea;

})( window, jQuery );
