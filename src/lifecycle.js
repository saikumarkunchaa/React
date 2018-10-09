import React, { Component } from 'react';
import Child  from './child';
export default class LifeCycle extends Component {
    constructor() {
        super();
        this.state = {
            name: "Kiran"
        }
        console.log('Constructor');
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    changeState = () => {
        this.setState({name: "Saikumar"});
    }
   
    render() {
        console.log('Render');
        return(
            <div>
                <h3>Life Cycle Component</h3>
                <Child nametest = { this.state.name } />
                <button onClick = {this.changeState} >Change State</button>
                </div>
        );

    } 
}