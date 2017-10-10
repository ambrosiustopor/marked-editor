# A quick note application

- are these items?
- really?


1. let's get numbers!
3. hey?
	1. sub?
	1. oh yes
6. woot?

Should ease writing down ideas, collecting code snippets

-- code php
function sayHello( $user ) {
	echo 'Hello, ' . $user->getName() . '!';
}
$user = new User();
sayHello( $user );
--

Hmmm..

-- code css
body {
	background-color: red;
}
--

> Always separate the concerns
>
> More than not it will be the right decision

PHP
---

... Or just use the standard markdown syntax for code ...

``` php
$widget = Factory::createWidget([
	'label' => 'Given name'
]);
```

A quick way to write down shell commands:

$ npm install -D grunt-example

## bower

$ bower install <packagename> --save

- https://bower.io
- http://www.expressjs.com

| Amount    | more          | 
| --------- | ------------- |
| 123.23    | yay, a table! |

## Another Example Heading

Now, let's speed up things. I mean - like super speed!

	<h1>This is code</h1>

### Using code

See **the** *example* above.

- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request

JavaScript
----------
Only use object initialization on models, function arguments only on local functions.

Avoid creating objects with `new` syntax, use object parameter passing for object creation:

``` js
var UserFactory = (function() {

	function User( options ) {
		this.options = options;
	}

	function createUser( options ) {

		return new User( options );
	}

	return {
		createUser: createUser
	};

})();

var user = UserFactory.createUser({ name: 'Bob' });
```

Forms
-----

Identify primary action, bind form's submit action to it (by using type submit).

** Accessability **

* Test the form by only using the keyboard
* Switch off styles
* Switch off javascript


* Use `autofocus` attribute
* Use `required` attribute

Input Methods
-------------

Users use space key to navigate through page.
Backspace for history back, shift+backspace for history forward.
