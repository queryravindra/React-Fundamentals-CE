import React from 'react';

// creating hoc

// const UpdatedComponent = (Originalcomponent) => {
//     class NewComponent extends React.Component {
//         render() {
//             return <Originalcomponent />
//         }
//     }
//     return NewComponent
// }


// const UpdatedComponent = (Originalcomponent) => {
//     class NewComponent extends React.Component {
//         constructor(props) {
//             super(props)
          
//             this.state = {
//                count: 0
//             }
//         }
        
//         incrementCount = () => {
//             this.setState(prevState => {
//                 return { count: prevState.count + 1 }
//             })
//         } 

//         render() {
//             return <Originalcomponent count={this.state.count} incrementCount={this.incrementCount} />
//         }
//     }
//     return NewComponent
// }

// Naming conventions

const withCounter = WrappedComponent => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
        }
        
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        } 

        render() {
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} />
        }
    }
    return WithCounter
}

export default withCounter;