# verb [![NPM version](https://badge.fury.io/js/verb.svg)](http://badge.fury.io/js/verb)

> Verb makes it dead simple to generate markdown documentation, using simple templates, with zero configuration required. A project without documentation is like a project that doesn't exist.

## Install
## Install globally with [npm](npmjs.org):

```bash
npm i -g verb
```


## Usage

Visit the [documentation](./docs/DOCS.md) for a full overview of Verb's capabilities, as well as:



### .verb.md

For basic docs, like a README, just drop a [.verb.md](./.verb.md) in the root of your project. Then, to build the README just run `verb` in the command line.


### verbfile.js

If you want to create more than a README, you can optionally add a `verbfile.js`.

```js
var verb = require('verb');

// load data to pass to templates.
verb.data('docs/*.json');
verb.data({author: 'Jon Schlinkert'});

verb.task('default', function() {
  verb.src('.verb.md')
    .pipe(verb.dest('./'));
});
```

In addition to all of Verb's unique features, Verb can also run any [gulp](https://github.com/gulpjs/gulp) plugin.


## API

In adition to the following, all methods from [Template](https://github.com/jonschlinkert/template) are expose on verb.

## [Verb](index.js#L39)

Create an instance of `Verb` with the given `options`.

* `options` **{Object}**    

```js
var verb = new Verb();
```

## [.task](index.js#L335)

Define a Verb task.

* `name` **{String}**    
* `fn` **{Function}**    

```js
verb.task('docs', function() {
  // do stuff
});
```

## [.run](index.js#L348)

Run an array of tasks.

* `tasks` **{Array}**    

```js
verb.run(['foo', 'bar']);
```

## [.src](index.js#L406)

Glob patterns or filepaths to source files.

* `glob` **{String|Array}**    
* `options` **{Object}**    

```js
verb.task('site', function() {
  verb.src('src/*.hbs', {layout: 'default'})
    verb.dest('dist')
});
```

## [.dest](index.js#L427)

Specify a destination for processed files.

* `patterns` **{String|Array|Function}**: Glob patterns, file paths, or renaming function.    
* `opts` **{Object}**: Options to be passed to `dest` plugins.    

```js
verb.task('sitemap', function() {
  verb.src('src/*.txt')
    verb.dest('dist', {ext: '.xml'})
});
```

## [.watch](index.js#L449)

Rerun the specified task when a file changes.

* `glob` **{String|Array}**: Filepaths or glob patterns.    
* `options` **{String}**    
* `fn` **{Function}**: Task(s) to watch.    

```js
verb.task('watch', function() {
  verb.watch('docs/*.md', ['docs']);
});
```


## Run tests

```bash
npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/verb/issues)

## Author
 
**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 
 
**Brian Woodward**
 
+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb) 


## License
Copyright (c) 2014 Jon Schlinkert  
Copyright (c) 2014 Fractal <contact@wearefractal.com>
Released under the MIT license

***

_This file was generated by [verb](https://github.com/jonschlinkert/verb) on November 11, 2014._