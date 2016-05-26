
# alias

[![Build
Status](https://travis-ci.org/mattstyles/alias.svg?branch=master)](https://travis-ci.org/mattstyles/alias)

> Turns one string into another

```sh
$ npm i -S @mattstyles/alias
```

```js
// from -> to
const ALIASES = {
  ls: 'list'
}

const alias = require( '@mattstyles/alias' )( ALIASES )

console.log( alias( 'ls' ) )
// list

console.log( alias( 'unknown' ) )
// unknown
```
