import React, { Component } from 'react'

class ClassClicked extends Component {
    clcikHandler(){
        console.log('Clicked In Class')
    }
    render() {
        return (
            <div>
                <button onClick={this.clcikHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClicked
