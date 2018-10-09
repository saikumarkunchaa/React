import * as actionContants from '../actions/actionConstant';

export const CountReducer = (state = 0, action) => {
    switch(action.type) {
        case actionContants.INCREMENT_NUMBER:
            return state+1;
           default:
             return state;

    }

}