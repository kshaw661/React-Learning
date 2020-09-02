import React, { Component } from 'react'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Kunal'
        }
        console.log('LifeCycle A Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null;
    }
    componentDidMount(){
        console.log('LifeCycleA ComponentDidMount')
    }
    render() {
        console.log('LifeCycleA render')
        return (
            <div className="col-lg-12">
                LifeCycleA
            </div>
        )
    }
}

export default LifeCycleA
