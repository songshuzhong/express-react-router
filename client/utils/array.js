const uniquelist = ( a ) => {
  let newArr = [];
  for ( let item of a ) {
    if ( !newArr.includes( item ) ) {
      newArr.push( item );
    }
  }
  return newArr;
};

const complement = ( a, b ) => {
  return minus( union( a, b ), intersect( a, b ) );
};

const intersect = ( a, b ) => {
  return uniquelist( a ).filter( ( item ) => { return b.includes( item )? item: null } );
};

const union = ( a,b ) => {
  return uniquelist( a.concat( b ) );
};

const minus = ( a, b ) => {
  return uniquelist( a ).filter( ( item ) => { return b.includes( item )? null: item } );
};

export { complement, intersect, union, minus };