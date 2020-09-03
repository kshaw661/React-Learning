import React, { Component, PureComponent } from 'react'
import RegComponent from './RegComponent'
import PureComponents from './PureComponents'
import MemoCom from './MemoCom'

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name: 'Kunal'
        }
    }
    componentDidMount=()=>{
        setInterval(
            ()=>{
                this.setState({
                    name:'Kunal'
                })
            },2000
        )
    }
    
    render() {
        console.log("*************************** Parent Component ***************************")
        return (
            <>
              Parent Component  
              <MemoCom name={this.state.name}/>
              {/* <RegComponent name={this.state.name}></RegComponent> */}
              {/* <PureComponents name={this.state.name}></PureComponents> */}
            </>
        )
    }
}

export default Parent
