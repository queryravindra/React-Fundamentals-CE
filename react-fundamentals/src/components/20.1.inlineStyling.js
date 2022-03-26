import React from 'react';

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function InlineStyling() {
  return (
      <div>
          <h1 style={heading}>Inline</h1>
      </div>
  );
}

export default InlineStyling;

// In React inline styles are not specified as a string instead they are specified as object whose key is a camelCase version of the
// styling and the value is usually a string