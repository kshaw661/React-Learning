import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
        //this.clickHandler = this.clickHandler.bind(this) Binding in class constructer  and this is a best option
    }
    // clickHandler(){
    //     this.setState({
    //         message:'Good Bye'
    //     })
    //     console.log(this)
    // }
    /**
     * Binding arrow function and this is in 
     */
    clickHandler = () =>{
        this.setState({
            message:'Good Bye!'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  Binding in Render */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> Arrow Functio in Render */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
