import React from 'react';

// function Columns() {
//   return (
//     //   <div>
//     //       <td>Name</td>
//     //       <td>Ravindra</td>
//     //   </div>

//       <React.Fragment>
//           <td>Name</td>
//           <td>Ravindra</td>
//       </React.Fragment>
//   );
// }

function Columns() {
  const items = [];
  return (
      <React.Fragment>
          {
              items.map(item => (
                  <React.Fragment key={item.id}>
                      <h1>Title</h1>
                      <p>{item.title}</p>
                  </React.Fragment>
              ))
          }
      </React.Fragment>
  );
}

export default Columns;

// Another representation of using <React.Fragment></React.Fragment> is <></> but one limitation is you cannot use key attribute