import React from 'react';
import './20.0.1.myStyles.css';

// function StyleSheets() {
//   return (
//       <div>
//           <h1 className='primary'>Stylesheets</h1>
//       </div>
//   );
// }

// function StyleSheets(props) {
//     let className = props.primary ? 'primary' : ''
//   return (
//       <div>
//           <h1 className={className}>Stylesheets</h1>
//       </div>
//   );
// }

function StyleSheets(props) {
    let className = props.primary ? 'primary' : ''
  return (
      <div>
          <h1 className={`${className} font-xl`}>Stylesheets</h1>
      </div>
  );
}

// As an alternative to template literals ther is also a library called classNames which you can make use of

export default StyleSheets;
