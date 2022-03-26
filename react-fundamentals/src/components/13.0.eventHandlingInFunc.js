import React from 'react';

function EventHandlingInFunc() {
  function clickHandler() {
    console.log('Button Clicked');
  }
  return (
    <div>
      {/* Event Handler is a function not a function call */}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default EventHandlingInFunc;
