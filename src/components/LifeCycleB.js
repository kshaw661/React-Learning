import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Kunal'
        }
        console.log('LifeCycleB Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null;
    }
    componentDidMount(){
        console.log('LifeCycle B ComponentDidMount')
    }
    render() {
        console.log('LifeCycle B render')
        return (
            <div className="col-lg-12">
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
