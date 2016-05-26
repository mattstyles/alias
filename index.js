
module.exports = function dict( dictionary ) {
  if ( !dictionary ) {
    throw new Error( 'No list of terms passed to alias' )
  }

  return function alias( term ) {
    if ( dictionary[ term ] ) {
      return dictionary[ term ]
    }

    return term
  }
}
