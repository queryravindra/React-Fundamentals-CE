import React from 'react';

// function ForwardingRefsInput() {
//   return (
//       <div>
//           <input type='text' />
//       </div>
//   );
// }

// const ForwardingRefsInput = () => {
//     return (
//         <div>
//             <input type='text' />
//         </div>
//     );
// }

const ForwardingRefsInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref} />
        </div>
    );
});

export default ForwardingRefsInput; 

// Steps

// 1.create a ref in parent component
// 2.attach the ref to the child component using ref attribute
// 3. we need to forward this ref to input element in the child component and the forwarding can be achieved using
// forwardRef method from React library
// 4.mention clickHandler