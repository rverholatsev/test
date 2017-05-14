import * as types from '../actions/action-types';

export function getAllCollectionsRequest() {
    return {
        type: types.GET_ALL_COLLECTIONS_REQUEST
    };
}

export function getAllCollectionsSuccess(collections) {
    return {
        type: types.GET_ALL_COLLECTIONS_SUCCESS,
        collections: collections
    };
}

export function getAllCollectionsFailure() {
    return {
        type: types.GET_ALL_COLLECTIONS_FAILURE
    };
}