
var assert = require( 'assert' )
var alias = require( './' )
var desc = ''
var dict = {}
var res = false

desc = 'Accepts a list of strings and returns a function'
assert.equal( typeof alias( dict ), 'function' )
console.log( desc, 'OK' )

desc = 'Turns one string into another given a dictionary of terms'
dict = {
  ls: 'list',
  ps: 'list'
}
assert.equal( alias( dict )( 'ls' ), 'list' )
assert.equal( alias( dict )( 'ps' ), 'list' )
console.log( desc, 'OK' )

desc = 'Failure to supply a dictionary of terms should throw'
try {
  alias()
} catch( err ) {
  res = true
}
assert( res )
res = false
console.log( desc, 'OK' )

console.log( '\n',' Great success, all is happy', '\n' )
