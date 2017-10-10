(function( ns, marked ) {

	function findBlock( text, start, end ) {

		var lines = text.split("\n");
		
		var startDetected = false;
		var result = [];

		var startIndex, endIndex;

		for (var i = 0; i < lines.length; i++) {

			var line = lines[i];
			
			if (startDetected) {
				
				if (end.test(line)) {
					endIndex = i;
					break;
				}

				result.push( line );
			}

			if (start.test(line)) {
				startDetected = true;
				startIndex = i + 1;
			}
		}

		var text = '';

		if ( typeof startIndex !== 'undefined' && typeof endIndex !== 'undefined' ) {

			//console.log('f:', startIndex, endIndex);
			text = lines.slice( startIndex, endIndex ).join('\n');
		}

		return {
			text: text
		};

	}

	function findCode( text ) {

		function replace( text ) {
		
			var patternCodeStart = /^\-\- code (.+)/gm;

			var matchStart = patternCodeStart.exec(text);
			if ( matchStart ) {

				var pos = patternCodeStart.lastIndex;
				var indexStart = matchStart.index;

				var reEnd = /^\-\-$/gm;
				reEnd.lastIndex = pos;

				var matchEnd = reEnd.exec(text);
				if (matchEnd) {
					var posEnd = reEnd.lastIndex;

					var innerText = text.substring(pos, posEnd - 2);

					var lines = innerText.split('\n');
					var tabbedLines = lines.map(function(line){
						return '\t' + line;
					});

					var replacement = tabbedLines.join('\n');
					var resultText = text.substring( 0, indexStart ) + replacement + text.substr( posEnd );

					return resultText;

				}
			}

			return text;
		}

		var newText;
		while (true) {

			newText = replace( text );
			if ( newText == text ) break;
			text = newText;

		}

		return newText;
	}

	function compileText( text ) {

		var patternShell = /^\$ (.+)/gm;
		text = text.replace(patternShell, '\t$ $1');

		var patternCode = /^\-\- code (.+?)\nxx/gm;
		text = text.replace(patternCode, '\t $1');

		var patternCodeStart = /^\-\- code (.+)/;
		var patternCodeEnd = /^\-\-/;

		//var block = findBlock( text, patternCodeStart, patternCodeEnd );

		text = findCode(text);

		return text;
	}

	function MarkdownParser() {

	}

	(function() {

		this.parse = function( markdown ) {

			var content = compileText( markdown );

			var options = {};

			var lexer = new marked.Lexer(options);
			var tokens = lexer.lex(content);
			//console.log(tokens);
			//console.log(lexer.rules);

			return marked( content );
		};

	}).call(MarkdownParser.prototype);

	function createMarkdownParser() {

		return new MarkdownParser();
	}

	ns.createMarkdownParser = createMarkdownParser;

})( window, marked );
