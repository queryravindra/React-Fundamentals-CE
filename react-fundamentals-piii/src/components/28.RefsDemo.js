import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    //   1st approach
      this.inputRef = React.createRef();

      // 2nd approach
      this.cbRef = null;
      this.setCbRef = (element) => {
          this.cbRef = element;
      }
    }

    componentDidMount() {
        // 2nd way
        if(this.cbRef) {
            this.cbRef.focus()
        }

        // 1st way
        // this.inputRef.current.focus();
        // console.log(this.inputRef);  

    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
        // we are accessing the value property of input DOM node which is available as the current property
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default RefsDemo;

// Steps to create Ref

/**
 * 1st step is to create a Ref do that using React.createRef()
 * It is common to create Refs in the constructor so that they can be referenced through the constructor
 * 
 * 2nd step is to attach this Ref to our inputRef in the render() method
 * And to attach ref we make use of the reserved ref attribute
 * We now have a reference to the input element 
 * 
 * the 3rd and final step is to call the focus method on this input element but first findout what exactly does the property
 * this.inputRef hold after a reference is created
 * 
 * componentDidMount() {
        console.log(this.inputRef);  // Object of property 'current' type 'input'
        // And this 'current' property points to the actual DOM Node
    }
 */

/**
 * So, to focus on the input element componentDidMount simply call focus() method on the current property
 */

// the above is one way to create access refs i.e., using createRef() method




// React also supports a 2nd way to set refs which is called as callback refs
// but 2nd approach is some older approach

/**
 * Now to understand the callback refs approach lets take a look at the same example of focusing an input element
 * This approach has 4 simple steps
 * 1st step is to create the ref
 * In the first approach we used to create ref method(createRef()), but In this approach we create a property and assigned a value of null
 * 
 * this.cbRef = null;
 * 
 * In the 2nd step we create a method that will assign a DOM element to the ref we have just created in step1
 * 
 * this.setCbRef = (element) => {
          this.cbRef = element;
    }
 */

/**
 * The 3rd step is to attach this ref to the input element
 * 
 * <input type='text' ref={this.setCbRef} />
 * 
 * What you have to know about callabck refs is React will call the ref callback with the DOM element when the component mounts
 * and call it with null when it unmounts that is the reason it is really important to check if a value exists
 * on the reference property and that it is null
 * 
 * componentDidMount() {
        if(this.cbRef) {
            this.cbRef.focus()
        } 
    }
 */

/**
 * Now unlike the previous approach the DOM Node is directly accessed using the ref property, we dont need current
 */