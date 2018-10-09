import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as IncrementActions from './actions/SimpleActions';

export  class ReactReduxComponent extends Component {
    constructor() {
        super();
        this.state = {
            Count: 0
        };
    }
    render() {
        return (
            <div>
                <br />
                <button onClick = { this.incrementCount }>Increment Count</button>
                <p>Present Count Vlaue:</p>{ this.props.presentCount }
                </div>
        )
    }

    incrementCount = () => {
        return this.props.IncrementAction();
    }
}
const mapStateToProps = (state) => ({
    presentCount: state.CountReducer
});

const mapDispatchToProps = (dispatch) => ({
    IncrementAction: () => dispatch(IncrementActions.simpleAction())
});
export default connect(mapStateToProps,mapDispatchToProps)(ReactReduxComponent);