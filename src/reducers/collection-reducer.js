import * as types from '../actions/action-types';
import * as CONST from '../helpers/constants';
import _ from 'lodash';

const initialState = {
    state: CONST.COLLECTIONS_STATE_REQUEST,
    collections: []
};

function replace(collections, collection) {
    collections.forEach((collectionsItem, index) => {
            if (collectionsItem.id == collection.id) {
                collections.splice(index, 1);
            }
        }
    );

    collections.push(collection);

    return collections;
}

const collectionReducer = function (state = initialState, action) {

    switch (action.type) {

        case types.GET_COLLECTIONS_REQUEST:
            state = Object.assign({}, state, {
                collections: [],
                state: CONST.COLLECTIONS_STATE_REQUEST
            });
            break;


        case types.GET_COLLECTIONS_SUCCESS:
            state = Object.assign({}, state, {
                collections: action.data,
                state: CONST.COLLECTIONS_STATE_SUCCESS
            });
            break;

        case types.GET_COLLECTION_SUCCESS:
            console.log('COLLECTION REDUCER');
            console.log(replace(state.collections, action.data));

            state = Object.assign({}, state, {
                collections: replace(state.collections, action.data),
                state: CONST.COLLECTIONS_STATE_SUCCESS
            });
            break;

        case types.GET_COLLECTIONS_FAILURE:
            state = Object.assign({}, state, {
                collections: [],
                state: CONST.COLLECTIONS_STATE_FAILURE
            });
            break;
    }

    return state;
};

export default collectionReducer;