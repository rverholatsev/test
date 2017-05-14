import * as types from '../actions/action-types';
import {COLLECTION_STATE_REQUEST, COLLECTION_STATE_SUCCESS, COLLECTION_STATE_FAILURE} from '../helpers/constants';
import _ from 'lodash';

const initialState = {
    collections: [],
    state: COLLECTION_STATE_REQUEST
};

const collectionReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.GET_ALL_COLLECTIONS_REQUEST:
            return Object.assign({}, state, { collections: [], state: COLLECTION_STATE_REQUEST} );

        case types.GET_ALL_COLLECTIONS_SUCCESS:
            return Object.assign({}, state, { collections: action.collections, state: COLLECTION_STATE_SUCCESS} );

        case types.GET_ALL_COLLECTIONS_FAILURE:
            return Object.assign({}, state, { collections: [], state: COLLECTION_STATE_FAILURE });

    }

    return state;
}

export default collectionReducer;