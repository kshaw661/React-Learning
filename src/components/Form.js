import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments: '',
            topic: 'react'
        }
    }
    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    handleCommentsChnage = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChanges = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }
    render() {
        const { userName, comments, topic } = this.state
        return (
            <div className="row">
                <div className="col-lg-12">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label> UserName : </label>
                            <input type="text" value={userName} onChange={this.handleUserNameChange} />
                        </div>
                        <div>
                            <label> Comments : </label>
                            <textarea value={comments} onChange={this.handleCommentsChnage}></textarea>
                        </div>
                        <div>
                            <label>Select Box: </label>
                            <select value={topic} onChange={this.handleTopicChanges}>
                                <option value="react">React</option>
                                <option value="angular">Angular</option>
                                <option value="vue">Vue</option>
                            </select>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form
