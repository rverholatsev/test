import * as types from '../actions/action-types';
import * as CONST from '../helpers/constants';
import _ from 'lodash';

const initialState = {
    collection: {}
};

const testReducer = function (state = initialState, action) {

    switch (action.type) {
        case types.SET_TEST_RESULT:
            state = Object.assign({}, state, {
                collection: action.data,
            });
            break;
        case types.CLEAR_TEST_RESULT:
            state = Object.assign({}, state, {
                collection: {}
            });
            break;
    }

    return state;
};

export default testReducer;