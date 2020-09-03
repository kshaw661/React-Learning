import React, { Component } from 'react'

class RegComponent extends Component {
    render() {
        console.log("*************************** Regular Component ***************************")
        return (
            <>
                <h1>Regular Component {this.props.name}</h1>
            </>
        )
    }
}

export default RegComponent
