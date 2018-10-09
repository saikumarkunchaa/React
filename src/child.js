import React, { Component } from 'react';

export default class Child extends Component {
    constructor() {
        super();
        console.log('Child Constructor');
    }
    componentWillMount() {
        console.log('Child ComponentWillMount');
    }
    componentDidMount() {
        console.log('child componentDidMount');
    }
    componentWillReceiveProps() {
        console.log('Child componentWillReceiveProps');
    }
    componentDidUpdate(prevProps,prevState) {
        console.log('Child componentDidUpdate');
        console.log('child prevProps',prevProps);
        console.log('child prevProps',prevState);
    }
    render() {
        console.log('Child Render');
        return(
            <div>
                Props: { this.props.nametest }
                </div>
        );

    } 
}